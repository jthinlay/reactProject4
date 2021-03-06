import React from 'react'
import './dashboard.style.scss'
import Notifications from '../notifications/notifications'
import ProjectList from '../../projects/project_list/projectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends React.Component{
    render(){
        const {projects, auth, notifications} = this.props
        if(!auth.uid) return < Redirect to="/signin" />
        
        return(
            <div className="dashboard">
                <div className="row">
                    <div className="col1">
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className="col2">
                        <Notifications notifications = {notifications}/>
                     </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ( state ) => {
    console.log('tsarong', state)
    return{
        projects: state.firestore.ordered.project,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'project', orderBy: ['createdAt', 'desc']},
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)