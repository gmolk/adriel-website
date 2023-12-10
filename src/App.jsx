import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection"
import portrait from "./img/main.jpg"

function App() {
  return (
    <>
        <p style={{ fontSize: 80 }}>Adriel Molk</p>
        <p style={{ fontSize: 30 }}>How can I help meet your needs?</p>
        <img src={portrait} alt='Adriel Molk – Portrait' style={{ maxWidth: '300px'}}/>
        <p className='serving-text'>Serving Corvallis, Albany, Philomath & surrounding areas</p>
        <ServicesSection />
        <ContactSection />
        <div className='spacer'></div>
    </>
  );
}

export default App;
