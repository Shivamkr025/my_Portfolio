import React from 'react'
import './Contact.css'
import linkedin from '../../Assets/linkedin.png'
import email from '../../Assets/email.png'
import whatsapp from '../../Assets/whatsaap.png'
import insta from '../../Assets/insta.png'
import gitlab from '../../Assets/gitlab0.png'



function Contact() {
    return (
        <section className='contact'>
            <div className='contact-text'>
                <h4>🇨‌🇴‌🇳‌🇹‌🇦‌🇨‌🇹‌</h4>
            </div>
            <div className='contact-deatile'>
                <div className='contact-img'>
                    <p> 🤝 Feel free to contact me! 📞 I'm really excited about new opportunities and would love to work on exciting projects or have interesting conversations.🌟 If you want to connect, here's how you can reach me 🙏</p>
                    <div className='contact-email-num'>
                        <span><img src={email} alt='email' /><p>shivam22@navgurukul.org</p></span>
                        <span><img src={whatsapp} alt='email' /><p>+919304352368</p></span>
                        <span><a href='https://www.linkedin.com/in/shivam-kumar-b2827b242/' ><img src={linkedin} alt='linkedIn' /></a><p>Linkedin</p></span>
                        <span><a href='https://gitlab.com/Shivamkr025' ><img src={gitlab} alt='linkedIn' /></a><p>Gitlab</p></span>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
