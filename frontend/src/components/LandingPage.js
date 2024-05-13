import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="main-container">
            <div className="banner">
                <img src={require("../styles/background_image.jpg")} className="bg-img" />
                <div className="text-overlay">
                    UNSW<br/>Entrepreneurs' Society<br />
                    <span>Hello world</span>
                </div>
            </div>
            
            <div className="container">
                <h1>EntSoc</h1><br />
                Gathering like-minded entrepreneurs<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et fringilla lorem. Donec eget neque 
                tincidunt, convallis augue et, euismod dui. Etiam quam lectus, congue tempor lacinia vel, elementum vitae neque. 
                Sed porta molestie pulvinar. Curabitur volutpat lacinia ex ac scelerisque.
            </div>

            <div className="container" style={{ "padding": "2% 0" }}>
                <h1>Sponsors</h1><br />
                <div className="sponsors">
                    <img src={require("../styles/google.png")} />
                    <img src={require("../styles/meta.png")} />
                    <img src={require("../styles/amazon.png")} />
                    <img src={require("../styles/microsoft.png")} />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;