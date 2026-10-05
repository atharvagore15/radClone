import { Link } from "react-router-dom";
import "./Welcome.css";
import logo from "../assets/radleycare-logo.png";

export default function Welcome() {
  return (
    <main className="welcome">
      <section className="welcome__content">
        <h2 className="welcome__intro">Welcome to</h2>
        <h1 className="welcome__brand">RadleyCare</h1>

        <p className="welcome__subtitle">
          From Fragmented Care To A Flourishing Health Journey
        </p>
        <p className="welcome__tagline">
          Empowering adults with serious mental illness to live amazing lives
        </p>

        <div className="welcome__actions">
          <Link to="/UserTypeForRadley" className="btn btn--outline">
            Sign up
          </Link>
          <Link to="/login" className="btn btn--solid">
            Log in
          </Link>
        </div>
      </section>

      <img className="welcome__logo" src={logo} alt="RadleyCare" />
    </main>
  );
}