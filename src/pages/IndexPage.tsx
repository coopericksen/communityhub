import Nav from '../components/Nav.tsx';
import ElementSizes from '../components/ElementSizes.tsx';
import Banner from '../components/Banner.tsx';

function IndexPage() {
    return (
        <>
            <Nav />
            <Banner />
            <h1>Index</h1>
            <ElementSizes />
        </>
    )
}

export default IndexPage;