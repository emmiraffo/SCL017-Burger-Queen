import React, { Component } from 'react'
import logo from '../images/logo.png'

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <div class="containerLoging">
                
                <section class="container">
                <img width="200px" src={logo}/>
                <input class="inputlogIn" type="email"    id="email" placeholder="E-mail"/> <br/>
                <input class="inputlogIn" type="password" id="password" placeholder="Contraseña"/> <br/>
                <button className="btn btn-dark"> ENTRAR </button> 
                <h4> Registrate AQUÍ</h4>
                </section>
                   

                </div>
            </div>
        )
    }
}

export default Login
