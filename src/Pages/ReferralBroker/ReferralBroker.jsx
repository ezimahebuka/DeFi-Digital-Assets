import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReferralBroker.css";

const RANK_LABELS = {
  1: "Junior Broker",
  2: "Associate Broker",
  3: "Senior Broker",
  4: "Elite Broker",
  5: "Master Broker",
};

export default function ReferralBroker() {
  const nav = useNavigate();
  const [broker, setBroker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // The referral code is stored in sessionStorage by Register.jsx right before navigating here
  const referralCode =
    sessionStorage.getItem("pendingReferralCode") || "PREVIEW";
  const DUMMY_BROKER = {
    fullName: "James Mitchell",
    profilePhoto: null,
    joinYear: 2019,
    rank: 5,
    rating: 5,
    successCount: 1248,
    recognition: "Top Performer 2025",
  };

  useEffect(() => {
    if (!referralCode) {
      // No referral code — skip straight to login
      nav("/login", { replace: true });
      return;
    }

    // Use dummy data directly — swap this fetch back when the API is ready
    setBroker(DUMMY_BROKER);
    setLoading(false);

    /* ── Real API call (uncomment when backend is ready) ──
    const fetchBroker = async () => {
      try {
        const res = await fetch(
          `https://mynewbrokerezebackend.onrender.com/api/referrals/broker/${referralCode}`,
        );
        if (!res.ok) throw new Error("Broker not found");
        const data = await res.json();
        setBroker(data.broker || data);
      } catch (err) {
        setError("Could not load broker profile.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBroker();
    ── end real API call ── */
  }, [referralCode, nav]);

  const handleContinue = () => {
    sessionStorage.removeItem("pendingReferralCode");
    nav("/login");
  };

  if (loading) {
    return (
      <div className="RBPage">
        <div className="RBSpinner" />
      </div>
    );
  }

  if (error || !broker) {
    return (
      <div className="RBPage">
        <div className="RBCard">
          <p className="RBError">{error || "Broker not found."}</p>
          <button className="RBButton" onClick={handleContinue}>
            Continue to Login
          </button>
        </div>
      </div>
    );
  }

  const stars = Math.round(broker.rating ?? broker.rank ?? 5);
  const rank = broker.rank ?? broker.tier ?? stars;
  const rankLabel = RANK_LABELS[Math.min(Math.max(Math.round(rank), 1), 5)];
  const joinYear =
    broker.joinYear ??
    (broker.createdAt ? new Date(broker.createdAt).getFullYear() : "—");
  const successCount =
    broker.successCount ?? broker.totalClients ?? broker.clientsGuided ?? 0;
  const recognition =
    broker.recognition ?? broker.siteRecognition ?? broker.badge ?? null;

  return (
    <div className="RBPage">
      <div className="RBCard">
        {/* Header eyebrow */}
        <div className="RBEyebrow">
          <span className="RBEyebrowDot" />
          You were referred by a verified broker
        </div>

        {/* Avatar */}
        <div className="RBAvatar">
          {broker.profilePhoto || broker.avatar ? (
            <img
              src={broker.profilePhoto || broker.avatar}
              alt={broker.fullName || broker.name}
            />
          ) : (
            <span>
              {(broker.fullName || broker.name || "B")[0].toUpperCase()}
            </span>
          )}
          <div className="RBOnlineDot" title="Verified broker" />
        </div>

        {/* Name */}
        <h1 className="RBName">{broker.fullName || broker.name}</h1>

        {/* Rank badge */}
        <div className="RBRankBadge">{rankLabel}</div>

        {/* Stars */}
        <div className="RBStars" aria-label={`Rating: ${stars} out of 5`}>
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className={s <= stars ? "RBStar filled" : "RBStar"}>
              ⭐
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="RBStats">
          <div className="RBStat">
            <span className="RBStatValue">{joinYear}</span>
            <span className="RBStatLabel">Year joined</span>
          </div>
          <div className="RBStatDivider" />
          <div className="RBStat">
            <span className="RBStatValue">{successCount.toLocaleString()}</span>
            <span className="RBStatLabel">Clients guided</span>
          </div>
          {recognition && (
            <>
              <div className="RBStatDivider" />
              <div className="RBStat">
                <span className="RBStatValue">🏆</span>
                <span className="RBStatLabel">{recognition}</span>
              </div>
            </>
          )}
        </div>

        {/* Recognition ribbon */}
        {recognition && (
          <div className="RBRecognition">
            <span>🏆</span> {recognition}
          </div>
        )}

        {/* Description */}
        <p className="RBDesc">
          Your account has been linked to this broker. They will guide you
          through your investment journey on the platform.
        </p>

        <button className="RBButton" onClick={handleContinue}>
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
}
