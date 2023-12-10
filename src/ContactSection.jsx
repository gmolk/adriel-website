import copyIcon from './img/copy-icon.png';
import nextDoorLogo from './img/nextdoor-icon.png'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactSection() {
    const email = 'molkadriel@gmail.com';
    
    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(r => {
          showToast();  
        });
    }
    
    const showToast = () => {
        toast.success('Copied!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined
        });
    };
    
    return (
        <div className='contact-section'>
            <p style={{ fontSize: 30, margin: 0 }}>Get In Touch</p>
            <a href='https://nextdoor.com/pages/molk-services-corvallis-or/' target='_blank'>
                <div className='nextdoor'>
                    <p>Next Door profile</p>
                    <img src={nextDoorLogo} alt='Next Door logo'></img>
                </div>
            </a>
            <div className='email'>
                <a href={`mailto:${email}?subject=Molk%20Services`} target='_blank'>molkadriel@gmail.com</a>
                <img src={copyIcon} alt='copy' className='icon' onClick={copyEmail}/>
                <ToastContainer />
            </div>
        </div>
    );
};
