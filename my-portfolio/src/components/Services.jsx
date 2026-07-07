import '../css/Services.css';
import services from '../data/services';


function Services() {
    return (
        <section className="section-grey-bg">
            <h2 className="section-title">What I Do</h2>
            <div className="three-col-grid">
                {services.map((service) => (
                    <div className="grid-card" key={service.id}>
                        <img src={service.img} alt={service.title} className="card-img-placeholder"/>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;