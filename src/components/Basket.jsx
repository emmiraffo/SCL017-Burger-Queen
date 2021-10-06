import React , { Component, Fragment} from 'react'


 function Basket(props) {
    const { addToCart, removeFromCart, products } = props
    console.log("ESTOY EN BASKET",products)

    var resumen = []
    if (Object.keys(products).length > 0 ) {
        for(let index in products) {
            let item = products[index].item
            let quantity = products[index].quantity
            let subTotalItem =item.price * quantity
            resumen.push(<div className="box"> 
                    <h5 >{item.name}</h5> 
                    <h5 className="card-title">{subTotalItem}</h5> 
                <div className="add" >
                    <button  type="button" className="btnCart" onClick={(e) => { addToCart(item)}}>+</button>
                    <span className="quantity"> {quantity} </span>
                    <button  type="button" className="btnCart"  onClick={(e) => { removeFromCart(item) }}>-</button>
                </div>
            </div>
            )
        }
    } 

    const calcularSubTotal = () =>{
        var subTotal = 0
        for(let product in products ){
            let item = products[product].item
            let quantity = products[product].quantity
            subTotal = subTotal+ item.price * quantity
        } 
        return subTotal
    }

  var subTotal = calcularSubTotal()
  var impuesto = subTotal*0.1
  var total = subTotal + impuesto

    
    return <Fragment>
        {resumen}
        <div className="montoResumen">  
            <span>SUBTOTAL</span> 
            <span>${subTotal}</span> 
        </div>
        <div className="montoResumen">  
            <span>IVA 10%</span> 
            <span>${impuesto}</span> 
        </div>
        <div className="montoResumen">  
            <span>MONTO FINAL</span> 
            <span>${total}</span> 
        </div>
    </Fragment>
 }

export default Basket
