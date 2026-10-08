import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Route: /blog/robotic-bariatric-surgery
// Content only — Navbar and Footer come from your layout.
// Assumes Manrope + IBM Plex Sans are already loaded site-wide.

// Internal links used on this page — change a route here and it updates everywhere.
const LINKS = {
  doctor: "/doctors/dr-vikrant-sharma",
  contact: "/contact",
  sleeve: "/services/robotic-sleeve-gastrectomy",
  miniBypass: "/services/robotic-mini-gastric-bypass",
  rouxEnY: "/services/robotic-roux-en-y-gastric-bypass",
  // transformations: "/transformations", // TODO: confirm URL/anchor
  // testimonials: "/video-testimonials", // TODO: confirm URL/anchor÷
  // bariatricMain: "", // TODO: main bariatric service page slug; leave "" to show plain bold text
};

const inlineLink = "text-[#005a65] font-semibold underline decoration-[#81d3e1] underline-offset-4 hover:decoration-[#005a65]";

const plex = "font-['IBM_Plex_Sans',sans-serif]";
const eyebrow = `${plex} text-xs font-bold tracking-[0.1em]`;
const card = "bg-white rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)]";
const h2 = "m-0 text-[28px] md:text-[32px] font-bold leading-[1.3] text-[#1a1c1e]";

const Arrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const benefits = [
  { label: "Smaller scars", d: "M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4" },
  { label: "Less pain", d: "M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" },
  { label: "Shorter hospital stay", d: "M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" },
  { label: "Quicker return to work", d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" },
];

const procedures = [
  {
    key: "A",
    title: "Robotic sleeve gastrectomy",
    anchor: "robotic sleeve gastrectomy",
    text: ", about three-quarters of the stomach is removed, leaving a narrow “sleeve”. You eat less, feel full sooner and produce less ghrelin, the hunger hormone.",
    to: LINKS.sleeve,
    cta: "Explore sleeve gastrectomy",
  },
  {
    key: "B",
    title: "Robotic mini gastric bypass",
    anchor: "robotic mini gastric bypass",
    text: ", a long, thin stomach pouch is connected to a lower part of the small intestine, so you eat less and absorb fewer calories. It is often considered for patients with a higher BMI or diabetes.",
    to: LINKS.miniBypass,
    cta: "Explore mini gastric bypass",
  },
  {
    key: "C",
    title: "Robotic Roux-en-Y gastric bypass",
    anchor: "robotic Roux-en-Y gastric bypass",
    text: ", a small stomach pouch is joined to the small intestine in a Y shape. It is a long-established procedure, often preferred for patients with severe acid reflux or type 2 diabetes.",
    to: LINKS.rouxEnY,
    cta: "Explore Roux-en-Y bypass",
  },
];

const conditions = ["Type 2 diabetes", "High blood pressure", "Cholesterol", "Fatty liver", "Sleep apnoea"];

const recovery = [
  { when: "DAY OF SURGERY", text: "Most patients are up and walking.", border: "border-[#005a65]", color: "text-[#005a65]" },
  { when: "WITHIN A FEW DAYS", text: "Discharge home with a clear diet and care plan.", border: "border-[#0d7481]", color: "text-[#0d7481]" },
  { when: "OVER SEVERAL WEEKS", text: "Diet moves from liquids to soft foods to regular meals.", border: "border-[#ebc241]", color: "text-[#745c00]" },
];

const credentials = [
  "MS (Surgery), PGI Rohtak",
  "FNB in Minimal Access Surgery, Pune",
  "Robotic Surgery Fellowship, Queen Alexandra Hospital, Portsmouth, UK",
  "Robotic Bariatric training, Belgium and USA",
];

const faqs = [
  {
    q: "Is robotic bariatric surgery safe?",
    a: "It is an established, widely performed procedure, and the surgeon controls the robot at all times. Like any major operation it carries risks, which your surgeon will explain before you decide.",
  },
  {
    q: "What BMI do I need for weight loss surgery in India?",
    a: "Under the 2022 ASMBS and IFSO guidelines, you need a BMI of 35 or above, or 30 to 34.9 with conditions like type 2 diabetes. For Asian patients, including Indians, a BMI of 27.5 or above may qualify.",
  },
  {
    q: "Which bariatric surgery is right for me?",
    a: "It depends on your BMI, eating habits, acid reflux and conditions such as diabetes. Your surgeon recommends sleeve gastrectomy, mini gastric bypass or Roux-en-Y bypass after a full evaluation.",
  },
  { q: "How long is the hospital stay?", a: "Most patients walk on the day of surgery and go home within a few days." },
  {
    q: "Will I need vitamins after surgery?",
    a: "Many patients do, and some need them for life. Your care team will set up supplements and check your levels at follow-up visits.",
  },
];

const toc = [
  ["what", "What is robotic bariatric surgery?"],
  ["why", "Why robotic surgery?"],
  ["eligibility", "Who is eligible?"],
  ["types", "Types of surgery"],
  ["metabolic", "Metabolic surgery"],
  ["risks", "Risks"],
  ["recovery", "Recovery"],
  ["faq", "FAQ"],
];

const SITE = "https://www.novorobotic.com";
const URL = `${SITE}/blog/robotic-bariatric-surgery`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Understanding Robotic Bariatric Surgery",
      description:
        "Robotic bariatric surgery explained by Dr. Vikrant Sharma: sleeve gastrectomy, mini gastric bypass and Roux-en-Y bypass. Weight loss surgery in Ghaziabad, Delhi NCR.",
      datePublished: "2026-10-06",
      dateModified: "2026-10-06",
      mainEntityOfPage: URL,
      author: {
        "@type": "Person",
        name: "Dr. Vikrant Sharma",
        url: `${SITE}${LINKS.doctor}`,
        honorificSuffix: "MBBS, MS, FNB, FACS (USA)",
        jobTitle: "Specialist Robotic, Bariatric & GI Surgeon",
      },
      publisher: { "@type": "MedicalOrganization", name: "Novo Robotic Surgery Centre", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: "Robotic Bariatric Surgery", item: URL },
      ],
    },
  ],
};

