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
                <b>Entsoc</b><br />
                Gathering like-minded entrepreneurs<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et fringilla lorem. Donec eget neque 
                tincidunt, convallis augue et, euismod dui. Etiam quam lectus, congue tempor lacinia vel, elementum vitae neque. 
                Sed porta molestie pulvinar. Curabitur volutpat lacinia ex ac scelerisque. In rutrum, quam id sagittis interdum, 
                felis mauris laoreet magna, eget gravida nunc eros at tortor. Nullam rhoncus elementum nunc, eu suscipit justo dictum ac. 
                Mauris lobortis augue in ante aliquet dictum. Curabitur vitae consequat ipsum. Nam a nunc blandit, fermentum leo sed, 
                porttitor erat. Aliquam quis porta velit. Nunc non tincidunt quam, vitae mattis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Aliquam at sem eget purus fermentum lacinia. In fringilla ligula sit amet velit rhoncus, eu convallis augue laoreet. 
                Nullam porta ex at turpis vulputate, vel blandit velit pulvinar.
            </div>
        </div>
    );
}

export default LandingPage;