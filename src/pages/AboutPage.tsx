import { motion } from 'motion/react';

import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';
import Footer from '../components/Footer.tsx';

import '../styles/AboutPage.css';

function AboutPage() {
    return (
        <>
            <Nav />
            <Banner page='About'/>

            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://github.com/coopericksen/communityhub" className='about-repo-link' target='_blank'>View Source Code</motion.a>

            <div className='about-container'>
                <h3>Tech Stack:</h3>
                <p>This website utilizes the <em>React</em> frontend library for component based development. Each resource and event is parsed into its own component instance from data stored in <em>TypeScript</em> files. The <em>Motion</em> library (formerly Framer Motion) is used to animate components based on visibilty and user interaction. <em>Typescript</em> was used during development to write type safe <em>JavaScript</em> code and to catch bugs prior to deployment. <em>Vite</em> was used as a frontend build tool that compiled <em>TypeScript</em> & <em>React</em> into optimized <em>HTMl</em>, <em>CSS</em>, and <em>JavaScript</em>. <em>Vite</em> also acted as an environment to locally host the site during the development phase. <em>Visual Studio Code</em> was our Integrated Development Enviornment (IDE) of choice. Finally, <em>Github</em> & <em>Vercel</em> were used for deployment and version control respectively. All work for this site was done by members of Team 23027-1 for the 2026 Technology Student Association <strong>Webmaster</strong> competitive event.</p>
            </div>

            <h4 className='about-header'>React - Frontend Library</h4>
            <h4 className='about-header'>Motion for React - Scroll Animations</h4>
            <h4 className='about-header'>Typescript - Type-safe development</h4>
            <h4 className='about-header'>Vite - Frontend build tool/compiler</h4>
            <h4 className='about-header'>VS Code - IDE</h4>
            <h4 className='about-header'>Vercel - Deployment</h4>
            <h4 className='about-header'>Github - Version Control</h4>

            <Footer />
        </>
    )
}

export default AboutPage;