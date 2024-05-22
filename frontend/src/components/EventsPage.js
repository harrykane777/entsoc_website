import React from 'react';
import '../styles/EventsPage.css';
import Event from './Event';

const EventsPage = () => {
    return (
        <div className="events-main-container">
            <h1>Events</h1>
            <div className="events-container">
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <div className="empty-space" />
                <div className="empty-space" />
            </div>
        </div>
    );
}

export default EventsPage;