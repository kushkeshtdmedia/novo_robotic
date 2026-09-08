import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/gynecologic-cancer-surgery`;

export const gynecologicCancerSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Gynecologic Cancer Surgery',
      serviceType: 'Robotic Gynecologic Cancer Surgery',
      description:
        'Robotic gynecologic cancer surgery at Novo Robotic Surgery Centre provides minimally invasive surgical treatment for gynecological cancers using advanced robotic-assisted technology.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Gynecologic Cancer Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Gynecologic Cancer Surgery',
      alternateName: ['Robotic Gynecologic Oncology Surgery', 'Robot-Assisted Gynecologic Cancer Surgery'],
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