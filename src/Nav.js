import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <nav id="main-nav">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isOpen ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><a href="index.html">About</a></li>
        <li><a href="index.html">Menu</a></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a href="index.html">Order Online</a></li>
        <li><a href="index.html">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;