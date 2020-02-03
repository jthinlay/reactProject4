import React from 'react'
import './navbar.style.scss'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className='logo'>DolmaPlan</Link>
            </div>
        </nav>
    )
}
export default Navbar