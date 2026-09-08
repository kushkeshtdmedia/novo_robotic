import { SITE } from '../seo';
import { ORG_ID, HOME_URL } from './organization';

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
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
     {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Novo Robotic Surgery Centre',
      url: HOME_URL,
    },
  ],
};