import { useState } from "react";
import "./Profile.css";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";

const WithdrawalSettings = ({ data }) => {
  const [bankName, setBankName] = useState(data?.bankName || "");
  const [accountName, setAccountName] = useState(data?.accountName || "");
  const [accountNumber, setAccountNumber] = useState(data?.accountNumber || "");
  const [swiftCode, setSwiftCode] = useState(data?.swiftCode || "");
  const [bitcoinAddress, setBitcoinAddress] = useState(
    data?.bitcoinAddress || "",
  );
  const [ethereumAddress, setEthereumAddress] = useState(
    data?.ethereumAddress || "",
  );
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: "",
  });

  const withdrawalInfo = {
    bankName,
    accountName,
    accountNumber,
    swiftCode,
    bitcoinAddress,
    ethereumAddress,
  };

  const updateWithdrawalUrl = `https://mynewbrokerezebackend.onrender.com/api/updatewithdrawal/${data?._id}`;

  const handleSave = () => {
    setButtonDisabled(true);
    axios
      .patch(updateWithdrawalUrl, withdrawalInfo)
      .then((res) => {
        setButtonDisabled(false);
        setModalConfig({
          type: "success",
          title: "Settings Saved",
          message:
            res.data.message || "Withdrawal settings updated successfully.",
        });
        setShowModal(true);
      })
      .catch((error) => {
        setButtonDisabled(false);
        console.error(error);
        setModalConfig({
          type: "error",
          title: "Update Failed",
          message:
            error.response?.data?.message ||
            "Failed to update withdrawal settings.",
        });
        setShowModal(true);
      });
  };

  return (
    <>
      <div className="ProfileSection">
        <h2>Withdrawal Settings</h2>

        <div className="ProfileForm">
          {/* Bank Details */}
          <h3 className="section-title">Bank Account Details</h3>
          <div className="ProfileFormRow">
            <div className="ProfileFormGroup">
              <label>Bank Name</label>
              <input
                type="text"
                placeholder="Enter bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>

            <div className="ProfileFormGroup">
              <label>Account Name</label>
              <input
                type="text"
                placeholder="Enter account name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>
          </div>

          <div className="ProfileFormRow">
            <div className="ProfileFormGroup">
              <label>Account Number</label>
              <input
                type="text"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>

            <div className="ProfileFormGroup">
              <label>Swift Code</label>
              <input
                type="text"
                placeholder="Enter swift code"
                value={swiftCode}
                onChange={(e) => setSwiftCode(e.target.value)}
              />
            </div>
          </div>

          {/* Crypto Addresses */}
          <h3 className="section-title">Cryptocurrency Addresses</h3>
          <div className="ProfileFormRow">
            <div className="ProfileFormGroup">
              <label>Bitcoin (BTC) Address</label>
              <input
                type="text"
                placeholder="Enter Bitcoin address"
                value={bitcoinAddress}
                onChange={(e) => setBitcoinAddress(e.target.value)}
              />
              <small
                style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
              >
                This address will be used for BTC withdrawals
              </small>
            </div>

            <div className="ProfileFormGroup">
              <label>Ethereum (ETH) Address</label>
              <input
                type="text"
                placeholder="Enter Ethereum address"
                value={ethereumAddress}
                onChange={(e) => setEthereumAddress(e.target.value)}
              />
              <small
                style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
              >
                This address will be used for ETH withdrawals
              </small>
            </div>
          </div>

          <div className="ProfileFormActions">
            <button
              onClick={handleSave}
              disabled={isButtonDisabled}
              style={{
                opacity: isButtonDisabled ? 0.6 : 1,
                cursor: isButtonDisabled ? "not-allowed" : "pointer",
              }}
            >
              {isButtonDisabled ? "Saving..." : "Save Settings"}
            </button>
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
    </>
  );
};

export default WithdrawalSettings;
