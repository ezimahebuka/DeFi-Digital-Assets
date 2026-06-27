import { IoMdArrowBack } from "react-icons/io";
import {
  FaChartLine,
  FaDollarSign,
  FaCalendarAlt,
  FaClock,
  FaPercentage,
} from "react-icons/fa";
import "./MyPlans.css";
import { useSelector } from "react-redux";
import { removeSinglePlan } from "../../Components/store/FeaturesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../Components/Modal/Modal";
import { useNavigate } from "react-router-dom";

const DetailPlan = () => {
  const navigate = useNavigate();
  const singlePlans = useSelector(
    (state) => state.persisitedReducer.singlePlan,
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleCancelPlan = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(removeSinglePlan(singlePlans));
    setShowDeleteModal(false);
    setModalConfig({
      type: "success",
      title: "Plan Cancelled",
      message: "Your investment plan has been cancelled successfully.",
    });
    setShowConfirmModal(true);

    // Navigate back after 2 seconds
    setTimeout(() => {
      navigate("/dashboard/my-plans");
    }, 2000);
  };

  const investedAmount = parseFloat(singlePlans?.plan?.investment?.amount || 0);
  const profitEarned = parseFloat(singlePlans?.plan?.percentageInterest || 0);
  const totalReturn = parseFloat(
    singlePlans?.plan?.investment?.totalDailyInterest || 0,
  );

  return (
    <>
      <div className="DetailPlanBody">
        <div className="DetailPlanHeader">
          <button
            className="BackButton"
            onClick={() => navigate("/dashboard/my-plans")}
          >
            <IoMdArrowBack />
            <span>Back to My Plans</span>
          </button>
          <h1>Investment Plan Details</h1>
        </div>

        <div className="DetailPlanContent">
          {/* Plan Header Card */}
          <div className="DetailPlanCard DetailPlanHeaderCard">
            <div className="DetailPlanHeaderInfo">
              <h2>{singlePlans?.plan?.planName || "Investment Plan"}</h2>
              <p className="DetailPlanSubtitle">
                {singlePlans?.plan?.percentageInterest}% Daily ROI for{" "}
                {singlePlans?.plan?.durationDays} days
              </p>
            </div>
            <div className="DetailPlanHeaderActions">
              <span className="StatusBadge active">Active</span>
              <button className="CancelButton" onClick={handleCancelPlan}>
                Cancel Plan
              </button>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="DetailPlanCard">
            <h3 className="CardTitle">
              <FaDollarSign /> Financial Summary
            </h3>
            <div className="FinancialSummary">
              <div className="FinancialItem">
                <div className="FinancialIcon invested">
                  <FaDollarSign />
                </div>
                <div className="FinancialInfo">
                  <p>Invested Amount</p>
                  <h3>${investedAmount.toFixed(2)}</h3>
                </div>
              </div>

              <div className="FinancialDivider">+</div>

              <div className="FinancialItem">
                <div className="FinancialIcon profit">
                  <FaChartLine />
                </div>
                <div className="FinancialInfo">
                  <p>Profit Earned</p>
                  <h3>${profitEarned.toFixed(2)}</h3>
                </div>
              </div>

              <div className="FinancialDivider">=</div>

              <div className="FinancialItem total">
                <div className="FinancialIcon total-icon">
                  <FaDollarSign />
                </div>
                <div className="FinancialInfo">
                  <p>Total Return</p>
                  <h3>${totalReturn.toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Details Grid */}
          <div className="DetailPlanGrid">
            <div className="DetailPlanCard DetailInfoCard">
              <div className="DetailInfoIcon">
                <FaClock />
              </div>
              <div className="DetailInfoContent">
                <p>Duration</p>
                <h4>{singlePlans?.plan?.durationDays} Days</h4>
              </div>
            </div>

            <div className="DetailPlanCard DetailInfoCard">
              <div className="DetailInfoIcon">
                <FaCalendarAlt />
              </div>
              <div className="DetailInfoContent">
                <p>Start Date</p>
                <h4>{singlePlans?.plan?.investment?.Date || "N/A"}</h4>
              </div>
            </div>

            <div className="DetailPlanCard DetailInfoCard">
              <div className="DetailInfoIcon">
                <FaCalendarAlt />
              </div>
              <div className="DetailInfoContent">
                <p>End Date</p>
                <h4>{singlePlans?.plan?.investment?.endDate || "N/A"}</h4>
              </div>
            </div>

            <div className="DetailPlanCard DetailInfoCard">
              <div className="DetailInfoIcon">
                <FaPercentage />
              </div>
              <div className="DetailInfoContent">
                <p>Minimum Return</p>
                <h4>{singlePlans?.plan?.minimumDeposit}%</h4>
              </div>
            </div>

            <div className="DetailPlanCard DetailInfoCard">
              <div className="DetailInfoIcon">
                <FaPercentage />
              </div>
              <div className="DetailInfoContent">
                <p>Maximum Return</p>
                <h4>{singlePlans?.plan?.maximumDeposit}%</h4>
              </div>
            </div>

            <div className="DetailPlanCard DetailInfoCard">
              <div className="DetailInfoIcon">
                <FaClock />
              </div>
              <div className="DetailInfoContent">
                <p>ROI Interval</p>
                <h4>Daily</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="CustomModalOverlay"
          onClick={() => setShowDeleteModal(false)}
        >
          <div
            className="CustomModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Cancel Investment Plan?</h3>
            <p>
              Are you sure you want to cancel the{" "}
              <strong>{singlePlans?.plan?.planName}</strong> plan? This action
              cannot be undone.
            </p>
            <div className="CustomModalActions">
              <button
                className="CustomModalButton secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                No, Keep Plan
              </button>
              <button
                className="CustomModalButton danger"
                onClick={handleConfirmDelete}
              >
                Yes, Cancel Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
      />
    </>
  );
};

export default DetailPlan;
