import {
  Utensils, Flame, Ban, HeartPulse, ArrowUpFromLine, Wind,
  MicOff, Droplet, TrendingDown, Zap, CircleEllipsis,
} from "lucide-react";
import {
  Activity,
  ArrowRight,
  Check,
  CircleDot,
  Layers,
  Microscope,
  Scan,
  Slice,
  Stethoscope,
  Waves,
} from "lucide-react";
import { ShieldCheck, Footprints, Soup, UserRoundCheck } from "lucide-react";
import StomachSurgeryPic from '../../assets/images/StomachSurgeryPic.png'
import vikrantPic from '../../assets/images/VikrantOnco.jpeg';
import ANATOMY_IMAGE from '../../assets/images/oesophagus-anatomy.png';
import HERO_IMAGE from '../../assets/images/robotic-oesophagus.png';
/* ------------------------------------------------------------------ */
/*  Swap these paths with your actual assets in /public                */
/* ------------------------------------------------------------------ */
// const HERO_IMAGE = "/images/robotic-oesophagus-or.jpg";
// const ANATOMY_IMAGE = "../../assets/images/OesophagusAnatomy.png";
// const DOCTOR_IMAGE = "../../assets/images/VikrantOnco.jpeg";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const benefits = [
  "Less blood loss & smaller scars",
  "Reduced pain",
  "Shorter hospital stay",
  "Faster recovery vs open surgery",
];
const recoveryNotes = [
  {
    icon: Footprints,
    title: "Early movement",
    body: "Walking and light movement are encouraged early to support faster recovery and reduce complications.",
  },
  {
    icon: Soup,
    title: "Guided diet progression",
    body: "Depending on the procedure, patients may start on a liquid or soft diet before slowly returning to normal eating.",
  },
  {
    icon: UserRoundCheck,
    title: "Personalised follow-up",
    body: "Dr. Vikrant Sharma provides post-surgical care and recovery guidance to help patients heal safely and comfortably.",
  },
];
const conditions = [
  {
    icon: Microscope,
    title: "Oesophageal Cancer",
    body: "Develops in the lining of the food pipe and may not cause noticeable symptoms early on. Dr. Vikrant Sharma uses advanced robotic-assisted surgery for precise tumour removal with minimal damage to surrounding tissues.",
    wide: true,
  },
  {
    icon: Flame,
    title: "GERD (Acid Reflux)",
    body: "Robotic anti-reflux surgery (Fundoplication) helps strengthen the valve between the stomach and food pipe to prevent acid reflux.",
    wide: false,
  },
  {
    icon: Waves,
    title: "Achalasia Cardia",
    body: "A swallowing disorder. Robotic Heller myotomy offers highly precise treatment with improved outcomes and faster recovery.",
    wide: false,
  },
  {
    icon: Layers,
    title: "Hiatus Hernia",
    body: "Robotic hiatus hernia repair helps restore normal anatomy with smaller incisions, less pain, and quicker recovery.",
    wide: true,
  },
  {
    icon: CircleDot,
    title: "Barrett's Oesophagus",
    body: "Caused by long-term acid reflux. Early diagnosis helps reduce complications and protect oesophageal health.",
    wide: false,
  },
  {
    icon: Utensils,
    title: "Swallowing Disorders",
    body: "Dysphagia refers to difficulty swallowing. Accurate diagnosis is important for targeted treatment.",
    wide: false,
  },
];

const warningSigns = [
  { icon: Utensils, label: "Difficulty swallowing (Dysphagia)" },
  { icon: Flame, label: "Persistent acidity or heartburn" },
  { icon: Ban, label: "Food getting stuck in throat or chest" },
  { icon: HeartPulse, label: "Chest pain or discomfort" },
  { icon: ArrowUpFromLine, label: "Regurgitation of food or acid" },
  { icon: Wind, label: "Chronic cough or throat irritation" },
  { icon: MicOff, label: "Hoarseness or voice changes" },
  { icon: Droplet, label: "Vomiting or nausea" },
  { icon: TrendingDown, label: "Unexplained weight loss" },
  { icon: Zap, label: "Pain while swallowing" },
  { icon: CircleEllipsis, label: "Frequent burping or bloating" },
]

