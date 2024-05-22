import React from 'react';
import '../styles/Event.css';

const Event = () => {
    return (
        <div className="event-card">
            <div className="image-space">
                <img src={require("../styles/background_image.jpg")} />
            </div>
            <div className="date-location-space">
                16th May 2024<br />
                Sydney, NSW, Australia
            </div>
            <div className="content-space">
                <h1>Some Event</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et fringilla lorem. 
                Donec eget neque tincidunt, convallis augue et, euismod dui. 
            </div>
        </div>
    );
}

export default Event;