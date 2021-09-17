import React from 'react'
import './Timeline.css';
import timelineElements from "./TimelineElements";
import { ReactComponent as SchoolIcon } from "./school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimelineItems() {
  
  let schoolIconStyles = { background: "#f59794" };
    return (
        <div className="TimelineDiv__bg">
      <VerticalTimeline  >
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={schoolIconStyles}
              icon={<SchoolIcon />}
              
              
            >
              <h3 className="vertical-timeline-element-title h3-timeline">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle h5-timeline">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    
    )
}

export default TimelineItems;
