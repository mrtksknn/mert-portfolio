import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import './experience.css';

const SkillItem = ({header, detail}) => {
  return (
    <article className='experience__details'>
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{header}</h4>
        <small className='text-light'>{detail}</small>
      </div>
    </article>
  )
}

export default SkillItem