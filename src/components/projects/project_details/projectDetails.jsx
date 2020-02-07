import React from 'react'
import './projectDetails.style.scss'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

const ProjectDetails = (props) => {
    console.log(props)
    const id = props.match.params.id;
    return(
        <div className="project-detail-container ">
            <div className="project-detail-card">
                <div className="project-detail-card-content">
                    <span className="project-detail-title" > Project Detail Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in iaculis dui. In eu leo mattis, gravida augue eget, dignissim velit. Nunc volutpat enim vitae lorem laoreet tempus. Donec ullamcorper eleifend nunc sit amet scelerisque. Sed volutpat nunc at ipsum vestibulum, vel lacinia urna bibendum. Nullam et dui sit amet nulla lacinia vulputate. Pellentesque eget ante ut sapien congue semper eget sed lectus. Phasellus imperdiet accumsan mi commodo vehicula. Pellentesque lobortis pharetra ex, sed convallis felis vehicula eu. Nulla maximus nisl nibh, a ullamcorper ipsum consectetur id. Aenean malesuada dolor non ligula ultrices eleifend. Mauris sodales, mi et molestie molestie, lorem lorem cursus leo, eu porta purus nunc a metus. Nunc luctus ex sit amet cursus mattis. Aliquam nec pretium mi. </p>
                </div>
                <hr />
                <div className="project-detail-card-action">
                    <div>Posted by the Dolma group</div>
                    <div>2nd September, 4pm</div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
   // const id = ownProps.props.match.params.id;
    return {

    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'project'}
    ])
)(ProjectDetails)
