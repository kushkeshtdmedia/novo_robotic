import React from "react";
import {
  ArrowRight,
  Activity,
  Stethoscope,
  ShieldCheck,
  Cpu,
  Eye,
  Droplet,
  HeartPulse,
  Scissors,
  Layers,
  CheckCircle2,
  Phone,
  ChevronDown
} from "lucide-react";
import ColorectalCancerSurgery1 from '../../assets/images/ColorectalCancerSurgery1.png';
import ColorectalCancerSurgeryBanner from '../../assets/images/ColorectalCancerBanner.png';
/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const CORE_CONDITIONS = [
  {
    title: "Colon Cancer",
    desc: "Precision robotic surgery for effective colon tumor removal with faster recovery.",
  },
  {
    title: "Rectal Cancer",
    desc: "Advanced robotic procedures designed for accurate cancer removal and better functional preservation.",
  },
  {
    title: "Rectal Prolapse",
    desc: "Minimally invasive robotic rectopexy to restore normal bowel anatomy and function.",
  },
  {
    title: "Benign Colon & Rectal Conditions",
    desc: "Expert robotic treatment for diverticular disease, large polyps, strictures, and other colorectal disorders.",
  },
];

const SYMPTOMS = [
  "Persistent abdominal pain or cramping",
  "Blood in stool",
  "Changes in bowel habits",
  "Constipation or diarrhea",
  "Unexplained weight loss",
  "Fatigue or weakness",
  "Narrow stools",
  "Rectal bleeding",
  "Feeling of incomplete bowel emptying",
];

const STEPS = [
  {
    title: "Anesthesia & Small Incisions",
    desc: "The patient is placed under general anesthesia. The surgical team creates a few tiny keyhole incisions usually less than 1 centimeter in size in the abdomen. Specialized ports are inserted through these openings to provide access for robotic instruments.",
  },
  {
    title: "Docking the Robotic System",
    desc: "The centre's modular robotic arm carts are carefully positioned and docked over the patient. Specialized robotic instruments, including an ultra-high-definition 3D camera, are attached to the robotic arms and inserted through the ports.",
  },
  {
    title: "Surgeon Console Control & Precise Dissection",
    desc: "The surgeon controls the robotic system from a console using a magnified 3D view, allowing precise removal of the tumor and diseased section of the colon or rectum with enhanced accuracy and tremor-free movement.",
  },
  {
    title: "Tumor & Lymph Node Removal",
    desc: "Using advanced robotic precision, the cancerous bowel segment and nearby lymph nodes are carefully removed while protecting important blood vessels and nerves.",
  },
  {
    title: "Anastomosis (Bowel Reconnection)",
    desc: "After removal of the cancerous tissue, the healthy remaining ends of the bowel are carefully reconnected using robotic suturing techniques. This process, known as anastomosis, restores normal digestive tract continuity.",
  },
  {
    title: "Closure",
    desc: "Once the procedure is completed, the robotic arms are undocked and removed. The small abdominal incisions are closed using dissolvable sutures or surgical adhesive strips, resulting in minimal scarring.",
  },
];

