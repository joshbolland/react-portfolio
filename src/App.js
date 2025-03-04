import "./App.css";
import "./banner.css";
import "./card.css";
import "./footer.css";
import "./home.css";
import "./navbar.css";
import "./responsive.css";
import Navbar from "./Navbar";
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
