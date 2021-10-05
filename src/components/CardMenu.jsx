import React , {  Fragment , useState} from 'react'
import menu from '../menu.json'
import Card from './Card';




function CardMenu (props) {
    var listCards = []
    const { addToCart, removeFromCart, products } = props
    for (let categoria in menu) {
        const cards = menu[categoria].map((item) =>{
            let quantity = 0
            let {id} = item
            if (products.hasOwnProperty(id)) {
                quantity = products[id].quantity
            }
            return <Card item={item} addToCart={addToCart} removeFromCart={removeFromCart} quantity={quantity} />
        })
        listCards.push(<Fragment>
            <h1>{categoria}</h1>
            {cards}
        </Fragment>);
    }

    return <Fragment>
        {listCards}
        <a className="btn btn-success">Ver Pedido</a>
    </Fragment>
}
export default CardMenu
