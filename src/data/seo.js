export const SITE = 'https://www.novorobotic.com';

export const seoData = {
  '/': {
    title: 'Robotic Surgery Centre in Ghaziabad | Novo Robotic',
    description: 'Novo Robotic Surgery Centre in Ghaziabad provides advanced robotic, bariatric, GI, cancer and gynaecological surgery with patient-focused, robot-assisted surgical care.',
  },
  '/services': {
    title: 'Robotic Surgery Procedures in Ghaziabad | Novo Robotic Surgery Centre',
    description: 'Robotic and laparoscopic procedures in Kaushambi, Ghaziabad — hernia, gallbladder, bariatric, colorectal, gynaecologic and cancer surgery under Dr. Vikrant Sharma.',
  },
  '/services/tele-robotic-surgery': {
    title: 'Tele-Robotic Surgery in Delhi NCR | Advanced Remote Robotic Surgery',
    description:
      'Tele-Robotic Surgery at Novo Robotic Surgery Centre, Kaushambi, Ghaziabad, connects advanced robotic technology with expert surgical care by Dr. Vikrant Sharma.',
    canonical: 'https://www.novorobotic.com/services/tele-robotic-surgery',
    og: {
      title: 'Tele-Robotic Surgery in Delhi NCR | Novo Robotic Surgery Centre',
      description:
        'Remote robotic surgery with Dr. Vikrant Sharma — sub-millimetre precision, keyhole incisions, and a full surgical team with the patient throughout.',
      image: 'https://www.novorobotic.com/images/og/tele-robotic-surgery.jpg',
      type: 'article',
    },
  },
  '/services/hernia-surgery': {
    title: 'Hernia Surgery in Ghaziabad | Robot Assisted Hernia Surgery',
    description: 'Need hernia surgery in Ghaziabad, Delhi NCR? Explore robot-assisted hernia surgery at Novo Robotic Surgery Centre. Book a consultation for expert surgical care.',
  },
  '/services/gallbladder-surgery': {
    title: 'Gallbladder Surgery in Ghaziabad | Robot Assisted Surgery',
    description: 'Get advanced gallbladder surgery at Novo Robotic Surgery Centre. Robot-assisted treatment for gallstones and gallbladder conditions with expert surgical care.',
  },
  '/services/appendix-surgery': {
    title: 'Advanced Robotic Appendix Surgery & Appendectomy | Novo Robotic',
    description: 'Get fast relief with advanced, minimally invasive appendix surgery at Novo Robotic Surgery Centre. Minimal scarring, quick recovery, and expert surgical care.',
  },
  '/services/oesophagus-surgery': {
    title: 'Robotic Oesophagus Surgery in Ghaziabad | General & GI Surgery',
    description: 'Consult leading gastrointestinal surgeons at Novo Robotic for advanced esophageal procedures. Book a consultation.',
  },
  '/services/robotic-sleeve-gastrectomy': {
    title: 'Robotic Sleeve Gastrectomy | Bariatric Weight Loss Surgery',
    description: 'Achieve long-term weight loss with robotic sleeve gastrectomy at Novo Robotic. Advanced bariatric surgery. Book a consultation.',
  },
  '/services/robotic-roux-en-y-gastric-bypass': {
    title: 'Robotic Roux-en-Y Gastric Bypass | Bariatric Weight Loss Surgery',
    description: 'Explore advanced bariatric options at Novo Robotic Surgery Centre. Our expert team provides precise robotic Roux-en-Y gastric bypass for lasting results.',
  },
  '/services/robotic-mini-gastric-bypass': {
    title: 'Robotic Mini Gastric Bypass | Bariatric Weight Loss Surgery',
    description: 'Consult leading bariatric surgeons at Novo Robotic for advanced mini gastric bypass surgery. Experience high-precision care for your weight loss journey.',
  },
  '/services/colorectal-cancer-surgery': {
    title: 'Robot Assisted Colorectal Cancer Surgery | Novo Robotic',
    description: 'Consult expert GI surgical oncologists at Novo Robotic for precision robot assisted colorectal cancer surgery. Call now +91 8882844375.',
  },
  '/services/stomach-cancer-surgery': {
    title: 'Robotic Stomach Cancer Surgery in Ghaziabad | Novo Robotic',
    description: 'Advanced robotic treatment for stomach cancer in Ghaziabad. Explore precise, minimally invasive GI oncology care with Dr. Vikrant Sharma at Novo Robotic.',
  },
  '/services/gynecologic-cancer-surgery': {
    title: 'Robot Assisted Gynecologic Cancer Surgery | Novo Robotic',
    description: 'Explore advanced robot assisted surgery for gynecologic cancer treatment at Novo Robotic Surgery Centre. Call now +91 8882844375.',
  },
  '/services/fertility-preserving-surgery': {
    title: 'Robot Assisted Fertility Preserving Surgery | Novo Robotic',
    description: 'Preserve your uterus and fertility with robot assisted fibroid removal at Novo Robotic. Consult leading surgeons for robot assisted fertility preserving surgery.',
  },
  '/services/benign-disorders-uterus-ovaries': {
    title: 'Uterus & Ovarian Disorders Treatment in Ghaziabad | Novo Robotic',
    description: 'Get expert care for benign uterus and ovarian conditions in Ghaziabad, including fibroids and ovarian cysts. Explore minimally invasive treatment at Novo Robotic.',
  },
  '/doctors/dr-vikrant-sharma': {
    title: 'Dr. Vikrant Sharma | Robotic & Bariatric Surgeon in Ghaziabad',
    description: 'Dr. Vikrant Sharma is a robotic and bariatric surgeon in Ghaziabad specializing in weight loss, GI, hernia, gallbladder, oncology and minimally invasive surgery.',
  },
  '/contact': {
    title: 'Contact Novo Robotic +91 8882844375 | Kaushambi, Ghaziabad',
    description: 'Contact Novo Robotic in Kaushambi, Ghaziabad for robotic, bariatric, GI, oncology and gynaecological surgery. Call 8882844375 to book a consultation.',
  },
  '/blog': {
    title: 'Robotic Surgery Blog | Novo Robotic',
    description: 'Learn about robotic surgery, recovery, weight loss, hernia care, and more from the Novo Robotic blog.',
  },
  '/blog/sleeve-gastrectomy-vs-gastric-bypass': {
    title: 'Sleeve Gastrectomy vs Gastric Bypass: Which Is Better?',
    description: 'Compare sleeve gastrectomy and gastric bypass surgery for weight loss, recovery, risks, and long-term outcomes before choosing the right bariatric option.',
  },
  '/blog/laparoscopic-vs-robotic-surgery': {
    title: 'Laparoscopic vs Robotic Surgery: Key Differences & Benefits',
    description: 'Confused between laparoscopic and robotic surgery? Compare precision, recovery time, cost, and risks to choose the right procedure with your surgeon.',
  },
  '/blog/hernia-signs-and-symptoms': {
    title: 'How to Spot a Hernia: Signs & Symptoms by Body Part',
    description: 'Learn the signs and symptoms of a hernia in the groin, belly button, thigh, upper abdomen or an old scar, plus the warning signs that need urgent care.',
  },
};

export const getSeo = (pathname) => seoData[pathname] ?? seoData['/'];