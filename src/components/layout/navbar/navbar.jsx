import React from 'react'
import './navbar.style.scss'
import {Link} from 'react-router-dom'
import SignedInLink from '../signInLink/signedInLinks'
import SignedOutLink from '../signOutLink/signedOutLinks'

const Navbar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className='logo'>DolmaPlan</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}
export default Navbar