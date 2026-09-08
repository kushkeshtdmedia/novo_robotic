import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/hernia-surgery`;

export const herniaSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Hernia Surgery',
      serviceType: 'Robotic Hernia Surgery',
      description:
        'Robotic hernia surgery at Novo Robotic Surgery Centre offers minimally invasive treatment for hernia using advanced robotic technology.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Hernia Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Hernia Surgery',
      alternateName: ['Robotic Hernia Repair', 'Robot-Assisted Hernia Repair'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Does every hernia require surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Most hernias do not heal on their own. Surgery may be recommended to prevent complications such as incarceration or strangulation.' } },
        { '@type': 'Question', name: 'How long does hernia surgery take?', acceptedAnswer: { '@type': 'Answer', text: 'The duration depends on the type and complexity of the hernia and the surgical technique used.' } },
        { '@type': 'Question', name: 'Is hernia surgery painful?', acceptedAnswer: { '@type': 'Answer', text: 'Some discomfort is expected after surgery, but pain is generally manageable with medicines prescribed by the surgeon.' } },
        { '@type': 'Question', name: 'Can a hernia come back after surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Hernia recurrence is possible, although the risk can be reduced with appropriate surgical treatment and proper recovery care.' } },
        { '@type': 'Question', name: 'What happens if a hernia is left untreated?', acceptedAnswer: { '@type': 'Answer', text: 'An untreated hernia may become larger and can sometimes lead to complications such as incarceration or strangulation.' } },
        { '@type': 'Question', name: 'How much does hernia surgery cost?', acceptedAnswer: { '@type': 'Answer', text: 'The cost varies depending on the type of hernia, surgical technique, hospital stay, and individual treatment requirements.' } },
        { '@type': 'Question', name: 'Which doctor should I consult for hernia treatment?', acceptedAnswer: { '@type': 'Answer', text: 'A surgeon experienced in hernia treatment and minimally invasive or robotic surgery can evaluate and recommend the appropriate treatment.' } },
        { '@type': 'Question', name: 'Can I walk after hernia surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walking is generally encouraged after surgery as advised by your surgeon.' } },
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