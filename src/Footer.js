import React from 'react';
import Nav from './Nav'

const Footer = () => {
    return (
        <footer>
            <img src="images/restaurant chef B.jpg" width={200} />
            <Nav/>
            
            <nav>
                <h1>Navigation</h1>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Menu</a></li>
                <li><a href="index.html">Reservations</a></li>
                <li><a href="index.html">Order Online</a></li>
                <li><a href="index.html">Login</a></li>
              </ul>
            </nav>
            
            <nav>
                <h1>Contact</h1>
                <address>
                    1776 North Beach Road<br/>
                    Chicago, IL 60611
                </address>
                <a href="tel:+12345678989">(234) 567-8989</a>
                <address>
                    <a href="mailto:littlelemon@littlelemonchicago.com">littlelemon@littlelemonchicago.com</a>
                </address>
            </nav>            
            
            <nav>
                <h1>Social Media</h1>
              <ul>
                <li><a href="index.html">Instagram</a></li>
                <li><a href="index.html">TikTok</a></li>
                <li><a href="index.html">Facebook</a></li>
                <li><a href="index.html">Pinterest</a></li>
              </ul>
            </nav>                
            
        </footer>
    )
};

export default Footer;