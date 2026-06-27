import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Payment from "./Pages/Deposit/Payment";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Verify from "./Pages/Verify/Verify";
import Other from "./Pages/Other/Other";
import Trading from "./Pages/Trading/Trading";
import Markets from "./Pages/Markets/Markets";
import Plans from "./Pages/Plans/Plans";
import Contact from "./Pages/Contact/Contact";
import Terms from "./Pages/Terms/Terms";
import DashHome from "./Pages/DashHome/DashHome";
import Deposit from "./Pages/Deposit/Deposit";
import WithdrawFunds from "./Pages/Withdrawal/WithdrawFunds";
import ProfitHistory from "./Pages/ProfitHistory/ProfitHistory";
import Transactions from "./Pages/Transactions/Transactions";
import TransferFunds from "./Pages/TransferFunds/TransferFunds";
import TransferHistory from "./Pages/TransferFunds/TransferHistory";
import Profile from "./Pages/Profile/Profile";
import TradingPlans from "./Pages/TradingPlans/TradingPlans";
import MyPlans from "./Pages/MyPlans/MyPlans";
import Referrals from "./Pages/Referrals/Referrals";
import DetailPlan from "./Pages/MyPlans/DetailPlan";
import PrivateRoute from "./routes/PrivateRoute";
import ReferralBroker from "./Pages/ReferralBroker/ReferralBroker";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/other" element={<Other />} />
          <Route path="/referral-broker" element={<ReferralBroker />} />

          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashHome />} />
              <Route path="deposit" element={<Deposit />} />
              <Route path="withdraw" element={<WithdrawFunds />} />
              <Route path="profit-history" element={<ProfitHistory />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="transfer-funds" element={<TransferFunds />} />
              <Route path="transfer-history" element={<TransferHistory />} />
              <Route path="profile" element={<Profile />} />
              <Route path="trading-plans" element={<TradingPlans />} />
              <Route path="my-plans" element={<MyPlans />} />
              <Route path="referrals" element={<Referrals />} />
              <Route path="detail-plan" element={<DetailPlan />} />
              <Route
                path="deposit/payment/:paymentname"
                element={<Payment />}
              />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
