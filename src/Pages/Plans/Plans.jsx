import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import "./Plans.css";

const Plans = () => {
  const plans = [
    {
      name: "Starter Plan",
      range: "$500 - $9,500",
      roi: "350%",
      duration: "3 Months",
      instruments: ["36 currency pairs", "Metals", "CFD on US stocks"],
      spread: "Floating from 1.3 pips",
      deposits: "All offers",
      loyalty: "All offers",
    },
    {
      name: "Silver Plan",
      range: "$20,000 - $75,000",
      roi: "420%",
      duration: "6 Months",
      instruments: [
        "36 currency pairs",
        "Metals",
        "CFD on US stocks",
        "CFD on Indices",
        "CFD on Oil",
      ],
      spread: "Floating from 1.0 pips",
      deposits: "All offers",
      loyalty: "All offers",
    },
    {
      name: "Gold Plan",
      range: "$50,000 - $175,000",
      roi: "480%",
      duration: "9 Months",
      instruments: [
        "36 currency pairs",
        "Metals",
        "CFD on US stocks",
        "CFD on Indices",
        "CFD on Oil",
        "Cryptocurrencies",
        "Commodities",
      ],
      spread: "Floating from 0.5 pips",
      deposits: "All offers",
      loyalty: "All offers",
    },
    {
      name: "Platinum Plan",
      range: "$150,000 - $470,000",
      roi: "520%",
      duration: "12 Months",
      instruments: [
        "36 currency pairs",
        "Metals",
        "CFD on US stocks",
        "CFD on Indices",
        "CFD on Oil",
        "Cryptocurrencies",
        "Commodities",
        "Energy Futures",
      ],
      spread: "Floating from 0.1 pips",
      deposits: "All offers",
      loyalty: "All offers",
    },
    {
      name: "Supreme Plan",
      range: "$500,000 - $1,575,000",
      roi: "560%",
      duration: "15 Months",
      instruments: [
        "36 currency pairs",
        "Metals",
        "CFD on US stocks",
        "CFD on Indices",
        "CFD on Oil",
        "Cryptocurrencies",
        "Commodities",
        "Energy Futures",
        "Agricultural Products",
        "Rare Earth Metals",
      ],
      spread: "Floating from 0.01 USD",
      deposits: "All offers",
      loyalty: "All offers",
      reviews: "30 Social Media Reviews",
    },
    {
      name: "Ultimate Plan",
      range: "$1,000,000 - $3,150,000",
      roi: "600%",
      duration: "24 Months",
      instruments: [
        "36 currency pairs",
        "Metals",
        "CFD on US stocks",
        "CFD on Indices",
        "CFD on Oil",
        "Cryptocurrencies",
        "Commodities",
        "Energy Futures",
        "Agricultural Products",
        "Rare Earth Metals",
        "Advanced Derivatives",
        "Emerging Market Assets",
      ],
      spread: "Floating from 0.01 USD",
      deposits: "All offers",
      loyalty: "All offers",
      reviews: "30 Social Media Reviews",
    },
  ];

  return (
    <div className="PageWrapper">
      <LandingHeader />
      <main className="PageContent container">
        <section className="PageHero">
          <span>Plans</span>
          <h1>Choose the investment plan that fits your goals.</h1>
          <p>
            From starter packages to premium accounts, we offer structures
            designed for every investor. All plans include professional tools,
            competitive spreads, and bonus opportunities.
          </p>
        </section>

        <section className="PagePlansList">
          <div className="PagePlanGrid">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`PagePlanCard ${index === 4 ? "featured" : ""}`}
              >
                <h3>{plan.name}</h3>
                <p className="PagePlanRange">{plan.range}</p>
                <p className="PagePlanDuration">{plan.duration}</p>
                <div className="PagePlanROI">
                  <span className="PageROILabel">ROI</span>
                  <span className="PageROIValue">{plan.roi}</span>
                </div>

                {plan.reviews && (
                  <p className="PagePlanReviews">{plan.reviews}</p>
                )}

                <div className="PagePlanSection">
                  <h4>Investment Instruments</h4>
                  <ul className="PageInstrumentsList">
                    {plan.instruments.map((instrument) => (
                      <li key={instrument}>{instrument}</li>
                    ))}
                  </ul>
                </div>

                <div className="PagePlanSection">
                  <p>
                    <strong>Spread:</strong> {plan.spread}
                  </p>
                  <p>
                    <strong>Deposit bonuses:</strong> {plan.deposits}
                  </p>
                  <p>
                    <strong>Loyalty bonuses:</strong> {plan.loyalty}
                  </p>
                </div>

                <Link className="PageButton primary" to="/register">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;
