import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/gallbladder-surgery`;

export const gallbladderSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Gallbladder Surgery',
      serviceType: 'Robotic Gallbladder Surgery',
      description:
        'Robotic gallbladder surgery at Novo Robotic Surgery Centre is a minimally invasive treatment for gallstones and gallbladder conditions using advanced robotic technology.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Gallbladder Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Gallbladder Surgery',
      alternateName: ['Robotic Cholecystectomy', 'Robot-Assisted Cholecystectomy', 'Robotic Gallbladder Stone Surgery'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'What is the best treatment for gallbladder stones?', acceptedAnswer: { '@type': 'Answer', text: 'Laparoscopic or robotic gallbladder removal (cholecystectomy) is considered the most effective and permanent treatment for symptomatic gallstones.' } },
        { '@type': 'Question', name: 'How can I reduce the risk of gallstones?', acceptedAnswer: { '@type': 'Answer', text: 'Maintaining a healthy weight, eating a balanced diet, exercising regularly, and avoiding rapid weight loss may help reduce the risk.' } },
        { '@type': 'Question', name: 'Can gallstones increase in size over time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Some gallstones can become larger or increase in number if left untreated.' } },
        { '@type': 'Question', name: 'Can I travel after gallbladder surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients can travel within a few days after recovery, but long-distance travel should be discussed with your surgeon.' } },
        { '@type': 'Question', name: 'Can gallstones increase the risk of pancreatitis?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A gallstone blocking the pancreatic duct can trigger acute pancreatitis, which requires urgent medical treatment.' } },
        { '@type': 'Question', name: 'Can children develop gallstones?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Although less common, gallstones can occur in children due to certain medical conditions, obesity, or genetic factors.' } },
        { '@type': 'Question', name: 'Which foods should I avoid after surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Limit fried foods, oily meals, spicy foods, processed snacks, and high-fat dairy products during the early recovery period.' } },
        { '@type': 'Question', name: 'What foods should I eat after gallbladder surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Initially, eat light, low-fat meals. Gradually return to a balanced diet as advised by your surgeon.' } },
        { '@type': 'Question', name: 'Will my digestion be normal after gallbladder removal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most people digest food normally after surgery. Some patients may experience temporary digestive changes that usually improve within a few weeks.' } },
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