import React , {useState, Fragment} from 'react'
import CardMenu from './CardMenu'
import HeaderMenu from './HeaderMenu'
import Basket from './Basket';



function Menu (props) {
    const { addToCart, removeFromCart, products } = props
    const [state, setState] = useState({
        "showResume":false,
        "table": 0
    })

    const selectTable = (mesa)=> {
        setState({...state, "table": mesa })
    }

    console.log("STATE EN MENU", state)

    return <Fragment>
        { !state.showResume &&  <HeaderMenu />}
        { !state.showResume && <select id="mesa" className="form-select" aria-label="Default select example" onChange={(e) => {selectTable(e.target.value) }}>
                <option disabled selected>Mesa</option>
                <option id="1" value="1">01</option>
                <option id="2" value="2">02</option>
                <option id="3" value="3">03</option>
                <option id="4" value="4">04</option>
                <option id="5" value="5">05</option>
                <option id="6" value="6">06</option>
            </select> }
        { !state.showResume && <CardMenu addToCart={addToCart} removeFromCart={removeFromCart} products={products} /> }
        <a className="btn btn-success" onClick={()=>{ setState({...state, 'showResume':!state.showResume})}}>Ver Pedido</a>
        { state.showResume &&  <Basket addToCart={addToCart} removeFromCart={removeFromCart} products={products} table={state.table} />}
        
    </Fragment>
}




export default Menu


