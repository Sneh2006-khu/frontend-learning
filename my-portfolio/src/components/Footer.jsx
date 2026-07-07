import FooterDetails from '../data/footer'
import '../css/Footer.css'


function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <h3>SNEH KAKADIYA</h3>
                    <span>Frontend React Developer</span>
                    <p className="footer-copyright">© 2026 Sneh Kakadiya. All Rights Reserved.</p>
                </div>
                <div className="footer-contacts">
                    {FooterDetails.map((item) => (
                        <div key={item.id}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.image} alt={item.title} />
                            </a>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;