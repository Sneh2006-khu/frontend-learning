import '../css/AboutMe.css'
import aboutImage from '../assets/aboutme.png'

function AboutMe() {
    return (
        <section id="about" className="section-white-bg">
            <div className="about-container">
                <div className="about-left">
                    <img src={aboutImage} alt="About Sneh Kakadiya" className="about-left-box" />
                </div>
                <div className="about-right">
                    <h2>About Me</h2>
                    <p>
                        I'm a passionate Front-End Developer and aspiring web designer who enjoys creating responsive, user-friendly, and visually appealing websites. I focus on writing clean, maintainable code and continuously improving my skills by learning modern web technologies and building real-world projects.
                    </p>
                    <ul className="checklist">
                        <li><span className="icon">☑</span> Skilled in HTML, CSS, JavaScript, and React.js</li>
                        <li><span className="icon">☑</span> Build responsive and mobile-friendly websites</li>
                        <li><span className="icon">☑</span> Strong understanding of UI development and modern web design</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;