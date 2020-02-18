import React from 'react'
import './projectDetails.style.scss'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    //console.log('project details id props:', props)
    
    const {project, auth} = props
    const id = props.match.params.id;
    if(!auth.uid) return < Redirect to='/signin' /> 
        if(project){
            return(
                <div className="project-detail-container ">
                <div className="project-detail-card">
                    <div className="project-detail-card-content">
                        <span className="project-detail-title" > {project.title} </span>
                            <p>{project.content}</p>
                    </div>
                    <hr />
                    <div className="project-detail-card-action">
                        <div>Posted by {project.authorFirstName}{project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>   
                </div>
            </div>
            )
        } else {
            return(
            <div className="project-detail-title">
                 <h1>Loading project with this id:  {id};  however the content can't found...</h1>
            </div>
            )  
        }        
}
const mapStateToProps = (state, ownProps) => {
   //console.log('state', state);

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    
    return {
        project: project,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'project'}
    ])
)(ProjectDetails)
