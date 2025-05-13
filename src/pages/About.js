import Me from "../assets/me.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container" id="about">
      <img src={Me} alt="Headshot of Joshua Bolland" id="headshot"></img>

      <div id="about-text">
        <h2>
          Hey! I'm Josh, a London-based Front End Developer on the lookout for
          exciting projects and great teams to dive head-first into.
        </h2>

        <div>
          <p>
            I'm a web developer with nearly six years of experience in the
            fintech space, passionate about working on innovative projects.
          </p>
          <p>
            I love collaborating with with a wide-range of people, creating
            design-first, accessible and scalable web applications.
          </p>
          <p>
            I'm always excited to take on new challenges, work with like-minded
            professionals, and grow in a dynamic, fast-paced environment.
          </p>
          <p>Got an opportunity you're excited about? Let me know!</p>
          <Link to="/contact">
            <button className="btn btn-primary btn-contact">
              Get in touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// function scrollToElement(id) {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// }
