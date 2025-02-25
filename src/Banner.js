import Me from "./me.jpeg";
import Social from "./Social";

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <img
            src={Me}
            alt="Headshot of Joshua Bolland"
            className="avatar"
          ></img>
          <h1>Josh Bolland</h1>
          <p>
            <span id="developer">Experienced Web Developer</span>
          </p>
          <Social />
          <div className="download"></div>
        </div>
      </div>
    </div>
  );
}
