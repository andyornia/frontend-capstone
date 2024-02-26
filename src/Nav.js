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
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;