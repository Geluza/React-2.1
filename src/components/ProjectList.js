import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css'

export default function ProjectList({projects}) {
  return (
   <div className="projects">
   {projects.map(project => {
    return (
      <div> 
        <img src={project.img} alt={project.category} className="project"/> 
      </div>
    )
  })}


   </div>
  );
}


ProjectList.propTypes = {
  projects: PropTypes.array,
}