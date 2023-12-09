import Header from "./Header";
import copyIcon from './img/copy-icon.png';
import nextDoorLogo from './img/nextdoor-icon.png'

export default function ContactSection() {
    const email = 'molkadriel@gmail.com';
    
    return (
        <div className='contact-section'>
            <Header content={'Get In Touch'} style={{ fontSize: 30, margin: 0 }}/>
            <a href='https://nextdoor.com/pages/molk-services-corvallis-or/' target='_blank'>
                <div className='nextdoor'>
                    <p>Next Door profile</p>
                    <img src={nextDoorLogo} alt='Next Door logo'></img>
                </div>
            </a>
            <div className='email'>
                <a href={`mailto:${email}`}>molkadriel@gmail.com</a>
                {/*<a href="mailto:molkadriel@gmail.com?subject=Subject%20of%20the%20email&body=Hello%20there!">molkadriel@gmail.com</a>*/}
                <img src={copyIcon} alt='copy' className='icon' onClick={() => {
                    navigator.clipboard.writeText(email);
                }}/>
            </div>
        </div>
    );
};
