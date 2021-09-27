import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import Order from './components/Order';
import OrderSend from './components/OrderSend';
import SelectUser from './components/SelectUser';
import SingIn from './components/SingIn';

function App() {
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
            <Menu/>
          </Route>
          <Route path="/orden">
            <Order/>
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
