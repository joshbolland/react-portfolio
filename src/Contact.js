import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const showAlert = () => {
    setShowModal(true);
    window.setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8j1a1yv", "contact_form", form.current, {
        publicKey: "NdRRf977eNMTo60Qb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          showAlert();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container" id="contact">
      <div id="contact-text">
        <h1>Let's talk!</h1>
        <div>
          <p>
            I'm on the lookout for exciting projects to work on across a range
            of sectors.
          </p>
          <p>
            If you have an opportunity you think I might be interested in, I'd
            love to talk!
          </p>
        </div>
      </div>
      <div id="contact-options">
        <div className="row">
          <div className="col-sm contact-grid">
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
          <div className="col-sm contact-grid">
            <a
              href="https://linkedin.com/in/joshuabolland"
              target="_blank"
              id="linkedin-button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <p>linkedin.com/in/joshuabolland </p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm contact-grid">
            <a
              href="tel:+447960992645"
              target="_blank"
              id="phone-button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} />
              <p> +447960992645 </p>
            </a>
          </div>
          <div className="col-sm contact-grid">
            <a
              href="https://github.com/joshbolland"
              target="_blank"
              rel="noreferrer"
              id="github-button"
            >
              <FontAwesomeIcon icon={faGithub} />
              <p>github.com/joshbolland</p>
            </a>
          </div>
        </div>
      </div>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-form-row">
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" id="name" />
        </div>
        <div className="contact-form-row">
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" />
        </div>
        <div className="contact-form-row">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
        </div>
        <div id="contact-form-submit-row">
          <input
            className="btn btn-light btn-contact"
            id="contact-form-submit"
            type="submit"
            value="Send"
          />
        </div>
      </form>
      <div
        className={`alert alert-success contact-submit-success ${
          showModal ? "alert-shown" : "alert-hidden"
        }`}
        role="alert"
      >
        <p className="mb-0">
          Message sent succesfully. I'll get back to you shortly!
        </p>
      </div>
    </div>
  );
}
