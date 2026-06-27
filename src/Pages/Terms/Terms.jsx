import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="PageWrapper">
      <LandingHeader />
      <main className="PageContent container">
        <section className="PageHero">
          <span>Terms of Use</span>
          <h1>Review our policies and investment terms.</h1>
          <p>
            Read the terms that govern use of the platform and your investment
            relationship.
          </p>
        </section>

        <section className="PageTermsContent">
          <div className="PageTermsSection">
            <h2>Key Points</h2>
            <ul className="PageTermsList">
              <li>Must be 18+ to open an account</li>
              <li>Accounts are subject to verification</li>
              <li>Investing is done at your own risk</li>
              <li>Deposits are segregated and protected</li>
              <li>We comply with all regulatory requirements</li>
            </ul>
          </div>

          <div className="PageTermsSection">
            <h2>Account Terms</h2>
            <p>
              By opening an account, you agree to our terms of service. All
              investing is subject to market conditions and our platform rules.
              We reserve the right to modify terms with 30 days notice.
            </p>
          </div>

          <div className="PageTermsSection">
            <h2>Risk Disclosure</h2>
            <p>
              Investing involves substantial risk of loss. Leverage can work for
              or against you. Always use proper risk management and never invest
              money you cannot afford to lose.
            </p>
          </div>

          <div className="PageTermsSection">
            <h2>Privacy & Data</h2>
            <p>
              Your personal and account data is encrypted and protected. We do
              not share information with third parties except as required by
              law.
            </p>
          </div>
        </section>

        <section className="PageCTA">
          <div>
            <h2>Agree to our terms?</h2>
            <p>Create your account and start investing on our platform.</p>
            <Link className="PageButton primary" to="/register">
              Open Account
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
