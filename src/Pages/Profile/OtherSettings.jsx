import { useState } from "react";
import "./Profile.css";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";

const OtherSettings = ({ data }) => {
  const [otpOnWithdrawal, setOtpOnWithdrawal] = useState(
    data?.otpOnWithdrawal !== false,
  );
  const [emailOnProfit, setEmailOnProfit] = useState(
    data?.emailOnProfit !== false,
  );
  const [emailOnPlanExpiry, setEmailOnPlanExpiry] = useState(
    data?.emailOnPlanExpiry !== false,
  );
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: "",
  });

  const preferences = {
    otpOnWithdrawal,
    emailOnProfit,
    emailOnPlanExpiry,
  };

  const updatePreferencesUrl = `https://mynewbrokerezebackend.onrender.com/api/updatepreferences/${data?._id}`;

  const handleSave = () => {
    setButtonDisabled(true);
    axios
      .patch(updatePreferencesUrl, preferences)
      .then((res) => {
        setButtonDisabled(false);
        setModalConfig({
          type: "success",
          title: "Preferences Saved",
          message:
            res.data.message ||
            "Your preferences have been updated successfully.",
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
            error.response?.data?.message || "Failed to update preferences.",
        });
        setShowModal(true);
      });
  };

  return (
    <>
      <div className="ProfileSection">
        <h2>Notification Preferences</h2>

        <div className="ProfileForm">
          <div className="PreferenceItem">
            <div className="PreferenceInfo">
              <h4>OTP Verification on Withdrawal</h4>
              <p>Receive a confirmation OTP via email when withdrawing funds</p>
            </div>
            <div className="PreferenceToggle">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={otpOnWithdrawal}
                  onChange={(e) => setOtpOnWithdrawal(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="PreferenceItem">
            <div className="PreferenceInfo">
              <h4>Profit Notifications</h4>
              <p>Get notified via email when you receive profits</p>
            </div>
            <div className="PreferenceToggle">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={emailOnProfit}
                  onChange={(e) => setEmailOnProfit(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="PreferenceItem">
            <div className="PreferenceInfo">
              <h4>Plan Expiry Notifications</h4>
              <p>
                Receive email alerts when your investment plans are about to
                expire
              </p>
            </div>
            <div className="PreferenceToggle">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={emailOnPlanExpiry}
                  onChange={(e) => setEmailOnPlanExpiry(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
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
              {isButtonDisabled ? "Saving..." : "Save Preferences"}
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

export default OtherSettings;
