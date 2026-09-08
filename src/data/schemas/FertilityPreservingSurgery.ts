import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/fertility-preserving-surgery`;

export const fertilityPreservingSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Fertility Preserving Surgery',
      serviceType: 'Fertility Preserving Surgery',
      description:
        'Fertility preserving surgery at Novo Robotic Surgery Centre provides minimally invasive and robotic surgical treatment designed to preserve reproductive potential while treating gynecological conditions.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Fertility Preserving Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Fertility Preserving Surgery',
      alternateName: ['Fertility-Sparing Surgery', 'Fertility Preservation Surgery', 'Robotic Fertility Preserving Surgery'],
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