const WHY_PREFERRED = [
  { icon: Cpu, text: "Enhanced Surgical Precision" },
  { icon: Scissors, text: "Minimally Invasive Approach" },
  { icon: Eye, text: "Better 3D Visualization" },
  { icon: Droplet, text: "Reduced Blood Loss and Faster Recovery" },
  { icon: ShieldCheck, text: "Lower Risk of Complications" },
];
const faqs = [
  {
    q: 'Is colorectal cancer hereditary?',
    a: 'Some cases are linked to inherited genetic conditions such as Lynch syndrome or Familial Adenomatous Polyposis (FAP), but most cases occur without a strong family history.',
  },
  {
    q: 'Is colorectal cancer curable?',
    a: 'Yes. If detected early, colorectal cancer is highly treatable and often curable with appropriate treatment.',
  },
  {
    q: 'What treatments are available for colorectal cancer?',
    a: 'Treatment options include surgery, robotic surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapy.',
  },
  {
    q: 'Can colorectal cancer spread?',
    a: 'Yes. It can spread to nearby lymph nodes, liver, lungs, or other organs if left untreated.',
  },
  {
    q: 'Can I live a normal life after colorectal cancer treatment?',
    a: 'Yes. Many patients return to work and normal daily activities after successful treatment and recovery.',
  },
  {
    q: 'Is robotic surgery painful?',
    a: 'Most patients experience less pain than with open surgery because the procedure uses smaller incisions.',
  },
];
const PROCEDURES = [
  {
    title: "Robotic Colectomy",
    desc: "Minimally invasive robotic removal of a diseased or cancerous portion of the colon using enhanced precision, smaller incisions, reduced pain, and faster recovery.",
  },
  {
    title: "Right Hemicolectomy",
    desc: "Robotic removal of the right side of the colon, commonly performed for colon cancers, large polyps, or diseases affecting the ascending colon.",
  },
  {
    title: "Left Hemicolectomy",
    desc: "Advanced robotic surgery to remove the left side of the colon affected by tumors, diverticular disease, or other colorectal conditions.",
  },
  {
    title: "Sigmoid Colectomy",
    desc: "Precise robotic removal of the sigmoid colon for conditions such as sigmoid colon cancer, diverticulitis, or recurrent bowel disease.",
  },
  {
    title: "Robotic Low Anterior Resection (LAR)",
    desc: "Specialized robotic rectal cancer surgery to remove the diseased rectum while preserving normal bowel continuity whenever possible.",
  },
  {
    title: "Robotic Abdominoperineal Resection (APR)",
    desc: "Complex robotic surgery for very low rectal cancers involving removal of the rectum and anal canal when sphincter preservation is not feasible.",
  },
  {
    title: "Robotic Rectal Prolapse Repair (Robotic Rectopexy)",
    desc: "Minimally invasive robotic correction of rectal prolapse designed to restore normal anatomy and improve bowel function.",
  },
];

/* ------------------------------------------------------------------ */
/*  SMALL PRIMITIVES                                                   */
/* ------------------------------------------------------------------ */

const Eyebrow: React.FC<{ children: React.ReactNode; light?: boolean }> = ({
  children,
  light,
}) => (
  <div
    className={`inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase ${
      light ? "text-[#9deffe]" : "text-[#0d7481]"
    }`}
    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
  >
    <span
      className={`h-px w-8 ${light ? "bg-[#9deffe]/50" : "bg-[#0d7481]/40"}`}
    />
    {children}
  </div>
);

