import React from 'react';
import Header from './components/Header.js'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/Cart';

function App() {


    return (
        <Router>
    <div className="App">
    <Header />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/cart">
    <CartPage />
    </Route>
    </div>
    </Router>

    );
}

export default App;
