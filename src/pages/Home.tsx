import { useEffect } from 'react';
import Hero from '../components/Hero';
import Departments from '../components/Departments';
import Engineering from '../components/Engineering';
import Doctors from '../components/leaderShip';

const PAGE_TITLE =
  'Novo Robotic Surgery Centre | Best Robotic Surgeon in Ghaziabad & Delhi NCR';

const PAGE_DESCRIPTION =
  'Novo Robotic Surgery Centre offers advanced robotic-assisted surgery in Kaushambi, Ghaziabad & Delhi NCR. Led by Dr. Vikrant Sharma — less pain, minimal scarring, faster recovery.';

// MedicalBusiness structured data for rich results (helps Google rank & display the clinic)
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Novo Robotic Surgery Centre',
  description: PAGE_DESCRIPTION,
  medicalSpecialty: [
    'Gastrointestinal Surgery',
    'Hepatobiliary Surgery',
    'Bariatric Surgery',
    'Gynecologic Surgery',
    'Surgical Oncology',
  ],
  areaServed: ['Kaushambi', 'Ghaziabad', 'Delhi NCR'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kaushambi, Ghaziabad',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  employee: {
    '@type': 'Physician',
    name: 'Dr. Vikrant Sharma',
    medicalSpecialty: 'Robotic & Minimally Invasive Surgery',
    jobTitle: 'Lead Robotic Surgeon',
  },
};

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function HomePage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    setMeta('description', PAGE_DESCRIPTION);
    setMeta(
      'keywords',
      'robotic surgery Ghaziabad, robotic surgeon Delhi NCR, Dr Vikrant Sharma, minimally invasive surgery, gallbladder surgery, hernia repair, bariatric surgery Kaushambi'
    );

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify(STRUCTURED_DATA);
    document.head.appendChild(ld);

    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <main>
      {/* H1 lives inside Hero — the single top-level heading for SEO */}
      <Hero />

      {/* Mission / trust band */}
      <section className="bg-teal-800 text-white py-16" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="mission-heading" className="sr-only">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed text-teal-50">
            Our mission is simple — to make your surgical experience as safe, comfortable, and stress-free as possible. Through advanced robotic-assisted techniques, we help patients benefit from less pain, minimal scarring, reduced hospital stays, and faster recovery.
          </p>
          <p className="mt-6 text-teal-200 text-sm">
            Committed to compassionate patient care, innovative surgical solutions, and the highest standards of medical excellence.
          </p>
        </div>
      </section>

      <Engineering />
      <Departments />
      <Doctors />
    </main>
  );
}