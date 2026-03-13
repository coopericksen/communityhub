import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';

function AboutPage() {
    return (
        <>
            <Nav />
            <Banner page='About'/>
            <h1>About</h1>
            <a href="https://github.com/coopericksen/communityhub" target='_blank'>Github Repo</a>
        </>
    )
}

export default AboutPage;