import serviceData from './data/Services.js'

export default function ServicesSection() {
    
    return (
        <>
            <div className="section">
                <h2>Services</h2>
                <div className="services">
                    {serviceData.services.map((service, index) => (
                        <div className="service" key={index}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <img src={service.image.src}></img>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
