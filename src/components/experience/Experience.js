import React from 'react';
import './experience.css';
import SkillItem from './SkillItem';
import { frontend, backend, category } from './SkillData';

const Experience = () => (
  <section id='experience'>
    <h2>My Skills</h2>
    <div className='container experience__container'>
      {category.map((data) => (
        <div>
          <h3>{data}</h3>
          <div className='experience__content'>
          {data === 'Frontend Development' ? 
            <>
              {frontend.map((data) => (
              <SkillItem header={data.header} detail={data.detail} />
            ))}
            </>
            :
            <>
              {backend.map((data) => (
              <SkillItem header={data.header} detail={data.detail} />
            ))}
            </>
          }
        </div>
        </div>
      ))}
    </div>
  </section>
)

export default Experience