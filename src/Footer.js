import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBluesky } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/joshbolland"
          target="_blank"
          rel="noreferrer"
          id="github-button"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/joshuabolland"
          target="_blank"
          rel="noreferrer"
          id="linkedin-button"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:jjm.bolland@gmail.com/"
          target="_blank"
          rel="noreferrer"
          id="mail-button"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://bsky.app/profile/joshbolland.bsky.social"
          target="_blank"
          rel="noreferrer"
          id="bsky-button"
        >
          <FontAwesomeIcon icon={faBluesky} />
        </a>
        <a href="tel:+447960992645">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
      <div className="footer-copyright">
        Josh Bolland <FontAwesomeIcon icon={faCopyright} />{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
}
