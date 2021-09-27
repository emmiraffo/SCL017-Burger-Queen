import React, { Component } from 'react'
import logo from '../images/logo.png'

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="containerLoging">
                
                <section className="container">
                <img alt="Media Luna" width="200px" src={logo}/>
                <input className="inputlogIn" type="email"    id="email" placeholder="E-mail"/> <br/>
                <input className="inputlogIn" type="password" id="password" placeholder="Contraseña"/> <br/>
                <button className="btn btn-dark"> ENTRAR </button> <br/>
                <h4> Registrate <a href="/registro"> AQUÍ </a> </h4>
                </section>
                   

                </div>
            </div>
        )
    }
}

export default Login
