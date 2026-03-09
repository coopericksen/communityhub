import ReachDOM from 'react-dom/client';
import EventsPage from '../pages/EventsPage.tsx';
import '../styles/global.css';

ReachDOM.createRoot(document.getElementById("root")!).render(
    <EventsPage />
)