import { useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Crosshair,
  Eye,
  Scissors,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Boxes,
  Layers,
  Sparkles,
 ChevronDown
} from 'lucide-react';


import Hero from '../../assets/images/GyaneHeroImage.png';
import AnatomyImage from '../../assets/images/GynecologicCancersDiagram.png';
import UterineImage from '../../assets/images/UterineCancer.png';
import ConsultImage from '../../assets/images/ConsultImage.png';

/* -------------------------------- data ---------------------------------- */
const faqs = [
  {
    q: 'Is robotic surgery safe for ovarian, uterine, and cervical cancer?',
    a: 'Yes. Robotic surgery is considered safe and effective for selected patients when performed by an experienced robotic gynecologic cancer surgeon after careful evaluation.',
  },
  {
    q: 'Can gynecological cancer affect fertility?',
    a: 'Yes. Some treatments may affect fertility. Women who wish to have children in the future should discuss fertility-preserving treatment options with their surgeon before starting treatment.',
  },
  {
    q: 'What are the survival rates for women with gynecologic cancer?',
    a: 'Survival depends on the type of cancer, its stage, and how early it is diagnosed. Early detection and timely treatment offer the best chance of successful outcomes and long-term survival.',
  },
  {
    q: 'Is robotic surgery safe for gynecologic cancer?',
    a: 'Yes. Robotic surgery is a safe and effective option for many women when performed by an experienced surgeon.',
  },
  {
    q: 'What types of treatments are used for gynecologic cancers?',
    a: 'Treatment depends on the type and stage of cancer. Common options include robotic surgery, laparoscopic surgery, chemotherapy, radiation therapy, targeted therapy, immunotherapy, and hormone therapy. Your specialist will recommend the most appropriate treatment plan based on your condition.',
  },
];
const procedures = [
  {
    title: 'Robot-Assisted Hysterectomy',
    body: 'A robot-assisted hysterectomy removes the uterus through tiny cuts instead of one large incision. It is commonly used to treat conditions like fibroids, endometriosis, heavy bleeding, and pelvic pain. The robotic system gives surgeons a clear 3D view and better precision, leading to less pain, smaller scars, and faster recovery.',
  },
  {
    title: 'Robot-Assisted Myomectomy',
    body: 'Robot-assisted myomectomy removes uterine fibroids while preserving the uterus, making it a good option for women planning future pregnancy. The robotic system helps surgeons remove fibroids precisely and repair the uterus carefully for better healing.',
  },
  {
    title: 'Robot-Assisted Radical Hysterectomy for Uterine Cancer',
    body: 'This advanced robotic procedure is used to treat cancers of the uterus, cervix, and endometrium. The surgery removes cancer-affected tissues with high precision while protecting nearby nerves and organs. Benefits include less blood loss, smaller cuts, and quicker recovery.',
  },
  {
    title: 'Robot-Assisted Vaginoplasty for Absent Vaginal Canal',
    body: 'This procedure helps create a vaginal canal in women born without a fully developed vagina, such as in MRKH syndrome. Robotic technology allows surgeons to work safely and accurately in deep pelvic areas with minimal scarring.',
  },
  {
    title: 'Robot-Assisted Ovarian Cystectomy',
    body: 'Robot-assisted ovarian cystectomy removes ovarian cysts while preserving healthy ovarian tissue. This helps maintain hormone balance and fertility while ensuring precise and safe cyst removal.',
  },
  {
    title: 'Robot-Assisted Pelvic Floor Repair for Vault Prolapse',
    body: 'This robotic procedure treats vaginal vault prolapse, where pelvic organs drop after hysterectomy. Using advanced robotic techniques, surgeons restore support to the pelvic organs, improving comfort, bladder control, and quality of life.',
  },
];
const understandingPoints = [
  'Common types include uterine, ovarian, cervical, vulvar and vaginal cancer.',
  'Each type may have different symptoms, risk factors and treatment options, making early diagnosis and timely treatment important for better outcomes and recovery.',
];

