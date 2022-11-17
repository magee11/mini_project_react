import React from 'react'
import './ProjectName.scss'

const ProjectName = (props) => {

  const {projectName,logo,status,startDate}=props;
   let StartDate = startDate.slice(4, 11);
  return (
    <div className='project'>
        <div className="project_name">
            <h2 className="project_name_projectname">{projectName}</h2>
            <img className="project_name_logoUrl" src={logo}></img>
            <div className='project_name_status'>
            <span className="project_name_status_spans">{status}</span>
            </div>
        </div>
        <div className='project_duration'>
            <span className="project_duration_spans">Duration: {StartDate}</span>
        </div>
    </div>
  )
}

export default ProjectName;