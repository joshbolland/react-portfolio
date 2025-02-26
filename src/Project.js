const projectData = [
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
  {
    url: "https://musessions.herokuapp.com",
    bgImageUrl:
      "https://res.cloudinary.com/dohcbj8ua/image/upload/v1544350590/background2.jpg",
    altDesc: "Drummer plays wet drumkit outside of a garage",
    name: "Musessions",
    tagline: "Find and Hire Session Musicians",
    ghURL: "https://github.com/joshbolland/musessions",
  },
  {
    url: "https://the-cocktailor.herokuapp.com/",
    bgImageUrl:
      "https://res.cloudinary.com/dohcbj8ua/image/upload/v1544350753/Webp.net-compress-image_2.jpg",
    altDesc: "Several cocktails on a cocktail recipe website",
    name: "The Cocktailor",
    tagline: "Cocktail Recipes at your Fingertips",
    ghURL: "https://github.com/joshbolland/rails-mister-cocktail",
  },
];

export default function Project() {
  return (
    <div className="container" id="projects">
      <h2>Some things I've made</h2>
      <p>A collection of projects I've worked on over the years.</p>
      <div className="projects-row">
        {projectData.map((project) => (
          <a
            href={project.ghURL}
            target="_blank"
            rel="noreferrer"
            className="col-sm project-container"
          >
            <ProjectCard project={project} key={project.name} />
          </a>
        ))}
      </div>
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
