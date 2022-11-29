import './Main.css'

import React from 'react'
import Header from './Header'

export default props =>
<div>
    <Header {...props} />
    <main className="content">
        Conteudo
    </main>
</div>
