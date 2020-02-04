import React from 'react'
import './dashboard.style.scss'
import Notifications from '../notifications/notifications'
import ProjectList from '../../projects/projectList/projectList'

class Dashboard extends React.Component{
    render(){
        return(
            <div className="dashboard">
                <div className="row">
                    <div className="col1">
                        <ProjectList />
                    </div>
                    <div className="col2">
                        <Notifications />
                     </div>
                </div>
            </div>
        )
    }
}
export default Dashboard