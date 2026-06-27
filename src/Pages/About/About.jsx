import { Link } from "react-router-dom";
import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="AboutPage">
      <LandingHeader />
      <section className="AboutHero">
        <div className="container AboutHeroContent">
          <div>
            <span>About Us</span>
            <h1>We empower traders with smarter, faster market access.</h1>
            <p>
              Our platform was designed to make every trade feel simple, secure,
              and effective — whether you are just starting or managing a large
              portfolio.
            </p>
            <Link className="AboutButton" to="/register">
              Create an account
            </Link>
          </div>
        </div>
      </section>

      <section className="AboutValues container">
        <div className="AboutSectionTitle">
          <p>Trusted trading experience</p>
          <h2>Built around transparency, speed, and disciplined execution.</h2>
        </div>
        <div className="AboutValuesGrid">
          <article className="AboutValueCard">
            <h3>Clear conditions</h3>
            <p>
              We keep pricing, margin, and account rules transparent across
              every product.
            </p>
          </article>
          <article className="AboutValueCard">
            <h3>Pro-grade service</h3>
            <p>
              Customer support and technology backed by a responsive trading
              team.
            </p>
          </article>
          <article className="AboutValueCard">
            <h3>High availability</h3>
            <p>
              Access the platform anytime with secure login and fast execution.
            </p>
          </article>
        </div>
      </section>

      <section className="AboutMission container">
        <div className="AboutMissionCard">
          <h2>Our mission</h2>
          <p>
            To make trading more accessible with a platform built on reliability
            and clean workflows for every trader.
          </p>
        </div>
        <div className="AboutMissionCard">
          <h2>Our approach</h2>
          <p>
            We focus on responsive features, straightforward account tools, and
            a trading experience designed to stay ahead of market needs.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
