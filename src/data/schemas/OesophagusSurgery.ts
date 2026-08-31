import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/oesophagus-surgery`;

export const oesophagusSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Oesophagus Cancer Surgery',
      serviceType: 'Robotic Oesophagus Cancer Surgery',
      description:
        'Robotic oesophagectomy at Novo Robotic Surgery Centre provides advanced minimally invasive surgical treatment for oesophageal cancer.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Oesophagus Cancer Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Oesophagus Cancer Surgery',
      alternateName: ['Robotic Oesophageal Surgery', 'Robotic Oesophagectomy', 'Robot-Assisted Oesophagus Surgery'],
    },
    // TODO: FAQ page content se add karna hai
  ],
};