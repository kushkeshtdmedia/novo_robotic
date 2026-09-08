import { SITE } from '../seo';
import { ORG_ID, DOCTOR_ID, HOME_URL } from './organization';

const PAGE_URL = `${SITE}/doctors/dr-vikrant-sharma`;

export const drVikrantSharmaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Physician', 'Person'],
      '@id': DOCTOR_ID,
      name: 'Dr. Vikrant Sharma',
      url: PAGE_URL,
      jobTitle: 'Chief Robotic Surgeon',
      description:
        'Dr. Vikrant Sharma is a robotic, bariatric and gastrointestinal surgeon with over 20 years of specialised experience and 10,000+ successful procedures.',
      medicalSpecialty: 'Robotic & Minimally Invasive Surgery',
      telephone: '+91-8882844375',
      email: 'enquiry@novorobotic.com',
      worksFor: { '@id': ORG_ID },
      knowsAbout: [
        'Robotic Surgery',
        'Bariatric Surgery',
        'GI Surgery',
        'Minimally Invasive Surgery',
        'GI Oncology',
        'Robotic Gynaecology',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MBBS' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MS in General Surgery' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'FNB in Minimal Access Surgery' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'FACS' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Robotic Surgery Fellowship' },
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': `${PAGE_URL}#profilepage`,
      url: PAGE_URL,
      name: 'Dr. Vikrant Sharma | Robotic & Bariatric Surgeon in Ghaziabad',
      mainEntity: { '@id': DOCTOR_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Dr. Vikrant Sharma', item: PAGE_URL },
      ],
    },
     {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Novo Robotic Surgery Centre',
      url: HOME_URL,
    },
  ],
};