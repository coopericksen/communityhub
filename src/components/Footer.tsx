import '../styles/Footer.css';

function Footer() {
    return(
        <footer>
            <div className='footer-left'>
                <h6>Washington Technology Student Association - Webmaster 2026</h6>
                <p>Team 23027-1</p>

                <a href="https://github.com/coopericksen/communityhub" target='_blank'>Github Repository</a>
            </div>

            <div className="footer-right">
                <a href="/">Home</a>
                <a href="/resources">View Resources</a>
                <a href="/events">View Events</a>
                <a href="/about">About</a>
            </div>
        </footer>
    )
}

export default Footer;