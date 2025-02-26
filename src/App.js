import "./App.css";
import "./banner.css";
import "./card.css";
import "./footer.css";
import "./home.css";
import "./navbar.css";
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";
import Contact from "./Contact";
import Me from "./me.jpeg";
import { Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
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
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
