import React from 'react'
import './dashboard.style.scss'
import Notifications from '../notifications/notifications'
import ProjectList from '../../projects/project_list/projectList'
import {connect} from 'react-redux'

class Dashboard extends React.Component{
    render(){
        const {projects} = this.props
        return(
            <div className="dashboard">
                <div className="row">
                    <div className="col1">
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className="col2">
                        <Notifications />
                     </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ( state ) => {
    return{
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard)