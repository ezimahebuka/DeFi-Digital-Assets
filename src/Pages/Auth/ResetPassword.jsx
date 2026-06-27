import "./Register.css";
import LoginImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { FiKey, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.newPassword || !formData.confirmPassword) {
      setError("All password fields are required");
      return false;
    }

    if (formData.newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const token = new URLSearchParams(window.location.search).get("token");

      const response = await fetch(
        "https://mynewbrokerezebackend.onrender.com/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token || "",
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/login");
      } else {
        setError(data.message || "Password reset failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Reset password error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="RegisterBody">
      <div className="RegisterContainer">
        <div className="RegisterLeft">
          <div className="RegisterLeftWrapper">
            <div className="RegisterLeftImgDiv">
              <img src={SwiftLogo} alt="Swift Earn Logo" />
            </div>
            <div className="RegisterLeftInputsDiv">
              <h2>Reset password</h2>
              <p>
                Enter your new password below and confirm it to secure your
                account.
              </p>

              {error && (
                <div className="RegisterErrorDiv">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleResetPassword}>
                <div className="RegisterField">
                  <label>
                    New password <span>*</span>
                  </label>
                  <div className="RegisterFieldInput">
                    <span>
                      <FiKey />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      placeholder="New password"
                      disabled={loading}
                    />
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword((p) => !p)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>
                </div>

                <div className="RegisterField">
                  <label>
                    Confirm password <span>*</span>
                  </label>
                  <div className="RegisterFieldInput">
                    <span>
                      <FiKey />
                    </span>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      disabled={loading}
                    />
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowConfirmPassword((p) => !p)}
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={loading ? "loading" : ""}
                >
                  {loading ? "Resetting..." : "Reset password"}
                </button>
              </form>
            </div>
            <div className="RegisterLeftInfo">
              <p>
                Back to <Link to="/login">Sign in</Link>
              </p>
              <p>
                © {new Date().getFullYear()} DeFi Digital Assets. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="RegisterRight">
          <div className="RegisterRightCard">
            <div className="RegisterRightInfo">
              <h1>Secure your account again.</h1>
              <p>
                Choose a strong password and use the same recovery flow to
                continue investing with confidence.
              </p>
            </div>
            <div className="RegisterCardImage">
              <img src={LoginImg} alt="Reset password illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
