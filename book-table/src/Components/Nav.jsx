import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <nav className="desktop-nav">
        <ul className='nav-ul'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/specials">Order Online</Link></li>
          <li><Link to="/login-page">Login</Link></li>
        </ul>
      </nav>
      <div className='BurgerMenu'>
        <button className="hamburger" onClick={handleToggle}>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>
        <nav
          className={`burger-nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleToggle}>Home</Link></li>
            <li><Link to="/about" onClick={handleToggle}>About</Link></li>
            <li><Link to="/menu" onClick={handleToggle}>Menu</Link></li>
            <li><Link to="/reservations" onClick={handleToggle}>Reservations</Link></li>
            <li><Link to="/specials" onClick={handleToggle}>Order Online</Link></li>
            <li><Link to="/login-page" onClick={handleToggle}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;