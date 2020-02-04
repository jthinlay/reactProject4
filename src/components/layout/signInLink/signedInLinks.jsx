import React from 'react'
import './signedInLinks.style.scss'
import {NavLink} from 'react-router-dom'


const SignedInLink = () => {
    return(
        <ul id ='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/logout'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn"> NN</NavLink></li>
        </ul>
    )
}
export default SignedInLink