import React from 'react';
import './footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>MERT</a>

      <ul className='bottom__links'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/keskin-mert/"><BsLinkedin /></a>
        <a href="https://github.com/mrtksknn"><BsGithub /></a>
      </div>
    </footer>
  )
}

export default Footer