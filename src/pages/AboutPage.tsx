import { motion } from 'motion/react';

import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';
import TechCard from '../components/TechCard.tsx';
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

            <div className="tech-card-container">

                <TechCard 
                    tech_name="React" 
                    link="https://react.dev"
                    accent_color="#61DAFB"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><g clip-path="url(#a)"><path fill="#61dafb" d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"/><path stroke="#61dafb" stroke-width="5" d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"/><path stroke="#61dafb" stroke-width="5" d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"/><path stroke="#61dafb" stroke-width="5" d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z"/></clipPath></defs></svg>}
                    delay={0.1}
                />

                <TechCard 
                    tech_name="Motion" 
                    link="https://motion.dev"
                    accent_color="#fff312"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#fff" d="M37.796 31.248 18.018 68.753H0l15.445-29.284c2.394-4.542 8.366-8.221 13.343-8.221zm44.186 9.377c0-5.18 4.033-9.376 9.009-9.376 4.975 0 9.009 4.195 9.009 9.376S95.967 50 90.99 50c-4.975 0-9.008-4.194-9.008-9.375m-40.808-9.377h18.018L39.414 68.753H21.396zm21.28 0h18.018l-15.44 29.284c-2.394 4.542-8.371 8.22-13.347 8.22h-9.01z"/></svg>}
                    delay={0.2}
                />

                <TechCard 
                    tech_name="TypeScript" 
                    link="https://typescriptlang.org"
                    accent_color="#3178C6"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><g clip-path="url(#a)"><path fill="#017acb" d="M0 0h100v100H0z"/><path fill="#fff" d="M48.016 37.031h4.797v8.282h-12.97v36.843l-.343.094c-.469.125-6.64.125-7.969-.016l-1.062-.093V45.312H17.5v-8.28l4.11-.048c2.25-.03 8.03-.03 12.843 0 4.813.032 10.906.047 13.563.047m36.61 41.219c-1.907 2.016-3.954 3.14-7.36 4.063-1.485.406-1.735.421-5.078.406-3.344-.016-3.61-.016-5.235-.438-4.203-1.078-7.594-3.187-9.906-6.172-.656-.843-1.734-2.593-1.734-2.812 0-.063.156-.203.359-.297s.625-.36.969-.562c.343-.204.968-.579 1.39-.797.422-.22 1.64-.938 2.703-1.579 1.063-.64 2.032-1.156 2.141-1.156.11 0 .313.219.469.485.937 1.578 3.125 3.593 4.672 4.28.953.407 3.062.86 4.078.86.937 0 2.656-.406 3.578-.828.984-.453 1.484-.906 2.078-1.812.406-.641.453-.813.438-2.032 0-1.125-.063-1.437-.375-1.953-.875-1.437-2.063-2.187-6.875-4.312-4.97-2.203-7.204-3.516-9.016-5.282-1.344-1.312-1.61-1.67-2.453-3.312-1.094-2.11-1.235-2.797-1.25-5.937-.016-2.204.031-2.922.265-3.672.329-1.125 1.391-3.297 1.875-3.844 1-1.172 1.36-1.531 2.063-2.11 2.125-1.75 5.438-2.906 8.61-3.015.359 0 1.546.062 2.656.14 3.187.266 5.359 1.047 7.453 2.72 1.578 1.25 3.968 4.187 3.734 4.577-.156.235-6.39 4.391-6.797 4.516-.25.078-.422-.016-.765-.422-2.125-2.547-2.985-3.094-5.047-3.219-1.469-.093-2.25.078-3.235.735-1.03.687-1.53 1.734-1.53 3.187.015 2.125.827 3.125 3.827 4.61 1.938.953 3.594 1.734 3.719 1.734.188 0 4.203 2 5.25 2.625 4.875 2.86 6.86 5.797 7.375 10.86.375 3.812-.703 7.296-3.047 9.765"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z"/></clipPath></defs></svg>}
                    delay={0.3}
                />

                <TechCard 
                    tech_name="GitHub" 
                    link="https://github.com/coopericksen/communityhub"
                    accent_color="#FFFFFF"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><g fill="#fff" clip-path="url(#a)"><path d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.327 40.834 34.193 47.446 2.499.462 3.417-1.085 3.417-2.406 0-1.192-.047-5.131-.068-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.551-7.315-5.551-7.315-4.537-3.104.341-3.04.341-3.04 5.022.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.544-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.391 4.595 3.391 9.26 0 6.69-.058 12.074-.058 13.721 0 1.33.9 2.89 3.435 2.399C85.692 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50"/><path d="M18.727 72.227c-.11.248-.502.322-.857.152-.363-.163-.567-.502-.45-.751.109-.256.5-.327.862-.156.363.163.57.505.445.755m2.46 2.194c-.24.221-.706.118-1.022-.231-.327-.349-.388-.814-.146-1.04.246-.22.698-.117 1.026.232.327.353.39.816.14 1.04zm1.687 2.808c-.307.213-.808.013-1.118-.432-.306-.444-.306-.977.007-1.191.31-.214.804-.021 1.118.42.305.452.305.985-.008 1.203m2.853 3.252c-.274.302-.858.22-1.285-.192-.437-.403-.56-.975-.284-1.277.277-.303.864-.218 1.295.191.434.403.566.979.274 1.278m3.688 1.098c-.12.391-.683.57-1.25.403-.565-.171-.935-.63-.821-1.026.118-.394.682-.58 1.253-.401.565.17.936.625.818 1.024m4.197.465c.014.413-.466.755-1.06.762-.599.013-1.082-.32-1.088-.726 0-.416.469-.755 1.067-.765.594-.012 1.081.32 1.081.73m4.123-.158c.071.403-.342.816-.932.926-.58.106-1.118-.143-1.192-.541-.072-.413.35-.826.928-.933.592-.103 1.12.14 1.196.548"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z"/></clipPath></defs></svg>}
                    delay={0.4}
                />

                <TechCard 
                    tech_name="Vite" 
                    link="https://vite.dev"
                    accent_color="#646CFF"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><g clip-path="url(#a)"><path fill="url(#b)" d="M98.848 14.801 52.731 98.695a2.486 2.486 0 0 1-4.365.019L1.336 14.808c-1.054-1.878.525-4.153 2.617-3.773L50.12 19.43c.294.053.596.053.89-.002l45.2-8.381c2.086-.387 3.672 1.871 2.638 3.753"/><path fill="url(#c)" d="M72.111.025 37.984 6.828c-.273.054-.52.2-.703.412a1.3 1.3 0 0 0-.307.764l-2.1 36.07a1.3 1.3 0 0 0 .442 1.05 1.25 1.25 0 0 0 1.091.268l9.502-2.23c.889-.21 1.692.587 1.51 1.496l-2.824 14.064c-.19.946.684 1.755 1.592 1.474l5.87-1.813c.909-.281 1.783.53 1.59 1.477l-4.486 22.09c-.28 1.382 1.526 2.135 2.28.951l.503-.791 27.81-56.46c.465-.946-.338-2.024-1.358-1.823l-9.781 1.92c-.92.18-1.701-.69-1.442-1.605l6.384-22.513c.26-.917-.526-1.788-1.446-1.604"/></g><defs><linearGradient id="b" x1=".187" x2="51.038" y1="17.805" y2="85.688" gradientUnits="userSpaceOnUse"><stop stop-color="#41d1ff"/><stop offset="1" stop-color="#bd34fe"/></linearGradient><linearGradient id="c" x1="54.398" x2="64.98" y1="1.872" y2="73.224" gradientUnits="userSpaceOnUse"><stop stop-color="#ffea83"/><stop offset=".083" stop-color="#ffdd35"/><stop offset="1" stop-color="#ffa800"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z"/></clipPath></defs></svg>}
                    delay={0.5}
                />

                <TechCard 
                    tech_name="Vercel" 
                    link="https://vercel.com"
                    accent_color="#FFFFFF"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#fff" fill-rule="evenodd" d="M100 93.957 50 7 0 93.957z" clip-rule="evenodd"/></svg>}
                    delay={0.6}
                />

                <TechCard 
                    tech_name="VS Code" 
                    link="https://code.visualstudio.com"
                    accent_color="#007ACC"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#2489ca" d="M.951 35.498s-2.435-1.756.488-4.1l6.81-6.089s1.948-2.05 4.008-.264l62.839 47.576v22.814s-.03 3.582-4.628 3.186z"/><path fill="#1070b3" d="M17.148 50.204.951 64.929s-1.664 1.238 0 3.45l7.52 6.84s1.787 1.919 4.425-.263l17.171-13.02z"/><path fill="#0877b9" d="M45.584 50.325 75.29 27.643l-.193-22.692S73.827 0 69.596 2.577L30.067 38.553z"/><path fill="#3c99d4" d="M70.469 98.652c1.725 1.766 3.815 1.188 3.815 1.188l23.149-11.407c2.963-2.02 2.547-4.526 2.547-4.526V15.79c0-2.994-3.065-4.029-3.065-4.029L76.852 2.09c-4.384-2.71-7.256.487-7.256.487s3.694-2.659 5.5 2.375v90.067c0 .62-.132 1.228-.396 1.776-.527 1.066-1.674 2.06-4.424 1.644z"/></svg>}
                    delay={0.7}
                />

            </div>

            <Footer />
        </>
    )
}

export default AboutPage;