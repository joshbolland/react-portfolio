import BannerImg from "./banner.jpg";
import Me from "./me.jpeg";
import Social from "./Social";

export default function Banner() {
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(-225deg, rgba(209, 164, 234, 0.6) 0%, rgba(164, 135, 211, 0.6) 50%), url(${BannerImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <img
            src={Me}
            alt="Headshot of me, Joshua Bollad"
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
