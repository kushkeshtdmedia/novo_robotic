import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/gallbladder-cancer-surgery`;

export const gallbladderCancerSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Radical Cholecystectomy',
      serviceType: 'Radical Cholecystectomy',
      description:
        'Robotic radical cholecystectomy for gallbladder cancer at Novo Robotic Surgery Centre, delivering specialised HPB oncology care.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Gallbladder Cancer Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Radical Cholecystectomy',
      alternateName: ['Robotic Radical Cholecystectomy', 'Extended Cholecystectomy', 'Gallbladder Cancer Surgery'],
    },
     {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Novo Robotic Surgery Centre',
      url: HOME_URL,
    },
    // TODO: FAQ page content se add karna hai
  ],
};