import { FaGithub, FaLink } from "react-icons/fa";
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
    tagline: "Organise your life",
    ghURL: "https://github.com/joshbolland/react-todo",
  },
  {
    url: "https://minibudget.vercel.app/",
    bgImageUrl:
      "https://res.cloudinary.com/dohcbj8ua/image/upload/v1747342693/account_5874775_ojbkwm.png",
    altDesc:
      "Budgeting logo with a clipboard and a dollar sign on it and a calculator",
    name: "minibudget",
    tagline: "Manage your finances",
    ghURL: "https://github.com/joshbolland/minibudget",
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
      <div className="card-overlay">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="card-left"
        >
          <FaLink style={{ marginRight: "8px" }} />
          Visit Site
        </a>
        <a
          href={project.ghURL}
          target="_blank"
          rel="noreferrer"
          className="card-right"
        >
          <FaGithub style={{ marginRight: "8px" }} />
          Source Code
        </a>
      </div>
      <div className="card-description">
        <h3>{project.name}</h3>
        <p>{project.tagline}</p>
      </div>
      <div className="code">
        <img
          className="projectImage"
          src={project.bgImageUrl}
          alt={project.altDesc}
        />
      </div>
    </div>
  );
}
