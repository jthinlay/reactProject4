import React from 'react'
import './signedInLinks.style.scss'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {LogOut} from '../../../redux/auth/authAction'
import {Redirect} from 'react-router-dom'


const SignedInLink = (props) => {
    console.log("dispatch props", props)
    const {auth, profile} = props
    if(!auth.uid) return <Redirect to="/signin" />
    return(
        <ul id ='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><button onClick={props.signOut}> Log Out</button></li>
            <li><NavLink to='/' className="btn"> {profile.initials}</NavLink></li>
        </ul>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth, 
        profile: state.firebase.profile
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        signOut: () => dispatch(LogOut())
    }
}
export default connect(mapStateToProps, mapDispatchToState)(SignedInLink)