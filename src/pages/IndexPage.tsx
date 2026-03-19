import Nav from '../components/Nav.tsx';
// import ElementSizes from '../components/ElementSizes.tsx';
import Banner from '../components/Banner.tsx';
import ResourceCard from '../components/ResourceCard.tsx';
import EventCard from '../components/EventCard.tsx';
import Footer from '../components/Footer.tsx';

import resourcesData from '../data/resources.ts';
import eventsData from '../data/events.ts';

function IndexPage() {
    return (
        <>
            <Nav />
            <Banner page='Spotlight'/>
            {/* <ElementSizes /> */}

            <h2 className='featured-header'>Featured Resources & Events</h2>
            <div className="card-grid-index">
                <ResourceCard
                    index={9}
                    {...resourcesData[9]}
                />
                <EventCard
                    index={11}
                    {...eventsData[11]}
                />
                <ResourceCard
                    index={3}
                    {...resourcesData[3]}
                />
            </div>

            <Footer />
        </>
    )
}

export default IndexPage;