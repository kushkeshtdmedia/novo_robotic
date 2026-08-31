import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/robotic-sleeve-gastrectomy`;

export const roboticSleeveGastrectomySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Sleeve Gastrectomy',
      serviceType: 'Robotic Sleeve Gastrectomy',
      description:
        'Robotic sleeve gastrectomy at Novo Robotic Surgery Centre is an advanced bariatric surgery for long-term weight management, performed using robotic-assisted technology.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Robotic Sleeve Gastrectomy', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Sleeve Gastrectomy',
      alternateName: ['Gastric Sleeve Surgery', 'Sleeve Gastrectomy', 'Vertical Sleeve Gastrectomy', 'Robotic Gastric Sleeve'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Is robotic sleeve gastrectomy a safe procedure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. When performed by an experienced bariatric surgeon, robotic sleeve gastrectomy is considered a safe and effective treatment for obesity. Like any surgery, it has risks, but careful patient selection and proper post-operative care help minimize complications.' } },
        { '@type': 'Question', name: 'What is the minimum BMI required for sleeve gastrectomy?', acceptedAnswer: { '@type': 'Answer', text: 'The surgery is commonly recommended for people with a BMI of 35 or higher, or a BMI of 30 or above if they have obesity-related health problems. Your surgeon will determine if you are eligible.' } },
        { '@type': 'Question', name: 'Is robotic sleeve gastrectomy painful?', acceptedAnswer: { '@type': 'Answer', text: 'Some discomfort is normal after surgery, but pain is generally manageable with medication and improves over the first few days.' } },
        { '@type': 'Question', name: 'How much weight can I lose after sleeve gastrectomy?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients lose around 60–70% of their excess body weight within 12 to 18 months if they follow the recommended diet and exercise plan.' } },
        { '@type': 'Question', name: 'What can I eat after robotic sleeve gastrectomy?', acceptedAnswer: { '@type': 'Answer', text: 'Your diet progresses from clear liquids to protein-rich liquids, soft foods, and eventually healthy solid foods under the guidance of your healthcare team.' } },
        { '@type': 'Question', name: 'Will I have loose skin after losing weight?', acceptedAnswer: { '@type': 'Answer', text: 'Some patients may develop loose skin after significant weight loss. The amount depends on factors such as age, genetics, and the amount of weight lost.' } },
        { '@type': 'Question', name: 'Can I become pregnant after sleeve gastrectomy?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pregnancy is possible after surgery, but doctors generally recommend waiting 12–18 months before trying to conceive.' } },
      ],
    },
  ],
};