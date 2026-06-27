import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="PageWrapper">
      <LandingHeader />
      <main className="PageContent container">
        <section className="PageHero">
          <span>Contact</span>
          <h1>Reach out for support and account assistance.</h1>
          <p>
            Our team is ready to help with registration, investing questions,
            and account guidance.
          </p>
        </section>

        <section className="PageContactMethods">
          <h2>How to reach us</h2>
          <div className="PageContactGrid">
            <div className="PageContactCard">
              <h3>Email</h3>
              <p>support@assetdevelopment.com</p>
              <p className="PageContactDesc">Response within 2 hours</p>
            </div>
            <div className="PageContactCard">
              <h3>Live Chat</h3>
              <p>Available 24/7 on the platform</p>
              <p className="PageContactDesc">
                Instant assistance from our team
              </p>
            </div>
            <div className="PageContactCard">
              <h3>Phone</h3>
              <p>+1 (800) 123-4567</p>
              <p className="PageContactDesc">
                Business hours: Mon–Fri 8am–8pm ET
              </p>
            </div>
          </div>
        </section>

        <section className="PageCTA">
          <div>
            <h2>Ready to get started?</h2>
            <p>
              Our team is here to answer your questions and help you open an
              account.
            </p>
            <Link className="PageButton primary" to="/register">
              Contact Our Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
