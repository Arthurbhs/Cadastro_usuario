import './Main.css'

import React from 'react'
import Header from './Header'

export default props =>
<div>
    <Header {...props} />
    <main className="content">
       <div className='p-3 mt-3'>
        {props.children}
       </div>
    </main>
</div>
