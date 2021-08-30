import React from 'react';
import Header from './components/Header.js'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <Switch>
    <Route exact path= "/" component={Home} >
    <Home />
    </Route>
    <Route path= "/cart" component={Cart} >
    <Cart />
    </Route>
    </Switch>
    </div>
    </Router>

  );
}

export default App;
