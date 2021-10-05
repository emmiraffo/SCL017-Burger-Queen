import React , { useState, Fragment} from 'react'
import CardMenu from './CardMenu'
import Basket from './Basket'
import HeaderMenu from './HeaderMenu'


function Menu () {
    var initialState = {'products': {} }
    const [state, setState] = useState(initialState)

    const addToCart = (item) => {
        if (item.id in state.products ) {
            //2da vez en adelante
            let updateState = {...state.products}
            updateState[item.id].quantity = updateState[item.id].quantity + 1
            setState({'products': {...state.products, ...updateState}})
        } else {
            //Primera vez
            let newProduct = {}
            newProduct[item.id] = {'item': {...item},'quantity':1 }
            setState({'products': {...state.products, ...newProduct }})
        }
        
    }

    const removeFromCart = (item) => {
        const { products } = state
        if (item.id in products ) {
            if ( products[item.id].quantity > 1 ) { 
                products[item.id].quantity = products[item.id].quantity -1
            } else {
                delete products[item.id]
            }
            setState({'products': {...products}})
        } 
        console.log(state)
    }


    return <Fragment>
        <HeaderMenu />
        <CardMenu addToCart={addToCart} removeFromCart={removeFromCart} products={state.products} /> 
        <Basket  /> <br/><br/><br/><br/><br/><br/>
       
    </Fragment>
}




export default Menu


