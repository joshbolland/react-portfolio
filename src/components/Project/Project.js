import NowPlaying from "../NowPlaying/NowPlaying";

const projectData = [
  {
    url: "https://joshbolland.netlify.app/",
    bgImageUrl:
      "https://res.cloudinary.com/dohcbj8ua/image/upload/v1741774717/me_dtq5tt.jpg",
    altDesc: "Headshot of Josh Bolland",
    name: "Portfolio",
    tagline: "This portfolio site!",
    ghURL: "https://github.com/joshbolland/react-portfolio",
  },
  {
    url: "https://taildo.netlify.app/",
    bgImageUrl:
      "https://res.cloudinary.com/dohcbj8ua/image/upload/v1747137132/tick_krugid.png",
    altDesc: "Purple tick logo",
    name: "TailDo",
    tagline: "Manage your to-dos",
    ghURL: "https://github.com/joshbolland/react-todo",
  },
  {
    url: "https://jammerapp.herokuapp.com/",
    bgImageUrl:
      "https://res.cloudinary.com/wagon/image/upload/v1542891739/vuab5xxyqd4qzcsqvjdp.jpg",
    altDesc:
      "Microphone in a microphone stand with a purple reddish hue overlay",
    name: "Jammer",
    tagline: "Connecting Musicians",
    ghURL: "https://github.com/joshbolland/jammer",
  },
];

export default function Project() {
  return (
    <div className="container" id="projects">
      <h2>Made by Me</h2>
      <p>A collection of projects I've worked on over the years.</p>
      <div className="projects-row">
        {projectData.map((project) => (
          <a
            href={project.ghURL}
            target="_blank"
            rel="noreferrer"
            className="col-sm project-container"
            key={project.name}
          >
            <ProjectCard project={project} />
          </a>
        ))}
      </div>
      <NowPlaying />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <div className="card-description">
        <h3>{project.name}</h3>
        <p>{project.tagline}</p>
      </div>
      <div className="code">
        <img
          className="projectImage"
          src={project.bgImageUrl}
          alt={project.altDesc}
        ></img>
        {/* <a href={project.ghURL} target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-secondary source-code">
          <FontAwesomeIcon icon={faGithub} />
          </button>
          </a> */}
      </div>
    </div>
  );
}
