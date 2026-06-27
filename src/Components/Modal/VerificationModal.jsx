import "./VerificationModal.css";
import { FaTimes, FaIdCard, FaShieldAlt, FaUpload } from "react-icons/fa";
import { useState } from "react";

const VerificationModal = ({ isOpen, onClose, onVerify }) => {
  const [ssn, setSSN] = useState("");
  const [driversLicense, setDriversLicense] = useState("");
  const [licenseFile, setLicenseFile] = useState(null);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateSSN = (value) => {
    // SSN format: XXX-XX-XXXX
    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    return ssnRegex.test(value);
  };

  const formatSSN = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Format as XXX-XX-XXXX
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 5) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else {
      return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`;
    }
  };

  const handleSSNChange = (e) => {
    const formatted = formatSSN(e.target.value);
    setSSN(formatted);
    if (errors.ssn) {
      setErrors({ ...errors, ssn: "" });
    }
  };

  const handleDriversLicenseChange = (e) => {
    setDriversLicense(e.target.value);
    if (errors.driversLicense) {
      setErrors({ ...errors, driversLicense: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          licenseFile: "File size must be less than 5MB",
        });
        return;
      }

      // Check file type
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors({
          ...errors,
          licenseFile: "Only JPG, PNG, or PDF files are allowed",
        });
        return;
      }

      setLicenseFile(file);
      if (errors.licenseFile) {
        setErrors({ ...errors, licenseFile: "" });
      }
    }
  };

  const handleSubmit = () => {
    const newErrors = {};

    // Validate SSN
    if (!ssn) {
      newErrors.ssn = "SSN is required";
    } else if (!validateSSN(ssn)) {
      newErrors.ssn = "Invalid SSN format (XXX-XX-XXXX)";
    }

    // Validate Driver's License
    if (!driversLicense) {
      newErrors.driversLicense = "Driver's License number is required";
    } else if (driversLicense.length < 5) {
      newErrors.driversLicense = "Invalid Driver's License number";
    }

    // Validate File
    if (!licenseFile) {
      newErrors.licenseFile = "Please upload a photo of your Driver's License";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // All validations passed
    onVerify({ ssn, driversLicense, licenseFile });
  };

  const handleClose = () => {
    setSSN("");
    setDriversLicense("");
    setLicenseFile(null);
    setErrors({});
    onClose();
  };

  return (
    <div className="verification-modal-overlay" onClick={handleClose}>
      <div
        className="verification-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="verification-modal-close" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="verification-modal-header">
          <div className="verification-icon-wrapper">
            <FaShieldAlt className="verification-icon" />
          </div>
          <h2>Identity Verification Required</h2>
          <p>
            Please provide the following information to complete your withdrawal
          </p>
        </div>

        <div className="verification-modal-content">
          {/* SSN Input */}
          <div className="verification-form-group">
            <label>
              <FaIdCard /> Social Security Number (SSN)
            </label>
            <input
              type="text"
              placeholder="XXX-XX-XXXX"
              value={ssn}
              onChange={handleSSNChange}
              maxLength={11}
              className={errors.ssn ? "error" : ""}
            />
            {errors.ssn && <span className="error-text">{errors.ssn}</span>}
            <p className="info-text">
              Your SSN is encrypted and securely stored
            </p>
          </div>

          {/* Driver's License Number */}
          <div className="verification-form-group">
            <label>
              <FaIdCard /> Driver's License Number
            </label>
            <input
              type="text"
              placeholder="Enter your Driver's License number"
              value={driversLicense}
              onChange={handleDriversLicenseChange}
              className={errors.driversLicense ? "error" : ""}
            />
            {errors.driversLicense && (
              <span className="error-text">{errors.driversLicense}</span>
            )}
          </div>

          {/* Driver's License Upload */}
          <div className="verification-form-group">
            <label>
              <FaUpload /> Upload Driver's License Photo
            </label>
            <div className="file-upload-wrapper">
              <input
                type="file"
                id="license-upload"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="file-input"
              />
              <label htmlFor="license-upload" className="file-upload-label">
                <FaUpload />
                <span>
                  {licenseFile
                    ? licenseFile.name
                    : "Click to upload or drag and drop"}
                </span>
              </label>
            </div>
            {errors.licenseFile && (
              <span className="error-text">{errors.licenseFile}</span>
            )}
            <p className="info-text">
              Accepted formats: JPG, PNG, PDF (Max 5MB)
            </p>
          </div>

          <div className="verification-notice">
            <FaShieldAlt />
            <p>
              Your information is protected with bank-level encryption and will
              only be used for verification purposes.
            </p>
          </div>
        </div>

        <div className="verification-modal-actions">
          <button
            className="verification-button secondary"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="verification-button primary"
            onClick={handleSubmit}
          >
            Verify & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
