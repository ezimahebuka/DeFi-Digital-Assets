import "./Dashboard.css";
import Logo from "../../assets/Icon.png";
// import Logo from "../../assets/Swift-Earn-Logo.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { LuHardDriveDownload } from "react-icons/lu";
import {
  FaArrowAltCircleUp,
  FaHistory,
  FaAddressCard,
  FaRegUser,
} from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { LuRepeat2 } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { HiMiniUser } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { swiftUserData } from "../store/FeaturesSlice";
import ScrollToTop from "../ScrollToTop";
import Swal from "sweetalert2";
import { IoIosNotifications } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { Select } from "antd";
import axios from "axios";
import formatAmount from "../../utils/formatAmount";
import usePolling from "../../utils/usePolling";

const Dashboard = () => {
  usePolling(); // auto-refresh user data every 30s
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxUser = useSelector((state) => state.persisitedReducer.user);
  const authToken = useSelector((state) => state.persisitedReducer.authToken);
  const id = reduxUser?._id || "";

  const getYear = new Date().getFullYear();

  const [userData, setUserdata] = useState({});
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [plansLoading, setPlansLoading] = useState(false);

  const handleGetUser = async () => {
    setUserDataLoading(true);
    try {
      const response = await fetch(
        `https://mynewbrokerezebackend.onrender.com/api/users/userdata/${id}`,
      );
      const responseData = await response.json();
      const userData = responseData?.data || responseData;
      setUserdata(userData);
      dispatch(swiftUserData(userData));
      localStorage.setItem("UserId", userData?._id || userData?.id || "");
    } catch (error) {
    } finally {
      setUserDataLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleGetUser();
      getallPlan();
    }
  }, [id]);

  const [showUserDrop, setShowUserDrop] = useState(false);
  const userDropdownRef = useRef(null);

  const handleShowUserDropdown = () => {
    setShowUserDrop(!showUserDrop);
  };

  const handleClickOutside = (event) => {
    if (
      userDropdownRef.current &&
      !userDropdownRef.current.contains(event.target)
    ) {
      setShowUserDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = () => {
    setShowNav(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("UserId");
    window.location.href = "/#/login";
  };

  const handleShowProfile = () => {
    setShowUserDrop(false);
    navigate("/dashboard/profile");
  };

  const handleAdmin = () => {};

  const [userPlane, setUserPlane] = useState([]);
  const getallPlan = async () => {
    setPlansLoading(true);
    try {
      const response = await fetch(
        "https://mynewbrokerezebackend.onrender.com/api/plans/getallplan",
      );
      const json = await response.json();
      setUserPlane(json?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setPlansLoading(false);
    }
  };

  const Contactus = () => {
    Swal.fire("Contact us on live support");
  };

  const [showNotification, setNotification] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationsLoading, setNotificationsLoading] = useState(false);
  const [notificationsError, setNotificationsError] = useState(null);

  const getNotifications = async () => {
    setNotificationsLoading(true);
    setNotificationsError(null);
    const token =
      authToken ||
      localStorage.getItem("authToken") ||
      localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
      const response = await axios.get(
        `https://mynewbrokerezebackend.onrender.com/api/notifications/getallnotification/${id}`,
        { headers },
      );
      const data = response.data?.data ?? response.data;
      setNotifications(Array.isArray(data) ? data : data ? [data] : []);
    } catch (error) {
      console.error("Notification fetch error:", error);
      setNotifications([]);
      setNotificationsError(
        error.response?.data?.message || "Unable to load notifications.",
      );
    } finally {
      setNotificationsLoading(false);
    }
  };

  const handleNotification = () => {
    setNotification((prev) => {
      if (!prev) getNotifications();
      return !prev;
    });
  };

  const handleInvestmentButton = () => {
    setNotification(false);
    setShowNav(false);
    window.location.href = "/#/dashboard/trading-plans";
  };

  return (
    <>
      <ScrollToTop />
      <div className="DashboardBody bigScreen">
        <div className={`DashboardWrapper ${showNav ? "active" : " "}`}>
          <div className={`DashboardNav ${showNav ? "active" : ""}`}>
            <div className="DashboardNavWrapper ">
              <div className="DashboardNavLogo">
                <img src={Logo} alt="" />
                <RiMenu3Fill
                  className="DashboardNavLogoMenuFill"
                  onClick={handleShowNav}
                />
              </div>
              <div className="DashboardNavAccountView">
                <div className="DashboardNavAccountViewPfp">
                  <HiMiniUser className="HiMiniUser" />
                </div>
                <div className="DashboardNavAccountViewInitials">
                  <h2>{userData?.fullName}</h2>
                  <p>online</p>
                </div>
                <div className="DashboardNavAccountViewBalance">
                  <GoDatabase />{" "}
                  <span>
                    ${" "}
                    {(parseFloat(userData?.accountBalance) || 0).toLocaleString(
                      "en-US",
                      { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                    )}
                  </span>
                </div>
              </div>
              <div className="DashboardNavLinks">
                <div className="DashboardNavLinksRow1">
                  <NavLink
                    to="/dashboard"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                    end
                  >
                    <span>
                      <IoHomeOutline className="DashboardNavlinksIcons" />
                    </span>
                    <span>Home</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/deposit"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <LuHardDriveDownload className="DashboardNavlinksIcons" />
                    </span>
                    <span>Deposit</span>
                  </NavLink>
                </div>
                <div className="DashboardNavLinksRow2">
                  <NavLink
                    to="/dashboard/withdraw"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <FaArrowAltCircleUp className="DashboardNavlinksIcons" />
                    </span>
                    <span>Withdrawal</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/profit-history"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <FaHistory className="DashboardNavlinksIcons" />
                    </span>
                    <span>Profit History</span>
                  </NavLink>
                </div>
                <div className="DashboardNavLinksRow3">
                  <NavLink
                    to="/dashboard/transactions"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <BsFillCreditCard2BackFill className="DashboardNavlinksIcons" />
                    </span>
                    <span>Transactions</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/transfer-funds"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <BiTransfer className="DashboardNavlinksIcons" />
                    </span>
                    <span>Transfer Funds</span>
                  </NavLink>
                </div>
                <div className="DashboardNavLinksRow4">
                  <NavLink
                    to="/dashboard/profile"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <FaAddressCard className="DashboardNavlinksIcons" />
                    </span>
                    <span>Profile</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/trading-plans"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <FaHandHoldingDollar className="DashboardNavlinksIcons" />
                    </span>
                    <span>Trading Plans</span>
                  </NavLink>
                </div>
                <div className="DashboardNavLinksRow5">
                  <NavLink
                    to="/dashboard/my-plans"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <LiaHandHoldingHeartSolid className="DashboardNavlinksIcons" />
                    </span>
                    <span>My Plans</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/referrals"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "DashboardNavLinksItem current"
                        : "DashboardNavLinksItem"
                    }
                  >
                    <span>
                      <LuRepeat2 className="DashboardNavlinksIcons" />
                    </span>
                    <span>Referrals</span>
                  </NavLink>
                </div>
                {userData?.isAdmin ? (
                  <div className="DashboardNavLinksRow5">
                    <NavLink
                      to="/dashboard/admin"
                      onClick={handleLinkClick}
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavLinksItem current"
                          : "DashboardNavLinksItem"
                      }
                    >
                      <span>
                        <LiaHandHoldingHeartSolid className="DashboardNavlinksIcons" />
                      </span>
                      <span>Admin</span>
                    </NavLink>
                  </div>
                ) : null}
              </div>
              <div className="DashboardNavContact">
                <div className="DashboardNavContactText">
                  <h3>Need Help!</h3>
                  <p>Contact our 24/7 customer support center</p>
                </div>
                <div className="DashboardNavContactBtn">
                  <button onClick={Contactus}>Contact us</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`DashboardMain ${showNav ? "active" : ""}`}>
            <div className="DashboardMainHeader">
              <div className="DashboardMainHeaderBox">
                <div className="DashboardMainHeaderBoxHambuger">
                  <div
                    className="notification-icon-wrapper"
                    onClick={handleNotification}
                  >
                    <IoIosNotifications
                      style={{ fontSize: "20px", cursor: "pointer" }}
                    />
                    {(notifications.length > 0 || userData?.notification) && (
                      <span className="red-dot" />
                    )}
                  </div>
                  <div
                    className={`notificationBar ${showNotification ? "show" : ""}`}
                  >
                    <div className="notification_header">
                      <h4>Your Notifications</h4>
                      <MdCancel
                        className="cancel_icon"
                        onClick={() => setNotification(false)}
                      />
                    </div>
                    <div className="notification_status">
                      <div className="status_holder">
                        <div className="n_status_card">
                          <h4>All</h4>
                        </div>
                        <div className="n_status_card">
                          <h4>Unread</h4>
                        </div>
                      </div>
                    </div>
                    <div className="notification_body">
                      {notificationsLoading ? (
                        <div className="no_notification">
                          <div className="loader"></div>
                          <h4>Loading notifications...</h4>
                        </div>
                      ) : notificationsError ? (
                        <div className="no_notification">
                          <h4>{notificationsError}</h4>
                        </div>
                      ) : notifications.length > 0 ? (
                        [...notifications]
                          .sort((a, b) => new Date(b.Date) - new Date(a.Date))
                          .map((item, index) => (
                            <div
                              className="notification_card"
                              key={index}
                              onClick={handleInvestmentButton}
                            >
                              <h4>Notification</h4>
                              <p>
                                {item?.msg ||
                                  item?.message ||
                                  item?.title ||
                                  ""}
                              </p>
                              <p>
                                {item?.Date ||
                                  item?.createdAt ||
                                  item?.date ||
                                  ""}
                              </p>
                            </div>
                          ))
                      ) : (
                        <div className="no_notification">
                          <h4>No Notifications</h4>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="DashboardMainHeaderBoxHambuger">
                  <MdOutlineMenu
                    className="MdOutlineMenu"
                    onClick={handleShowNav}
                  />
                </div>
                <div
                  className="DashboardMainHeaderBoxAccount"
                  onClick={handleShowUserDropdown}
                  ref={userDropdownRef}
                >
                  <div>
                    <HiMiniUser className="HiMiniUser" />
                  </div>
                  <p>{userData?.fullName}</p>
                </div>
              </div>
              {showUserDrop ? (
                <div className="DashboardMainHeaderUserAccDiv">
                  <div className="DashboardMainHeaderUserAccDivWrap">
                    <p>Hi {userData?.fullName}</p>
                    <div
                      className="DashboardMainHeaderUserAccDivPfp"
                      onClick={handleShowProfile}
                    >
                      <span>
                        <FaRegUser />
                      </span>
                      My profile
                    </div>
                    <div
                      className="DashboardMainHeaderUserAccDivLogout"
                      onClick={handleLogOut}
                    >
                      <span>
                        <FiLogOut />
                      </span>
                      Logout
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="DashboardMainContent">
              {userDataLoading || plansLoading ? (
                <div className="DashboardSkeleton">
                  <div className="DashboardSkeletonHeader pulse" />
                  <div className="DashboardSkeletonTop">
                    <div className="DashboardSkeletonCard pulse" />
                    <div className="DashboardSkeletonCard pulse" />
                    <div className="DashboardSkeletonCard pulse" />
                  </div>
                  <div className="DashboardSkeletonSection">
                    <div className="DashboardSkeletonLine pulse" />
                    <div className="DashboardSkeletonGrid">
                      <div className="DashboardSkeletonCard pulse" />
                      <div className="DashboardSkeletonCard pulse" />
                      <div className="DashboardSkeletonCard pulse" />
                    </div>
                  </div>
                </div>
              ) : (
                <Outlet />
              )}
            </div>
            <div className="DashboardMainFooter">
              <p>All Rights Reserved © DeFi Digital Assets {getYear}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
