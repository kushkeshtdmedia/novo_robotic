import { SITE } from '../seo';

export const ORG_ID = `${SITE}/#organization`;
export const DOCTOR_ID = `${SITE}/doctors/dr-vikrant-sharma#physician`;
export const HOME_URL = `${SITE}/`;

export const AREA_SERVED = [
  { '@type': 'City', name: 'Ghaziabad' },
  { '@type': 'City', name: 'Delhi' },
  { '@type': 'City', name: 'Noida' },
  { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'MedicalClinic'],
  '@id': ORG_ID,
  name: 'Novo Robotic Surgery Centre',
  alternateName: 'Novo Robotic Hospital',
  slogan: 'Precision In Care',
  url: HOME_URL,
  logo: `${SITE}/icons.svg`,
  image: `${SITE}/icons.svg`,
  telephone: '+91-8882844375',
  email: 'enquiry@novorobotic.com',
  medicalSpecialty: [
    'Gastrointestinal Surgery',
    'Hepatobiliary Surgery',
    'Bariatric Surgery',
    'Gynecologic Surgery',
    'Surgical Oncology',
  ],
  areaServed: ['Kaushambi', 'Ghaziabad', 'Delhi NCR', 'Noida'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'B-12/13, near Dabur Lane, Anand Vihar',
    addressLocality: 'Kaushambi, Ghaziabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201010',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.6424624,
    longitude: 77.3273251,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-8882844375',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-8527516622',
      contactType: 'appointments',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'CIN',
    value: 'U86100UP2024PTC200574',
  },
  employee: {
    '@type': 'Physician',
    '@id': DOCTOR_ID,
    name: 'Dr. Vikrant Sharma',
    url: `${SITE}/doctors/dr-vikrant-sharma`,
    medicalSpecialty: 'Robotic & Minimally Invasive Surgery',
    jobTitle: 'Chief Robotic Surgeon',
  },
  sameAs: [
    'https://share.google/Ku5gU3pA628t6XJkM',
    'https://www.instagram.com/novorobotic_/',
    'https://www.facebook.com/novorobotic/',
    'https://www.youtube.com/@novoroboticsurgerycentre',
    'https://www.linkedin.com/company/102020935/',
  ],
  hasMap:
    'https://www.google.com/maps?q=Novo+Robotic+Surgery+Centre%2C+B-12%2F13%2C+near+Dabur+Lane%2C+Anand+Vihar%2C+Kaushambi%2C+Ghaziabad%2C+Uttar+Pradesh+201010',
};