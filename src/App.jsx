import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import HerniaSurgery from './pages/services/HerniaSurgery';
import RoboticSleeveGastrectomy from './pages/services/RoboticSleeveGastrectomy';
import AppendixSurgeryPage from './pages/services/AppendixSurgery';
import GallbladderSurgery from './pages/services/GallbladderSurgery';
import OesophagusSurgery from './pages/services/OesophagusSurgery';
import StomachSurgery from './pages/services/StomachSurgery';
import GallBladderCancer from './pages/services/GallBladderCancerSurgery';
import BariaticWeightLossSurgery from './pages/services/BariaticWeightLossSurgery';
import ColorectalCancerSurgery from './pages/services/ColorectalCancerSurgery.tsx';
import MiniGastricBypass from './pages/services/MiniGastricBypass.tsx';
import RouxEnGastricBypass from './pages/services/RouxEnYGastricBypass.tsx';
import DrVikrantSharma from './pages/DrVikrant.tsx';
import FertilityPreservingSurgery from './pages/services/FertilityPreservingSurgery';
import BenignUterineOvarianDisorders from './pages/services/BenignUterineOvarianDisorders.tsx';
import GynecologicCancerSurgery from './pages/services/GynecologicCancerSurgery.tsx';
import OesophagusGeneralSurgery from './pages/services/OesophagusGeneralSurgery.tsx';
import SeoManager from './components/SeoManager';
import TeleRoboticSurgery from './pages/services/TeleRoboticSurgery.tsx';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SeoManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/tele-robotic-surgery" element={<TeleRoboticSurgery />} />
          {/* General / laparoscopic */}
          <Route path="/services/gallbladder-surgery" element={<GallbladderSurgery />} />
          <Route path="/services/hernia-surgery" element={<HerniaSurgery />} />
          <Route path="/services/appendix-surgery" element={<AppendixSurgeryPage />} />
          <Route path="/services/oesophagus-surgery" element={<OesophagusSurgery />} />

          {/* Bariatric */}
          <Route path="/services/robotic-sleeve-gastrectomy" element={<RoboticSleeveGastrectomy />} />
          <Route path="/services/robotic-roux-en-y-gastric-bypass" element={<RouxEnGastricBypass />} />
          <Route path="/services/robotic-mini-gastric-bypass" element={<MiniGastricBypass />} />

          {/* Oncology */}
          <Route path="/services/colorectal-cancer-surgery" element={<ColorectalCancerSurgery />} />
          <Route path="/services/gynecologic-cancer-surgery" element={<GynecologicCancerSurgery />} />
          <Route path="/services/stomach-cancer-surgery" element={<StomachSurgery />} />

          {/* Gynaecology */}
          <Route path="/services/fertility-preserving-surgery" element={<FertilityPreservingSurgery />} />
          <Route path="/services/benign-disorders-uterus-ovaries" element={<BenignUterineOvarianDisorders />} />

          {/* Pages not in the new slug list — kept as-is */}
          <Route path="/services/bariatric-weight-loss-surgery" element={<BariaticWeightLossSurgery />} />
          <Route path="/services/gallbladder-cancer-surgery" element={<GallBladderCancer />} />
          <Route path="/services/oesophagus-general-surgery" element={<OesophagusGeneralSurgery />} />

          <Route path="/doctors/dr-vikrant-sharma" element={<DrVikrantSharma />} />
          <Route path="/contact" element={<Contact />} />

          {/* Redirects from old slugs */}
          <Route path="/services/stomach-surgery" element={<Navigate to="/services/stomach-cancer-surgery" replace />} />
          <Route path="/services/mini-gastric-bypass" element={<Navigate to="/services/robotic-mini-gastric-bypass" replace />} />
          <Route path="/services/roux-en-gastric-bypass" element={<Navigate to="/services/robotic-roux-en-y-gastric-bypass" replace />} />
          <Route path="/services/benign-uterine-ovarian-disorders" element={<Navigate to="/services/benign-disorders-uterus-ovaries" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}