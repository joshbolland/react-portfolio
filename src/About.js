import AboutImg from "./about.jpg";
import Project from "./Project";

export default function About() {
  return (
    <div
      id="about-container"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(90deg, hsla(11, 82%, 87%, .6) 0%, hsla(299, 85%, 90%,.6) 100%), url(${AboutImg})`,
      }}
    >
      <div className="container" id="about">
        <div className="portfolio-card">
          <h2>- About Me -</h2>

          <div>
            <p>
              I'm a web developer with nearly six years of experience,
              passionate about working on innovative projects.
            </p>
            <p>
              I love collaborating with with a wide-range of people, creating
              design-first, accessible and scalable web applications.
            </p>
            <p>
              I'm always excited to take on new challenges, work with
              like-minded professionals, and grow in a dynamic, fast-paced
              environment. Let’s build something great together!
            </p>
            <button
              className="btn btn-primary btn-contact"
              onClick={() => scrollToElement("contact")}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <Project />
    </div>
  );
}

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
