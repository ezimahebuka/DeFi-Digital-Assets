import { useState } from "react";
import "./Profile.css";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordSettings = ({ data }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: "",
  });

  const updatePasswordUrl = `https://mynewbrokerezebackend.onrender.com/api/updatepassword/${data?._id}`;

  const handleUpdatePassword = () => {
    // Validation
    if (!oldPassword || !newPassword || !confirmPassword) {
      setModalConfig({
        type: "error",
        title: "Missing Fields",
        message: "Please fill in all password fields.",
      });
      setShowModal(true);
      return;
    }

    if (newPassword.length < 6) {
      setModalConfig({
        type: "error",
        title: "Weak Password",
        message: "New password must be at least 6 characters long.",
      });
      setShowModal(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setModalConfig({
        type: "error",
        title: "Password Mismatch",
        message: "New password and confirm password do not match.",
      });
      setShowModal(true);
      return;
    }

    setButtonDisabled(true);
    axios
      .patch(updatePasswordUrl, {
        oldPassword,
        newPassword,
      })
      .then((res) => {
        setButtonDisabled(false);
        setModalConfig({
          type: "success",
          title: "Password Updated",
          message:
            res.data.message || "Your password has been updated successfully.",
        });
        setShowModal(true);

        // Clear fields
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        setButtonDisabled(false);
        console.error(error);
        setModalConfig({
          type: "error",
          title: "Update Failed",
          message:
            error.response?.data?.message ||
            "Failed to update password. Please check your old password.",
        });
        setShowModal(true);
      });
  };

  return (
    <>
      <div className="ProfileSection">
        <h2>Password & Security</h2>

        <div className="ProfileForm">
          <div className="ProfileFormGroup">
            <label>Current Password</label>
            <div className="password-input-wrapper">
              <input
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter your current password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="ProfileFormRow">
            <div className="ProfileFormGroup">
              <label>New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <small
                style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
              >
                Minimum 6 characters
              </small>
            </div>

            <div className="ProfileFormGroup">
              <label>Confirm New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <div className="ProfileFormActions">
            <button
              onClick={handleUpdatePassword}
              disabled={isButtonDisabled}
              style={{
                opacity: isButtonDisabled ? 0.6 : 1,
                cursor: isButtonDisabled ? "not-allowed" : "pointer",
              }}
            >
              {isButtonDisabled ? "Updating..." : "Update Password"}
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

export default PasswordSettings;
