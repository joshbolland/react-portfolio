import { Link } from "react-router-dom";
import Me from "../../assets/me.jpeg";

export default function Navbar() {
  return (
    <div className="navbar-wagon">
      <div className="navbar-wagon-right hidden-xs hidden-sm">
        <Link to="/" className="navbar-wagon-item navbar-wagon-link">
          About
        </Link>
        <Link to="/projects" className="navbar-wagon-item navbar-wagon-link">
          Projects
        </Link>
        <Link to="/contact" className="navbar-wagon-item navbar-wagon-link">
          Contact
        </Link>
      </div>
      <Link to="/">
        <img
          src={Me}
          alt="Headshot of me, Joshua Bollad"
          className="avatar"
        ></img>
      </Link>
    </div>
  );
}
