import React, { Component } from 'react';
import {login} from '../auth'


function Login() {
        return <div className="login">
                <div className="containerLoging">
                <section className="container">
                <img alt="Media Luna" width="200px" src="https://firebasestorage.googleapis.com/v0/b/burger-queen-laboratoria-65e32.appspot.com/o/menu%2Flogo.png?alt=media&token=cdca3135-1b44-4ab9-a69c-2329da2919cc"/>
                <input className="inputlogIn" type="email"    id="email1" placeholder="E-mail"/> <br/>
                <input className="inputlogIn" type="password" id="password1" placeholder="Contraseña"/> <br/>
                <button onClick={login} className="btn btn-dark"> ENTRAR </button> <br/>
                <h4> Registrate <a href="/registro"> AQUÍ </a> </h4>
                </section>
                   

                </div>
            </div>
}

export default Login
