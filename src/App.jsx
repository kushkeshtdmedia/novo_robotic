import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import DoctorsPage from './pages/DoctorsPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import HerniaSurgery from './pages/services/HerniaSurgery';
import RoboticSleeveGastrectomy from './pages/services/RoboticSleeveGastrectomy';
import AppendixSurgeryPage from './pages/services/AppendixSurgery';
import GallbladderSurgery from './pages/services/GallbladderSurgery';
import OesophagusSurgery from './pages/services/OesophagusSurgery';
import StomachSurgery from './pages/services/StomachSurgery';
import GallBladderCancer from './pages/services/GallBladderCancerSurgery';
import  BariaticWeightLossSurgery from './pages/services/BariaticWeightLossSurgery';
import ColorectalCancerSurgery from './pages/services/ColorectalCancerSurgery.tsx';
import MiniGastricBypass from './pages/services/MiniGastricBypass.tsx';
import RouxEnGastricBypass from './pages/services/RouxEnYGastricBypass.tsx';
import DrVikrantSharma from './pages/DrVikrant.tsx';
import FertilityPreservingSurgery from './pages/services/FertilityPreservingSurgery';
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/stomach-surgery" element={<StomachSurgery />} />
          <Route path="/services/hernia-surgery" element={<HerniaSurgery />} />
          <Route path="/services/robotic-sleeve-gastrectomy" element={<RoboticSleeveGastrectomy />} />
          <Route path="/services/appendix-surgery" element={<AppendixSurgeryPage />} />
          <Route path="/services/gallbladder-surgery" element={<GallbladderSurgery />} />
          <Route path="/services/oesophagus-surgery" element={<OesophagusSurgery />} />
          <Route path="/services/bariatric-weight-loss-surgery" element={<BariaticWeightLossSurgery />} />
          <Route path="/services/gallbladder-cancer-surgery" element={<GallBladderCancer />} />
          <Route path="/services/colorectal-cancer-surgery" element={<ColorectalCancerSurgery />} />
          <Route path="/services/mini-gastric-bypass" element={<MiniGastricBypass />} />
          <Route path="/services/roux-en-gastric-bypass" element={<RouxEnGastricBypass />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/services/fertility-preserving-surgery" element={<FertilityPreservingSurgery />} />  
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/doctors/dr-vikrant-sharma" element={<DrVikrantSharma />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
