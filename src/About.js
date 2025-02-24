import AboutImg from "./about.jpg";

export default function About() {
  return (
    <div
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
          </div>
        </div>
      </div>
    </div>
  );
}
