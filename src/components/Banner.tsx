import './Banner.css';

interface BannerProps {
    page: string;
}

function Banner(props: BannerProps) {
    return (
        <>
            <div id='banner-container'>
                <h1 id='banner-headline'>Community {props.page}</h1>
                <h5 id='banner-subheadline'>Newport, Washington</h5>
            </div>
        </>
    )
}

export default Banner;