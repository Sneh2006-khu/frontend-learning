import projects from "../data/projects"
import "../css/Projects.css"

function Projects() {
    return (
        <section id="projects" className="section-grey-bg">
            <h2 className="section-title">Portfolio</h2>
            <div className="two-col-grid">
                {projects.map(item => (
                    <div className="grid-card" key={item.id}>
                        <img src={item.image} alt={item.title} className="card-img-placeholder" />
                        <h3>{item.title}</h3>
                        <p className="project-description">{item.description}</p>
                        <p className="project-tech-stack">TechStack : {item.techStack.join(" • ")}</p>
                        <div className="btn-group-2">
                            <a href={item.github} target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-black">GitHub</button>
                            </a>
                            <a href={item.liveDemo} target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-grey">Live Demo</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;