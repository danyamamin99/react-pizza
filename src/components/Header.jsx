import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from './index';

import pizzaLogo from '../assets/img/pizza-logo.svg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
          </Link>
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;