import { SITE } from '../seo';
import { ORG_ID, HOME_URL, AREA_SERVED } from './organization';

const PAGE_URL = `${SITE}/services/appendix-surgery`;

export const appendixSurgerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: 'Robotic Appendix Surgery',
      serviceType: 'Robotic Appendix Surgery',
      description:
        'Robotic appendix surgery (appendectomy) at Novo Robotic Surgery Centre is a minimally invasive procedure for removing an inflamed or infected appendix.',
      about: { '@id': `${PAGE_URL}#procedure` },
      areaServed: AREA_SERVED,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Appendix Surgery', item: PAGE_URL },
      ],
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Robotic Appendix Surgery',
      alternateName: ['Robotic Appendectomy', 'Appendectomy', 'Robot-Assisted Appendectomy'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Is appendix surgery safe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Appendix surgery is a routine and safe procedure when performed by an experienced surgeon.' } },
        { '@type': 'Question', name: 'Can appendicitis come back after surgery?', acceptedAnswer: { '@type': 'Answer', text: 'No. Once the appendix is removed, appendicitis cannot recur.' } },
        { '@type': 'Question', name: 'When can I eat after appendix surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients can start with liquids a few hours after surgery and gradually return to a normal diet as advised by their surgeon.' } },
        { '@type': 'Question', name: 'Which doctor should I consult for appendix surgery?', acceptedAnswer: { '@type': 'Answer', text: 'A general surgeon or GI surgeon experienced in laparoscopic and robotic surgery is the right specialist for appendix treatment.' } },
        { '@type': 'Question', name: 'Is robotic appendix surgery better than open surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Robotic surgery offers smaller cuts, less pain, faster recovery, and lower infection risk for many patients compared to traditional open surgery.' } },
        { '@type': 'Question', name: 'Will I have stitches after appendix surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Small incisions are closed with stitches or surgical glue, and the scars are usually minimal.' } },
        { '@type': 'Question', name: 'How many days do I need to stay in the hospital?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients are discharged within 24 to 48 hours, depending on their recovery and whether the appendix had ruptured.' } },
        { '@type': 'Question', name: 'Can children undergo robotic appendix surgery?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Depending on the child's age and condition, robotic or laparoscopic surgery may be recommended by the surgeon." } },
        { '@type': 'Question', name: 'What foods should I eat after appendix surgery?', acceptedAnswer: { '@type': 'Answer', text: "Start with light, easy-to-digest foods and gradually return to your normal diet. Drink plenty of water and follow your surgeon's dietary advice." } },
        { '@type': 'Question', name: 'How soon can I walk after appendix surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients are encouraged to start walking within a few hours after surgery to promote healing and reduce the risk of blood clots.' } },
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