const roboticAdvantages = [
    {
    icon: Crosshair,
    title: 'Surgeon-Controlled Console',
    body: 'During this procedure, our experienced robotic gynecologic oncologists control robotic-assisted instruments through a high-tech console, enabling highly precise movements through very small incisions.',
  },
  {
    icon: Eye,
    title: 'Magnified 3D Visualization',
    body: 'The advanced robotic surgical system provides a magnified high-definition 3D view of the surgical area, allowing surgeons to perform complex cancer procedures with greater accuracy while protecting nearby healthy tissues, nerves, and organs.',
  },
  {
    icon: Scissors,
    title: 'Benefits Over Open Surgery',
    body: 'Compared to traditional open surgery, robotic gynecologic cancer surgery at Novo Robotic Surgery Centre offers benefits such as smaller incisions, reduced pain, minimal blood loss, shorter hospital stays, faster recovery, and improved surgical precision for women undergoing gynecologic cancer treatment.',
  },
];
const cancerTypes = [
  {
    icon: Layers,
    title: 'Uterine (Endometrial) Cancer',
    body: 'The most common gynecologic cancer in women, uterine cancer can often be treated effectively with robotic surgery. At Novo Robotic Surgery Centre, robotic-assisted procedures allow our surgeons to precisely remove the uterus and surrounding tissues through small incisions, resulting in minimal blood loss, less pain, and faster recovery.',
  },
  {
    icon: Boxes,
    title: 'Ovarian Cancer',
    body: 'Ovarian cancer is frequently diagnosed at an advanced stage and requires highly specialized surgical expertise. Our advanced robotic platform provides enhanced 3D visualization and precise instrument control, helping surgeons remove tumors effectively while protecting nearby healthy tissues and organs.',
  },
  {
    icon: Crosshair,
    title: 'Cervical Cancer',
    body: 'Robotic surgery is highly effective for selected early-stage cervical cancers. Our team performs robotic radical hysterectomy and lymph node dissection with exceptional precision, reducing surgical trauma, postoperative pain, and hospital stay.',
  },
  {
    icon: ShieldCheck,
    title: 'Vulvar Cancer',
    body: 'Vulvar cancer affects a delicate and sensitive area that requires careful surgical precision. Robotic-assisted techniques at Novo help achieve thorough cancer removal while minimizing tissue damage, scarring, and postoperative discomfort.',
  },
  {
    icon: HeartHandshake,
    title: 'Vaginal Cancer',
    body: 'Vaginal cancer is rare but requires personalized treatment planning. At Novo Robotic Surgery Centre, we use advanced robotic surgical techniques tailored to each patient\u2019s anatomy, cancer stage, and treatment needs for optimal outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Fallopian Tube Cancer',
    body: 'Although uncommon, fallopian tube cancer requires expert gynecologic oncology care. Our robotic-assisted surgical approach allows precise cancer removal while minimizing impact on surrounding tissues and supporting faster recovery.',
  },
];
// const procedures = [
//   {
//     title: 'Robot-Assisted Hysterectomy',
//     body: 'Removes the uterus through tiny cuts instead of one large incision. Commonly used for fibroids, endometriosis, heavy bleeding and pelvic pain — with less pain, smaller scars and faster recovery.',
//   },
//   {
//     title: 'Robot-Assisted Myomectomy',
//     body: 'Removes uterine fibroids while preserving the uterus, making it a good option for women planning future pregnancy, with careful robotic repair for better healing.',
//   },
//   {
//     title: 'Robot-Assisted Radical Hysterectomy',
//     body: 'For cancers of the uterus, cervix and endometrium. Removes affected tissue with high precision while protecting nearby nerves and organs — less blood loss and quicker recovery.',
//   },
//   {
//     title: 'Robot-Assisted Vaginoplasty',
//     body: 'Creates a vaginal canal in women born without a fully developed vagina, such as in MRKH syndrome, working safely and accurately in deep pelvic areas with minimal scarring.',
//   },
//   {
//     title: 'Robot-Assisted Ovarian Cystectomy',
//     body: 'Removes ovarian cysts while preserving healthy ovarian tissue, helping maintain hormone balance and fertility with precise, safe cyst removal.',
//   },
//   {
//     title: 'Robot-Assisted Pelvic Floor Repair',
//     body: 'Treats vaginal vault prolapse after hysterectomy by restoring support to the pelvic organs, improving comfort, bladder control and quality of life.',
//   },
// ];

