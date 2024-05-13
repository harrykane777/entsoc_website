import React from 'react';
import '../styles/Navbar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>NavBar</h1>
            <div className="buttons">
                <div className="navbar-item">Events</div>
                <div className="navbar-item">About Us</div>
                <div className="navbar-item">Join Us</div>
            </div>
        </div>
    );
}

export default NavBar;