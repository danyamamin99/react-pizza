import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';

import { Header } from "./components";
import { Home, Cart } from './pages';

function App() {
  const [pizzasItems, setPizzasItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then(resp => resp.json())
      .then(json => setPizzasItems(json.pizzas))  
  }, []);
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzasItems}/>} />
        <Route exact path="/cart" render={() => <Cart/>} />
      </div>
    </div>
  );
}

export default App;
