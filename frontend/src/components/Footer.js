import React from 'react';
import '../styles/Footer.css';
import facebook from '../public/facebook.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-title">Contact Us</div>
                <a onClick={(e) => {window.location.href ='mailto:unsw.entrepreneurssociety@gmail.com';}}>unsw.entrepreneurssociety@gmail.com</a>
            </div>
            <div className="logo">placeholder</div>
            <div className="footer-container">
                <div className="footer-title">Follow Our Socials</div>
                <div className="logo-container">
                    <a href="https://www.facebook.com/unsw.entsoc/">
                        <img src={facebook} className="socials-logo"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;