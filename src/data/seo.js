export const SITE = 'https://www.novorobotic.com';

export const seoData = {
  '/': {
    title: 'Novo Robotic Surgery Centre | Robotic Surgeon in Ghaziabad, Delhi NCR',
    description: 'Advanced robotic surgery in Kaushambi, Ghaziabad. Dr. Vikrant Sharma — 10,000+ minimally invasive surgeries across bariatric, GI, cancer and gynae procedures.',
  },
  '/services': {
    title: 'Robotic Surgery Procedures in Ghaziabad | Novo Robotic Surgery Centre',
    description: 'Robotic and laparoscopic procedures in Kaushambi, Ghaziabad — hernia, gallbladder, bariatric, colorectal, gynaecologic and cancer surgery under Dr. Vikrant Sharma.',
  },
  '/services/hernia-surgery': {
    title: 'Robotic Hernia Surgery in Ghaziabad | Dr. Vikrant Sharma',
    description: 'Minimally invasive robotic hernia repair in Kaushambi, Ghaziabad. Smaller incisions, less pain, faster recovery. Book a consultation with Dr. Vikrant Sharma.',
  },
  '/services/gallbladder-surgery': {
    title: 'Robotic Gallbladder Surgery in Ghaziabad | Gallstone Removal',
    description: 'Robotic cholecystectomy for gallstones in Kaushambi, Ghaziabad. Day-care procedure, minimal scarring, quick return to routine. Consult Dr. Vikrant Sharma.',
  },
  '/services/appendix-surgery': {
    title: 'Robotic Appendix Surgery in Ghaziabad | Appendectomy',
    description: 'Robotic appendectomy for appendicitis in Kaushambi, Ghaziabad. Rapid recovery with minimally invasive technique. Emergency and planned surgery available.',
  },
  '/services/stomach-surgery': {
    title: 'Robotic Stomach Cancer Surgery in Ghaziabad | Dr. Vikrant Sharma',
    description: 'Robotic gastrectomy for stomach cancer in Kaushambi, Ghaziabad. Precise oncological clearance with minimally invasive access. Consult Dr. Vikrant Sharma.',
  },
  '/services/oesophagus-surgery': {
    title: 'Robotic Oesophagus Cancer Surgery in Ghaziabad | Oesophagectomy',
    description: 'Robotic oesophagectomy for oesophageal cancer in Kaushambi, Ghaziabad. Advanced minimally invasive approach under Dr. Vikrant Sharma.',
  },
  '/services/oesophagus-general-surgery': {
    title: 'Oesophagus Surgery in Ghaziabad | Achalasia & Reflux Treatment',
    description: 'Robotic surgery for achalasia, hiatus hernia and severe acid reflux in Kaushambi, Ghaziabad. Lasting relief with minimally invasive technique.',
  },
  '/services/gallbladder-cancer-surgery': {
    title: 'Radical Cholecystectomy in Ghaziabad | Gallbladder Cancer Surgery',
    description: 'Robotic radical cholecystectomy for gallbladder cancer in Kaushambi, Ghaziabad. Specialised HPB oncology care from Dr. Vikrant Sharma.',
  },
  '/services/colorectal-cancer-surgery': {
    title: 'Robotic Colorectal Cancer Surgery in Ghaziabad | Colon & Rectal',
    description: 'Robotic colon and rectal cancer surgery in Kaushambi, Ghaziabad. Sphincter-preserving techniques with precise oncological outcomes.',
  },
  '/services/bariatric-weight-loss-surgery': {
    title: 'Bariatric Weight Loss Surgery in Ghaziabad | Dr. Vikrant Sharma',
    description: 'Robotic bariatric surgery in Kaushambi, Ghaziabad. 1,000+ successful weight loss procedures. Sleeve, bypass and metabolic surgery options.',
  },
  '/services/robotic-sleeve-gastrectomy': {
    title: 'Robotic Sleeve Gastrectomy in Ghaziabad | Weight Loss Surgery',
    description: 'Robotic sleeve gastrectomy for sustained weight loss in Kaushambi, Ghaziabad. Reduced stomach size, improved metabolic health, faster recovery.',
  },
  '/services/mini-gastric-bypass': {
    title: 'Mini Gastric Bypass Surgery in Ghaziabad | Dr. Vikrant Sharma',
    description: 'Mini gastric bypass (MGB-OAGB) in Kaushambi, Ghaziabad. Effective weight loss with diabetes remission benefits. Robotic minimally invasive technique.',
  },
  '/services/roux-en-gastric-bypass': {
    title: 'Roux-en-Y Gastric Bypass in Ghaziabad | Bariatric Surgery',
    description: 'Roux-en-Y gastric bypass in Kaushambi, Ghaziabad. Gold-standard bariatric procedure for significant, sustained weight loss and metabolic improvement.',
  },
  '/services/gynecologic-cancer-surgery': {
    title: 'Robotic Gynaecologic Cancer Surgery in Ghaziabad | Dr. Vikrant Sharma',
    description: 'Robotic surgery for cervical, uterine and ovarian cancer in Kaushambi, Ghaziabad. 600+ robotic gynaecologic procedures performed.',
  },
  '/services/fertility-preserving-surgery': {
    title: 'Fertility Preserving Surgery in Ghaziabad | Robotic Gynaecology',
    description: 'Fertility-sparing robotic surgery in Kaushambi, Ghaziabad — myomectomy, ovarian cystectomy and conservative cancer procedures for young women.',
  },
  '/services/benign-uterine-ovarian-disorders': {
    title: 'Fibroid & Ovarian Cyst Surgery in Ghaziabad | Robotic Gynaecology',
    description: 'Robotic treatment for fibroids, ovarian cysts, endometriosis and adenomyosis in Kaushambi, Ghaziabad. Uterus-preserving options available.',
  },
  '/doctors/dr-vikrant-sharma': {
    title: 'Dr. Vikrant Sharma | Robotic & Bariatric Surgeon in Ghaziabad',
    description: 'Dr. Vikrant Sharma — MS (PGI Rohtak), trained in UK, Belgium and USA. 10,000+ minimally invasive surgeries. Robotic, bariatric and gynae-oncology specialist.',
  },
  '/contact': {
    title: 'Book Appointment | Novo Robotic Surgery Centre, Kaushambi Ghaziabad',
    description: 'Book a consultation at Novo Robotic Surgery Centre, B 12/13 near Dabur, Anand Vihar, Kaushambi, Ghaziabad. Open Monday to Sunday, 9 AM to 6 PM.',
  },
};

export const getSeo = (pathname) => seoData[pathname] ?? seoData['/'];