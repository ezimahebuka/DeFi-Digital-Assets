import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import ActivityToast from "../../Components/ActivityToast";
import CryptVideo from "../../assets/crypt.mp4";
import "./Landing.css";

const SLIDES = [
  {
    eyebrow: "Welcome to DeFi Digital Assets",
    headline: "Stock Market",
    sub: "It's time to make your money work for you. We help our clients achieve their financial ambitions by building lasting relationships.",
  },
  {
    eyebrow: "Trade · Invest · Grow",
    headline: "Trade, Invest any time, any day.",
    sub: "You can trade and invest your cryptocurrencies and watch your investment grow.",
  },
  {
    eyebrow: "Global Investment Platform",
    headline: "DeFi Digital Assets — the best place to invest.",
    sub: "Our success rate is very high, making our investors our top priority.",
  },
];

const PLANS = [
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
];

const MARKETS = [
  {
    icon: "₿",
    name: "Bitcoin Mining",
    desc: "Mine and trade BTC with managed infrastructure.",
  },
  {
    icon: "💱",
    name: "Forex Trade",
    desc: "Access 36+ currency pairs with tight spreads.",
  },
  {
    icon: "🌿",
    name: "Marijuana",
    desc: "Emerging market with high-growth potential.",
  },
  {
    icon: "🥇",
    name: "Precious Metal",
    desc: "Gold, silver and platinum-backed portfolios.",
  },
  {
    icon: "🛢️",
    name: "Crude Oil",
    desc: "Trade WTI & Brent with real-time pricing.",
  },
  {
    icon: "🏠",
    name: "Real Estate",
    desc: "Diversify with real estate investment trusts.",
  },
  {
    icon: "🏦",
    name: "Retirement Plan",
    desc: "Long-term wealth building with expert guidance.",
  },
];

const TICKERS = [
  {
    img: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
    name: "USDT",
    price: "$1.00",
    change: "0.0%",
  },
  {
    img: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    name: "BTC",
    price: "$67,420",
    change: "+4.2%",
  },
  {
    img: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    name: "ETH",
    price: "$3,510",
    change: "+2.8%",
  },
  {
    img: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
    name: "BNB",
    price: "$598",
    change: "+1.5%",
  },
  {
    img: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    name: "SOL",
    price: "$182",
    change: "+6.1%",
  },
];

