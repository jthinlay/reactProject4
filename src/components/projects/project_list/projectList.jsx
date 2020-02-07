import React from 'react'
import './projectList.style.scss'
import ProjectSummary from '../project_summary/projectSummary';
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) => {
    return(
        <div className="project-list">
            {projects && projects.map(project=>{
                return(
                    <Link to={'/project/' + project.id }>
                         <ProjectSummary project={project} key={project.id} />
                     </Link>
                )
            })}
           
        </div>
    )
}
export default ProjectList