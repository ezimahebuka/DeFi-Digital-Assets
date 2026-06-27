import "./Transactions.css";
import { FaDownload, FaArrowAltCircleUp } from "react-icons/fa";
import { LuArrowRightFromLine } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import formatAmount from "../../utils/formatAmount";

const Transactions = () => {
  const reduxUser = useSelector((state) => state.persisitedReducer.user);
  const id =
    reduxUser?._id || reduxUser?.id || localStorage.getItem("UserId") || "";
  const userData = useSelector((state) => state.persisitedReducer.depositData);
  const userData2 = useSelector((state) => state.persisitedReducer.withdraw);

  const [activeTab, setActiveTab] = useState("deposit");
  const [allDeposit, setAllDeposit] = useState([]);
  const [allWithdrawal, setAllWithdrawal] = useState([]);
  const [others, setOthers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://mynewbrokerezebackend.onrender.com/api/users/getalldeposit/${id}`;
  const url2 = `https://mynewbrokerezebackend.onrender.com/api/users/getallwithdrawal/${id}`;
  const url3 = `https://mynewbrokerezebackend.onrender.com/api/users/getalltransactions/${id}`;

  const getAllDeposit = () => {
    axios
      .get(url)
      .then((res) => {
        console.log("Deposits:", res);
        setAllDeposit(Array.isArray(res.data.data) ? res.data.data : []);
      })
      .catch((err) => {
        console.error("Deposit Error:", err);
        setAllDeposit([]);
      });
  };

  const getAllWithdrawal = () => {
    axios
      .get(url2)
      .then((res) => {
        console.log("Withdrawals:", res);
        setAllWithdrawal(Array.isArray(res.data.data) ? res.data.data : []);
      })
      .catch((err) => {
        console.error("Withdrawal Error:", err);
        setAllWithdrawal([]);
      });
  };

  const getAllOthers = () => {
    axios
      .get(url3)
      .then((res) => {
        console.log("Others:", res.data);
        setOthers(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Others Error:", err);
        setOthers([]);
      });
  };

  useEffect(() => {
    if (!id) {
      setError("Unable to load transactions: user ID missing.");
      setLoading(false);
      return;
    }

    setLoading(true);
    Promise.all([getAllDeposit(), getAllWithdrawal(), getAllOthers()])
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false);
        setError("Failed to load transactions");
      });
  }, [id]);

  const getStatusClass = (status) => {
    const statusLower = status?.toLowerCase() || "";
    if (statusLower.includes("success") || statusLower.includes("confirmed")) {
      return "status-success";
    } else if (statusLower.includes("pending")) {
      return "status-pending";
    } else if (
      statusLower.includes("failed") ||
      statusLower.includes("rejected")
    ) {
      return "status-failed";
    }
    return "status-pending";
  };

  const renderEmptyState = (type) => (
    <div className="TransactionsEmpty">
      {type === "deposit" && <FaDownload />}
      {type === "withdrawal" && <FaArrowAltCircleUp />}
      {type === "others" && <LuArrowRightFromLine />}
      <h3>No {type} transactions yet</h3>
      <p>Your {type} history will appear here once you make transactions.</p>
    </div>
  );

  return (
    <>
      <div className="TransactionsBody">
        <h1>Transaction Record</h1>

        {/* Tab Navigation */}
        <div className="TransactionTabs">
          <button
            className={`TransactionTab ${activeTab === "deposit" ? "active" : ""}`}
            onClick={() => setActiveTab("deposit")}
          >
            <FaDownload />
            <span>Deposits</span>
            {allDeposit.length > 0 && (
              <span className="tab-badge">{allDeposit.length}</span>
            )}
          </button>
          <button
            className={`TransactionTab ${activeTab === "withdrawal" ? "active" : ""}`}
            onClick={() => setActiveTab("withdrawal")}
          >
            <FaArrowAltCircleUp />
            <span>Withdrawals</span>
            {allWithdrawal.length > 0 && (
              <span className="tab-badge">{allWithdrawal.length}</span>
            )}
          </button>
          <button
            className={`TransactionTab ${activeTab === "others" ? "active" : ""}`}
            onClick={() => setActiveTab("others")}
          >
            <LuArrowRightFromLine />
            <span>Others</span>
            {others.length > 0 && (
              <span className="tab-badge">{others.length}</span>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="TransactionContent">
          {loading ? (
            <div className="TransactionsEmpty">
              <div className="loader"></div>
              <h3>Loading transactions...</h3>
            </div>
          ) : error ? (
            <div className="TransactionsEmpty">
              <h3>Error Loading Transactions</h3>
              <p>{error}</p>
            </div>
          ) : (
            <>
              {/* Deposits Tab */}
              {activeTab === "deposit" && (
                <>
                  {allDeposit.length === 0 ? (
                    renderEmptyState("deposit")
                  ) : (
                    <div className="TransactionTable">
                      <table>
                        <thead>
                          <tr>
                            <th>Amount</th>
                            <th>Payment Mode</th>
                            <th>Status</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[...allDeposit]
                            .sort(
                              (a, b) =>
                                new Date(b.depositDate) -
                                new Date(a.depositDate),
                            )
                            .map((data, index) => (
                              <tr key={index}>
                                <td className="amount">
                                  ${formatAmount(data.amount)}
                                </td>
                                <td>{data.coin}</td>
                                <td>
                                  <span
                                    className={`status ${getStatusClass(data.status)}`}
                                  >
                                    {data.status}
                                  </span>
                                </td>
                                <td>{data.depositDate}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}

              {/* Withdrawals Tab */}
              {activeTab === "withdrawal" && (
                <>
                  {allWithdrawal.length === 0 ? (
                    renderEmptyState("withdrawal")
                  ) : (
                    <div className="TransactionTable">
                      <table>
                        <thead>
                          <tr>
                            <th>Amount</th>
                            <th>Wallet Address</th>
                            <th>Mode</th>
                            <th>Status</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[...allWithdrawal]
                            .sort(
                              (a, b) =>
                                new Date(b.withdrawDate) -
                                new Date(a.withdrawDate),
                            )
                            .map((props, index) => (
                              <tr key={index}>
                                <td className="amount">
                                  ${formatAmount(props.amount)}
                                </td>
                                <td className="wallet-address">
                                  {props.walletAddress?.substring(0, 20)}...
                                </td>
                                <td>{props.coin}</td>
                                <td>
                                  <span
                                    className={`status ${getStatusClass(props.status)}`}
                                  >
                                    {props.status}
                                  </span>
                                </td>
                                <td>{props.withdrawDate}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}

              {/* Others Tab */}
              {activeTab === "others" && (
                <>
                  {others.length === 0 ? (
                    renderEmptyState("others")
                  ) : (
                    <div className="TransactionTable">
                      <table>
                        <thead>
                          <tr>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[...others]
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map((props, index) => (
                              <tr key={index}>
                                <td className="amount">
                                  ${formatAmount(props.amount)}
                                </td>
                                <td>{props.transactionType}</td>
                                <td>
                                  <span
                                    className={`status ${getStatusClass(props.status)}`}
                                  >
                                    {props.status}
                                  </span>
                                </td>
                                <td>{props.date}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Transactions;
