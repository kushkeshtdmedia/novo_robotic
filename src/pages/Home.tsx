import Hero from '../components/Hero';
import Departments from '../components/Departments';
import Engineering from '../components/Engineering';
import Doctors from '../components/Doctors';
import EMI from '../components/EMI';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Departments />
      <Engineering />
      <Doctors />
      <EMI />
      <CTA />
    </>
  );
}
