import React from 'react'
import './navbar.style.scss'
import {Link} from 'react-router-dom'
import SignedInLink from '../signInLink/signedInLinks'
import SignedOutLink from '../signOutLink/signedOutLinks'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const {auth} = props
    //console.log('author:', auth)
    const links = auth.uid ? <SignedInLink /> : <SignedOutLink /> 
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className='logo'>DolmaPlan</Link>
                 {links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        auth: state.firebase.auth,
        
    }
}
export default connect(mapStateToProps)(Navbar)