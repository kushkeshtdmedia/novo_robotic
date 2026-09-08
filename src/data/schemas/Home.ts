import { SITE } from '../seo';
import { ORG_ID, HOME_URL } from './organization';

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalClinic',
      '@id': ORG_ID,
      name: 'Novo Robotic Surgery Centre',
      url: HOME_URL,
      telephone: '+91-8882844375',
      email: 'enquiry@novorobotic.com',
      logo: `${SITE}/icons.svg`,
      image: `${SITE}/icons.svg`,
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
      openingHoursSpecification: {
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
      areaServed: ['Kaushambi', 'Ghaziabad', 'Delhi NCR', 'Noida'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8882844375',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'CIN',
        value: 'U86100UP2024PTC200574',
      },
      sameAs: [
        'https://share.google/Ku5gU3pA628t6XJkM',
        'https://www.instagram.com/novorobotic_/',
        'https://www.facebook.com/novorobotic/',
        'https://www.youtube.com/@novoroboticsurgerycentre',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: HOME_URL,
      name: 'Novo Robotic Surgery Centre',
      inLanguage: 'en-IN',
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE}/#webpage`,
      url: HOME_URL,
      name: 'Robotic Surgery Centre in Ghaziabad | Novo Robotic',
      description:
        'Novo Robotic Surgery Centre in Ghaziabad provides advanced robotic, bariatric, GI, cancer and gynaecological surgery with patient-focused, robot-assisted surgical care.',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': ORG_ID },
    },
  ],
};