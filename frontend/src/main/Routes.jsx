import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../Component/template/home/Home'
import UserCrud from '../Component/User/UseCrudr'

export default props => 
<Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/user' component={UserCrud} />
    <Redirect from='*' to='/' />
</Switch>