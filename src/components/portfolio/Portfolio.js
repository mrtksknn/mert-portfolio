import React from 'react';
import './portfolio.css';
import portfolioData from './data';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Portfolio</h2>

      <div className='portfolio__container'>
        {
          portfolioData.map(({id, image, title, github, demo, techs}) => {
            return (
              <article className='portfolio__item' key={id}>
                <div>
                  <div className='portfolio__item-image'>
                    <img src={image} alt={title} height='315px' />
                  </div>
                  <h3>{title}</h3>
                </div>
                <div style={{display: 'flex', marginBottom: '1rem', flexWrap: 'wrap'}}>
                  {techs.map((tech) => (
                    <div className='portfolio__techs' key={tech}>
                      {tech}
                    </div>
                  ))}
                </div>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio