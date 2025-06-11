import React, { useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="hamburger" onClick={handleToggle}>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul
          style={{display: "flex", flexDirection: "column"}}
        >
          <li>
            {/* <a href="#">Home</a> */}
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            {/* <a href="#">About</a> */}
            <Link to="specials" className="nav-item">About</Link>
          </li>
          <li>
            {/* <a href="#">Contact</a> */}
            <Link to="reservations" className="nav-item">Reservations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

