import "./TransferFunds.css";
import { IoWalletOutline } from "react-icons/io5";
import {
  FaExchangeAlt,
  FaUser,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";
import formatAmount from "../../utils/formatAmount";

const Transfer = () => {
  const { id } = useParams();
  const userData = useSelector((state) => state.persisitedReducer.user);
  const userId =
    userData?._id || userData?.id || id || localStorage.getItem("UserId") || "";

  const [recipientEmail, setRecipientEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [recipientEmailError, setRecipientEmailError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // History states
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);

  const fetchHistory = async () => {
    if (!userId) return;
    setHistoryLoading(true);
    try {
      const res = await axios.get(
        `https://mynewbrokerezebackend.onrender.com/api/transfers/history/${userId}`,
      );
      setHistory(res.data?.data || []);
    } catch (err) {
      console.error("History fetch error:", err);
    } finally {
      setHistoryLoading(false);
    }
  };

  // Auto-refresh history every 30s
  useEffect(() => {
    fetchHistory();
    const interval = setInterval(fetchHistory, 30000);
    return () => clearInterval(interval);
  }, [userId]);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: "",
  });

  const transferChargePercent = 20; // 20% transfer charge
  const transferCharge =
    (parseFloat(amount) || 0) * (transferChargePercent / 100);
  const totalAmount = (parseFloat(amount) || 0) + transferCharge;

  const handleRecipientEmail = (e) => {
    const value = e.target.value;
    setRecipientEmail(value);

    if (value.trim() === "") {
      setRecipientEmailError("Recipient email or username is required");
    } else {
      setRecipientEmailError("");
    }
  };

  const handleAmount = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (value.trim() === "" || value === "0" || value === "0.00") {
      setAmountError("Amount is required");
    } else if (parseFloat(value) <= 0) {
      setAmountError("Amount must be greater than 0");
    } else if (parseFloat(value) > parseFloat(userData?.accountBalance || 0)) {
      setAmountError("Insufficient balance");
    } else {
      setAmountError("");
    }
  };

  const handleTransfer = () => {
    // Validation
    if (!recipientEmail.trim()) {
      setRecipientEmailError("Recipient email or fullName is required");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setAmountError("Please enter a valid amount");
      return;
    }

    if (parseFloat(amount) > parseFloat(userData?.accountBalance || 0)) {
      setAmountError("Insufficient balance");
      return;
    }

    // Check if trying to transfer to self
    if (
      recipientEmail.toLowerCase() === userData?.email?.toLowerCase() ||
      recipientEmail.toLowerCase() === userData?.fullName?.toLowerCase()
    ) {
      setModalConfig({
        type: "error",
        title: "Invalid Transfer",
        message: "You cannot transfer funds to yourself.",
      });
      setShowModal(true);
      return;
    }

    const url = `https://mynewbrokerezebackend.onrender.com/api/transfers/send/${userId}`;
    const data = {
      recipientIdentifier: recipientEmail,
      amount: parseFloat(amount),
    };

    setIsLoading(true);
    // const authToken =
    //   localStorage.getItem("authToken") || localStorage.getItem("token") || "";
    // console.log("authToken", authToken);
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setModalConfig({
          type: "success",
          title: "Transfer Successful",
          message:
            res.data.message ||
            `Successfully transferred $${amount} to ${recipientEmail}`,
        });
        setShowModal(true);

        // Reset form after 2 seconds
        setTimeout(() => {
          setRecipientEmail("");
          setAmount("");
          fetchHistory();
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setModalConfig({
          type: "error",
          title: "Transfer Failed",
          message:
            err.response?.data?.message ||
            "Transfer failed. Please check the recipient details and try again.",
        });
        setShowModal(true);
      });
  };

  const handleReset = () => {
    setRecipientEmail("");
    setAmount("");
    setRecipientEmailError("");
    setAmountError("");
  };

  return (
    <>
      <div className="TransferFundsBody">
        <h1>Funds Transfer</h1>
        <div className="TransferFundsContent">
          {/* Left Section - Transfer Form */}
          <div className="TransferFundsLeft">
            <div className="TransferBalanceCard">
              <div className="TransferBalanceIcon">
                <IoWalletOutline />
              </div>
              <div className="TransferBalanceInfo">
                <h3>${formatAmount(userData?.accountBalance)}</h3>
                <p>Your Account Balance</p>
              </div>
            </div>

            <div className="TransferForm">
              <div className="TransferFormGroup">
                <label>
                  <FaUser /> Recipient Email or FullName <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter recipient's email or FullName"
                  value={recipientEmail}
                  onChange={handleRecipientEmail}
                />
                {recipientEmailError && (
                  <p className="error">{recipientEmailError}</p>
                )}
              </div>

              <div className="TransferFormGroup">
                <label>
                  <FaDollarSign /> Amount <span>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter the amount you want to transfer"
                  value={amount}
                  onChange={handleAmount}
                  min="0"
                  step="0.01"
                />
                {amountError && <p className="error">{amountError}</p>}
                <p className="info-text">
                  Available Balance: ${formatAmount(userData?.accountBalance)}
                </p>
              </div>

              <div className="TransferChargeInfo">
                <div className="ChargeItem">
                  <span>Transfer Amount:</span>
                  <strong>${parseFloat(amount || 0).toFixed(2)}</strong>
                </div>
                <div className="ChargeItem">
                  <span>Transfer Charge ({transferChargePercent}%):</span>
                  <strong>${transferCharge.toFixed(2)}</strong>
                </div>
                <div className="ChargeItem total">
                  <span>Total Deduction:</span>
                  <strong>${totalAmount.toFixed(2)}</strong>
                </div>
              </div>

              <div className="TransferFormActions">
                <button
                  className="secondary"
                  onClick={handleReset}
                  disabled={isLoading}
                >
                  Reset
                </button>
                <button
                  onClick={handleTransfer}
                  disabled={isLoading || !recipientEmail || !amount}
                >
                  {isLoading ? "Processing..." : "Transfer Funds"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Info */}
          <div className="TransferFundsRight">
            <div className="TransferSummaryCard">
              <div className="TransferSummaryIcon">
                <FaExchangeAlt />
              </div>
              <h4>Transfer Summary</h4>
              <h2>${parseFloat(amount || 0).toFixed(2)}</h2>
              <p>Amount to Transfer</p>
            </div>

            <div className="TransferInfoCard">
              <h4>Important Information</h4>
              <ul>
                <li>Transfers are processed instantly</li>
                <li>Current transfer charge: {transferChargePercent}%</li>
                <li>Ensure recipient details are correct</li>
                <li>Transfers cannot be reversed</li>
                <li>Minimum transfer amount is $1</li>
                <li>Contact support if you need assistance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          type={modalConfig.type}
          title={modalConfig.title}
          message={modalConfig.message}
        />

        {/* Transfer History */}
        <div className="TransferHistory">
          <div className="TransferHistoryHeader">
            <h2>Recent Transfers</h2>
            {history.length > 0 && (
              <button
                className="TransferSeeAllBtn"
                onClick={() =>
                  (window.location.href = "/#/dashboard/transfer-history")
                }
              >
                See All
              </button>
            )}
          </div>
          {historyLoading ? (
            <p className="TransferHistoryEmpty">Loading...</p>
          ) : history.length === 0 ? (
            <p className="TransferHistoryEmpty">No transfer history yet.</p>
          ) : (
            <div className="TransferHistoryList">
              {history.slice(0, 5).map((item, index) => {
                const isSender =
                  item.sender?._id === userId || item.sender === userId;
                return (
                  <div className="TransferHistoryItem" key={index}>
                    <div
                      className={`TransferHistoryIcon ${isSender ? "sent" : "received"}`}
                    >
                      {isSender ? <FaArrowUp /> : <FaArrowDown />}
                    </div>
                    <div className="TransferHistoryDetails">
                      <p className="TransferHistoryType">
                        {isSender ? "Sent to" : "Received from"}{" "}
                        <strong>
                          {isSender
                            ? item.recipient?.fullName || item.recipient?.email
                            : item.sender?.fullName || item.sender?.email}
                        </strong>
                      </p>
                      <p className="TransferHistoryDate">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : "—"}
                      </p>
                    </div>
                    <div className="TransferHistoryAmount">
                      <span className={isSender ? "sent" : "received"}>
                        {isSender ? "-" : "+"}${formatAmount(item.amount)}
                      </span>
                      <span className="TransferHistoryStatus">
                        {item.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Transfer;
