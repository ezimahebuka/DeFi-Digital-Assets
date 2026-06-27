import "./Withdrawal.css";
import { useNavigate } from "react-router-dom";
import { FaWallet, FaArrowRight } from "react-icons/fa";

const Withdrawal = () => {
  const nav = useNavigate();

  const handleWithdrawFunds = () => {
    nav("/dashboard/withdraw-funds");
  };

  return (
    <>
      <div className="WithdrawalBody">
        <h1>Place a Withdrawal Request</h1>
        <div className="WithdrawalReqBody">
          <div className="WithdrawalReqBodyContent">
            <div className="WithdrawalReqBodyContentTop">
              <div className="WithdrawalIconWrapper">
                <FaWallet className="withdrawal-icon" />
              </div>
              <h2>Withdraw Your Funds</h2>
              <p className="withdrawal-subtitle">
                Choose from multiple withdrawal methods including crypto
                wallets, Cash App, PayPal, and bank transfer
              </p>
            </div>

            <div className="WithdrawalReqContentDown">
              <div className="withdrawal-info-grid">
                <div className="withdrawal-info-item">
                  <span className="info-label">Minimum Withdrawal</span>
                  <span className="info-value">$10.00</span>
                </div>
                <div className="withdrawal-info-item">
                  <span className="info-label">Maximum Withdrawal</span>
                  <span className="info-value">$1,000,000</span>
                </div>
                <div className="withdrawal-info-item">
                  <span className="info-label">Processing Time</span>
                  <span className="info-value">24-48 hours</span>
                </div>
                <div className="withdrawal-info-item">
                  <span className="info-label">Withdrawal Fee</span>
                  <span className="info-value">0%</span>
                </div>
              </div>

              <div className="withdrawal-features">
                <h3>Available Withdrawal Methods</h3>
                <ul>
                  <li>
                    <span className="feature-icon">₿</span>
                    <div>
                      <strong>Crypto Wallets</strong>
                      <p>
                        BTC, ETH, USDT (ERC20/TRC20/BEP20), BNB, SOL, XRP, TRX
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="feature-icon">💵</span>
                    <div>
                      <strong>Cash App</strong>
                      <p>Fast and convenient withdrawals to your Cash App</p>
                    </div>
                  </li>
                  <li>
                    <span className="feature-icon">💳</span>
                    <div>
                      <strong>PayPal</strong>
                      <p>Secure withdrawals to your PayPal account</p>
                    </div>
                  </li>
                  <li>
                    <span className="feature-icon">🏦</span>
                    <div>
                      <strong>Bank Transfer</strong>
                      <p>Direct transfer to your bank account</p>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleWithdrawFunds}
                className="withdrawal-cta-button"
              >
                <span>Request Withdrawal</span>
                <FaArrowRight />
              </button>

              <div className="withdrawal-notice">
                <p>
                  ⚠️ Please ensure your withdrawal details are correct. All
                  withdrawals require OTP verification for security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
