import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.tsx";

import ResourcesPage from "./pages/ResourcesPage.tsx";
import NewResourceForm from "./pages/NewResourceForm.tsx";

import EventsPage from "./pages/EventsPage.tsx";
import NewEventsForm from "./pages/NewEventForm.tsx";

import AboutPage from "./pages/AboutPage.tsx";

import './styles/global.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/resources/form" element={<NewResourceForm />} />

      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/form" element={<NewEventsForm />} />

      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}