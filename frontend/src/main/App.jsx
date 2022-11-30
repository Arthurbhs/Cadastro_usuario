import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../Component/template/Logo'
import Nav from '../Component/template/Nav'
import Footer from '../Component/template/Footer'

import Main from '../Component/template/Main'
import Home from '../Component/template/home/Home'


export default props =>
 
<div className="app">
<Logo/>
<Nav/>
<Home/>
    <Footer/>
    
</div>