import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/bariatric-weight-loss-surgery`;

export const bariatricWeightLossSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Bariatric Weight Loss Surgery',
      serviceType: 'Bariatric Weight Loss Surgery',
      description:
        'Robotic bariatric surgery at Novo Robotic Surgery Centre, offering sleeve, bypass and metabolic surgery options for long-term weight loss.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Bariatric Weight Loss Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Bariatric Weight Loss Surgery',
      alternateName: ['Weight Loss Surgery', 'Metabolic Surgery', 'Robotic Bariatric Surgery', 'Obesity Surgery'],
    },
    // TODO: FAQ page content se add karna hai
  ],
};