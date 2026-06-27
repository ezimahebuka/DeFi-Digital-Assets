import { useState } from "react";
import "./Profile.css";
import PersonalSettings from "./PersonalSettings";
import WithdrawalSettings from "./WithdrawalSettings";
import PasswordSettings from "./PasswordSettings";
import OtherSettings from "./OtherSettings";
import { useSelector } from "react-redux";
import { FaUser, FaWallet, FaLock, FaCog } from "react-icons/fa";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const userData = useSelector((state) => state.persisitedReducer.user);

  const tabs = [
    { id: "personal", label: "Personal Info", icon: <FaUser /> },
    { id: "withdrawal", label: "Withdrawal", icon: <FaWallet /> },
    { id: "password", label: "Security", icon: <FaLock /> },
    { id: "other", label: "Preferences", icon: <FaCog /> },
  ];

  return (
    <>
      <div className="ProfileBody">
        <h1>Account Settings</h1>

        <div className="ProfileContent">
          {/* Tab Navigation */}
          <div className="ProfileTabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`ProfileTab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="ProfileMainContent">
            {activeTab === "personal" && <PersonalSettings data={userData} />}
            {activeTab === "withdrawal" && (
              <WithdrawalSettings data={userData} />
            )}
            {activeTab === "password" && <PasswordSettings data={userData} />}
            {activeTab === "other" && <OtherSettings data={userData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
