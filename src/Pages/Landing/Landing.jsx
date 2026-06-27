import { Link } from "react-router-dom";
import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import ActivityToast from "../../Components/ActivityToast";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="LandingPage">
      <LandingHeader />

      <main>
        <section className="LandingHero">
          <div className="LandingHeroContent container">
            <div className="LandingHeroCopy">
              <span className="LandingBadge">Global trading, simplified</span>
              <h1>Power your investments with a modern broker platform.</h1>
              <p>
                Trade markets, manage risk, and access premium tools with a
                clean investment experience built for today’s traders.
              </p>
              <div className="LandingActions">
                <Link className="LandingButton primary" to="/register">
                  Get Started
                </Link>
                <Link className="LandingButton secondary" to="/login">
                  Login
                </Link>
              </div>
            </div>
            <div className="LandingHeroStats">
              <div className="LandingStatCard">
                <h2>0.0s</h2>
                <p>Average execution</p>
              </div>
              <div className="LandingStatCard">
                <h2>120+</h2>
                <p>Markets available</p>
              </div>
              <div className="LandingStatCard">
                <h2>24/7</h2>
                <p>Support and live chat</p>
              </div>
            </div>
          </div>
        </section>

        <section className="LandingFeatures container" id="trading">
          <div className="LandingSectionTitle">
            <p>Core trading features</p>
            <h2>Built to trade confidently in every market.</h2>
          </div>
          <div className="LandingFeatureGrid">
            <article className="LandingFeatureCard">
              <h3>Live market signals</h3>
              <p>
                See market moves and execute with clear pricing from day one.
              </p>
            </article>
            <article className="LandingFeatureCard">
              <h3>Advanced analytics</h3>
              <p>
                Track your positions and manage risk with actionable insights.
              </p>
            </article>
            <article className="LandingFeatureCard">
              <h3>Fast onboarding</h3>
              <p>
                Register in minutes and fund your account with reliable
                infrastructure.
              </p>
            </article>
          </div>
        </section>

        <section className="LandingMarkets" id="markets">
          <div className="container">
            <div className="LandingSectionTitle">
              <p>Market access</p>
              <h2>
                Trade the widest range of asset classes from one platform.
              </h2>
            </div>
            <div className="LandingMarketsGrid">
              {[
                "Bitcoin Mining",
                "Forex Trade",
                "Marijuana",
                "Precious Metal",
                "Crude Oil",
                "Real Estate",
                "Retirement Plan",
              ].map((market) => (
                <div key={market} className="LandingMarketCard">
                  <h3>{market}</h3>
                  <p>
                    Explore premium instruments and risk-managed portfolios.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="LandingChatAwards container">
          <div className="LandingChat">
            <h2>Trade smarter with live chat support.</h2>
            <p>
              Ask questions, get market updates, and receive guidance from our
              trading desk anytime.
            </p>
            <a className="LandingButton outline" href="#contact">
              Start chat
            </a>
          </div>
          <div className="LandingAwards">
            <div>
              <span>Awarded</span>
              <h3>Best broker experience 2026</h3>
            </div>
            <div>
              <span>Rated</span>
              <h3>5-star broker services</h3>
            </div>
            <div>
              <span>Trusted</span>
              <h3>By global investors</h3>
            </div>
          </div>
        </section>

        <section className="LandingTestimonials container">
          <div className="LandingSectionTitle">
            <p>Client stories</p>
            <h2>What traders are saying about the platform.</h2>
          </div>
          <div className="LandingTestimonialGrid">
            <article className="LandingTestimonialCard">
              <p>
                “The execution speed and clarity on this platform make it easy
                to trade without second guessing.”
              </p>
              <strong>— Hannah, active forex trader</strong>
            </article>
            <article className="LandingTestimonialCard">
              <p>
                “I love the market coverage. It feels like a professional broker
                with a modern user experience.”
              </p>
              <strong>— Marcus, commodities investor</strong>
            </article>
            <article className="LandingTestimonialCard">
              <p>
                “The education and support are great. Everything feels well
                built for serious investing.”
              </p>
              <strong>— Priya, long-term portfolio manager</strong>
            </article>
          </div>
        </section>

        <section className="LandingSponsors container">
          <p>Trusted by</p>
          <div className="LandingSponsorGrid">
            <span>FINEX</span>
            <span>TRADIFY</span>
            <span>GLOBALX</span>
            <span>METALINK</span>
            <span>ALTTRUST</span>
          </div>
        </section>

        <section className="InvPlansSection" id="plans">
          <div className="container">
            <div className="InvPlansHeader">
              <span className="InvPlansEyebrow">Investment Plans</span>
              <h2 className="InvPlansTitle">Choose Your Investment Plan</h2>
              <p className="InvPlansSubtitle">
                Select the tier that matches your capital and goals. All plans
                include full platform access and dedicated support.
              </p>
            </div>

            {/* Row 1 — 4 cards */}
            <div className="InvPlanGrid four">
              {[
                {
                  name: "Starter",
                  tier: "Entry Level",
                  range: "$1,000 – $9,500",
                  roi: "550%",
                  accent: "#6c8ebf",
                  features: [
                    "36 currency pairs, Metals, CFDs",
                    "Spread: Floating from 1.3 pips",
                    "Deposit bonuses: All offers",
                    "Loyalty bonuses: All offers",
                  ],
                },
                {
                  name: "Silver",
                  tier: "Growth",
                  range: "$10,000 – $75,000",
                  roi: "550%",
                  accent: "#8fa8c8",
                  features: [
                    "36 currency pairs, Metals, CFDs",
                    "Spread: Floating from 1.3 pips",
                    "Deposit bonuses: All offers",
                    "Loyalty bonuses: All offers",
                  ],
                },
                {
                  name: "Gold",
                  tier: "Advanced",
                  range: "$50,000 – $175,000",
                  roi: "550%",
                  accent: "#c9a84c",
                  featured: true,
                  features: [
                    "36 currency pairs, Metals, CFDs",
                    "Spread: Floating from 0 pips",
                    "Deposit bonuses: All offers",
                    "Loyalty bonuses: All offers",
                  ],
                },
                {
                  name: "Platinum",
                  tier: "Premium",
                  range: "$150,000 – $470,000",
                  roi: "550%",
                  accent: "#a0b4c8",
                  features: [
                    "36 currency pairs, Metals, CFDs",
                    "30 Social Media Reviews",
                    "Spread: Floating from 0.01 USD",
                    "Deposit bonuses: All offers",
                    "Loyalty bonuses: All offers",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`InvPlanCard${plan.featured ? " featured" : ""}`}
                  style={{ "--plan-accent": plan.accent }}
                >
                  {plan.featured && (
                    <div className="InvPlanBadge">Most Popular</div>
                  )}
                  <div className="InvPlanTop">
                    <span className="InvPlanTier">{plan.tier}</span>
                    <h3 className="InvPlanName">{plan.name} Plan</h3>
                    <div className="InvPlanRange">{plan.range}</div>
                    <div className="InvPlanRoiRow">
                      <span className="InvPlanRoiLabel">ROI</span>
                      <span className="InvPlanRoiValue">{plan.roi}</span>
                    </div>
                  </div>
                  <div className="InvPlanDivider" />
                  <ul className="InvPlanFeatures">
                    {plan.features.map((f, i) => (
                      <li key={i}>
                        <svg
                          className="InvCheckIcon"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="8"
                            fill="currentColor"
                            opacity="0.15"
                          />
                          <path
                            d="M4.5 8l2.5 2.5 4.5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link className="InvPlanButton" to="/register">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>

            {/* Row 2 — 2 cards centered */}
            <div className="InvPlanGrid two">
              {[
                {
                  name: "Supreme",
                  tier: "Elite",
                  range: "$500,000 – $1,575,000",
                  roi: "550%",
                  accent: "#b08d57",
                  features: [
                    "36 currency pairs, Metals, CFDs",
                    "30 Social Media Reviews",
                    "Spread: Floating from 0.01 USD",
                    "Deposit bonuses: All offers",
                    "Loyalty bonuses: All offers",
                  ],
                },
                {
                  name: "Ultimate",
                  tier: "Institutional",
                  range: "$1,000,000 – $3,150,000",
                  roi: "550%",
                  accent: "#d4af37",
                  features: [
                    "36 currency pairs, Metals, CFDs",
                    "30 Social Media Reviews",
                    "Spread: Floating from 0.01 USD",
                    "Deposit bonuses: All offers",
                    "Loyalty bonuses: All offers",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="InvPlanCard large"
                  style={{ "--plan-accent": plan.accent }}
                >
                  <div className="InvPlanTop">
                    <span className="InvPlanTier">{plan.tier}</span>
                    <h3 className="InvPlanName">{plan.name} Plan</h3>
                    <div className="InvPlanRange">{plan.range}</div>
                    <div className="InvPlanRoiRow">
                      <span className="InvPlanRoiLabel">ROI</span>
                      <span className="InvPlanRoiValue">{plan.roi}</span>
                    </div>
                  </div>
                  <div className="InvPlanDivider" />
                  <ul className="InvPlanFeatures">
                    {plan.features.map((f, i) => (
                      <li key={i}>
                        <svg
                          className="InvCheckIcon"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="8"
                            fill="currentColor"
                            opacity="0.15"
                          />
                          <path
                            d="M4.5 8l2.5 2.5 4.5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link className="InvPlanButton" to="/register">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="LandingContact container" id="contact">
          <div className="LandingContactCard">
            <div>
              <span>Talk to us</span>
              <h2>
                Start trading with support that moves as fast as the market.
              </h2>
            </div>
            <Link className="LandingButton primary" to="/login">
              Contact sales
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ActivityToast />
    </div>
  );
};

export default Landing;
