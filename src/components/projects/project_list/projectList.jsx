import React from 'react'
import './projectList.style.scss'
import ProjectSummary from '../project_summary/projectSummary';
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) => {
    return(
        <div className="project-list">
            {projects && projects.map(project=>{
                return(
                    <Link to={'/project/' + project.id } key={project.id}>
                         <ProjectSummary project={project} />
                     </Link>
                )
            })}
        </div>
    )
}
export default ProjectList