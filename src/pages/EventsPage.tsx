import React from 'react';

import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';
import EventCard from '../components/EventCard.tsx';
import Footer from '../components/Footer.tsx';

import eventsData from '../data/events.ts';

function EventsPage() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredEvents = eventsData.filter(event => {
        const keyword = searchTerm.toLowerCase();

        return (
            event.name.toLowerCase().includes(keyword) || 
            event.description.toLowerCase().includes(keyword)
        )
    });

    const eventsElements = filteredEvents.map(event => {
        return (
            <EventCard 
                key={event.id}
                {...event}
            />
        );
    });

    return (
        <>
            <Nav />
            <Banner page='Events'/>

            <div className="search-input-container">
                <input 
                    className='search-input'
                    type="text" 
                    placeholder='Search for event...' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className='card-grid'>
                {eventsElements}
            </div>

            <p className="form-link">Not seeing an event? Request it <a href="/events/form">here</a>.</p>

            <Footer />
        </>
    )
}

export default EventsPage;