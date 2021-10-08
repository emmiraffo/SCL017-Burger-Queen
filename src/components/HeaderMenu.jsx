import React , { Component, Fragment} from 'react'

function HeaderMenu () {
    return <Fragment>
           <nav className="navbar navbar-light " >
                <a href="/bienvenida"><i className="fa fa-arrow-left"></i></a>
                <a href="#scrollspyHeading1" className="nav-link">PRICIPAL</a>
                <a href="#scrollspyHeading2" className="nav-link">POSTRES</a>
                <a href="#scrollspyHeading3" className="nav-link">BEBIDAS</a>
            </nav> <br/>
             <br/> 
    </Fragment>
    }
export default HeaderMenu    