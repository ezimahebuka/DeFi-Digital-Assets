import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import "./Trading.css";

const Trading = () => {
  return (
    <div className="PageWrapper">
      <LandingHeader />
      <main className="PageContent container">
        <section className="PageHero">
          <span>Investing platform</span>
          <h1>Invest with fast execution and deep market access.</h1>
          <p>
            Discover powerful tools, live pricing, and professional-grade order
            flow to execute your investments confidently.
          </p>
          <Link className="PageButton primary" to="/register">
            Get Started Investing
          </Link>
        </section>

        <section className="PageFeatures">
          <h2>Why choose our investing platform</h2>
          <div className="PageFeatureGrid">
            <div className="PageFeatureCard">
              <h3>Fast Execution</h3>
              <p>Sub-millisecond order processing with minimal slippage.</p>
            </div>
            <div className="PageFeatureCard">
              <h3>Multiple Assets</h3>
              <p>Forex, metals, commodities, and crypto all in one platform.</p>
            </div>
            <div className="PageFeatureCard">
              <h3>Advanced Charts</h3>
              <p>Real-time technical analysis tools and 100+ indicators.</p>
            </div>
            <div className="PageFeatureCard">
              <h3>Safe & Secure</h3>
              <p>Bank-level encryption and 24/7 account protection.</p>
            </div>
          </div>
        </section>

        <section className="PageCTA">
          <div>
            <h2>Ready to start investing?</h2>
            <p>Open a live account or try a demo with virtual funds.</p>
            <Link className="PageButton secondary" to="/register">
              Create Account
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trading;
