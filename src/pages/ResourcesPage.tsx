import React from 'react';

import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';
import ResourceCard from '../components/ResourceCard.tsx';
import Footer from '../components/Footer.tsx';

import resourcesData from '../data/resources.ts';

function ResourcesPage() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredResources = resourcesData.filter(resource => {
        const keyword = searchTerm.toLowerCase();

        return (
            resource.name.toLowerCase().includes(keyword) || 
            resource.services.toLowerCase().includes(keyword)
        )
    });

    const resourcesElements = filteredResources.map(resource => {
        return (
            <ResourceCard 
                key={resource.id}
                index={resource.id}
                {...resource}
            />
        );
    });

    return (
        <>
            <Nav />
            <Banner page='Resources' />

            <div className="search-input-container">
                <input 
                    className='search-input'
                    type="text" 
                    placeholder='Search for resource...' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className='card-grid'>
                {resourcesElements}
            </div>

            <p className="form-link">Not seeing a resource? Request it <a href="/resources/form">here</a>.</p>

            <Footer />
            
        </>
    );
}

export default ResourcesPage;