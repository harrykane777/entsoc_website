import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <h1 className="navbar-item" onClick={e => navigate("/")}>NavBar</h1>
            <div className="buttons">
                <div className="navbar-item" onClick={e => navigate("/events")}>Events</div>
                <div className="navbar-item" onClick={e => navigate("/about")}>About Us</div>
                <div className="navbar-item" onClick={e => navigate("/join")}>Join Us</div>
            </div>
        </div>
    );
}

export default NavBar;