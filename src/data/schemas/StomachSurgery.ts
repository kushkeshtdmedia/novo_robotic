import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/stomach-surgery`;

export const stomachSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Stomach Cancer Surgery',
      serviceType: 'Robotic Stomach Cancer Surgery',
      description:
        'Robotic gastrectomy for stomach cancer at Novo Robotic Surgery Centre offers precise oncological clearance through a minimally invasive approach.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Stomach Cancer Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Stomach Cancer Surgery',
      alternateName: ['Robotic Gastrectomy', 'Gastrectomy', 'Robot-Assisted Gastrectomy'],
    },
    // TODO: FAQ page content se add karna hai
  ],
};