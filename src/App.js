import "./styles/App.css";
import "./components/Banner/banner.css";
import "./styles/card.css";
import "./components/Footer/footer.css";
import "./styles/home.css";
import "./components/Navbar/navbar.css";
import "./styles/responsive.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
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
