import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/mini-gastric-bypass`;

export const miniGastricBypassSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Mini Gastric Bypass',
      serviceType: 'Robotic Mini Gastric Bypass',
      description:
        'Robotic mini gastric bypass at Novo Robotic Surgery Centre is an advanced minimally invasive bariatric procedure designed to support significant and long-term weight loss and improve obesity-related health conditions.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Mini Gastric Bypass', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Mini Gastric Bypass',
      alternateName: ['Mini Gastric Bypass', 'Single Anastomosis Gastric Bypass', 'SAGB', 'MGB', 'Robotic Mini Gastric Bypass Surgery'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'How is Mini Gastric Bypass different from Roux-en-Y Gastric Bypass?', acceptedAnswer: { '@type': 'Answer', text: 'Mini Gastric Bypass involves a single connection between the stomach and intestine, making the procedure less complex than Roux-en-Y Gastric Bypass, which requires two intestinal connections.' } },
        { '@type': 'Question', name: 'What foods should I avoid after a Mini Gastric Bypass?', acceptedAnswer: { '@type': 'Answer', text: 'Avoid carbonated drinks, fried foods, sugary desserts, processed snacks, and high-fat meals. These foods can interfere with weight loss and may cause digestive discomfort.' } },
        { '@type': 'Question', name: 'How much water should I drink after surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Aim to drink 1.5–2 liters of water daily by taking small sips throughout the day. Avoid drinking during meals to prevent stomach discomfort.' } },
        { '@type': 'Question', name: 'When can I lift heavy weights after surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Heavy lifting is generally avoided for 4–6 weeks after surgery. Your surgeon will advise you based on your recovery.' } },
        { '@type': 'Question', name: 'Can Mini Gastric Bypass help with PCOS?', acceptedAnswer: { '@type': 'Answer', text: 'Weight loss after Mini Gastric Bypass may improve hormone balance, menstrual regularity, and symptoms of Polycystic Ovary Syndrome (PCOS) in many women.' } },
        { '@type': 'Question', name: 'Can I drink alcohol after the Mini Gastric Bypass?', acceptedAnswer: { '@type': 'Answer', text: 'Alcohol should be avoided during the initial recovery period. After recovery, alcohol should only be consumed in moderation and after discussing it with your bariatric surgeon.' } },
        { '@type': 'Question', name: "What happens if I don't follow the recommended diet?", acceptedAnswer: { '@type': 'Answer', text: 'Not following the prescribed diet may slow weight loss, increase the risk of nutritional deficiencies, cause digestive problems, or contribute to weight regain.' } },
        { '@type': 'Question', name: 'What is the success rate of Mini Gastric Bypass?', acceptedAnswer: { '@type': 'Answer', text: 'Mini Gastric Bypass has a high success rate when combined with healthy lifestyle changes. Most patients achieve significant and sustained weight loss while also experiencing improvement in obesity-related health conditions.' } },
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