export default function BariatricBlog() {
  return (
    <main className="font-['Manrope',sans-serif] text-[#1a1c1e] bg-[#f9f9fc]">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section id="top" className="bg-white border-b border-[#eeeef0]">
        <div className="max-w-[1280px] mx-auto px-5 pt-10 pb-12 md:pt-20 md:pb-24 flex flex-wrap gap-14 items-center">
          <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-6">
            <nav aria-label="Breadcrumb" className={`${plex} text-[13px] text-[#3e484a] flex flex-wrap gap-2`}>
              <Link to="/" className="text-[#3e484a] no-underline hover:text-[#005a65]">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog" className="text-[#3e484a] no-underline hover:text-[#005a65]">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#005a65] font-medium">Robotic Bariatric Surgery</span>
            </nav>

            <div className="flex flex-wrap gap-2.5 items-center">
              <span className={`${eyebrow} text-[#005a65] bg-[#e6f6f8] px-3.5 py-1.5 rounded-full`}>BARIATRIC SURGERY</span>
              <span className={`${eyebrow} text-[#3e484a]`}>8 MIN READ</span>
            </div>

            <h1 className="m-0 text-[40px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Understanding <em className="italic text-[#005a65]">Robotic</em> Bariatric Surgery
            </h1>

            <p className="m-0 text-lg leading-[1.6] text-[#3e484a] max-w-[600px]">
              Sleeve gastrectomy, mini gastric bypass and Roux-en-Y bypass, explained in plain language by the surgeon who
              performs them in Ghaziabad, Delhi NCR.
            </p>

            <div className="flex items-center gap-3.5 pt-2">
              <span aria-hidden="true" className="w-14 h-14 rounded-full bg-[#005a65] border-2 border-[#fdd350] text-white font-extrabold text-lg flex items-center justify-center shrink-0">VS</span>
              <div className="flex flex-col gap-0.5">
                <Link to={LINKS.doctor} rel="author" className="font-bold text-base text-[#1a1c1e] no-underline hover:text-[#005a65] hover:underline">Dr. Vikrant Sharma</Link>
                <span className="text-sm text-[#3e484a]">MBBS, MS, FNB, FACS (USA) · Robotic, Bariatric &amp; GI Surgeon</span>
                <time dateTime="2026-10-06" className={`${plex} text-xs text-[#3e484a]`}>Published 6 Oct 2026</time>
              </div>
            </div>
          </div>

          <div className="flex-[1_1_380px] min-w-0 relative">
            {/* Featured panel (no photo): procedures at a glance on a precision grid */}
            <div className="relative w-full min-h-[380px] md:min-h-[440px] rounded-[1.5rem] bg-[#005a65] overflow-hidden px-7 md:px-10 pt-20 pb-28 flex flex-col justify-center gap-5">
              <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                  <pattern id="novo-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M32 0H0V32" fill="none" stroke="#81d3e1" strokeOpacity="0.14" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#novo-grid)" />
                <circle cx="88%" cy="78%" r="120" fill="none" stroke="#fdd350" strokeOpacity="0.35" strokeWidth="1" />
                <circle cx="88%" cy="78%" r="70" fill="none" stroke="#fdd350" strokeOpacity="0.5" strokeWidth="1" />
              </svg>
              <span className={`relative ${eyebrow} text-[#fdd350]`}>THREE ROBOTIC OPTIONS</span>
              <ul className="relative m-0 p-0 list-none flex flex-col gap-3">
                {procedures.map((p) => (
                  <li key={p.key}>
                    <Link to={p.to} className="flex items-center gap-4 no-underline text-white group/proc">
                      <span className={`${plex} text-[13px] font-bold w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover/proc:bg-[#fdd350] group-hover/proc:text-[#241a00] transition-colors`}>{p.key}</span>
                      <span className="text-lg md:text-xl font-bold leading-[1.3]">{p.title.replace("Robotic ", "")}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -left-2 md:-left-4 bottom-7 bg-white/85 backdrop-blur-[20px] border border-white rounded-2xl px-4 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-3">
              <span className="w-10 h-10 rounded-[10px] bg-[#005a65] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[22px] font-extrabold text-[#005a65] leading-[1.1]">10,000+</span>
                <span className={`${plex} text-[11px] font-bold tracking-[0.1em] text-[#3e484a]`}>PROCEDURES PERFORMED</span>
              </span>
            </div>
            <div className="absolute -right-2 md:-right-3 top-6 bg-white/85 backdrop-blur-[20px] border border-white rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col">
              <span className="text-[22px] font-extrabold text-[#005a65] leading-[1.1]">20+ yrs</span>
              <span className={`${plex} text-[11px] font-bold tracking-[0.1em] text-[#3e484a]`}>SURGICAL EXPERIENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-[1280px] mx-auto px-5 py-12 md:py-24 flex flex-wrap gap-16 items-start">
        <article className="flex-[999_1_560px] min-w-0 max-w-[760px] flex flex-col gap-14 text-lg leading-[1.7]">
          <p className="m-0 text-[19px] md:text-[21px] leading-[1.6] font-medium">
            If you have spent years trying to lose weight with diets, gym plans and medicines, and nothing has lasted, you are
            not alone. Obesity is a long-term medical condition influenced by hormones, metabolism, genetics and lifestyle, not
            a lack of willpower. For the right patient, robotic bariatric surgery can be a safe and effective treatment.
          </p>

          <section id="what" className="flex flex-col gap-4 scroll-mt-28">
            <span className={`${eyebrow} text-[#005a65]`}>01 · THE BASICS</span>
            <h2 className={h2}>What is robotic bariatric surgery?</h2>
            <p className="m-0">
              Bariatric surgery, also called <strong>weight loss surgery</strong> or <strong>obesity surgery</strong>, changes
              the size or pathway of the stomach and intestines. You feel full with smaller meals and your hunger hormones
              change, which helps you lose weight and keep it off.
            </p>
            <p className="m-0">
              In <strong>robotic bariatric surgery</strong>, the surgeon operates through small cuts using a robotic system. It
              gives a magnified 3D view and steady, precise instrument movement. The robot does not act on its own: the surgeon
              controls every movement from a console.
            </p>
          </section>

          <section id="why" className="flex flex-col gap-5 scroll-mt-28">
            <span className={`${eyebrow} text-[#005a65]`}>02 · THE ADVANTAGE</span>
            <h2 className={h2}>Why robotic surgery?</h2>
            <p className="m-0">
              Operating on patients with higher body weight can be technically demanding. Robotic assistance helps the surgeon
              work precisely in tight spaces. Results vary from person to person, and your surgeon will explain what to expect
              in your case.
            </p>
            <ul className="m-0 p-0 list-none grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((b) => (
                <li key={b.label} className="bg-white rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col gap-2.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005a65" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={b.d} /></svg>
                  <span className="font-bold text-base leading-[1.4]">{b.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="eligibility" className="flex flex-col gap-5 scroll-mt-28">
            <span className={`${eyebrow} text-[#005a65]`}>03 · ELIGIBILITY</span>
            <h2 className={h2}>Who is eligible for weight loss surgery?</h2>
            <p className="m-0">
              The 2022 guidelines from the American Society for Metabolic and Bariatric Surgery (ASMBS) and the International
              Federation for the Surgery of Obesity and Metabolic Disorders (IFSO) recommend surgery at these BMI levels:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#005a65] text-white rounded-[1.5rem] p-6 flex flex-col gap-2">
                <span className={`${plex} text-[11px] font-bold tracking-[0.1em] text-[#b9f4ff]`}>BMI</span>
                <span className="text-[40px] font-extrabold leading-[1.1]">35+</span>
                <span className="text-[15px] leading-[1.5] text-[#e6f6f8]">With or without related health problems</span>
              </div>
              <div className={`${card} p-6 flex flex-col gap-2`}>
                <span className={`${plex} text-[11px] font-bold tracking-[0.1em] text-[#005a65]`}>BMI</span>
                <span className="text-[40px] font-extrabold leading-[1.1] text-[#005a65]">30–34.9</span>
                <span className="text-[15px] leading-[1.5] text-[#3e484a]">With a metabolic condition such as type 2 diabetes</span>
              </div>
              <div className="bg-[#fff8e1] border border-[#ebc241] rounded-[1.5rem] p-6 flex flex-col gap-2">
                <span className={`${plex} text-[11px] font-bold tracking-[0.1em] text-[#574500]`}>BMI · ASIAN POPULATIONS</span>
                <span className="text-[40px] font-extrabold leading-[1.1] text-[#574500]">27.5+</span>
                <span className="text-[15px] leading-[1.5] text-[#3e484a]">May qualify, because Indians develop health risks at lower body weights</span>
              </div>
            </div>
            <p className="m-0">A detailed consultation is the only way to know if surgery is right for you.</p>
          </section>

          <section id="types" className="flex flex-col gap-5 scroll-mt-28">
            <span className={`${eyebrow} text-[#005a65]`}>04 · PROCEDURES</span>
            <h2 className={h2}>Types of robotic bariatric surgery</h2>
            <div className="flex flex-col gap-4">
              {procedures.map((p) => (
                <div key={p.key} className={`${card} p-6 md:p-7 flex gap-5 items-start`}>
                  <span className={`${plex} text-[13px] font-bold text-[#005a65] bg-[#e6f6f8] w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>{p.key}</span>
                  <div className="flex-1 min-w-0 flex flex-col gap-2">
                    <h3 className="m-0 text-[22px] md:text-2xl font-semibold leading-[1.4]">{p.title}</h3>
                    <p className="m-0 text-base leading-[1.6] text-[#3e484a]">
                      In a <Link to={p.to} className={inlineLink}>{p.anchor}</Link>{p.text}
                    </p>
                    <Link to={p.to} className="font-bold text-[15px] no-underline text-[#005a65] hover:text-[#004f58] inline-flex items-center gap-1.5 min-h-[44px]">
                      {p.cta} <Arrow />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="metabolic" className="flex flex-col gap-5 scroll-mt-28">
            <span className={`${eyebrow} text-[#005a65]`}>05 · BEYOND WEIGHT LOSS</span>
            <h2 className={h2}>Metabolic surgery: more than weight loss</h2>
            <p className="m-0">
              Obesity surgery is also called <strong>metabolic surgery</strong> because it can improve related conditions. Many
              patients are able to reduce their medicines under medical supervision.
            </p>
            <ul className="m-0 p-0 list-none flex flex-wrap gap-2.5">
              {conditions.map((c) => (
                <li key={c} className="text-[15px] font-semibold text-[#004f58] bg-[#e6f6f8] px-[18px] py-2.5 rounded-full">{c}</li>
              ))}
            </ul>
          </section>

          <section id="risks" className="bg-[#f3f3f6] border border-[#e2e2e5] rounded-[1.5rem] p-6 md:p-8 flex flex-col gap-3.5 scroll-mt-28">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5354" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
              <h2 className="m-0 text-2xl font-bold leading-[1.3]">Risks you should know</h2>
            </div>
            <p className="m-0 text-[17px]">
              Like any major operation, bariatric surgery carries risks. These include bleeding, infection, leaks, blood clots
              and nutritional deficiencies, and some patients need lifelong vitamin supplements. Your surgeon will discuss these
              openly and help you weigh them against the benefits.
            </p>
          </section>

          <section id="recovery" className="flex flex-col gap-6 scroll-mt-28">
            <span className={`${eyebrow} text-[#005a65]`}>06 · RECOVERY</span>
            <h2 className={h2}>Recovery after robotic bariatric surgery</h2>
            <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recovery.map((r) => (
                <li key={r.when} className={`border-t-[3px] ${r.border} pt-4 flex flex-col gap-1.5`}>
                  <span className={`${eyebrow} ${r.color}`}>{r.when}</span>
                  <span className="text-base leading-[1.6] text-[#3e484a]">{r.text}</span>
                </li>
              ))}
            </ol>
            <p className="m-0">Long-term success depends on healthy eating, regular activity and follow-up visits with your care team.</p>
          </section>

          <section id="novo" className="flex flex-col gap-4">
            <span className={`${eyebrow} text-[#005a65]`}>07 · AT NOVO ROBOTIC</span>
            <h2 className={h2}>Robotic bariatric surgery in Ghaziabad</h2>
            <p className="m-0">
              {LINKS.bariatricMain ? (
                <Link to={LINKS.bariatricMain} className={inlineLink}>Robotic bariatric surgery in Ghaziabad</Link>
              ) : (
                <strong>Robotic bariatric surgery in Ghaziabad</strong>
              )}{" "}
              at Novo Robotic Surgery Centre, Kaushambi, is led by{" "}
              <Link to={LINKS.doctor} className={inlineLink}>Dr. Vikrant Sharma</Link>. He has over 20 years of surgical experience and has performed more than 10,000 procedures. He
              trained in robotic surgery at Queen Alexandra Hospital, Portsmouth, UK, and received specialised training in
              robotic bariatric surgery in Belgium and the USA. As a Proctor for Robotic Surgery, he also guides other surgeons
              in adopting robotic techniques.
            </p>
            <p className="m-0">
              Every patient receives a thorough pre-surgery evaluation, dietitian support and structured follow-up. See real
              patient journeys on our{" "}
              <span>Transformations</span> and{" "}
              <span  >Video Testimonials</span> pages.
            </p>
          </section>

          {/* Author */}
          <section aria-label="About the author" className={`${card} p-6 md:p-8 flex flex-wrap gap-7 items-start`}>
            <div aria-hidden="true" className="w-28 h-28 rounded-[1.5rem] bg-[#005a65] flex flex-col items-center justify-center gap-1 shrink-0">
              <span className="text-white font-extrabold text-[32px] leading-none">VS</span>
              <span className={`${plex} text-[10px] font-bold tracking-[0.1em] text-[#fdd350]`}>FACS (USA)</span>
            </div>
            <div className="flex-[1_1_320px] min-w-0 flex flex-col gap-2.5">
              <span className={`${eyebrow} text-[#745c00]`}>ABOUT THE AUTHOR</span>
              <h2 className="m-0 text-2xl font-bold leading-[1.3]">Dr. Vikrant Sharma</h2>
              <p className="m-0 text-[15px] text-[#3e484a] leading-[1.5]">
                MBBS, MS, FNB (Minimal Access Surgery), FACS (USA)
                <br />
                Specialist Robotic, Bariatric &amp; GI Surgeon · Proctor for Robotic Surgery
              </p>
              <ul className="mt-1.5 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 text-[15px] leading-[1.5]">
                {credentials.map((c) => (
                  <li key={c} className="flex gap-2"><span className="text-[#0d7481] font-extrabold">—</span>{c}</li>
                ))}
              </ul>
              <Link to={LINKS.doctor} rel="author" className="font-bold text-[15px] no-underline text-[#005a65] hover:text-[#004f58] inline-flex items-center gap-1.5 min-h-[44px]">
                View full profile <Arrow />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="flex flex-col gap-5 scroll-mt-28">
            <span className={`${eyebrow} text-[#005a65]`}>FAQ</span>
            <h2 className={h2}>Frequently asked questions</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0} className="group bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] px-6">
                  <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex justify-between items-center gap-4 min-h-16 py-4 font-bold text-[17px]">
                    {f.q}
                    <span aria-hidden="true" className="text-2xl text-[#005a65] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="m-0 pb-5 text-base leading-[1.6] text-[#3e484a]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="m-0 text-[13px] leading-[1.6] text-[#3e484a] italic">
            This article is for general information and is not a substitute for medical advice. Please consult a qualified
            surgeon about your own situation.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="flex-[1_1_300px] min-w-0 flex flex-col gap-6 lg:sticky lg:top-28">
          <nav aria-label="On this page" className={`${card} p-7 flex flex-col gap-1`}>
            <span className={`${eyebrow} text-[#3e484a] pb-2.5`}>ON THIS PAGE</span>
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="flex items-center min-h-10 no-underline text-[15px] text-[#3e484a] border-l-2 border-[#e2e2e5] pl-3 hover:text-[#005a65] hover:border-[#005a65]">
                {label}
              </a>
            ))}
          </nav>

          <div className="bg-[#005a65] text-white rounded-[1.5rem] p-7 flex flex-col gap-3.5">
            <span className={`${eyebrow} text-[#fdd350]`}>FREE ASSESSMENT</span>
            <h3 className="m-0 text-2xl font-bold leading-[1.3]">Find out if you qualify</h3>
            <p className="m-0 text-[15px] leading-[1.6] text-[#e6f6f8]">Book a consultation with Dr. Vikrant Sharma at Kaushambi, Ghaziabad.</p>
            <Link to={LINKS.contact} className="inline-flex items-center justify-center gap-2 min-h-12 rounded-lg bg-[#fdd350] text-[#241a00] font-bold text-[15px] no-underline hover:bg-[#ebc241]">
              Book Appointment <Arrow />
            </Link>
            {/* TODO: real phone number */}
            <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center justify-center gap-2 min-h-12 rounded-lg border border-[#81d3e1] text-white font-semibold text-[15px] no-underline hover:bg-white/10">
              Call [PHONE]
            </a>
          </div>

          <div className={`${card} p-7 flex flex-col gap-1.5`}>
            <span className={`${eyebrow} text-[#3e484a] pb-2`}>RELATED PROCEDURES</span>
            {procedures.map((p, i) => (
              <Link key={p.to} to={p.to} className={`flex justify-between items-center min-h-11 no-underline font-semibold text-[15px] text-[#005a65] hover:text-[#004f58] ${i < procedures.length - 1 ? "border-b border-[#eeeef0]" : ""}`}>
                {p.title.replace("Robotic ", "").replace(/^./, (c) => c.toUpperCase())}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      {/* Related posts */}
      <section className="bg-[#f3f3f6]">
        <div className="max-w-[1280px] mx-auto px-5 py-16 md:py-[120px] flex flex-col gap-8">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
              <span className={`${eyebrow} text-[#005a65]`}>KEEP READING</span>
              <h2 className={h2}>More from the Novo blog</h2>
            </div>
            <Link to="/blog" className="font-bold text-[15px] no-underline text-[#005a65] inline-flex items-center gap-1.5 min-h-[44px]">
              All articles <Arrow />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TODO: map your real blog posts here */}
            {[
              { cat: "ROBOTIC SURGERY", title: "Robotic Surgery in Delhi NCR: Why the Region Is Leading India", to: "/blog/robotic-surgery-delhi-ncr" },
            ].map((post) => (
              <Link key={post.to} to={post.to} className={`${card} overflow-hidden no-underline text-[#1a1c1e] flex flex-col hover:-translate-y-1 transition-transform`}>
                <div aria-hidden="true" className="aspect-video bg-[#e6f6f8] flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0d7481" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" strokeOpacity="0.4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  </svg>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className={`${plex} text-[11px] font-bold tracking-[0.1em] text-[#005a65]`}>{post.cat}</span>
                  <span className="text-xl font-bold leading-[1.35]">{post.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-5 py-16 md:py-[120px]">
          <div className="bg-[#0d7481] rounded-[1.5rem] p-8 md:p-16 flex flex-wrap gap-8 items-center justify-between">
            <div className="flex-[1_1_420px] min-w-0 flex flex-col gap-3">
              <h2 className="m-0 text-[28px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-white">
                Ready to talk about <em className="italic text-[#fdd350]">your</em> weight loss journey?
              </h2>
              <p className="m-0 text-lg leading-[1.6] text-[#e6f6f8]">Novo Robotic Surgery Centre, Kaushambi, Ghaziabad (Delhi NCR)</p>
            </div>
            <Link to={LINKS.contact} className="inline-flex items-center gap-2.5 min-h-14 px-7 rounded-lg bg-[#fdd350] text-[#241a00] font-bold text-[17px] no-underline hover:bg-[#ebc241]">
              Book a Consultation <Arrow size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}