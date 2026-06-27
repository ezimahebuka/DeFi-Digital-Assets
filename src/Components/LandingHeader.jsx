import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <header className="LandingHeader container">
      <div className="LandingBrand">DeFi Digital Assets</div>
      <nav className="LandingNav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/trading">Investing</Link>
        <div className="LandingNavDropdown">
          <button type="button">Markets</button>
          <div className="LandingDropdownMenu">
            <Link to="/markets">Bitcoin Mining</Link>
            <Link to="/markets">Forex Trade</Link>
            <Link to="/markets">Marijuana</Link>
            <Link to="/markets">Precious Metal</Link>
            <Link to="/markets">Crude Oil</Link>
            <Link to="/markets">Real Estate</Link>
            <Link to="/markets">Retirement Plan</Link>
          </div>
        </div>
        <Link to="/plans">Plans</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/terms">Terms of Use</Link>
      </nav>
      <div className="LandingHeaderActions">
        <Link className="LandingHeaderButton" to="/login">
          Login
        </Link>
        <Link className="LandingHeaderButton primary" to="/register">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default LandingHeader;
