import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import DoctorsPage from './pages/DoctorsPage';
import Contact from './pages/Contact';
import HerniaSurgery from './pages/services/HerniaSurgery';
import RoboticSleeveGastrectomy from './pages/services/RoboticSleeveGastrectomy';
import AppendixSurgery from './pages/services/AppendixSurgery';
import GallbladderSurgery from './pages/services/GallbladderSurgery';
import OesophagusSurgery from './pages/services/OesophagusSurgery';
export default function App() {
  return (
    <BrowserRouter>
      {/* removed temporary Tailwind test banner */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/hernia-surgery" element={<HerniaSurgery />} />
          <Route path="/services/robotic-sleeve-gastrectomy" element={<RoboticSleeveGastrectomy />} />
          <Route path="/services/appendix-surgery" element={<AppendixSurgery />} />
          <Route path="/services/gallbladder-surgery" element={<GallbladderSurgery />} />
          <Route path="/services/oesophagus-surgery" element={<OesophagusSurgery />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
