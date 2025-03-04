import { Link, useLocation } from "react-router-dom";
import Me from "./me.jpeg";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar-wagon">
      <div className="navbar-wagon-right hidden-xs hidden-sm">
        <Link
          to="/"
          key={location.pathname}
          className="navbar-wagon-item navbar-wagon-link"
        >
          About
        </Link>
        <Link
          to="/projects"
          key={location.pathname}
          className="navbar-wagon-item navbar-wagon-link"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          key={location.pathname}
          className="navbar-wagon-item navbar-wagon-link"
        >
          Contact
        </Link>
      </div>
      <Link to="/" key={location.pathname}>
        <img
          src={Me}
          alt="Headshot of me, Joshua Bollad"
          className="avatar"
        ></img>
      </Link>
    </div>
  );
}
