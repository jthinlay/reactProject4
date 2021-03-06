import React from 'react'
import './createProject.style.scss'
import createProject from '../../../redux/project/projectAction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class CreateProject extends React.Component{
    state = {
        title: '',
        content: ''
    }
    handleOnchange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e)
    }
    handleOnsubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    render(){
        //console.log('props:', this.props)
        const {auth} = this.props
        if(!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="create-project-container">
                
                <form onSubmit={this.handleOnsubmit}>

                    <h5>Create New Project</h5>
                    <div className="title">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleOnchange}  />
                    </div>
                    <div className="project-content">
                        <label htmlFor="content" className="content-lable">Project Content</label>
                        <textarea id="content" onChange={this.handleOnchange} ></textarea>
                    </div>
                        
                       <button type="submit" className="btn" > Create Project </button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return{
        createProject: (project) => dispatch(createProject(project))
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
