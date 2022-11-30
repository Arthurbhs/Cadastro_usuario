import './Logo.css'
import React from 'react'
import Logo from '../assents/image/logo.jpeg'

export default props => 
<aside className="logo">
    <a href="/" className='logo'>
        <img src={Logo} alt='logo'/> 
    </a>
</aside>