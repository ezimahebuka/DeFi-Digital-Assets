import "./Register.css";
import LoginImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Icon.png";
import { CiMail } from "react-icons/ci";
import { FiKey, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAuthToken,
  setIdValue,
  setReferralLink,
  swiftUserData,
} from "../../Components/store/FeaturesSlice";

const Login = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://mynewbrokerezebackend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        // Handle different API response structures
        let token = data.token;
        let user = data;
        let referralLink = data.referralLink;
        if (token) {
          dispatch(setAuthToken(token));
        }

        if (referralLink) {
          dispatch(setReferralLink(referralLink));
        }

        if (user && (user._id || user.id)) {
          const userId = user._id || user.id;
          dispatch(swiftUserData(user));
          dispatch(setIdValue(userId));
          nav("/dashboard");
        } else {
          setError(
            "Login succeeded but user data is missing. Please try again.",
          );
        }
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="RegisterBody">
      {loading && (
        <div className="LoginLoadingOverlay">
          <div className="LoginLoadingSpinner" />
          <p>Signing you in...</p>
        </div>
      )}
      <div className="RegisterContainer">
        <div className="RegisterLeft">
          <div className="RegisterLeftWrapper">
            <div className="RegisterLeftImgDiv">
              <img src={SwiftLogo} alt="Swift Earn Logo" />
            </div>
            <div className="RegisterLeftInputsDiv">
              <h2>Welcome Back!</h2>
              <p>
                To keep you connected, please login with your personal info.
              </p>

              {error && (
                <div className="RegisterErrorDiv">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="RegisterField">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <div className="RegisterFieldInput">
                    <span>
                      <CiMail />
                    </span>
                    <input
                      id="email"
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
                  <label htmlFor="password">
                    Password <span>*</span>
                  </label>
                  <div className="RegisterFieldInput">
                    <span>
                      <FiKey />
                    </span>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
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

                <div className="LoginLeftControlDiv">
                  <div className="LoginLeftControlDivRememberDiv">
                    <input type="checkbox" id="remember" disabled={loading} />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link className="LoginForgotLink" to="/forgot-password">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={loading ? "loading" : ""}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </form>
            </div>

            <div className="RegisterLeftInfo">
              <p>
                Don&#39;t have an account? <Link to="/register">Sign Up</Link>
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
              <h1>Secure access for every investor.</h1>
              <p>
                Sign in quickly with your credentials and continue trading with
                the tools you trust.
              </p>
            </div>
            <div className="RegisterCardImage">
              <img src={LoginImg} alt="Login illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
