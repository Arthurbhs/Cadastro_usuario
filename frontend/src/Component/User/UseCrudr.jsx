import React, {Component} from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuario: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render(){
    return(
        <Main {...headerProps}>
        Cadastro de Usuario 
        </Main>

    )
}
}