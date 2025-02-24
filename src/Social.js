import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBluesky } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  return (
    <div id="social-media">
      <ul className="list-inline">
        <li>
          <a
            href="https://github.com/joshbolland"
            target="_blank"
            rel="noreferrer"
            id="github-button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/joshuabolland"
            target="_blank"
            rel="noreferrer"
            id="linkedin-button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="mailto:jjm.bolland@gmail.com/"
            target="_blank"
            rel="noreferrer"
            id="mail-button"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a
            href="https://bsky.app/profile/joshbolland.bsky.social"
            target="_blank"
            rel="noreferrer"
            id="bsky-button"
          >
            <FontAwesomeIcon icon={faBluesky} />
          </a>
        </li>
      </ul>
      <p>
        See more about me
        <FontAwesomeIcon
          icon={faArrowRightLong}
          onClick={() => scrollToElement("about")}
        />
      </p>
      <div className="links">
        <ul className="list-inline">
          <li>
            <span onClick={() => scrollToElement("projects")}>My Projects</span>
          </li>
          <li>
            <span onClick={() => scrollToElement("contact")}>Get In Touch</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
