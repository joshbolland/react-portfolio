import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactImg from "./contact.jpg";

export default function Contact() {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(90deg, hsla(277, 79%, 84%, .6) 0%, hsla(204, 95%, 77%, .6) 100%), url(${ContactImg})`,
      }}
    >
      <div class="container" id="contact">
        <div className="portfolio-card">
          <h1>- Contact Me -</h1>
          <div>
            <p>
              I am currently on the lookout for exciting projects to work on
              across a range of sectors. If you have an opportunity you think I
              might be interested in, I'd love to talk!
            </p>
            <div className="row">
              <div className="col-sm">
                <a
                  href="mailto:jjm.bolland@gmail.com/"
                  target="_blank"
                  id="mail-button"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>jjm.bolland@gmail.com</p>
                </a>
              </div>
              <div className="col-sm">
                <a
                  href="https://linkedin.com/in/joshuabolland"
                  target="_blank"
                  id="linkedin-button"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <p>https://linkedin.com/in/joshuabolland </p>
                </a>
              </div>
              <div className="col-sm">
                <a href="tel:+447960992645" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faPhone} />
                  <p> +447960992645 </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
