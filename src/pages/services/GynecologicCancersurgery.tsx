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
} from 'lucide-react';


import HeroImage from '../../assets/images/GyaneHeroImage.png';
import AnatomyImage from '../../assets/images/GynecologicCancersDiagram.png';
import UterineImage from '../../assets/images/UterineCancer.png';
import ConsultImage from '../../assets/images/ConsultImage.png';

/* -------------------------------- data ---------------------------------- */

const understandingPoints = [
  'Early detection significantly improves treatment outcomes.',
  'Each type of gynecologic cancer presents unique symptoms and requires a tailored approach.',
];

const roboticAdvantages = [
  {
    icon: Crosshair,
    title: 'Unmatched Precision',
    body: "Robotic arms mimic the surgeon's hand movements but with a greater range of motion and tremor filtration.",
  },
  {
    icon: Eye,
    title: '3D HD View',
    body: 'The system provides a magnified, high-definition 3D view of the surgical site, allowing for meticulous dissection.',
  },
  {
    icon: Scissors,
    title: 'Smaller Incisions',
    body: 'Procedures are performed through tiny keyhole incisions, significantly reducing trauma compared to traditional open surgery.',
  },
];

const procedures = [
  {
    title: 'Robot-Assisted Hysterectomy',
    body: 'Removal of the uterus with extreme precision, often preserving surrounding healthy tissues.',
  },
  {
    title: 'Myomectomy',
    body: 'Precise removal of fibroids while leaving the uterus intact, crucial for fertility preservation.',
  },
  {
    title: 'Radical Hysterectomy',
    body: 'Comprehensive removal of the uterus, cervix and surrounding tissues for advanced cervical cancer.',
  },
  {
    title: 'Vaginoplasty',
    body: 'Reconstructive procedures following cancer excision to restore structure and function.',
  },
  {
    title: 'Ovarian Cystectomy',
    body: 'Delicate removal of cysts or tumours from the ovary, sparing healthy ovarian tissue.',
  },
  {
    title: 'Pelvic Floor Repair',
    body: 'Addressing structural issues that may arise concurrently with or following cancer treatment.',
  },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: 'Expert Surgeons',
    body: 'Our team is comprised of fellowship-trained surgeons with extensive experience in robotic gynecology.',
  },
  {
    icon: Cpu,
    title: 'State-of-the-Art Technology',
    body: 'We employ the latest generation of robotic surgical platforms for uncompromising precision.',
  },
  {
    icon: HeartHandshake,
    title: 'Comprehensive Care',
    body: 'From diagnosis through surgery and recovery, we offer a multidisciplinary approach to cancer care.',
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
          src={HeroImage}
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
            At Novo Robotic Surgery Centre, we offer the pinnacle of precision
            care for gynecologic cancers. Our state-of-the-art robotic systems
            ensure minimal invasiveness and optimal outcomes.
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
              Gynecologic cancer encompasses any cancer that begins in a woman's
              reproductive organs. It is crucial to understand that cancer is
              always named after the part of the body where it originates. These
              cancers are diverse and require specialised, precision treatment
              approaches.
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
              <img
                src={AnatomyImage}
                alt="Illustration of the female reproductive system marking uterine, ovarian and cervical cancer sites"
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
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
              Robotic surgery is a highly advanced form of minimally invasive
              surgery. It utilises cutting-edge robotic systems controlled by a
              skilled surgeon to perform complex procedures with unparalleled
              precision.
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

      {/* =========================== CANCER TYPES ======================= */}
      <section className="bg-[#f9f9fc] py-16 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <h2 className="max-w-3xl text-[32px] font-bold leading-[1.3] text-[#005a65] md:text-[48px] md:leading-[1.2]">
            Types of Gynecologic Cancer Treated at Novo Robotic Surgery Centre
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
            We offer specialised robotic surgical interventions for a
            comprehensive range of gynecologic malignancies.
          </p>

          <div className="mt-[64px] grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Uterine — feature tile */}
            <article className="relative isolate row-span-2 min-h-[320px] overflow-hidden rounded-[1.5rem] md:col-span-2 md:min-h-[420px]">
              <img
                src={UterineImage}
                alt="Robotic treatment for uterine cancer at Novo Robotic Surgery Centre"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#001f24] via-[#001f24]/55 to-transparent" />
              <div className="flex h-full flex-col justify-end p-8">
                <p className="font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#81d3e1]">
                  Novo Robotic Hospital
                </p>
                <h3 className="mt-3 text-[24px] font-bold leading-[1.4] text-white md:text-[32px] md:leading-[1.3]">
                  Uterine Cancer
                </h3>
                <p className="mt-2 max-w-sm text-[16px] leading-[1.6] text-[#e5eced]">
                  Expert robotic intervention for endometrial and uterine
                  sarcomas.
                </p>
              </div>
            </article>

            {/* Ovarian */}
            <article className="rounded-[1.5rem] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <Boxes className="h-6 w-6 text-[#0d7481]" strokeWidth={2} />
              <h3 className="mt-5 text-[24px] font-semibold leading-[1.4] text-[#1a1c1e]">
                Ovarian Cancer
              </h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#3e484a]">
                Precise staging and debulking.
              </p>
            </article>

            {/* Cervical */}
            <article className="rounded-[1.5rem] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <Crosshair className="h-6 w-6 text-[#0d7481]" strokeWidth={2} />
              <h3 className="mt-5 text-[24px] font-semibold leading-[1.4] text-[#1a1c1e]">
                Cervical Cancer
              </h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#3e484a]">
                Radical hysterectomy remedies.
              </p>
            </article>

            {/* Vulvar & Vaginal — teal accent tile */}
            <article className="flex items-start gap-4 rounded-[1.5rem] bg-[#005a65] p-6 md:col-span-2">
              <div className="flex-1">
                <h3 className="text-[24px] font-semibold leading-[1.4] text-white">
                  Vulvar &amp; Vaginal Cancers
                </h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#b9f4ff]">
                  Delicate, nerve-sparing approaches to preserve function.
                </p>
              </div>
              <ShieldCheck
                className="h-6 w-6 shrink-0 text-[#fdd350]"
                strokeWidth={2}
              />
            </article>

            {/* Fallopian tube */}
            <article className="rounded-[1.5rem] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:col-span-2">
              <Sparkles className="h-6 w-6 text-[#0d7481]" strokeWidth={2} />
              <h3 className="mt-5 text-[24px] font-semibold leading-[1.4] text-[#1a1c1e]">
                Fallopian Tube
              </h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#3e484a]">
                Targeted tumour excision.
              </p>
            </article>
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

      {/* ============================ WHY CHOOSE ======================== */}
      <section className="bg-[#f3f3f6] py-16 md:py-[120px]">
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

      {/* ========================= REQUEST A CALL ======================= */}
      <section id="request-call" className="scroll-mt-24 bg-[#005a65]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-6 md:py-[120px]">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-[32px] font-bold leading-[1.3] text-white md:text-[48px] md:leading-[1.2]">
              Request Confidential Call
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#b9f4ff] md:text-[18px]">
              Speak with our oncology care coordinator to discuss your diagnosis
              and treatment options.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-xl rounded-[1.5rem] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.12)] md:p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#6e797b]"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-lg border border-[#bec8cb] bg-white px-4 py-3 text-[16px] text-[#1a1c1e] placeholder:text-[#6e797b] focus:border-[#005a65] focus:outline-none focus:ring-2 focus:ring-[#005a65]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#6e797b]"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 w-full rounded-lg border border-[#bec8cb] bg-white px-4 py-3 text-[16px] text-[#1a1c1e] placeholder:text-[#6e797b] focus:border-[#005a65] focus:outline-none focus:ring-2 focus:ring-[#005a65]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="concern"
                className="font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#6e797b]"
              >
                Your concern
              </label>
              <textarea
                id="concern"
                name="concern"
                rows={4}
                value={form.concern}
                onChange={handleChange}
                placeholder="Briefly describe your inquiry..."
                className="mt-2 w-full resize-none rounded-lg border border-[#bec8cb] bg-white px-4 py-3 text-[16px] text-[#1a1c1e] placeholder:text-[#6e797b] focus:border-[#005a65] focus:outline-none focus:ring-2 focus:ring-[#005a65]"
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#fdd350] px-7 py-4 font-['IBM_Plex_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#241a00] transition-colors duration-200 hover:bg-[#ebc241] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a65]"
            >
              Request consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}