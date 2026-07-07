import '../css/Hero.css';
import HeroImage from '../assets/profile.jpeg';

function Hero() {
    return (
        <section id="home" className="section-white-bg">
            <div className="hero-container">
                <div className="hero-left">
                    <h2>Hi There!</h2>
                    <h1>I'm <span>Sneh Kakadiya</span></h1>
                    <div className="badge">Front - end Web Developer</div>
                    <p className="hero-description">
                        I am a Front-End Developer passionate about creating responsive, user-friendly, and visually appealing websites. I enjoy building modern web applications using HTML, CSS, JavaScript, and React.js while continuously improving my skills and learning new technologies.
                    </p>
                    <div className="btn-group">
                        <a href="#contact" className="btn btn-black">Contact Me</a>
                        <a href="#projects" className="btn btn-grey">View Projects</a>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={HeroImage} alt="Sneh Kakadiya" className="image-box-placeholder"/>
                </div>
            </div>
        </section>
    )
}

export default Hero;