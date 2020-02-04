import React from 'react'
import './projectList.style.scss'
import ProjectSummary from '../project_summary/projectSummary';

const ProjectList = () => {
    return(
        <div className="project-list">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            
        </div>
    )
}
export default ProjectList