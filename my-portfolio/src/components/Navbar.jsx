import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" className="nav-logo">SNEH KAKADIYA</a>
            <div className="nav-links">
                <a href="#home" className="nav-item">Home</a>
                <a href="#about" className="nav-item">About Me</a>
                <a href="#projects" className="nav-item">Projects</a>
                <a href="#skills" className="nav-item">Skills</a>
                <a href="#contact" className="nav-item">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;