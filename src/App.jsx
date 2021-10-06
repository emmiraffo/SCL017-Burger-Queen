import React , {useState}from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import OrderSend from './components/OrderSend';
import SelectUser from './components/SelectUser';
import SingIn from './components/SingIn';

import menu from './menu.json'


function App() {
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
      }  console.log(state)
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



  return (
    <Router>
      <div className="container">

        <Switch>
        <Route path="/listo">
            <OrderSend/>
          </Route>
          <Route path="/bienvenida">
            <SelectUser/>
          </Route>
          <Route path="/menu">
            <Menu addToCart={addToCart} removeFromCart={removeFromCart} products={state.products}/>
          </Route>
          <Route path="/registro">
            <SingIn/>
          </Route>
          <Route path="/" >
            <Login/>
          </Route>

        </Switch>
      </div>

      

    </Router>
  );
}

export default App;
