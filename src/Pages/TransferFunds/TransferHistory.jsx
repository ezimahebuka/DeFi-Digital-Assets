import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowUp, FaArrowDown, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import formatAmount from "../../utils/formatAmount";
import "./TransferFunds.css";

const TransferHistory = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.persisitedReducer.user);
  const userId =
    userData?._id || userData?.id || localStorage.getItem("UserId") || "";

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    axios
      .get(
        `https://mynewbrokerezebackend.onrender.com/api/transfers/history/${userId}`,
      )
      .then((res) => setHistory(res.data?.data || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <div className="TransferFundsBody">
      <div className="TransferHistoryPageHeader">
        <button className="TransferBackBtn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
        <h1>Transfer History</h1>
      </div>

      {loading ? (
        <p className="TransferHistoryEmpty">Loading...</p>
      ) : history.length === 0 ? (
        <p className="TransferHistoryEmpty">No transfer history yet.</p>
      ) : (
        <div className="TransferHistoryList">
          {history.map((item, index) => {
            const isSender =
              item.sender?._id === userId || item.sender === userId;
            return (
              <div className="TransferHistoryItem" key={index}>
                <div
                  className={`TransferHistoryIcon ${isSender ? "sent" : "received"}`}
                >
                  {isSender ? <FaArrowUp /> : <FaArrowDown />}
                </div>
                <div className="TransferHistoryDetails">
                  <p className="TransferHistoryType">
                    {isSender ? "Sent to" : "Received from"}{" "}
                    <strong>
                      {isSender
                        ? item.recipient?.fullName || item.recipient?.email
                        : item.sender?.fullName || item.sender?.email}
                    </strong>
                  </p>
                  <p className="TransferHistoryDate">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleString()
                      : "—"}
                  </p>
                </div>
                <div className="TransferHistoryAmount">
                  <span className={isSender ? "sent" : "received"}>
                    {isSender ? "-" : "+"}${formatAmount(item.amount)}
                  </span>
                  <span className="TransferHistoryStatus">{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TransferHistory;
