import { SITE } from '../seo';
import { ORG_ID, HOME_URL } from './organization';

const PAGE_URL = `${SITE}/contact`;

export const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${PAGE_URL}#contactpage`,
      url: PAGE_URL,
      name: 'Contact Novo Robotic Surgery Centre',
    description:
  'Contact Novo Robotic in Kaushambi, Ghaziabad for robotic, bariatric, GI, oncology and gynaecological surgery. Call 8882844375 to book a consultation.',
      about: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: PAGE_URL },
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