import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/oesophagus-general-surgery`;

export const oesophagusGeneralSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Oesophagus Surgery for Achalasia and Reflux',
      serviceType: 'Oesophagus Surgery for Achalasia and Reflux',
      description:
        'Robotic surgery for achalasia, hiatus hernia and severe acid reflux at Novo Robotic Surgery Centre, offering lasting relief through a minimally invasive technique.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Oesophagus Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Oesophagus Surgery for Achalasia and Reflux',
      alternateName: ['Heller Myotomy', 'Nissen Fundoplication', 'Hiatus Hernia Repair', 'Anti-Reflux Surgery'],
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