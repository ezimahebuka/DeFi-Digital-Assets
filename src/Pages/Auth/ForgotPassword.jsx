import "./Register.css";
import LoginImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSendReset = async (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://mynewbrokerezebackend.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("Reset link sent! Check your email for instructions.");
        setEmail("");
        setTimeout(() => {
          navigate("/reset-password");
        }, 2000);
      } else {
        setError(data.message || "Failed to send reset link. Try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Forgot password error:", err);
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
              <h2>Forgot password?</h2>
              <p>
                Enter your email address below and we’ll send you instructions
                to reset your password.
              </p>

              {error && (
                <div className="RegisterErrorDiv">
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="RegisterSuccessDiv">
                  <span>{success}</span>
                </div>
              )}

              <form onSubmit={handleSendReset}>
                <div className="RegisterField">
                  <label>
                    Email <span>*</span>
                  </label>
                  <div className="RegisterFieldInput">
                    <span>
                      <CiMail />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="name@example.com"
                      disabled={loading}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={loading ? "loading" : ""}
                >
                  {loading ? "Sending..." : "Send reset link"}
                </button>
              </form>
            </div>
            <div className="RegisterLeftInfo">
              <p>
                Remembered your password? <Link to="/login">Sign in</Link>
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
              <h1>Reset your account password.</h1>
              <p>
                We’ll email a secure link so you can create a new password and
                get back to trading quickly.
              </p>
            </div>
            <div className="RegisterCardImage">
              <img src={LoginImg} alt="Forgot password illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
