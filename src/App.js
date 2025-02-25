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
import { useState } from "react";
import Me from "./me.jpeg";

export default function App() {
  const [isOpenAbout, setIsOpenAbout] = useState(true);
  const [isOpenProject, setIsOpenProject] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

  const showAbout = () => {
    setIsOpenAbout(true);
    setIsOpenProject(false);
    setIsOpenContact(false);
  };

  const showProject = () => {
    setIsOpenAbout(false);
    setIsOpenProject(true);
    setIsOpenContact(false);
  };

  const showContact = () => {
    setIsOpenAbout(false);
    setIsOpenProject(false);
    setIsOpenContact(true);
  };

  return (
    <div className="App">
      <div className="navbar-wagon">
        <div className="navbar-wagon-right hidden-xs hidden-sm">
          <a
            href="#about"
            onClick={showAbout}
            className="navbar-wagon-item navbar-wagon-link"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={showProject}
            className="navbar-wagon-item navbar-wagon-link"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={showContact}
            className="navbar-wagon-item navbar-wagon-link"
          >
            Contact
          </a>
        </div>
        <div>
          <img
            onClick={showAbout}
            src={Me}
            alt="Headshot of me, Joshua Bollad"
            className="avatar"
          ></img>
        </div>
      </div>
      {isOpenAbout && <About showContact={showContact} />}
      {isOpenProject && <Project />}
      {isOpenContact && <Contact />}
      <Footer />
    </div>
  );
}
