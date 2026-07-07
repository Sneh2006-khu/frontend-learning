import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return(
    <div className="app-container">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;