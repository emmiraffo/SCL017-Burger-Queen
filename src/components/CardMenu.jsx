import React , { Component, Fragment} from 'react'
import menu from '../menu.json'
import Card from './Card';


function CardMenu () {
    var listCards = []
    
    for (let categoria in menu) {
        const cards = menu[categoria].map((item) =>{
            return <Card {...item}  />
        })
        listCards.push(<Fragment>
            <h1>{categoria}</h1>
            {cards}
        </Fragment>);
    }

    return <Fragment>
        {listCards}
    </Fragment>
}
export default CardMenu
