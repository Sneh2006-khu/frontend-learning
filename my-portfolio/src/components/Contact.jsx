import contact from "../data/contact";
import '../css/Contact.css'

function Contact() {
    return (
        <section id="contact" className="section-grey-bg">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container">
                <div className="contact-left">
                    <h2>Get In Touch</h2>
                    <p>I'd love to hear from you! Whether you have a project,
                        a question, or just want to connect, feel free to send
                        me a message.</p>
                    {contact.map((item) => (
                        <div className="contact-card" key={item.id}>
                            <span className="contact-icon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <a
                                href={item.link}
                                target={item.title === "Location" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                            >
                                {item.value}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="contact-right">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>
                        <button className="btn btn-black" type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;