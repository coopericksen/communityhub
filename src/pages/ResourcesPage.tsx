import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';
import ResourceCard from '../components/ResourceCard.tsx';

import resourcesData from '../data/resources.ts';

function ResourcesPage() {
    const resourcesElements = resourcesData.map(resource => {
        return (
            <ResourceCard 
                key={resource.id}
                {...resource}
            />
        );
    });

    return (
        <>
            <Nav />
            <Banner page='Resources' />
            <div className='card-grid'>
                {resourcesElements}
            </div>
        </>
    );
}

export default ResourcesPage;