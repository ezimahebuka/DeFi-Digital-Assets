import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import "./Markets.css";

const Markets = () => {
  return (
    <div className="PageWrapper">
      <LandingHeader />
      <main className="PageContent container">
        <section className="PageHero">
          <span>Markets</span>
          <h1>Explore our available markets and investment opportunities.</h1>
          <p>
            Access forex, metals, commodities, real estate, and alternative
            assets through a unified broker dashboard.
          </p>
        </section>

        <section className="PageMarketsList">
          <h2>Available Markets</h2>
          <div className="PageMarketGrid">
            {[
              { name: "Forex", desc: "Invest in 50+ currency pairs 24/5" },
              {
                name: "Precious Metals",
                desc: "Gold, silver, platinum, and palladium",
              },
              { name: "Crude Oil", desc: "WTI and Brent crude investing" },
              {
                name: "Bitcoin Mining",
                desc: "Cryptocurrency investment opportunities",
              },
              { name: "Real Estate", desc: "Property and REIT investments" },
              { name: "Marijuana", desc: "Cannabis industry exposure" },
            ].map((market) => (
              <div key={market.name} className="PageMarketCard">
                <h3>{market.name}</h3>
                <p>{market.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="PageCTA">
          <div>
            <h2>Start exploring markets today</h2>
            <p>Access diverse investments with competitive spreads.</p>
            <Link className="PageButton primary" to="/register">
              Open Investment Account
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Markets;