const surgerySteps = [
  {
    title: 'Anaesthesia & Preparation',
    body: 'The patient is given general anaesthesia so they remain fully asleep and pain-free during the surgery. The body is carefully positioned to give the surgeon a clear view of the pelvic area.',
  },
  {
    title: 'Tiny Keyhole Incisions',
    body: 'Instead of one large cut, the surgeon makes 4–5 small keyhole incisions in the abdomen for robotic instruments and a camera.',
  },
  {
    title: 'Robotic System Setup & Surgeon Control',
    body: 'The robotic arms are connected through tiny incisions, along with a high-definition 3D camera and specialized instruments. The surgeon controls every movement from a nearby console. The robotic system never works independently.',
  },
  {
    title: 'Cancer Removal Surgery',
    body: 'Using a magnified 3D view, the surgeon carefully removes the cancerous tissue and nearby affected lymph nodes while protecting healthy organs and nerves.',
  },
  {
    title: 'Closure & Recovery',
    body: 'After the procedure, the instruments are removed and the tiny cuts are closed with stitches or surgical glue, resulting in less pain, smaller scars and faster recovery.',
  },
];

const symptoms = [
  'Abnormal vaginal bleeding',
  'Pelvic pain or pressure',
  'Abdominal bloating',
  'Pain during intercourse',
  'Unexplained weight loss',
  'Changes in urinary or bowel habits',
  'Persistent fatigue',
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: 'World-Class Surgical Expertise',
    body: 'Led by renowned specialists such as Dr Vikrant Sharma, our centre is a trusted leader in Kaushambi, Ghaziabad, for treating complex endometrial, cervical and ovarian cancers.',
  },
  {
    icon: Cpu,
    title: 'SSI Mantra Robotic System',
    body: 'Our surgeons operate with unmatched 3D high-definition visualization and wristed instruments that mimic the human hand with far greater precision.',
  },
  {
    icon: HeartHandshake,
    title: 'Faster, Comfortable Recovery',
    body: 'By preserving surrounding healthy tissue, we ensure a faster recovery and shorter hospital stays, allowing most women to return home within 24 hours.',
  },
];

/* ------------------------------ component -------------------------------- */

