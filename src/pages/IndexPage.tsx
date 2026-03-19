import Nav from '../components/Nav.tsx';
// import ElementSizes from '../components/ElementSizes.tsx';
import Banner from '../components/Banner.tsx';
import Footer from '../components/Footer.tsx';

function IndexPage() {
    return (
        <>
            <Nav />
            <Banner page='Spotlight'/>
            <h1>Index</h1>
            {/* <ElementSizes /> */}
            <Footer />
        </>
    )
}

export default IndexPage;