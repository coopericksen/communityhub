import ReachDOM from 'react-dom/client';
import AboutPage from '../pages/AboutPage.tsx';
import '../styles/global.css';

ReachDOM.createRoot(document.getElementById("root")!).render(
    <AboutPage />
)