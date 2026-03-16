import ReachDOM from 'react-dom/client';
import ResourcesPage from '../pages/ResourcesPage.tsx';
import '../styles/global.css';

ReachDOM.createRoot(document.getElementById("root")!).render(
    <ResourcesPage />
)