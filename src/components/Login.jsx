import React, { Component } from 'react'


export class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="containerLoging">
                <section className="container">
                <img alt="Media Luna" width="200px" src="https://firebasestorage.googleapis.com/v0/b/burger-queen-laboratoria-65e32.appspot.com/o/menu%2Flogo.png?alt=media&token=997828fe-dcce-49b6-8013-7abb774c2895"/>
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
