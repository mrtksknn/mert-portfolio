import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import {MdOutlineEmail} from 'react-icons/md';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hx67wif', 'template_z25ooxq', form.current, 'HPGdH6pTAslP_R5k0')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2>Get In Touch With Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mertkeskinmtk6@gmail.com</h5>
            <a href="mailto:mertkeskinmtk6@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required >

          </textarea>
          <button type='submit' className='btn btn-primary' >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;