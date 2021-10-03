import React  from 'react';


function SelectUser (){
        return <div>
                <img alt="Media Luna" width="200px" src="https://firebasestorage.googleapis.com/v0/b/burger-queen-laboratoria-65e32.appspot.com/o/menu%2Flogo.png?alt=media&token=997828fe-dcce-49b6-8013-7abb774c2895"/>
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