const CheckIcon = () => (
  <svg className="InvCheckIcon" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
    <path
      d="M4.5 8l2.5 2.5 4.5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Landing = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setSlide((s) => (s + 1) % SLIDES.length);

  return (
    <div className="LandingPage">
      <LandingHeader />

      <main>
        {/* ══ HERO — full-screen video background ══════════ */}
        <section className="HeroSlider">
          {/* Background video */}
          <video
            className="HeroBgVideo"
            src={CryptVideo}
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Gradient overlay */}
          <div className="HeroOverlay" />

          {/* Slide text layers */}
          {SLIDES.map((sl, i) => (
            <div key={i} className={`HeroSlide ${i === slide ? "active" : ""}`}>
              <div className="HeroSlideInner container">
                <div className="HeroSlideCopy">
                  <span className="HeroEyebrow">{sl.eyebrow}</span>
                  <h1>{sl.headline}</h1>
                  <p>{sl.sub}</p>
                  <div className="HeroActions">
                    <Link className="HeroCTA primary" to="/register">
                      Get Started
                    </Link>
                    <Link className="HeroCTA outline" to="/about">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Prev / Next arrows */}
          <button
            className="HeroArrow left"
            onClick={prev}
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="HeroArrow right"
            onClick={next}
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="HeroDots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`HeroDot ${i === slide ? "active" : ""}`}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Scroll cue */}
          <div className="HeroScrollCue">
            <div className="HeroScrollMouse">
              <div className="HeroScrollWheel" />
            </div>
          </div>
        </section>

        {/* ══ LIVE TICKER ══════════════════════════════════ */}
        <div className="HeroTickerBar">
          <div className="HeroTickerTrack">
            {[...TICKERS, ...TICKERS].map((c, i) => (
              <div className="TickerItem" key={i}>
                <div className="TickerIconWrap">
                  <img src={c.img} alt={c.name} />
                </div>
                <span className="TickerName">{c.name}</span>
                <span className="TickerPrice">{c.price}</span>
                <span
                  className={`TickerChange ${parseFloat(c.change) > 0 ? "up" : parseFloat(c.change) < 0 ? "down" : "flat"}`}
                >
                  {c.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ FEATURES ════════════════════════════════════ */}
        <section className="LandingFeatures" id="trading">
          <div className="container">
            <div className="LandingSectionTitle">
              <p>Why choose us</p>
              <h2>Built to trade confidently in every market.</h2>
            </div>
            <div className="LandingFeatureGrid">
              {[
                {
                  icon: "⚡",
                  title: "Lightning Execution",
                  desc: "Execute trades in milliseconds with our low-latency infrastructure.",
                },
                {
                  icon: "📊",
                  title: "Advanced Analytics",
                  desc: "Track positions and manage risk with real-time actionable insights.",
                },
                {
                  icon: "🛡️",
                  title: "Secure & Regulated",
                  desc: "Bank-grade SSL encryption and full regulatory compliance.",
                },
                {
                  icon: "💰",
                  title: "High ROI Plans",
                  desc: "Investment plans up to 550% ROI with transparent performance tracking.",
                },
                {
                  icon: "🌐",
                  title: "120+ Markets",
                  desc: "Crypto, forex, metals, real estate and more from one platform.",
                },
                {
                  icon: "🤝",
                  title: "Referral Rewards",
                  desc: "Earn passive income by inviting traders to the platform.",
                },
              ].map((f) => (
                <article className="LandingFeatureCard" key={f.title}>
                  <div className="FeatureIcon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MARKETS ═════════════════════════════════════ */}
        <section className="LandingMarkets" id="markets">
          <div className="container">
            <div className="LandingSectionTitle">
              <p>Market access</p>
              <h2>Trade the widest range of asset classes.</h2>
            </div>
            <div className="LandingMarketsGrid">
              {MARKETS.map((m) => (
                <div className="LandingMarketCard" key={m.name}>
                  <div className="MarketIcon">{m.icon}</div>
                  <h3>{m.name}</h3>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ════════════════════════════════ */}
        <section className="HowItWorks container">
          <div className="LandingSectionTitle centered">
            <p>Get started in minutes</p>
            <h2>Three simple steps to start investing.</h2>
          </div>
          <div className="HowGrid">
            {[
              {
                step: "01",
                title: "Create Account",
                desc: "Sign up in under 2 minutes with just your email and a password.",
              },
              {
                step: "02",
                title: "Fund Your Wallet",
                desc: "Deposit using crypto or bank transfer — instant processing.",
              },
              {
                step: "03",
                title: "Start Earning",
                desc: "Choose a plan and watch your investment grow with 550% ROI.",
              },
            ].map((h) => (
              <div className="HowCard" key={h.step}>
                <div className="HowStep">{h.step}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ INVESTMENT PLANS ════════════════════════════ */}
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
            <div className="InvPlanGrid four">
              {PLANS.slice(0, 4).map((plan) => (
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
                        <CheckIcon />
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
            <div className="InvPlanGrid two">
              {PLANS.slice(4).map((plan) => (
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
                        <CheckIcon />
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

        {/* ══ TESTIMONIALS ════════════════════════════════ */}
        <section className="LandingTestimonials container">
          <div className="LandingSectionTitle centered">
            <p>Client stories</p>
            <h2>What traders are saying.</h2>
          </div>
          <div className="LandingTestimonialGrid">
            {[
              {
                quote:
                  "The execution speed and clarity on this platform make it easy to trade without second guessing.",
                name: "Hannah R.",
                role: "Active Forex Trader",
              },
              {
                quote:
                  "I love the market coverage. It feels like a professional broker with a modern user experience.",
                name: "Marcus L.",
                role: "Commodities Investor",
              },
              {
                quote:
                  "The support team is incredible. I went from $5,000 to over $40,000 in just three months.",
                name: "Priya S.",
                role: "Long-term Portfolio Manager",
              },
            ].map((t) => (
              <article className="LandingTestimonialCard" key={t.name}>
                <div className="TestimonialStars">⭐⭐⭐⭐⭐</div>
                <p>"{t.quote}"</p>
                <div className="TestimonialAuthor">
                  <div className="TestimonialAvatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══ TRUSTED BY ══════════════════════════════════ */}
        <section className="LandingSponsors container">
          <p>Trusted &amp; regulated by</p>
          <div className="LandingSponsorGrid">
            {["FINRA", "SEC", "FCA", "CySEC", "ASIC"].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>

        {/* ══ CTA ═════════════════════════════════════════ */}
        <section className="LandingCTA">
          <div className="container">
            <div className="LandingCTAInner">
              <div className="CTABlob" />
              <span className="CTAEyebrow">Start today</span>
              <h2>Ready to grow your wealth?</h2>
              <p>
                Join over 50,000 traders who are already earning with our
                platform.
              </p>
              <div className="CTAActions">
                <Link className="LandingButton primary" to="/register">
                  Create Free Account
                </Link>
                <Link className="LandingButton ghost" to="/contact">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ActivityToast />
    </div>
  );
};

export default Landing;
