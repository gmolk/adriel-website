import Header from "./Header";
import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection"

import mainPhoto from "./img/main.jpg"
import Image from "./Image";

function App() {
  return (
    <div className='content'>
      <Header content={'Adriel Molk'} style={{ fontSize: 80 }}/> 
      <Header content={'How can I help meet your needs?'} style={{ fontSize: 30 }}/>
      <Image src={mainPhoto} imgStyle={{ width: '400px' }}/>
      <ServicesSection />
      <ContactSection />
        <div className='spacer'></div>
    </div>
  );
}

export default App;
