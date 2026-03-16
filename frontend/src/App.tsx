import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.tsx";
import ResourcesPage from "./pages/ResourcesPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

import './styles/global.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}