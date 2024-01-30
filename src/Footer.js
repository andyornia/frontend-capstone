import React from 'react';
import Nav from './Nav'

const Footer = () => {
    return (
        <footer>
            <img src="images/restaurant chef B.jpg" alt="Chef preparing a dish in our kitchen" width={200} />
            <div id="main-navigation-footer">
                <h1>Navigation</h1>
                <Nav/>
            </div>
            
            <nav id="contact-nav-footer">
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
            
            <nav id="social-nav-footer">
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