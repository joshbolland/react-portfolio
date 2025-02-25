import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectData = [
  {
    url: "https://jammerapp.herokuapp.com/",
    bgImageUrl:
      "https://res.cloudinary.com/wagon/image/upload/v1542891739/vuab5xxyqd4qzcsqvjdp.jpg",
    name: "Jammer",
    tagline: "Connecting Musicians",
    ghURL: "https://github.com/joshbolland/jammer",
  },
  {
    url: "https://musessions.herokuapp.com",
    bgImageUrl:
      "https://res.cloudinary.com/dohcbj8ua/image/upload/v1544350590/background2.jpg",
    name: "Musessions",
    tagline: "Find and Hire Session Musicians",
    ghURL: "https://github.com/joshbolland/musessions",
  },
  {
    url: "https://the-cocktailor.herokuapp.com/",
    bgImageUrl:
      "https://res.cloudinary.com/dohcbj8ua/image/upload/v1544350753/Webp.net-compress-image_2.jpg",
    name: "The Cocktailor",
    tagline: "Cocktail Recipes at your Fingertips",
    ghURL: "https://github.com/joshbolland/rails-mister-cocktail",
  },
];

export default function Project() {
  return (
    <div className="container" id="projects">
      <div className="portfolio-card">
        <h2>- Projects -</h2>
        <div className="projects-row">
          {projectData.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="col-xs-12 col-sm-4">
      <a href={project.url} target="_blank" rel="noreferrer">
        <div
          className="card project-card"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${project.bgImageUrl})`,
          }}
        >
          <div className="card-description">
            <h3>{project.name}</h3>
            <p>{project.tagline}</p>
          </div>
        </div>
      </a>
      <div className="code">
        <a href={project.ghURL} target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-secondary source-code">
            <FontAwesomeIcon icon={faGithub} />
            &nbsp; Source Code
          </button>
        </a>
      </div>
    </div>
  );
}
