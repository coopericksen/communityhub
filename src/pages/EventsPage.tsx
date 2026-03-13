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
        </>
    )
}

export default EventsPage;