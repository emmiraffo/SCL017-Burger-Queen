import React , { Fragment} from 'react'
import CardMenu from './CardMenu'
import HeaderMenu from './HeaderMenu'
import Basket from './Basket';



function Menu (props) {
    const { addToCart, removeFromCart, products } = props
    return <Fragment>
        <HeaderMenu />
        <CardMenu addToCart={addToCart} removeFromCart={removeFromCart} products={products} /> 
        <Basket addToCart={addToCart} removeFromCart={removeFromCart} products={products} />
        
    </Fragment>
}




export default Menu


