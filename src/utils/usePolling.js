import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { swiftUserData } from "../Components/store/FeaturesSlice";

const POLL_INTERVAL = 30000; // 30 seconds

/**
 * Polls the user data API every 30s and updates Redux.
 * Drop this hook into any component that needs live data.
 */
const usePolling = () => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.persisitedReducer.user);
  const userId =
    reduxUser?._id || reduxUser?.id || localStorage.getItem("UserId") || "";
  const intervalRef = useRef(null);

  const fetchUser = async () => {
    if (!userId) return;
    try {
      const res = await axios.get(
        `https://mynewbrokerezebackend.onrender.com/api/users/userdata/${userId}`,
      );
      const data = res.data?.data || res.data;
      dispatch(swiftUserData(data));
    } catch (err) {
      console.error("Polling error:", err.message);
    }
  };

  useEffect(() => {
    if (!userId) return;

    // Fetch immediately on mount
    fetchUser();

    // Then poll every 30s
    intervalRef.current = setInterval(fetchUser, POLL_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [userId]);
};

export default usePolling;
