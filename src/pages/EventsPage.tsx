import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';
import EventCard from '../components/EventCard.tsx';

import eventsData from '../data/events.ts';

function EventsPage() {
    const eventsElements = eventsData.map(event => {
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
            <div className='card-grid'>
                {eventsElements}
            </div>

            <p className="form-link">Not seeing an event? Request it <a href="/events/form">here.</a></p>
        </>
    )
}

export default EventsPage;