const steps = [
  {
    title: "Pre-Surgical Evaluation",
    body: "Endoscopy, imaging scans, blood tests, and anaesthesia assessment.",
  },
  {
    title: "Small Keyhole Incisions",
    body: "Tiny incisions are made in the chest or abdomen to insert robotic instruments and a camera.",
  },
  {
    title: "Robotic System Setup",
    body: "Surgeon controls instruments from a specialised console with magnified 3D vision.",
  },
  {
    title: "Robotic Oesophagus Procedure",
    body: "Includes Oesophagectomy, Fundoplication, Heller Myotomy, or Hiatus Hernia Repair.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function OesophagusGeneralSurgery() {
  return (
    <main className="bg-[#f9f9fc] font-[Manrope,sans-serif] text-[#1a1c1e] antialiased">
      {/* ============================ HERO ============================ */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bec8cb] bg-white px-4 py-1.5 font-[IBM_Plex_Sans,sans-serif] text-[12px] font-bold uppercase tracking-[0.1em] text-[#005a65]">
              <Scan className="h-3.5 w-3.5" strokeWidth={2} />
              Advanced Surgical Care
            </span>

            <h1 className="mt-6 text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[56px] lg:text-[64px]">
              Advanced Robotic Oesophagus (Food Pipe) Surgery
            </h1>

            <p className="mt-4 text-[22px] font-semibold leading-[1.4] text-[#3e484a] md:text-[24px]">
              in Kaushambi, Ghaziabad
            </p>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
              Minimally invasive, highly precise robotic procedures for complex
              oesophageal conditions — offering faster recovery and improved
              outcomes.
            </p>

            <a
              href="/contact-us"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-7 py-3.5 text-[15px] font-bold text-[#241a00] transition-colors duration-200 hover:bg-[#ebc241] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a65]"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Image + glass badge */}
          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] shadow-[0px_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src={HERO_IMAGE}
                alt="Robotic surgery suite at Novo Robotic Surgery Centre"
                className="h-[280px] w-full object-cover md:h-[420px]"
                loading="eager"
              />
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-[0px_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-[20px]">
              <Scan className="h-6 w-6 text-[#005a65]" strokeWidth={2} />
              <div>
                <p className="font-[IBM_Plex_Sans,sans-serif] text-[11px] font-bold uppercase tracking-[0.1em] text-[#005a65]">
                  Magnification
                </p>
                <p className="text-[18px] font-bold leading-tight">High-Def 3D</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== UNDERSTANDING SECTION ==================== */}
      <section className="bg-[#f3f3f6] py-16 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Anatomy diagram */}
   <div className="self-start overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
  <img
    src={ANATOMY_IMAGE}
    alt="Diagram of the oesophagus, hiatus hernia and narrowed stricture"
    className="block h-auto w-full rounded-xl object-contain"
    loading="lazy"
  />
</div>

            {/* Text */}
            <div>
              <h2 className="flex items-center gap-3 text-[26px] font-bold leading-[1.3] md:text-[32px]">
                <Activity className="h-7 w-7 shrink-0 text-[#005a65]" strokeWidth={2} />
                Understanding the Oesophagus
              </h2>

              <p className="mt-6 text-[16px] leading-[1.6] text-[#3e484a]">
                The oesophagus, commonly called the food pipe, is a muscular tube
                that connects the mouth to the stomach. Its main function is to
                carry food and liquids from the mouth to the stomach through
                coordinated muscle movements.
              </p>

              <p className="mt-4 text-[16px] leading-[1.6] text-[#3e484a]">
                The oesophagus is made of multiple layers that help move food
                smoothly and support normal swallowing. When affected by
                conditions like acid reflux, oesophageal cancer, strictures, or
                swallowing disorders, it can lead to symptoms such as difficulty
                swallowing, chest discomfort, heartburn, vomiting, and weight
                loss.
              </p>

              {/* Nested card */}
              <div className="mt-8 rounded-[1.5rem] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:p-8">
                <h3 className="text-[20px] font-semibold leading-[1.4] md:text-[24px]">
                  What is Robotic Oesophagus Surgery?
                </h3>
                <p className="mt-4 text-[15px] leading-[1.6] text-[#3e484a]">
                  Robotic oesophagus surgery is a minimally invasive procedure
                  used to treat complex conditions such as severe GERD,
                  achalasia, and oesophageal cancer. Instead of making a large
                  open incision in the chest or abdomen, our surgeon, Dr. Vikrant Sharma, controls highly precise robotic arms through a computer console. The robotic system translates the surgeon’s hand movements into precise micro-movements inside the patient’s body.
Using a high-definition 3D camera, our surgeon gets a magnified view of the narrow chest cavity where the oesophagus (food pipe) is located. This enhanced precision allows careful and precise dissection around vital organs such as the heart and lungs.

                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b9f4ff]">
                        <Check className="h-3 w-3 text-[#004f58]" strokeWidth={3} />
                      </span>
                      <span className="text-[14px] leading-[1.5] text-[#3e484a]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CONDITIONS ========================== */}
      <section className="py-16 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[28px] font-bold leading-[1.3] md:text-[38px]">
              Advanced Treatment for Oesophagus Disorders
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#3e484a]">
              Comprehensive robotic care at Novo Robotic Surgery Centre
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {conditions.map(({ icon: Icon, title, body, wide }) => (
              <article
                key={title}
                className={`rounded-[1.5rem] bg-[#eeeef0] p-7 transition-shadow duration-300 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.06)] ${
                  wide ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <Icon className="h-5 w-5 text-[#005a65]" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-[19px] font-semibold leading-[1.4]">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#3e484a]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== WARNING SIGNS ========================= */}
     {/* ====================== WARNING SIGNS ========================= */}
<section className="bg-[#005a65] py-16 md:py-[100px]">
  <div className="mx-auto max-w-[1280px] px-5 md:px-6">
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 font-[IBM_Plex_Sans,sans-serif] text-[12px] font-bold uppercase tracking-[0.1em] text-[#fdd350]">
        Know the symptoms
      </span>
      <h2 className="mt-6 text-[28px] font-bold leading-[1.3] text-white md:text-[38px]">
        Common Warning Signs
      </h2>
      <p className="mt-4 text-[16px] leading-[1.6] text-[#b9f4ff]">
        When something affects your oesophagus, your body often gives warning
        signs during or after eating and drinking.
      </p>
    </div>

    <ul className="mx-auto mt-12 flex max-w-[1000px] flex-wrap justify-center gap-3 md:gap-4">
      {warningSigns.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0d7481] py-3 pl-3 pr-5 transition-colors duration-200 hover:border-[#fdd350]/50 hover:bg-[#0f8290]"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
            <Icon className="h-4 w-4 text-[#fdd350]" strokeWidth={2} />
          </span>
          <span className="text-left text-[14px] font-medium leading-[1.4] text-white md:text-[15px]">
            {label}
          </span>
        </li>
      ))}
    </ul>

    <p className="mx-auto mt-10 max-w-xl text-center text-[14px] leading-[1.6] text-[#b9f4ff]">
      If any of these persist for more than two weeks, book an evaluation with
      Dr. Vikrant Sharma.
    </p>
  </div>
</section>

      {/* ======================= HOW IT'S DONE ======================== */}
      <section className="py-16 md:py-[100px]">
        <div className="mx-auto max-w-[880px] px-5 md:px-6">
          <h2 className="text-center text-[28px] font-bold leading-[1.3] md:text-[38px]">
            How it is Performed
          </h2>

          <ol className="mt-12 space-y-8">
            {steps.map(({ title, body }, i) => (
              <li key={title} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#005a65] text-[15px] font-bold text-white">
                  {i + 1}
                </span>
                <div className="border-b border-[#e2e2e5] pb-6">
                  <h3 className="text-[18px] font-semibold leading-[1.4]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#3e484a]">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
     {/* ==================== CLOSURE & RECOVERY ====================== */}
<section className="pb-16 md:pb-[100px]">
  <div className="mx-auto max-w-[1280px] px-5 md:px-6">
    {/* Closure card — matches the steps column width */}
    <div className="mx-auto max-w-[880px]">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#eeeef0] p-7 md:p-9">
        <span className="absolute inset-y-0 left-0 w-1.5 bg-[#005a65]" />
        <h3 className="flex items-center gap-3 text-[20px] font-semibold leading-[1.4] md:text-[24px]">
          <ShieldCheck className="h-6 w-6 shrink-0 text-[#005a65]" strokeWidth={2} />
          Closure &amp; Recovery
        </h3>
        <p className="mt-4 text-[15px] leading-[1.6] text-[#3e484a] md:text-[16px]">
          Once the procedure is completed, the robotic instruments are removed
          and the tiny incisions are carefully closed. Patients are then shifted
          to the recovery area for monitoring. Robotic minimally invasive
          surgery usually offers less pain, smaller scars, shorter hospital
          stay, and faster recovery compared to traditional open surgery.
        </p>
      </div>
    </div>

    {/* Recovery */}
    <div className="mt-16 md:mt-20">
      <div className="mx-auto max-w-[880px] text-center">
        <span className="font-[IBM_Plex_Sans,sans-serif] text-[12px] font-bold uppercase tracking-[0.1em] text-[#005a65]">
          After the procedure
        </span>
        <h2 className="mt-4 text-[28px] font-bold leading-[1.3] md:text-[38px]">
          Recovery After Robotic Oesophagus Surgery
        </h2>
        <p className="mt-5 text-[16px] leading-[1.6] text-[#3e484a] md:text-[18px]">
          Recovery is usually faster and more comfortable than traditional open
          surgery due to the minimally invasive robotic approach. Most patients
          experience less pain, smaller scars, reduced blood loss, and a shorter
          hospital stay. After surgery, patients are closely monitored while the
          body gradually heals.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {recoveryNotes.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="rounded-[1.5rem] bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b9f4ff]">
              <Icon className="h-5 w-5 text-[#004f58]" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-[18px] font-semibold leading-[1.4]">
              {title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#3e484a]">
              {body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* ========================= WHY CHOOSE ========================= */}
      <section className="bg-[#e8e8ea] py-16 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <div className="grid items-center gap-10 rounded-[1.5rem] bg-white p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.3] md:text-[34px]">
                Why Choose Novo Robotic Surgery Centre?
              </h2>
              <p className="mt-5 text-[16px] leading-[1.6] text-[#3e484a]">
               Choosing the right surgeon and centre for oesophagus (food pipe) surgery is one of the most important decisions for achieving the best treatment outcome. At Novo Robotic Surgery Centre, Dr. Vikrant Sharma combines advanced robotic surgical expertise, modern SSI Mantra robotic technology, and personalised patient care to treat even the most complex oesophageal conditions.
With extensive experience in robotic oesophageal cancer surgery, GERD treatment, achalasia cardia surgery, hiatus hernia repair, Barrett’s oesophagus treatment, and swallowing disorder procedures, Dr Sharma provides highly precise and minimally invasive surgical care.
Every robotic oesophagus procedure is performed through tiny keyhole incisions, giving patients significantly less pain, minimal scarring, a shorter hospital stay, and a faster return to normal life compared with traditional open surgery. 
From detailed pre-operative planning and personalised treatment to nutritional guidance and structured follow-up care, our team supports patients at every stage of recovery. Patients from Ghaziabad, Delhi, Noida, and nearby regions trust Novo Robotic Surgery Centre for advanced robotic oesophagus surgery and compassionate care.

              </p>

              <p className="mt-6 flex items-center gap-2.5 text-[15px] font-semibold text-[#005a65]">
                <Slice className="h-4 w-4" strokeWidth={2} />
                Faster recovery, less pain, personalised care.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#8a6d0b] px-7 py-3.5 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-[#745c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a65]"
              >
                Book your consultation with Dr. Vikrant Sharma today
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>

            {/* Doctor card */}
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0d7481]">
              <img
                src={vikrantPic}
                alt="Dr. Vikrant Sharma, Lead Robotic Surgeon"
                className="h-[340px] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-12">
                <p className="text-[18px] font-bold text-white">
                  Dr. Vikrant Sharma
                </p>
                <p className="flex items-center gap-1.5 text-[13px] text-[#b9f4ff]">
                  <Stethoscope className="h-3.5 w-3.5" strokeWidth={2} />
                  Lead Robotic Surgeon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}