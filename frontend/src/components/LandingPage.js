import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="main-container">
            <img src={require("../styles/background_image.jpg")} className="bg-img" />
            <div className="text-overlay">
                UNSW<br/>Entrepreneurs' Society<br />
                <span>Hello world</span>
            </div>
            <div className="container">
                <b>Entsoc</b><br />
                Gathering like-minded entrepreneurs
            </div>
        </div>
    );
}

export default LandingPage;