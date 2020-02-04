import React from 'react'
import './projectList.style.scss'
import ProjectSummary from '../project_summary/projectSummary';

const ProjectList = ({projects}) => {
    return(
        <div className="project-list">
            {projects && projects.map(project=>{
                return(
                     <ProjectSummary project={project} key={project.id} />
                )
            })}
           
        </div>
    )
}
export default ProjectList