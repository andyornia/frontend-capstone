import React, {useState} from 'react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <nav id="main-nav">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <ul className={`nav-list ${isOpen ? 'show' : ''}`}>
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">About</a></li>
        <li><a href="index.html">Menu</a></li>
        <li><a href="index.html">Reservations</a></li>
        <li><a href="index.html">Order Online</a></li>
        <li><a href="index.html">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;