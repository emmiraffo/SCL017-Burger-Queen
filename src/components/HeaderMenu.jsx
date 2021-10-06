import React , { Component, Fragment} from 'react'

function HeaderMenu () {
    return <Fragment>
           <nav className="navbar navbar-light " >
                <a href="/bienvenida"><i className="fa fa-arrow-left"></i></a>
                <a href="#scrollspyHeading1" className="nav-link">PRICIPAL</a>
                <a href="#scrollspyHeading2" className="nav-link">POSTRES</a>
                <a href="#scrollspyHeading3" className="nav-link">BEBIDAS</a>
            </nav> <br/>
            <select id="mesa" className="form-select" aria-label="Default select example">
                <option  selected>Mesa</option>
                <option id="1" value="1">01</option>
                <option id="2" value="2">02</option>
                <option id="3" value="3">03</option>
                <option id="4" value="4">04</option>
                <option id="5" value="5">05</option>
                <option id="6" value="6">06</option>
            </select> <br/> 
    </Fragment>
    }
export default HeaderMenu    