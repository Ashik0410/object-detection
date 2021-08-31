import React from 'react';
import {useState} from 'react';
import Header from './components/Header.js'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {

  const[cart,setCart] = useState([]);
  console.log(cart);

  return (
    <Router>
    <div className="App">
    <Header />
    <Route exact path="/">
    <Home cart={cart} setCart={setCart} />
    </Route>
    <Route path="/cart">
    <Cart cart={cart} setCart={setCart} />
    </Route>
    </div>
    </Router>

  );
}

export default App;
