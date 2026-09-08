import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/roux-en-gastric-bypass`;

export const rouxEnGastricBypassSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Roux-en-Y Gastric Bypass',
      serviceType: 'Robotic Roux-en-Y Gastric Bypass',
      description:
        'Robotic Roux-en-Y gastric bypass at Novo Robotic Surgery Centre is an advanced bariatric procedure designed for sustainable weight loss and improvement of obesity-related health conditions using robotic-assisted surgical technology.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Roux-en-Y Gastric Bypass', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Roux-en-Y Gastric Bypass',
      alternateName: ['Roux-en-Y Gastric Bypass', 'Robotic Gastric Bypass', 'Robotic Roux-en-Y Bypass', 'Robot-Assisted Gastric Bypass'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'How much weight can I lose after the Roux-en-Y gastric bypass?', acceptedAnswer: { '@type': 'Answer', text: 'Many patients lose 60–80% of their excess body weight within 12 to 18 months when they follow the recommended diet, exercise, and follow-up plan.' } },
        { '@type': 'Question', name: 'What foods can I eat after gastric bypass surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Your diet progresses gradually from clear liquids to protein-rich liquids, soft foods, and then healthy solid foods. Our bariatric team will provide a detailed meal plan.' } },
        { '@type': 'Question', name: 'Are there any foods I should avoid after gastric bypass?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sugary foods, carbonated drinks, fried foods, and high-fat meals should be limited, as they may cause discomfort, slow weight loss, or lead to dumping syndrome.' } },
        { '@type': 'Question', name: 'Is Roux-en-Y gastric bypass reversible?', acceptedAnswer: { '@type': 'Answer', text: 'Although reversal is possible in rare situations, Roux-en-Y gastric bypass is considered a permanent procedure and should be viewed as a long-term treatment for obesity.' } },
        { '@type': 'Question', name: 'Can I regain weight after gastric bypass surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Weight regain can happen if healthy eating habits and regular physical activity are not maintained. Ongoing follow-up with your bariatric team helps support long-term success.' } },
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