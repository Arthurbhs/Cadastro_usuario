import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Logo from '../Component/template/Logo'
import Nav from '../Component/template/Nav'
import Footer from '../Component/template/Footer'
import Routes from './Routes'



export default props =>
 <BrowserRouter>
<div className="app">
<Logo/>
<Nav/>
<Routes/>
    <Footer/>
    </div>
    </BrowserRouter>
    
