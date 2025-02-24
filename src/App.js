import "./App.css";
import "./banner.css";
import "./card.css";
import "./footer.css";
import "./home.css";
import "./navbar.css";
import Banner from "./Banner";
import About from "./About";
import Footer from "./Footer";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
