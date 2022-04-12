/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './about.css';
import ME from '../../assets/meAbout.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img alt="About-Image" src={ME} />
          </div>
        </div>

        <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>

        <p>
          My name is Mert Keskin I'm a Front End Developer based in Ankara ☀️. 
          I describe myself as a passionate developer who loves coding, open source,
          and the web platform. Aside from my job, I like to create and contribute
          to open source projects, and try my own projects. That helps me to learn a ton of new stuff, grow as
          a developer and support other open source projects. Also I enjoy reading technical
          things and new updates. In my free time you can find me at the gym 🏋️‍♂️, playing video games 
          and watching popular series.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About