import React  from 'react';
import logo from '../images/logo.png'


function SelectUser (){
        return <div>
                <img alt="Media Luna" width="200px" src={logo}/>
                <a href="#">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">COCINA</h5>
                    </div>
                </div>
                </a>
                <a href="/menu"> 
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">MESAS</h5>
                    </div>
                </div>
                </a>
            </div>
    }

export default SelectUser
