import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/colorectal-cancer-surgery`;

export const colorectalCancerSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Colorectal Cancer Surgery',
      serviceType: 'Robotic Colorectal Cancer Surgery',
      description:
        'Robotic colon and rectal cancer surgery at Novo Robotic Surgery Centre, using sphincter-preserving techniques for precise oncological outcomes.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Colorectal Cancer Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Colorectal Cancer Surgery',
      alternateName: ['Robotic Colectomy', 'Robotic Rectal Cancer Surgery', 'Low Anterior Resection', 'Robot-Assisted Colorectal Surgery'],
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