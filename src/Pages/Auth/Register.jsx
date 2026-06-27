import "./Register.css";
import RegisterImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FiKey, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAuthToken,
  swiftUserData,
  setIdValue,
} from "../../Components/store/FeaturesSlice";

const Register = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All required fields must be completed");
      return false;
    }

    if (formData.fullName.trim().length < 2) {
      setError("Please enter a valid full name");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(
        "https://mynewbrokerezebackend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            referralCode: formData.referralCode || undefined,
          }),
        },
      );

      const data = await response.json();
      if (response.ok) {
        if (data.token) dispatch(setAuthToken(data.token));
        if (data.user) {
          dispatch(swiftUserData(data.user));
          dispatch(setIdValue(data.user._id || data.user.id));
        }
        // If user signed up with a referral code, show the broker profile first
        if (formData.referralCode) {
          sessionStorage.setItem("pendingReferralCode", formData.referralCode);
          nav("/referral-broker");
        } else {
          nav("/login");
        }
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Registration error:", err);
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
              <h2>Create account</h2>
              <p>
                Open your account today and start trading with a modern
                platform.
              </p>

              {error && (
                <div className="RegisterErrorDiv">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleRegister}>
                <div className="RegisterField">
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <div className="RegisterFieldInput">
                    <span>👤</span>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      disabled={loading}
                    />
                  </div>
                </div>

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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="RegisterField">
                  <label>
                    Password <span>*</span>
                  </label>
                  <div className="RegisterFieldInput">
                    <span>
                      <FiKey />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create password"
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
                    Confirm Password <span>*</span>
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

                <div className="RegisterField">
                  <label>Referral Code</label>
                  <div className="RegisterFieldInput">
                    <span>📌</span>
                    <input
                      type="text"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleChange}
                      placeholder="Enter referral code (optional)"
                      disabled={loading}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={loading ? "loading" : ""}
                >
                  {loading ? "Creating account..." : "Create account"}
                </button>
              </form>
            </div>

            <div className="RegisterLeftInfo">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
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
              <h1>Trade with a modern broker experience.</h1>
              <p>
                Fast access to key markets and clean onboarding for traders who
                want a professional platform without the clutter.
              </p>
            </div>
            <div className="RegisterCardImage">
              <img src={RegisterImg} alt="Trading illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