export default function GynecologicCancerSurgery() {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook this up to your appointment API / WhatsApp flow.
    console.log(form);
  };

  return (
    <main className="bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e] antialiased">
      {/* ============================= HERO ============================= */}
      <section className="relative isolate overflow-hidden">
        <img
          src={Hero}
          alt="Robotic surgical team performing a gynecologic oncology procedure"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#005a65] via-[#005a65]/95 to-[#0d7481]/75" />

        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-[120px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase leading-[1.5] tracking-[0.1em] text-[#9deffe] backdrop-blur-[20px]">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Centre of excellence in robotic surgery
          </span>

          <h1 className="mt-8 max-w-3xl text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[64px]">
            Advanced Robotic Gynecologic Cancer Surgery in Kaushambi, Ghaziabad
          </h1>

          <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-[#e5eced] md:text-[18px]">
            At Novo Robotic Surgery Centre, we treat cancers of the female
            reproductive system with advanced minimally invasive robotic
            technology — for greater precision, smaller incisions and faster
            recovery.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#request-call"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#fdd350] px-7 py-4 font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#241a00] transition-colors duration-200 hover:bg-[#ebc241] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Schedule your oncology visit
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#understanding"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-4 font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn more
              <ArrowDown className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================== UNDERSTANDING ========================= */}
<section
        id="understanding"
        className="scroll-mt-24 bg-[#f9f9fc] py-16 md:py-[120px]"
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-[64px]">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2] md:font-bold">
              Understanding Gynecologic Cancer
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
              Gynecologic cancer is a term used for cancers that develop in a
              woman's reproductive organs. It is not a single disease, but a
              group of cancers that can affect different parts of the female
              reproductive system.
            </p>

            <ul className="mt-8 space-y-4">
              {understandingPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-[#0d7481]"
                    strokeWidth={2}
                  />
                  <span className="text-[16px] leading-[1.6] text-[#3e484a]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <div className="bg-[#005a65] px-6 py-4">
                <p className="font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#b9f4ff]">
                  Gynecologic cancers
                </p>
              </div>

              <div className="flex items-center justify-center bg-white p-4 md:p-6">
                <img
                  src={AnatomyImage}
                  alt="Illustration of the female reproductive system marking uterine, ovarian and cervical cancer sites"
                  className="mx-auto h-auto w-full max-h-[280px] object-contain sm:max-h-[360px] md:max-h-[440px]"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-lg bg-white/80 px-4 py-3 shadow-[0px_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-[20px]">
              <Layers className="h-5 w-5 text-[#0d7481]" strokeWidth={2} />
              <div>
                <p className="font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#6e797b]">
                  Precision mapping
                </p>
                <p className="text-[16px] font-bold leading-tight text-[#1a1c1e]">
                  3D Visuals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT IS ROBOTIC SURGERY ================== */}
      <section className="bg-[#f3f3f6] py-16 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
              What is Robotic Gynecologic Cancer Surgery?
            </h2>
           
<p className="mt-6 text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
  Robotic gynecologic cancer surgery is an advanced minimally invasive
  surgical technique used to treat cancers of the female reproductive
  system, including uterine cancer, cervical cancer, ovarian cancer,
  endometrial cancer, and other complex gynecologic cancers.
</p>
          </div>

          <div className="mt-[64px] grid grid-cols-1 gap-8 md:grid-cols-3">
            {roboticAdvantages.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-[1.5rem] bg-white p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#e5eced]">
                  <Icon className="h-6 w-6 text-[#005a65]" strokeWidth={2} />
                </span>
                <h3 className="mt-6 text-[24px] font-semibold leading-[1.4] text-[#1a1c1e]">
                  {title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-[#3e484a]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
             {/*How surgery is treated at novo */}
             <section className="bg-[#f3f3f6] py-16 md:py-[120px]">
  <div className="mx-auto max-w-[1280px] px-5 md:px-6">
    <h2 className="mx-auto max-w-3xl text-center text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
      Advanced Robotic Gynecologic Cancer Procedures at Novo Robotic Surgery Centre
    </h2>
    <p className="mx-auto mt-6 max-w-2xl text-center text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
      Our specialized robotic gynecologic cancer procedures include:
    </p>

    <div className="mt-[64px] space-y-4">
      {procedures.map((procedure, index) => {
        const accent = index % 2 === 1;
        return (
          <article
            key={procedure.title}
            className={`grid grid-cols-1 gap-4 rounded-[1.5rem] p-6 md:grid-cols-[auto_minmax(0,340px)_1fr] md:items-start md:gap-8 md:p-8 ${
              accent
                ? 'bg-[#005a65]'
                : 'bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.04)]'
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-['IBM_Plex_Sans'] text-[12px] font-bold ${
                accent ? 'bg-[#fdd350] text-[#241a00]' : 'bg-[#005a65] text-white'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3
              className={`text-[18px] font-bold leading-[1.4] md:text-[24px] md:font-semibold ${
                accent ? 'text-white' : 'text-[#1a1c1e]'
              }`}
            >
              {procedure.title}
            </h3>

            <p
              className={`text-[16px] leading-[1.6] ${
                accent ? 'text-[#b9f4ff]' : 'text-[#3e484a]'
              }`}
            >
              {procedure.body}
            </p>
          </article>
        );
      })}
    </div>
  </div>
</section>
              
      {/* =========================== CANCER TYPES ======================= */}
     <section className="bg-[#f9f9fc] py-16 md:py-[120px]">
  <div className="mx-auto max-w-[1280px] px-5 md:px-6">
   <h2 className="mx-auto max-w-3xl text-center text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
  Types of Gynecologic Cancer Treated at Novo Robotic Surgery Centre
</h2>
    {/* image card */}
   <div className="mt-[64px] flex justify-center">
  <div className="aspect-square w-full max-w-[480px] overflow-hidden rounded-[1.5rem] bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
    <img
      src={UterineImage}
      alt="Robotic treatment for gynecologic cancers at Novo Robotic Surgery Centre"
      className="h-full w-full object-contain p-6"
    />
  </div>
</div>

    {/* content cards */}
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      {cancerTypes.map(({ icon: Icon, title, body }, index) => (
        <article
          key={title}
          className="rounded-[1.5rem] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:p-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#005a65] font-['IBM_Plex_Sans'] text-[12px] font-bold text-white">
              {index + 1}
            </span>
            <Icon className="h-6 w-6 text-[#0d7481]" strokeWidth={2} />
          </div>
          <h3 className="mt-5 text-[24px] font-semibold leading-[1.4] text-[#1a1c1e]">
            {title}
          </h3>
          <p className="mt-3 text-[16px] leading-[1.6] text-[#3e484a]">
            {body}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* ============================ PROCEDURES ======================== */}
      <section className="bg-[#f9f9fc] pb-16 md:pb-[120px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <h2 className="text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
            Advanced Robotic Gynecologic Cancer Procedures
          </h2>

          <div className="mt-[64px] grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {procedures.map((procedure, index) => (
              <article key={procedure.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#005a65] font-['IBM_Plex_Sans'] text-[12px] font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold leading-[1.4] text-[#1a1c1e]">
                    {procedure.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.6] text-[#3e484a]">
                    {procedure.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== HOW IT IS PERFORMED ===================== */}
      <section className="bg-[#f3f3f6] py-16 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <h2 className="max-w-3xl text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
            How Robotic Gynecologic Cancer Surgery is Performed at Novo Robotic
            Surgery Centre
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
            Before surgery, our specialist carefully reviews your MRI or CT
            scans, blood tests and medical history. This detailed planning helps
            the surgeon prepare for a safe and precise robotic procedure.
          </p>

          <ol className="mt-[64px] space-y-4">
            {surgerySteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-[1.5rem] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:p-8"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#005a65] font-['IBM_Plex_Sans'] text-[12px] font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold leading-[1.4] text-[#1a1c1e] md:text-[24px] md:font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.6] text-[#3e484a]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================= SYMPTOMS ========================= */}
      <section className="bg-[#f9f9fc] py-16 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <h2 className="text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
            Common Symptoms of Gynecologic Cancer
          </h2>

          <div className="mt-[64px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-center gap-3 rounded-[1rem] bg-white px-6 py-5 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#fdd350]" />
                <p className="text-[16px] leading-[1.6] text-[#1a1c1e]">
                  {symptom}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ========================= */}
      <section className="bg-[#f3f3f6] py-16 md:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-[64px]">
          <h2 className="text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
            Recovery After Robotic Gynecologic Cancer Surgery
          </h2>

          <div>
            <p className="text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
              Recovery after robotic gynecologic cancer surgery is generally
              faster and more comfortable compared to traditional open surgery.
              With tiny keyhole incisions and advanced robotic precision,
              patients often experience less pain, minimal blood loss, smaller
              scars and a shorter hospital stay.
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
              Most patients begin walking within a day after surgery and can
              gradually return to normal activities within a few weeks. At Novo
              Robotic Surgery Centre, personalized postoperative care and
              recovery support help ensure safe healing and improved comfort
              after treatment.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ WHY CHOOSE ======================== */}
      <section className="bg-[#f9f9fc] py-16 md:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-[64px]">
          <div className="overflow-hidden rounded-[1.5rem] shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <img
              src={ConsultImage}
              alt="Oncology consultation at Novo Robotic Surgery Centre"
              className="h-[320px] w-full object-cover md:h-[440px]"
            />
          </div>

          <div>
            <h2 className="text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
              Why Choose Novo Robotic Surgery Centre?
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
              We redefine gynecologic cancer care by combining world-class
              surgical expertise with advanced robotic technology — clinical
              excellence meeting a smoother, safer path to recovery.
            </p>

            <div className="mt-10 space-y-4">
              {whyChoose.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="flex gap-4 rounded-[1rem] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
                >
                  <Icon
                    className="mt-1 h-5 w-5 shrink-0 text-[#0d7481]"
                    strokeWidth={2}
                  />
                  <div>
                    <h3 className="text-[18px] font-bold leading-[1.4] text-[#1a1c1e]">
                      {title}
                    </h3>
                    <p className="mt-2 text-[16px] leading-[1.6] text-[#3e484a]">
                      {body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* ─── FAQs ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Need Clarity</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Answers to the questions patients ask us most about robotic gynecologic cancer surgery.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 rounded-3xl border border-gray-200 open:bg-white open:shadow-[0px_10px_40px_rgba(0,0,0,0.04)] open:border-teal-200 transition-all duration-300"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-7 py-5">
                  <span className="font-bold text-gray-900 text-sm md:text-base group-open:text-teal-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-teal-100 group-open:bg-teal-700 flex items-center justify-center flex-shrink-0 transition-colors">
                    <ChevronDown
                      size={16}
                      className="text-teal-600 group-open:text-white group-open:rotate-180 transition-transform duration-300"
                    />
                  </span>
                </summary>
                <div className="px-7 pb-6 -mt-1">
                  <div className="border-l-4 border-teal-500 pl-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}