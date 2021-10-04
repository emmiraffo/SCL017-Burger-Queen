import React , { useState, Fragment} from 'react'
import CardMenu from './CardMenu'
import Basket from './Basket'
import HeaderMenu from './HeaderMenu'
import menu from '../menu.json'


function Menu () {
    const [state, setState] = useState({'products': {} })


    const addToCart = (item) => {
        if (item.id in state.products ) {
            // segunda en adelante
            state.products[item.id].quantity = state.products[item.id].quantity + 1
        } else {
            //Primera vez
           state.products[item.id] = {
               'item': item,
               'quantity':1
           }
        }
        console.log(state)
    }

    const removeFromCart = () => {

    }

    return <Fragment>
        <HeaderMenu />
        <CardMenu addToCart={addToCart} removeFromCart={removeFromCart} /> 
        <Basket  /> <br/><br/><br/><br/><br/><br/>
       
    </Fragment>
}




export default Menu


