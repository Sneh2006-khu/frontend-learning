import portfolio from '../assets/portfolio.png';
import student from '../assets/studnet_management_system.png';
import weather from '../assets/weather_app.png';
import todo from '../assets/to-do_app.png';
import ecommerce from '../assets/e_commerce.png';

const projects = [
    {
        id: 1,
        image: portfolio,
        title: "Personal Portfolio",
        description:"A modern portfolio website showcasing my skills, projects, and contact information with responsive design and smooth user experience.",
        techStack: ["React", "CSS", "JavaScript", "Vite"],
        github: "#",
        liveDemo: "#"
    },
    {
        id: 2,
        image: student, // Replace with your image path
        title: "Student Management System",
        description:"A React-based application for managing student records with dynamic routing, reusable components, and an intuitive user interface.",
        techStack: ["React", "JavaScript", "CSS", "React Router"],
        github: "#",
        liveDemo: "#"
    },
    {
        id: 3,
        image: weather,
        title: "Weather App",
        description:"A responsive weather application that fetches real-time weather information using a public API with a clean and modern interface.",
        techStack: ["HTML", "JavaScript", "CSS", "Weather API"],
        github: "#",
        liveDemo: "#"
    },
    {
        id: 4,
        image: todo,
        title: "To-Do List App",
        description:"A task management application with add, edit, delete, and filter functionality to help users organize their daily activities.",
        techStack: ["React", "JavaScript", "CSS", "Local Storage"],
        github: "#",
        liveDemo: "#"
    },
    {
        id: 5,
        image: ecommerce,
        title: "E-Commerce Landing Page",
        description:"A responsive e-commerce landing page featuring modern UI, product sections, testimonials, and mobile-friendly design.",
        techStack: ["HTML", "CSS", "JavaScript"],
        github: "#",
        liveDemo: "#"
    }
];

export default projects;