import "./ProfitHistory.css";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaChartLine, FaCoins, FaCalendarAlt } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

const ProfitHistory = () => {
  const { id } = useParams();
  const userData = useSelector((state) => state.persisitedReducer.user);
  const [profitHistory, setProfitHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate statistics - use useMemo to prevent recalculation on every render
  const statistics = useMemo(() => {
    const historyArray = Array.isArray(profitHistory) ? profitHistory : [];
    const totalProfit = historyArray.reduce(
      (sum, item) => sum + parseFloat(item.amount || 0),
      0,
    );
    const totalTransactions = historyArray.length;
    const averageProfit =
      totalTransactions > 0 ? totalProfit / totalTransactions : 0;

    return { totalProfit, totalTransactions, averageProfit, historyArray };
  }, [profitHistory]);

  const url = `https://mynewbrokerezebackend.onrender.com/api/getprofithistory/${id}`;

  const getProfitHistory = () => {
    setLoading(true);
    setError(null);
    axios
      .get(url)
      .then((res) => {
        console.log("API Response:", res.data);
        // Handle different response structures
        let data = res.data.data || res.data;

        // Ensure data is an array
        if (!Array.isArray(data)) {
          console.warn("API did not return an array:", data);
          data = [];
        }

        setProfitHistory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Failed to load profit history");
        setProfitHistory([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      getProfitHistory();
    }
  }, [id]);

  return (
    <>
      <div className="ProfitHistoryBody">
        <h1>Your ROI History</h1>

        {/* Statistics Cards */}
        <div className="ProfitHistoryStats">
          <div className="ProfitStatCard">
            <div className="ProfitStatIcon">
              <FaCoins />
            </div>
            <h4>Total Profit</h4>
            <h2>${statistics.totalProfit.toFixed(2)}</h2>
          </div>

          <div className="ProfitStatCard">
            <div className="ProfitStatIcon">
              <FaChartLine />
            </div>
            <h4>Total Transactions</h4>
            <h2>{statistics.totalTransactions}</h2>
          </div>

          <div className="ProfitStatCard">
            <div className="ProfitStatIcon">
              <MdTrendingUp />
            </div>
            <h4>Average Profit</h4>
            <h2>${statistics.averageProfit.toFixed(2)}</h2>
          </div>
        </div>

        {/* Profit History Table */}
        <div className="ProfitHistoryContent">
          {loading ? (
            <div className="ProfitEmpty">
              <div className="loader"></div>
              <h3>Loading profit history...</h3>
            </div>
          ) : error ? (
            <div className="ProfitEmpty">
              <FaChartLine />
              <h3>Error Loading Data</h3>
              <p>{error}</p>
            </div>
          ) : statistics.historyArray.length === 0 ? (
            <div className="ProfitEmpty">
              <FaChartLine />
              <h3>No Profit History Yet</h3>
              <p>
                Your profit history will appear here once you start earning from
                your investments.
              </p>
            </div>
          ) : (
            <div className="ProfitHistoryTable">
              <table>
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Date Created</th>
                  </tr>
                </thead>
                <tbody>
                  {statistics.historyArray.map((item, index) => (
                    <tr key={index}>
                      <td>{item.plan || item.planName || "N/A"}</td>
                      <td className="ProfitAmount">
                        ${parseFloat(item.amount || 0).toFixed(2)}
                      </td>
                      <td>{item.type || item.planType || "ROI"}</td>
                      <td>
                        <span
                          className={`ProfitStatus ${item.status?.toLowerCase() || "completed"}`}
                        >
                          {item.status || "Completed"}
                        </span>
                      </td>
                      <td>
                        <div className="ProfitDate">
                          <FaCalendarAlt />
                          {item.dateCreated ||
                            item.date ||
                            new Date(item.createdAt).toLocaleDateString() ||
                            "N/A"}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfitHistory;
