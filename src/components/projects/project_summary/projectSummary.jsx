import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <div className="project-card">
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p className="projected-date"> 3rd February, 3pm </p>
            </div>
        </div>
    )
}
export default ProjectSummary;