import './Logo.css'
import React from 'react'
import Logo from '../../assents/image/logo.jpeg'
import { Link } from 'react-router-dom'

export default props => 
<aside className="logo">
    <Link to="/" className='logo'>
        <img src={Logo} alt='logo'/> 
    </Link>
</aside>