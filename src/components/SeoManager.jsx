import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeo, SITE } from '../data/seo';

// Clinic-wide structured data — helps Google show rich results
const CLINIC_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Novo Robotic Surgery Centre',
  url: SITE,
  telephone: '+91-8882844375',
  email: 'enquiry@novorobotic.com',
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
    streetAddress: 'B-12/13, near Dabur Lane, Anand Vihar',
    addressLocality: 'Kaushambi, Ghaziabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201010',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 09:00-18:00',
  employee: {
    '@type': 'Physician',
    name: 'Dr. Vikrant Sharma',
    medicalSpecialty: 'Robotic & Minimally Invasive Surgery',
    jobTitle: 'Lead Robotic Surgeon',
  },
};

export default function SeoManager() {
  const { pathname } = useLocation();
  const { title, description } = getSeo(pathname);
  const url = `${SITE}${pathname === '/' ? '/' : pathname}`;

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: pathname,
      page_title: title,
    });
  }, [pathname, title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Novo Robotic Surgery Centre" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(CLINIC_SCHEMA)}</script>
    </Helmet>
  );
}