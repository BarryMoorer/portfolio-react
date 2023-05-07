import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5to7scs', 'template_iozn8lk', form.current, '7qCBY3fAwIpINDcH2')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>moorerbarry2@gmail.com</h5>
          <a href='mailto:moorerbarry2@gmail.com'>Send a message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea rows="7" name='message' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact