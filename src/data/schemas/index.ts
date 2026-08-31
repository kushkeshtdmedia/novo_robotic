import { homeSchema } from './Home';
import { servicesSchema } from './Services';
import { herniaSurgerySchema } from './HerniaSurgery';
import { gallbladderSurgerySchema } from './GallbladderSurgery';
import { appendixSurgerySchema } from './AppendixSurgery';
import { stomachSurgerySchema } from './StomachSurgery';
import { oesophagusSurgerySchema } from './OesophagusSurgery';
import { oesophagusGeneralSurgerySchema } from './OesophagusGeneralSurgery';
import { gallbladderCancerSurgerySchema } from './GallBladderCancerSurgery';
import { colorectalCancerSurgerySchema } from './ColorectalCancerSurgery';
import { bariatricWeightLossSurgerySchema } from './BariaticWeightLossSurgery';
import { roboticSleeveGastrectomySchema } from './RoboticSleeveGastrectomy';
import { miniGastricBypassSchema } from './MiniGastricBypass';
import { rouxEnGastricBypassSchema } from './RouxEnYGastricBypass';
import { gynecologicCancerSurgerySchema } from './GynecologicCancerSurgery';
import { fertilityPreservingSurgerySchema } from './FertilityPreservingSurgery';
import { benignUterineOvarianDisordersSchema } from './BenignUterineOvarianDisorders';
import { drVikrantSharmaSchema } from './DrVikrant';
import { contactSchema } from './Contact';

/** Route → schema. Keys seo.js ke routes se exactly match karte hain. */
export const schemaData: Record<string, object> = {
  '/': homeSchema,
  '/services': servicesSchema,
  '/services/hernia-surgery': herniaSurgerySchema,
  '/services/gallbladder-surgery': gallbladderSurgerySchema,
  '/services/appendix-surgery': appendixSurgerySchema,
  '/services/stomach-surgery': stomachSurgerySchema,
  '/services/oesophagus-surgery': oesophagusSurgerySchema,
  '/services/oesophagus-general-surgery': oesophagusGeneralSurgerySchema,
  '/services/gallbladder-cancer-surgery': gallbladderCancerSurgerySchema,
  '/services/colorectal-cancer-surgery': colorectalCancerSurgerySchema,
  '/services/bariatric-weight-loss-surgery': bariatricWeightLossSurgerySchema,
  '/services/robotic-sleeve-gastrectomy': roboticSleeveGastrectomySchema,
  '/services/mini-gastric-bypass': miniGastricBypassSchema,
  '/services/roux-en-gastric-bypass': rouxEnGastricBypassSchema,
  '/services/gynecologic-cancer-surgery': gynecologicCancerSurgerySchema,
  '/services/fertility-preserving-surgery': fertilityPreservingSurgerySchema,
  '/services/benign-uterine-ovarian-disorders': benignUterineOvarianDisordersSchema,
  '/doctors/dr-vikrant-sharma': drVikrantSharmaSchema,
  '/contact': contactSchema,
};

/** Trailing slash normalize karta hai taki "/contact" aur "/contact/" dono match hon. */
export const getSchema = (pathname: string): object | undefined => {
  const clean =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;
  return schemaData[clean];
};