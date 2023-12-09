import serviceData from './data/Services.js'

export default function ServicesSection() {
    
    return (
        <>
            <div> 
                <h2 className='services-header'>Services</h2>
                <div className='services'>
                    {serviceData.services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <h3>{service.title}</h3>
                            <div className='service-content'>
                                <p className='service-description'>{service.description}</p>
                                <img src={service.image.src} alt={`${service.title} thumbnail`}
                                     className='service-thumbnail'></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
