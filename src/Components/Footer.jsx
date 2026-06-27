import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        <div className="FooterContent">
          <div className="FooterColumn">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/trading">Investing</Link>
              </li>
              <li>
                <Link to="/markets">Markets</Link>
              </li>
            </ul>
          </div>

          <div className="FooterColumn">
            <h4>Products</h4>
            <ul>
              <li>
                <Link to="/plans">Investment Plans</Link>
              </li>
              <li>
                <Link to="/trading">Trading Platform</Link>
              </li>
              <li>
                <a href="#features">Advanced Tools</a>
              </li>
              <li>
                <a href="#mobile">Mobile App</a>
              </li>
            </ul>
          </div>

          <div className="FooterColumn">
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <a href="#help">Help Center</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#status">Status Page</a>
              </li>
            </ul>
          </div>

          <div className="FooterColumn">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#cookies">Cookie Policy</a>
              </li>
              <li>
                <a href="#risk">Risk Disclosure</a>
              </li>
            </ul>
          </div>

          <div className="FooterColumn">
            <h4>Follow Us</h4>
            <div className="SocialLinks">
              <a
                href="#twitter"
                className="SocialLink TwitterIcon"
                title="Twitter"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 10.63.55 13-4.5a4.49 4.49 0 00.355-.854" />
                </svg>
              </a>
              <a
                href="#facebook"
                className="SocialLink FacebookIcon"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#linkedin"
                className="SocialLink LinkedInIcon"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#instagram"
                className="SocialLink InstagramIcon"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path
                    d="M16 2h-8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="FooterBottom">
          <p>&copy; {currentYear} DeFi Digital Assets. All rights reserved.</p>
          <p className="FooterDisclaimer">
            Risk Disclosure: Investing involves risk. Past performance does not
            guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
