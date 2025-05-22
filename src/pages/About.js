import Me from "../assets/me.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container" id="about">
      <img src={Me} alt="Headshot of Joshua Bolland" id="headshot"></img>

      <div id="about-text">
        <h2>
          Hey, I'm Josh. I'm a front-end developer based in London, always up for joining a great team and getting stuck into exciting projects.
        </h2>

        <div>
          <p>
            I've spent almost six years building web apps in the fintech world, focusing on clean design, accessibility, and solid performance.
          </p>
          <p>
            I really enjoy working with others, whether that's designers, engineers, or stakeholders, to bring ideas to life and create user-friendly experiences.
          </p>
          <p>
            I’m always up for a challenge and enjoy learning new things, especially in fast-paced, collaborative environments.
          </p>
          <p>
            If you’ve got something interesting coming up, I’d love to hear about it.
          </p>
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
