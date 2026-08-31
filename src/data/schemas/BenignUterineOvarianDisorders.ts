import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/benign-uterine-ovarian-disorders`;

export const benignUterineOvarianDisordersSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Surgery for Benign Uterine and Ovarian Disorders',
      serviceType: 'Robotic Surgery for Benign Uterine and Ovarian Disorders',
      description:
        'Robotic treatment for fibroids, ovarian cysts, endometriosis and adenomyosis at Novo Robotic Surgery Centre, with uterus-preserving options available.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Benign Uterine and Ovarian Disorders', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Surgery for Benign Uterine and Ovarian Disorders',
      alternateName: ['Robotic Myomectomy', 'Ovarian Cystectomy', 'Endometriosis Surgery', 'Fibroid Surgery'],
    },
    // TODO: FAQ page content se add karna hai
  ],
};