const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-[120px] ${className}`}>
    <div className="mx-auto w-full max-w-[1280px] px-5 md:px-6">{children}</div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

const ColorectalCancerSurgery: React.FC = () => {
  return (
    <main
      className="bg-[#f9f9fc] text-[#1a1c1e] antialiased"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#f9f9fc] pt-12 pb-16 md:pt-20 md:pb-24">
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #005a65 0%, rgba(0,90,101,0) 70%)",
          }}
        />
        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <div>
            <Eyebrow>Advanced Surgical Care</Eyebrow>
            <h1 className="mt-6 text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[56px] lg:text-[64px]">
              Best Robotic <br className="hidden md:block" />
              <span className="text-[#005a65]">Colorectal Cancer Surgery</span>{" "}
              in Kaushambi, Ghaziabad
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.6] text-[#3e484a]">
              Experience the pinnacle of surgical innovation at Novo Robotic
              Surgery Centre — minimally invasive precision for optimal
              recovery.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg bg-[#005a65] px-7 py-3.5 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#0d7481]"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
          
            </div>
          </div>

          {/* image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] shadow-[0px_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src={ColorectalCancerSurgeryBanner}
                alt="Robotic colorectal cancer surgery at Novo Robotic Surgery Centre, Ghaziabad"
                className="h-[280px] w-full object-cover md:h-[420px]"
                loading="eager"
              />
            </div>

            {/* glass stat badge */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/60 bg-white/80 p-4 backdrop-blur-[20px] md:right-auto md:w-[260px]">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481]"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                Precision
              </p>
              <p className="mt-1 text-[24px] font-bold leading-[1.2] text-[#1a1c1e]">
                Sub-millimeter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== UNDERSTANDING ==================== */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[1.5rem] shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <img
                src={ColorectalCancerSurgery1}
                alt="Anatomy illustration of the colon and rectum"
                className="h-[260px] w-full object-cover md:h-[400px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-[32px] font-bold leading-[1.3] md:text-[40px]">
              Understanding Colorectal Cancer?
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#3e484a]">
              Colorectal cancer is a type of cancer that develops in the colon
              (large intestine) or rectum, which are important parts of the
              digestive system. Because colon cancer and rectal cancer share
              many similarities, they are commonly referred to together as
              colorectal cancer.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#3e484a]">
              In most cases, colorectal cancer begins as small, noncancerous
              growths called polyps that develop on the inner lining of the
              colon or rectum. Over time, some polyps may turn into cancer if
              left untreated.
            </p>

            <div className="mt-8 rounded-xl border-l-4 border-[#fdd350] bg-[#f3f3f6] p-6">
              <p className="text-[16px] font-semibold leading-[1.6] text-[#1a1c1e]">
                Early detection, timely colorectal cancer screening, and
                advanced treatment can significantly improve outcomes and help
                prevent the cancer from spreading.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== WHAT IS ROBOTIC ==================== */}
      <Section className="bg-[#f9f9fc]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[32px] font-bold leading-[1.3] md:text-[40px]">
            What Is Robotic Colorectal Cancer Surgery?
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-[#3e484a]">
            Robotic colorectal cancer surgery is an advanced minimally invasive
            procedure used to treat colon cancer and rectal cancer with greater
            precision and safety.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-[1.5rem] bg-white p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#005a65]/10">
              <Activity className="h-6 w-6 text-[#005a65]" strokeWidth={2} />
            </div>
            <h3 className="mt-6 text-[24px] font-semibold leading-[1.4]">
              The Procedure
            </h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#3e484a]">
              Instead of large abdominal incisions, the surgery is performed
              through a few small keyhole cuts using a robotic-assisted surgical
              system such as the SSI Mantra Surgical System.
            </p>
          </article>

          <article className="rounded-[1.5rem] bg-white p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#005a65]/10">
              <Stethoscope className="h-6 w-6 text-[#005a65]" strokeWidth={2} />
            </div>
            <h3 className="mt-6 text-[24px] font-semibold leading-[1.4]">
              Surgeon Control
            </h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#3e484a]">
              During the procedure, the surgeon controls robotic arms from a
              specialised console while viewing the surgical area through a
              high-definition 3D camera. The robotic system does not function
              independently — every movement is directed by the surgeon in real
              time.
            </p>
          </article>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-[16px] leading-[1.7] text-[#3e484a]">
          This advanced robotic approach helps achieve safer cancer removal,
          reduced blood loss, less postoperative pain, faster recovery, and
          improved patient comfort compared to traditional open surgery.
        </p>
      </Section>

      {/* ==================== CORE CONDITIONS ==================== */}
      <Section className="bg-white">
        <h2 className="max-w-3xl text-[32px] font-bold leading-[1.3] md:text-[40px]">
          Core Conditions Treated with Robotic Colorectal Surgery at Novo
          Robotic Surgery Centre
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#3e484a]">
          Targeted robotic interventions for a comprehensive range of colorectal
          disorders.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CORE_CONDITIONS.map((c) => (
            <article
              key={c.title}
              className="group rounded-[1.5rem] border border-[#e2e2e5] bg-[#f9f9fc] p-8 transition-all duration-300 hover:border-[#005a65]/30 hover:bg-white hover:shadow-[0px_10px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#005a65]/10">
                  <CheckCircle2
                    className="h-5 w-5 text-[#005a65]"
                    strokeWidth={2}
                  />
                </span>
                <div>
                  <h3 className="text-[20px] font-bold leading-[1.4] text-[#005a65]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-[#3e484a]">
                    {c.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ==================== SYMPTOMS ==================== */}
      <Section className="bg-[#f9f9fc]">
        <h2 className="text-[32px] font-bold leading-[1.3] md:text-[40px]">
          Symptoms That May Indicate in Colorectal Cancer
        </h2>
        <p className="mt-4 text-[16px] leading-[1.7] text-[#3e484a]">
          Patients may experience:
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SYMPTOMS.map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 rounded-xl bg-white px-5 py-5 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#fdd350]" />
              <p className="text-[15px] font-medium leading-[1.5] text-[#1a1c1e]">
                {s}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ==================== HOW IT'S PERFORMED ==================== */}
      <Section className="bg-white">
        <h2 className="max-w-4xl text-[32px] font-bold leading-[1.3] md:text-[40px]">
          How Colorectal Cancer Surgery is Performed at Novo Robotic Surgery
          Centre
        </h2>
        <p className="mt-4 max-w-3xl text-[16px] leading-[1.7] text-[#3e484a]">
          The Ghaziabad-based Novo Robotic Surgery Centre, led by Dr. Vikrant
          Sharma, performs colorectal cancer surgeries using advanced
          robotic-assisted minimally invasive techniques.
        </p>

        <ol className="mt-14 space-y-5">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-[1.5rem] border border-[#e8e8ea] bg-[#f9f9fc] p-6 transition-colors duration-300 hover:border-[#005a65]/25 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#005a65] text-[15px] font-bold text-white"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[20px] font-bold leading-[1.4] text-[#1a1c1e] md:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.7] text-[#3e484a]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ==================== WHY PREFERRED ==================== */}
      <Section className="bg-[#f9f9fc]">
        <h2 className="max-w-3xl text-[32px] font-bold leading-[1.3] md:text-[40px]">
          Why Robotic Surgery Is Preferred for Colorectal Cancer Surgery
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {WHY_PREFERRED.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-xl bg-white px-6 py-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdd350]/25">
                <Icon className="h-5 w-5 text-[#005a65]" strokeWidth={2} />
              </span>
              <p className="text-[17px] font-semibold leading-[1.5] text-[#1a1c1e]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ==================== PROCEDURE TYPES ==================== */}
      <Section className="bg-white">
        <h2 className="max-w-4xl text-[32px] font-bold leading-[1.3] md:text-[40px]">
          Types of Robotic Colorectal Procedures Offered at Novo Robotic Surgery
          Centre
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCEDURES.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-[1.5rem] border border-[#e2e2e5] bg-[#f9f9fc] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-[0px_10px_40px_rgba(0,0,0,0.07)]"
            >
              <Layers
                className="h-6 w-6 text-[#0d7481]"
                strokeWidth={2}
                aria-hidden
              />
              <h3 className="mt-5 text-[19px] font-bold leading-[1.4] text-[#1a1c1e]">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#3e484a]">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ==================== RECOVERY ==================== */}
      <Section className="bg-[#f9f9fc]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>Post-Operative Care</Eyebrow>
            <h2 className="mt-6 text-[32px] font-bold leading-[1.3] md:text-[40px]">
              Recovery After Robotic Colorectal Surgery at Novo Robotic Surgery
              Centre
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[16px] leading-[1.7] text-[#3e484a]">
              Most patients experience faster recovery compared to traditional
              open colorectal surgery. Minimally invasive robotic techniques,
              smaller incisions, early mobilisation, and effective pain
              management help support quicker healing, shorter hospital stay,
              and reduced risk of complications.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#3e484a]">
              Recovery time may vary depending on the stage of colorectal
              cancer, the type of robotic surgery performed, and the patient's
              overall health condition. Most patients are able to return to
              normal daily activities sooner with improved comfort and better
              postoperative recovery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Shorter hospital stay",
                "Early mobilisation",
                "Minimal scarring",
                "Less postoperative pain",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-[#bec8cb] bg-white px-4 py-2 text-[14px] font-semibold text-[#3e484a]"
                >
                  <HeartPulse
                    className="h-4 w-4 text-[#0d7481]"
                    strokeWidth={2}
                  />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== WHY CHOOSE / CTA ==================== */}
      <section className="bg-white px-5 pb-16 md:px-6 md:pb-24">
        <div className="relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[1.5rem] bg-[#005a65] px-6 py-16 text-center md:px-16 md:py-24">
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #81d3e1 0%, rgba(129,211,225,0) 70%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-[28px] font-bold leading-[1.25] text-white md:text-[40px]">
              Why Choose Novo Robotic Surgery Centre for Robotic Colorectal
              Cancer Surgery?
            </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-[1.8] text-[#b9f4ff] text-left md:text-justify [text-wrap:pretty]">
              At Novo Robotic Surgery Centre, we provide advanced robotic
              colorectal cancer surgery using minimally invasive technology
              combined with specialized surgical expertise. Our robotic systems
              offer enhanced precision, controlled movement, and high-definition
              3D visualization, enabling surgeons to perform complex colon and
              rectal cancer procedures with exceptional accuracy while
              protecting surrounding nerves and tissues. Compared to traditional
              open surgery, robotic surgery typically results in smaller
              incisions, reduced pain, less blood loss, shorter hospital stays,
              and faster recovery. Every patient receives a personalized
              treatment plan based on the stage of cancer and overall health
              condition, ensuring safe, effective, and comprehensive colorectal
              cancer care from diagnosis to recovery.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-8 py-4 text-[15px] font-bold text-[#241a00] transition-colors duration-300 hover:bg-[#ebc241]"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
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
              Answers to the questions patients ask us most about robotic colorectal cancer surgery.
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
};

export default ColorectalCancerSurgery;