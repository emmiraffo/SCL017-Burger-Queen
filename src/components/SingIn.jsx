import React from 'react'
import {singUp}  from '../auth'


function SingIn  () {
        return  <div className="login">
                <div className="containerLoging">
                <section className="container">
                <img alt="Media Luna"  width="200px" src="https://firebasestorage.googleapis.com/v0/b/burger-queen-laboratoria-65e32.appspot.com/o/menu%2Flogo.png?alt=media&token=cdca3135-1b44-4ab9-a69c-2329da2919cc" />
                <input className="inputlogIn" type="name"    id="name" placeholder="Nombre"/> <br/>
                <input className="inputlogIn" type="email"    id="email" placeholder="E-mail"/> <br/>
                <input className="inputlogIn" type="password" id="password" placeholder="Contraseña"/> <br/>
                <button onClick={singUp}  className="btn btn-dark"> Registrar </button> <br/>
                </section>
                </div>
            </div>
    }


export default SingIn