import React from 'react';
import './timeline.css';
import timelineElements from './TimelineElements';
import {HiDesktopComputer} from 'react-icons/hi';
import {MdSchool} from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules';
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {

  let workIconStyles = {background: "#06D6A0"}
  let shoolIconStyles = {background: "#F9C74F"}

  return (
    <section>
      <h2 style={{textAlign: 'center'}}>My Timeline</h2>

      <VerticalTimeline>
        {
          timelineElements.map(element => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                style={{color: '#000'}}
                key={element.id} 
                date={element.date}
                iconStyle={isWorkIcon ? workIconStyles : shoolIconStyles}
                icon={isWorkIcon ? <HiDesktopComputer /> : <MdSchool />}
              >
                <h2 style={{fontWeight: '600', color: '#6c2c2c'}}>{element.title}</h2>
                <h5 style={{fontWeight: '600'}}>{element.location}</h5>
                <p>
                  {element.description}
                </p>
                <h6 style={{color: '#000', marginTop: '15px'}}>{element.date}</h6>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </section>
  )
}

export default Timeline