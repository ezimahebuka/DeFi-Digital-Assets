import { FaChartLine, FaDollarSign, FaClock } from "react-icons/fa";
import "./MyPlans.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyPlans = () => {
  const navigate = useNavigate();
  const reduxUser = useSelector((state) => state.persisitedReducer.user);
  const id = reduxUser?._id || "";
  const [alluserplan, setAlluserplan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://mynewbrokerezebackend.onrender.com/api/users/getalluserplan/${id}`;

  const getalluserplan = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        console.log("User plans:", res.data);
        const payload = res.data?.data ?? res.data;
        const plans = Array.isArray(payload) ? payload : [];
        setAlluserplan(plans);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching plans:", err);
        setError("Failed to load your investment plans");
        setAlluserplan([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      getalluserplan();
    }
  }, [id]);

  const safePlans = Array.isArray(alluserplan) ? alluserplan : [];

  // Calculate statistics
  const totalInvested = safePlans.reduce(
    (sum, item) => sum + parseFloat(item?.plan?.investment?.amount || 0),
    0,
  );

  // More flexible status checking - check multiple possible status values
  const activePlans = safePlans.filter((item) => {
    const status = item?.plan?.investment?.status;
    if (!status) return false;
    const statusLower = status.toString().toLowerCase().trim();
    // Check for various "active" status values
    return (
      statusLower === "active" ||
      statusLower == "Active" ||
      statusLower === "running" ||
      statusLower === "ongoing" ||
      statusLower === "in progress"
    );
  }).length;

  console.log("All plans:", alluserplan);
  console.log("Active plans count:", activePlans);

  const getStatusClass = (status) => {
    const statusLower = status?.toLowerCase() || "";
    if (statusLower === "active") return "active";
    if (statusLower === "completed") return "completed";
    return "cancelled";
  };

  const handleBuyPlan = () => {
    navigate("/dashboard/trading-plans");
  };

  return (
    <>
      <div className="MyPlansBody">
        <h1>My Investment Plans</h1>

        {loading ? (
          <div className="MyPlansEmpty">
            <div className="loader"></div>
            <h3>Loading your plans...</h3>
          </div>
        ) : error ? (
          <div className="MyPlansEmpty">
            <FaChartLine />
            <h3>Error Loading Plans</h3>
            <p>{error}</p>
            <button onClick={getalluserplan}>Retry</button>
          </div>
        ) : alluserplan.length === 0 ? (
          <div className="MyPlansEmpty">
            <FaChartLine />
            <h3>No Investment Plans Yet</h3>
            <p>
              You don't have any active investment plans. Start investing today
              to grow your wealth!
            </p>
            <button onClick={handleBuyPlan}>Browse Trading Plans</button>
          </div>
        ) : (
          <>
            {/* Statistics Cards */}
            <div className="MyPlansStats">
              <div className="MyPlansStatCard">
                <FaDollarSign className="stat-icon" />
                <h4>Total Invested</h4>
                <h2>${totalInvested.toFixed(2)}</h2>
                <p>Across all plans</p>
              </div>

              <div className="MyPlansStatCard">
                <FaChartLine className="stat-icon" />
                <h4>Active Plans</h4>
                <h2>{activePlans}</h2>
                <p>Currently running</p>
              </div>

              <div className="MyPlansStatCard">
                <FaClock className="stat-icon" />
                <h4>Total Plans</h4>
                <h2>{alluserplan.length}</h2>
                <p>All time</p>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="MyPlansList">
              <h2>Your Investment Plans</h2>
              <div className="MyPlansGrid">
                {safePlans.map((item, index) => (
                  <div
                    className="MyPlanCard"
                    key={index}
                    onClick={() => navigate("/dashboard/detail-plan")}
                  >
                    <div className="MyPlanCardHeader">
                      <h3>{item?.plan?.planName || "Investment Plan"}</h3>
                      <span
                        className={`MyPlanCardStatus ${getStatusClass(
                          item?.plan?.investment?.status || "Active",
                        )}`}
                      >
                        {item?.plan?.investment?.status || "Active"}
                      </span>
                    </div>

                    <div className="MyPlanCardBody">
                      <div className="MyPlanCardAmount">
                        <p>Investment Amount</p>
                        <h3>
                          $
                          {parseFloat(
                            item?.plan?.investment?.amount || 0,
                          ).toFixed(2)}
                        </h3>
                      </div>

                      <div className="MyPlanCardRow">
                        <label>ROI</label>
                        <span>{item?.plan?.rio || "0"}%</span>
                      </div>

                      <div className="MyPlanCardRow">
                        <label>Duration</label>
                        <span>{item?.plan?.durationDays || "0"} Days</span>
                      </div>

                      <div className="MyPlanCardRow">
                        <label>Start Date</label>
                        <span>
                          {item?.plan?.investment?.Date ||
                            new Date().toLocaleDateString()}
                        </span>
                      </div>

                      <div className="MyPlanCardRow">
                        <label>End Date</label>
                        <span>
                          {item?.plan?.investment?.endDate || "Calculating..."}
                        </span>
                      </div>
                    </div>

                    <div className="MyPlanCardFooter">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/dashboard/detail-plan");
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MyPlans;
