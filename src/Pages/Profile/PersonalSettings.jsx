import { useState } from "react";
import "./Profile.css";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";

const PersonalSettings = ({ data }) => {
  const [fullName, setFullName] = useState(data?.fullName || "");
  const [country, setCountry] = useState(data?.country || "");
  const [phoneNumber, setPhoneNumber] = useState(data?.phoneNumber || "");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: "",
  });

  const userinfo = { fullName, country, phoneNumber };
  const updateuserurl = `https://mynewbrokerezebackend.onrender.com/api/userdata/${data?._id}`;

  const upDateUser = () => {
    // Validation
    if (!fullName.trim() && !userName.trim() && !phoneNumber.trim()) {
      setModalConfig({
        type: "error",
        title: "No Changes",
        message: "Please make at least one change before updating.",
      });
      setShowModal(true);
      return;
    }

    setButtonDisabled(true);
    axios
      .patch(updateuserurl, userinfo)
      .then((res) => {
        setButtonDisabled(false);
        setModalConfig({
          type: "success",
          title: "Profile Updated",
          message:
            res.data.message || "Your profile has been updated successfully.",
        });
        setShowModal(true);

        // Reload after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        setButtonDisabled(false);
        console.error(error);
        setModalConfig({
          type: "error",
          title: "Update Failed",
          message:
            error.response?.data?.message ||
            "Failed to update profile. Please try again.",
        });
        setShowModal(true);
      });
  };

  return (
    <>
      <div className="ProfileSection">
        <h2>Personal Information</h2>

        <div className="ProfileForm">
          <div className="ProfileFormRow">
            <div className="ProfileFormGroup">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="ProfileFormGroup">
              <label>Email Address</label>
              <input
                type="email"
                value={data?.email || ""}
                readOnly
                disabled
                style={{ opacity: 0.6, cursor: "not-allowed" }}
              />
              <small
                style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
              >
                Email cannot be changed
              </small>
            </div>
          </div>

          <div className="ProfileFormRow">
            <div className="ProfileFormGroup">
              <label>Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--secondary-bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "1rem",
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                }}
              >
                <option value="">Select your country</option>
                {[
                  "Afghanistan",
                  "Albania",
                  "Algeria",
                  "Andorra",
                  "Angola",
                  "Argentina",
                  "Armenia",
                  "Australia",
                  "Austria",
                  "Azerbaijan",
                  "Bahamas",
                  "Bahrain",
                  "Bangladesh",
                  "Belarus",
                  "Belgium",
                  "Belize",
                  "Benin",
                  "Bolivia",
                  "Bosnia and Herzegovina",
                  "Botswana",
                  "Brazil",
                  "Brunei",
                  "Bulgaria",
                  "Burkina Faso",
                  "Burundi",
                  "Cambodia",
                  "Cameroon",
                  "Canada",
                  "Chad",
                  "Chile",
                  "China",
                  "Colombia",
                  "Congo",
                  "Costa Rica",
                  "Croatia",
                  "Cuba",
                  "Cyprus",
                  "Czech Republic",
                  "Denmark",
                  "Dominican Republic",
                  "Ecuador",
                  "Egypt",
                  "El Salvador",
                  "Estonia",
                  "Ethiopia",
                  "Finland",
                  "France",
                  "Gabon",
                  "Georgia",
                  "Germany",
                  "Ghana",
                  "Greece",
                  "Guatemala",
                  "Guinea",
                  "Haiti",
                  "Honduras",
                  "Hungary",
                  "Iceland",
                  "India",
                  "Indonesia",
                  "Iran",
                  "Iraq",
                  "Ireland",
                  "Israel",
                  "Italy",
                  "Jamaica",
                  "Japan",
                  "Jordan",
                  "Kazakhstan",
                  "Kenya",
                  "Kuwait",
                  "Kyrgyzstan",
                  "Latvia",
                  "Lebanon",
                  "Libya",
                  "Lithuania",
                  "Luxembourg",
                  "Madagascar",
                  "Malaysia",
                  "Mali",
                  "Malta",
                  "Mexico",
                  "Moldova",
                  "Monaco",
                  "Mongolia",
                  "Montenegro",
                  "Morocco",
                  "Mozambique",
                  "Myanmar",
                  "Namibia",
                  "Nepal",
                  "Netherlands",
                  "New Zealand",
                  "Nicaragua",
                  "Niger",
                  "Nigeria",
                  "North Korea",
                  "Norway",
                  "Oman",
                  "Pakistan",
                  "Panama",
                  "Paraguay",
                  "Peru",
                  "Philippines",
                  "Poland",
                  "Portugal",
                  "Qatar",
                  "Romania",
                  "Russia",
                  "Rwanda",
                  "Saudi Arabia",
                  "Senegal",
                  "Serbia",
                  "Sierra Leone",
                  "Singapore",
                  "Slovakia",
                  "Slovenia",
                  "Somalia",
                  "South Africa",
                  "South Korea",
                  "Spain",
                  "Sri Lanka",
                  "Sudan",
                  "Sweden",
                  "Switzerland",
                  "Syria",
                  "Taiwan",
                  "Tajikistan",
                  "Tanzania",
                  "Thailand",
                  "Togo",
                  "Tunisia",
                  "Turkey",
                  "Turkmenistan",
                  "Uganda",
                  "Ukraine",
                  "United Arab Emirates",
                  "United Kingdom",
                  "United States",
                  "Uruguay",
                  "Uzbekistan",
                  "Venezuela",
                  "Vietnam",
                  "Yemen",
                  "Zambia",
                  "Zimbabwe",
                ].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="ProfileFormGroup">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="ProfileFormActions">
            <button
              onClick={upDateUser}
              disabled={isButtonDisabled}
              style={{
                opacity: isButtonDisabled ? 0.6 : 1,
                cursor: isButtonDisabled ? "not-allowed" : "pointer",
              }}
            >
              {isButtonDisabled ? "Updating..." : "Update Profile"}
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

export default PersonalSettings;
