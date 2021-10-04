import React , { Component, Fragment} from 'react'

function Card(props){
        const {item, addToCart, removeFromCart} = props
            return <div data-bs-spy="scroll" className="card mb-3">
            <div >
              <img src={item.image} className="img-fluid" alt={item.name}/>
            </div>
            <div id="scrollspyHeading1"  className="card-body">
                <h3 className="card-title">{item.name}</h3>  
                <h2 className="card-title">${item.price}</h2> 
            </div>
            <div className="add" >
                <button  onClick={(e) => { addToCart(item) }} type="button" className="btnCard"><i className="fa fa-plus"></i></button>
                <button  onClick={(e) => { removeFromCart(item) }} type="button" className="btnRemove"><i className="fa fa-minus"></i></button>
            </div>
        </div>
     }       

    
    export default Card
