import { Link } from "react-router-dom";
import "./Other.css";

const Other = () => {
  return (
    <div className="OtherPage container">
      <section className="OtherContent">
        <div>
          <span>Additional page</span>
          <h1>Explore more investment tools and insights.</h1>
          <p>
            This page is designed as a flexible content area for broker-style
            offers, resources, or special announcements.
          </p>
          <Link className="OtherButton" to="/register">
            Start your account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Other;
