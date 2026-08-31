import { SITE } from '../seo';
import { ORG_ID, HOME_URL } from './organization';

const PAGE_URL = `${SITE}/services`;

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${PAGE_URL}#collectionpage`,
      url: PAGE_URL,
      name: 'Robotic Surgery Procedures in Ghaziabad',
      description:
        'Robotic and laparoscopic procedures in Kaushambi, Ghaziabad — hernia, gallbladder, bariatric, colorectal, gynaecologic and cancer surgery under Dr. Vikrant Sharma.',
      about: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: PAGE_URL },
      ],
    },
  ],
};