import React from 'react'
import singUp  from '../auth'
import logo from '../images/logo.png'

function SingIn  () {
        return  <div className="login">
                <div className="containerLoging">
                <section className="container">
                <img alt="Media Luna"  width="200px" src={logo} />
                <input className="inputlogIn" type="name"    id="name" placeholder="Nombre"/> <br/>
                <input className="inputlogIn" type="email"    id="email" placeholder="E-mail"/> <br/>
                <input className="inputlogIn" type="password" id="password" placeholder="Contraseña"/> <br/>
                <button onClick={singUp} className="btn btn-dark"> Registrar </button> <br/>
                </section>
                </div>
            </div>
    }


export default SingIn