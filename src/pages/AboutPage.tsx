import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';
import Footer from '../components/Footer.tsx';

import '../styles/AboutPage.css';

function AboutPage() {
    return (
        <>
            <Nav />
            <Banner page='About'/>

            <h2 className='about-header'>About Newport's Community Hub</h2>
            <hr />
            <h3 className='about-header'>Tech Stack:</h3>

            <h4 className='about-header'>React - Frontend Library</h4>
            <h4 className='about-header'>Typescript - Type-safe development</h4>
            <h4 className='about-header'>Vite - Frontend build tool/compiler</h4>
            <h4 className='about-header'>Vercel - Deployment</h4>
            <h4 className='about-header'>Github - Version Control</h4>

            <Footer />
        </>
    )
}

export default AboutPage;