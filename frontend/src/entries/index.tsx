import ReachDOM from 'react-dom/client';
import IndexPage from '../pages/IndexPage.tsx';
import '../styles/global.css';

ReachDOM.createRoot(document.getElementById("root")!).render(
    <IndexPage />
)