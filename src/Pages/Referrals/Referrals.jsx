import "./Referrals.css";
import { FaCopy, FaUsers, FaUserCheck, FaDollarSign } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";

const Referrals = () => {
  const { id } = useParams();
  const myshowid = id?.slice(0, 7) || "";
  const referralLink = `omega-exchange.vercel.app/?${myshowid}`;

  const [copied, setCopied] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const url = `https://mynewbrokerezebackend.onrender.com/api/getreferrals/${id}`;

  const getReferrals = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        console.log("Referrals:", res.data);
        setReferrals(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching referrals:", err);
        setError("Failed to load referral data");
        setReferrals([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      getReferrals();
    }
  }, [id]);

  const handleCopy = () => {
    setCopied(true);
    setShowModal(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Calculate statistics
  const totalReferrals = referrals.length;
  const activeReferrals = referrals.filter((ref) => {
    const status = ref?.status?.toLowerCase() || "";
    return status === "active" || status === "verified";
  }).length;
  const totalEarnings = referrals.reduce(
    (sum, ref) => sum + parseFloat(ref?.earnings || 0),
    0,
  );

  const getStatusClass = (status) => {
    const statusLower = status?.toLowerCase() || "";
    if (statusLower === "active" || statusLower === "verified") return "active";
    return "inactive";
  };

  return (
    <>
      <div className="ReferralsBody">
        <h1>Referral Program</h1>

        {/* Statistics Cards */}
        <div className="ReferralStats">
          <div className="ReferralStatCard">
            <FaUsers className="stat-icon" />
            <h4>Total Referrals</h4>
            <h2>{totalReferrals}</h2>
            <p>All time referrals</p>
          </div>

          <div className="ReferralStatCard">
            <FaUserCheck className="stat-icon" />
            <h4>Active Referrals</h4>
            <h2>{activeReferrals}</h2>
            <p>Currently active</p>
          </div>

          <div className="ReferralStatCard">
            <FaDollarSign className="stat-icon" />
            <h4>Total Earnings</h4>
            <h2>${totalEarnings.toFixed(2)}</h2>
            <p>From referrals</p>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="ReferralLinkSection">
          <h3>Share Your Referral Link</h3>
          <p>
            Invite friends and earn rewards when they join and start trading
          </p>
          <div className="ReferralLinkBox">
            <input type="text" value={referralLink} readOnly />
            <CopyToClipboard text={referralLink} onCopy={handleCopy}>
              <button className="btn-primary">
                <FaCopy />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </CopyToClipboard>
          </div>
        </div>

        {/* Referral List */}
        <div className="ReferralListSection">
          <h3>Your Referrals</h3>

          {loading ? (
            <div className="ReferralEmpty">
              <div className="loader"></div>
              <h3>Loading referrals...</h3>
            </div>
          ) : error ? (
            <div className="ReferralEmpty">
              <FaUsers />
              <h3>Error Loading Referrals</h3>
              <p>{error}</p>
              <button onClick={getReferrals}>Retry</button>
            </div>
          ) : referrals.length === 0 ? (
            <div className="ReferralEmpty">
              <FaUsers />
              <h3>No Referrals Yet</h3>
              <p>
                Start sharing your referral link to invite friends and earn
                rewards!
              </p>
            </div>
          ) : (
            <div className="ReferralTable">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Level</th>
                    <th>Status</th>
                    <th>Earnings</th>
                    <th>Date Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map((referral, index) => (
                    <tr key={index}>
                      <td>{referral?.name || "N/A"}</td>
                      <td>{referral?.email || "N/A"}</td>
                      <td>{referral?.level || "1"}</td>
                      <td>
                        <span
                          className={`ReferralStatus ${getStatusClass(
                            referral?.status || "inactive",
                          )}`}
                        >
                          {referral?.status || "Inactive"}
                        </span>
                      </td>
                      <td className="amount">
                        ${parseFloat(referral?.earnings || 0).toFixed(2)}
                      </td>
                      <td>
                        {referral?.dateJoined ||
                          new Date().toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type="success"
        title="Link Copied!"
        message="Your referral link has been copied to clipboard. Share it with your friends!"
      />
    </>
  );
};

export default Referrals;
