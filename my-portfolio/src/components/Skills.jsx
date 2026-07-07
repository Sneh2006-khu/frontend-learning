import skills from "../data/skills";
import "../css/Skills.css";

function Skills() {
    return (
        <section id="skills" className="section-white-bg">
            <h2 className="section-title">Skills</h2>
            <div className="skills-row">
                {skills.map((skill) => (
                    <div className="skill-node" key={skill.id}>
                        <img src={skill.icon} alt={skill.title} className="icon-image"/>
                        <h4>{skill.title}</h4>
                        <p>
                            {skill.stack}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;