import React , { Component, Fragment} from 'react'

function Card(props){
        ///
            return <div data-bs-spy="scroll" className="card mb-3">
            <div >
              <img src={props.image} className="img-fluid rounded-start" alt={props.name}/>
            </div>
            <div id="scrollspyHeading1"  className="card-body">
                <h5 className="card-title">{props.name}</h5>  
            </div>
            <div className="add" >
                <button onClick="" type="button" className="btn btn-success"><i className="fa fa-plus"></i></button>
                <span id="count" className="badge bg-light text-dark"></span>
                <button id="minus" type="button" className="btn btn-danger"><i className="fa fa-minus"></i></button>
            </div>
        </div>

     }       
       
    
    export default Card

















































    /*<div  data-bs-spy="scroll" className="card mb-3">
    <div className="col-md-4">
    <img src="" className="img-fluid rounded-start" alt="PAPAS" />
    </div>
        <div className="card-body">
            <h5  className="card-title">PAPAS FRITAS</h5>
            <div className="row" >
                <div className="col-sm-6" >
                    <button type="button" className="btn btn-warning">MEDIANAS</button>
                </div>
                <div className="col-sm-6" >
                    <button type="button" className="btn btn-warning">GRANDES</button>
                </div>
            </div>
        </div>
        <div className="add" >
            <button type="button" className="btnBasket"><i className="fa fa-shopping-basket"></i></button>
        </div>
</div>
<div  data-bs-spy="scroll" className="card mb-3">
    <div className="col-md-4">
    <img src="" className="img-fluid rounded-start" alt="POSTRE" />
    </div>
        <div className="card-body">
            <h5 id="scrollspyHeading2" className="card-title">HELADOS</h5>
            
        </div>
        <div className="add" >
            <button type="button" className="btnBasket"><i className="fa fa-shopping-basket"></i></button>
        </div>
</div>
<div  data-bs-spy="scroll" className="card mb-3">
    <div className="col-md-4">
    <img src="" className="img-fluid rounded-start" alt="AREPA" />
    </div>
        <div className="card-body">
            <h5 id="scrollspyHeading3" className="card-title">BEBIDAS</h5>
           
        </div>
        <div className="add" >
            <button type="button" className="btnBasket"><i className="fa fa-shopping-basket"></i></button>
        </div>
</div> <br/><br/><br/><br/><br/>
    <button onClick={loadFood}  type="button" class="btn btn-success">Ver Pedido</button>


</div>*/