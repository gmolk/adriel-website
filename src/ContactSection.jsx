import Header from "./Header";
import copyIcon from './img/copy-icon.png';

export default function ContactSection() {
    const email = 'molkadriel@gmail.com';
    
    return (
        <div className="section">
            <Header content={'Get In Touch'} size={40}/>
            <a href={`mailto:${email}`}>molkadriel@gmail.com</a>
            {/*<a href="mailto:molkadriel@gmail.com?subject=Subject%20of%20the%20email&body=Hello%20there!">molkadriel@gmail.com</a>*/}
            <img src={copyIcon} alt='copy' className='icon' onClick={() => {
                navigator.clipboard.writeText(email);
            }}/>
        </div>
    );
};
