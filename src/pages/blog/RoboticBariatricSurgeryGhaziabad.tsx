import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import sleeveVsBypassImg from "../../assets/images/BlogPagePic1.jpeg";
import { getSeo, SITE } from "../../data/seo";

// Route: /blog/robotic-bariatric-surgery-ghaziabad
// Content only — Navbar and Footer come from Layout.
// <title>, meta description and canonical come from src/data/seo.js via SeoManager;
// (set ogType: 'article' there too); this page only adds article dates, Twitter text and JSON-LD.

/* ---------------- SEO ---------------- */
const SLUG = "/blog/robotic-bariatric-surgery-ghaziabad";
const URL = `${SITE}${SLUG}`;
const { title: TITLE, description: DESCRIPTION } = getSeo(SLUG);
const HEADLINE =
  "Robotic Bariatric Surgery in Ghaziabad: When Diets and Exercise Haven't Delivered Lasting Results";
const PUBLISHED = "2026-10-24";
const MODIFIED = "2026-10-24";

const LINKS = {
  contact: "/contact",
  doctor: "/doctors/dr-vikrant-sharma",
  sleeve: "/services/robotic-sleeve-gastrectomy",
  rouxEnY: "/services/robotic-roux-en-y-gastric-bypass",
  miniBypass: "/services/robotic-mini-gastric-bypass",
  compareBlog: "/blog/sleeve-gastrectomy-vs-gastric-bypass",
};

/* ---------------- Content ---------------- */
const toc = [
  { id: "why-so-difficult", label: "Why weight loss is so hard" },
  { id: "what-is-robotic-bariatric-surgery", label: "What is robotic bariatric surgery?" },
  { id: "types", label: "Types of weight-loss surgery" },
  { id: "candidate", label: "Am I a candidate?" },
  { id: "benefits-risks", label: "Benefits and risks" },
  { id: "life-after", label: "Life after surgery" },
  { id: "why-novo", label: "Why consult Novo" },
  { id: "faq", label: "FAQs" },
];

const roboticFeatures = [
  { title: "Magnified 3D visualisation", text: "Helps the surgeon see anatomical structures clearly." },
  { title: "Flexible instrument movement", text: "Allows precise movements in different directions." },
  { title: "Support for surgical suturing", text: "Helps the surgeon perform delicate stitching during the operation." },
];

const procedures = [
  {
    n: "01",
    name: "Robotic Sleeve Gastrectomy",
    to: LINKS.sleeve,
    linkLabel: "robotic sleeve gastrectomy",
    body: [
      "A large portion of the stomach is removed, leaving a narrow, sleeve-shaped stomach. This reduces the amount of food the stomach can hold and affects hunger-related hormones.",
      "It may help suitable patients eat smaller portions and achieve significant weight loss. However, it is irreversible and can affect conditions such as acid reflux, so careful assessment is important.",
    ],
  },
  {
    n: "02",
    name: "Robotic Roux-en-Y Gastric Bypass",
    to: LINKS.rouxEnY,
    linkLabel: "robotic Roux-en-Y gastric bypass",
    body: [
      "The surgeon creates a small stomach pouch and connects it to the small intestine. This changes the amount of food the stomach can hold and the route food takes through the digestive system.",
      "It can support weight loss and improve certain obesity-related conditions, including type 2 diabetes. It may also be considered for some patients with acid reflux, depending on their clinical assessment.",
    ],
  },
  {
    n: "03",
    name: "Robotic Mini Gastric Bypass",
    to: LINKS.miniBypass,
    linkLabel: "robotic mini gastric bypass",
    body: [
      "Also called one-anastomosis gastric bypass, it involves creating a small stomach pouch and connecting it to the small intestine through a single connection.",
      "It can support substantial weight loss and improve certain obesity-related health conditions in appropriately selected patients. As with other bypass procedures, nutritional monitoring and long-term follow-up are essential.",
    ],
  },
];

const candidateFactors = [
  "Your BMI and overall health.",
  "Conditions such as type 2 diabetes, high blood pressure, sleep apnoea or joint problems.",
  "Your previous weight-management treatments and their results.",
  "Your nutritional status and medical history.",
  "Your readiness to follow dietary recommendations and attend long-term follow-up appointments.",
];

const benefits = [
  { title: "Small incisions", text: "Robotic bariatric procedures are generally performed through small incisions." },
  { title: "Visualisation and instrument control", text: "The robotic system provides a magnified view and allows the surgeon to control specialised instruments." },
  { title: "Recovery support", text: "Some patients can gradually return to everyday activities as they recover, following their surgeon's advice." },
  { title: "Weight and metabolic health", text: "Bariatric surgery can support significant weight loss and may improve obesity-related conditions in suitable patients." },
];

const risks = [
  "Bleeding",
  "Infection",
  "Blood clots",
  "Leaks",
  "Nutritional deficiencies",
  "Anaesthesia-related complications",
];

const lifeAfter = [
  {
    title: "Dietary changes",
    text: "Your diet typically progresses through stages, starting with liquids and gradually moving to other food textures as advised by your clinical team. Portion sizes, hydration and protein intake become important parts of your routine.",
  },
  {
    title: "Gradual return to daily activities",
    text: "Recovery varies according to the procedure, your health and how your body heals. Your surgeon will advise when you can resume walking, work, exercise and other activities.",
  },
  {
    title: "Weight-loss progress",
    text: "Weight loss occurs gradually and varies from person to person. Results depend on the procedure, starting weight, medical conditions, eating habits, physical activity and continued follow-up.",
  },
  {
    title: "Long-term monitoring",
    text: "You may need prescribed vitamin and mineral supplements, regular blood tests and ongoing nutritional support. Follow-up appointments help your team monitor progress and identify potential concerns.",
  },
];

const faqs = [
  {
    q: "Is robotic bariatric surgery safe?",
    a: "Bariatric surgery is an established treatment for appropriately selected patients with obesity, but it is a major operation with potential risks. Robotic assistance does not eliminate these risks. Your surgeon will explain the benefits, alternatives and possible complications based on your medical history.",
  },
  {
    q: "How much weight can I lose after bariatric surgery?",
    a: "Weight loss varies depending on the procedure, starting weight, health conditions and long-term habits. Your surgeon can discuss realistic expectations based on your individual assessment. No specific amount of weight loss can be guaranteed.",
  },
  {
    q: "Will I be able to eat normally after bariatric surgery?",
    a: "Most patients gradually return to a varied diet, but portion sizes and eating habits usually change. You will receive guidance on food progression, hydration, protein intake and nutritional supplements.",
  },
  {
    q: "Can weight return after bariatric surgery?",
    a: "Yes. Weight regain can occur after surgery. Regular follow-ups, nutritional guidance, appropriate physical activity and medical support can help you manage your weight over the long term.",
  },
  {
    q: "What is the cost of bariatric surgery in Ghaziabad?",
    a: "The cost depends on the procedure, hospital requirements, medical evaluation and individual treatment needs. Contact Novo Robotic Surgery Centre for information about the applicable procedure costs and available insurance guidance.",
  },
  {
    q: "What is the difference between robotic and laparoscopic bariatric surgery?",
    a: "Both approaches generally use small incisions. In conventional laparoscopy, the surgeon directly controls long surgical instruments while viewing a camera display. In robotic-assisted surgery, the surgeon controls specialised instruments through a robotic system that provides a magnified view and instrument articulation. The most suitable approach depends on the patient's needs, the procedure and the surgeon's assessment.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: HEADLINE,
      description: DESCRIPTION,
      image: [`${SITE}/og-image.jpg`],
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      inLanguage: "en-IN",
      mainEntityOfPage: { "@type": "WebPage", "@id": URL },
      author: { "@type": "MedicalOrganization", name: "Novo Robotic Surgery Centre", url: SITE },
      publisher: { "@type": "MedicalOrganization", name: "Novo Robotic Surgery Centre", url: SITE },
      about: [
        { "@type": "MedicalProcedure", name: "Robotic bariatric surgery", procedureType: "https://schema.org/SurgicalProcedure" },
        { "@type": "MedicalCondition", name: "Obesity" },
        { "@type": "Place", name: "Ghaziabad" },
      ],
      keywords:
        "robotic bariatric surgery Ghaziabad, weight loss surgery Ghaziabad, bariatric surgery Kaushambi, robotic sleeve gastrectomy, Roux-en-Y gastric bypass, mini gastric bypass, bariatric surgery Delhi NCR",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: "Robotic Bariatric Surgery in Ghaziabad", item: URL },
      ],
    },
  ],
};

/* ---------------- UI bits ---------------- */
const plex = "font-['IBM_Plex_Sans',sans-serif]";
const eyebrow = `${plex} text-xs font-bold uppercase tracking-[0.1em]`;
const card = "rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]";
const inlineLink =
  "font-semibold text-[#005a65] underline decoration-[#81d3e1] underline-offset-4 hover:decoration-[#005a65]";

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="scroll-mt-28 mt-16 mb-5 text-[26px] md:text-[32px] font-bold leading-[1.3] text-[#1a1c1e]">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[20px] md:text-[24px] font-semibold leading-[1.4] text-[#1a1c1e]">{children}</h3>
);

const Check = () => (
  <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 flex-none text-[#0d7481]" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-[#1a1c1e]">{children}</strong>
);

/* ---------------- Page ---------------- */
export default function RoboticBariatricSurgeryGhaziabad() {
  return (
    <main className="bg-[#f9f9fc] font-['Manrope',sans-serif] text-[#1a1c1e] antialiased">
      <Helmet>
        <meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content={PUBLISHED} />
        <meta property="article:modified_time" content={MODIFIED} />
        <meta property="article:section" content="Bariatric Surgery" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#e6f4f6] to-[#f9f9fc] pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className={`flex flex-wrap items-center gap-2 ${eyebrow} text-[#6e797b]`}>
              <li><Link to="/" className="hover:text-[#005a65]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/blog" className="hover:text-[#005a65]">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#005a65]" aria-current="page">Robotic Bariatric Surgery in Ghaziabad</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className={`inline-flex items-center gap-2 rounded-full bg-[#fdd350]/40 px-4 py-1.5 ${eyebrow} text-[#574500]`}>
                Bariatric Surgery · Patient Guide
              </span>
              <h1 className="mt-6 text-[36px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1a1c1e]">
                Robotic Bariatric Surgery in Ghaziabad: When Diets and Exercise{" "}
                <em className="text-[#005a65]">Haven't Delivered Lasting Results</em>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-[#3e484a]">
                Tried diet plans, fasting and workouts, and the weight keeps coming back? Here is how robotic
                weight-loss surgery works, who it may suit, and what life looks like afterwards.
              </p>
              <div className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 ${plex} text-sm text-[#3e484a]`}>
                <span>By <Strong>Novo Robotic Surgery Centre</Strong></span>
                <time dateTime={PUBLISHED}>24 October 2026</time>
                <span>7 min read</span>
              </div>
            </div>

            {/* Glass summary badge */}
            <div className="lg:col-span-4">
              <div className="rounded-[1.5rem] border border-white/60 bg-white/80 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <p className={`${eyebrow} text-[#006875]`}>At a glance</p>
                <dl className="mt-4 space-y-4 text-[15px]">
                  <div>
                    <dt className="font-bold text-[#1a1c1e]">Procedures covered</dt>
                    <dd className="text-[#3e484a]">Sleeve gastrectomy · Roux-en-Y bypass · Mini gastric bypass</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#1a1c1e]">Who it may suit</dt>
                    <dd className="text-[#3e484a]">Adults with obesity when non-surgical treatment hasn't lasted</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#1a1c1e]">Where</dt>
                    <dd className="text-[#3e484a]">Kaushambi, Ghaziabad · Delhi NCR</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-[1280px] px-5 pb-24 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Table of contents */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className={`sticky top-28 ${card} p-6`}>
              <p className={`${eyebrow} text-[#006875]`}>In this guide</p>
              <ul className="mt-4 space-y-3 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-[#3e484a] transition-colors hover:text-[#005a65]">{t.label}</a>
                  </li>
                ))}
              </ul>
              <Link
                to={LINKS.contact}
                className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#fdd350] px-4 py-3 text-sm font-bold text-[#241a00] transition-colors hover:bg-[#ebc241]"
              >
                Book Consultation <Arrow />
              </Link>
            </div>
          </aside>

          <article className="max-w-[760px] text-[17px] leading-[1.75] text-[#3e484a] md:text-lg lg:col-span-8 lg:col-start-5">
            {/* Why so difficult */}
            <H2 id="why-so-difficult">You've tried to lose weight. Why is it still so difficult?</H2>
            <p>
              Diet plans, intermittent fasting, exercise routines and meal replacements: you may have tried
              several approaches to lose weight. But if the results haven't lasted, it can be frustrating.
            </p>
            <p className="mt-5 rounded-2xl border-l-4 border-[#0d7481] bg-white px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <Strong>Obesity is a complex medical condition, not simply a lack of willpower.</Strong> Genetics,
              hormones, medications, lifestyle and other health factors can influence body weight.
            </p>
            <p className="mt-5">
              Although diet and physical activity are important, some people find it difficult to achieve and
              maintain significant weight loss through lifestyle changes alone. For people living with obesity,
              bariatric surgery may be an option when non-surgical treatments have not delivered sufficient,
              lasting results.
            </p>
            <p className="mt-5">
              At <Strong>Novo Robotic Surgery Centre in Kaushambi, Ghaziabad</Strong>, patients can consult a
              specialist to understand available weight-loss surgery options, including robotic-assisted
              procedures, and determine which approach may suit their individual needs.
            </p>

            {/* What is it */}
            <H2 id="what-is-robotic-bariatric-surgery">What is robotic bariatric surgery?</H2>
            <p>
              Bariatric surgery, also known as <Strong>weight-loss surgery</Strong>, includes procedures that
              change the size of the stomach and, in some operations, the way food passes through the digestive
              system. These changes can help patients feel full sooner, eat smaller portions and achieve
              significant weight loss over time.
            </p>
            <p className="mt-5">
              In robotic bariatric surgery, the surgeon operates using specialised instruments controlled through a
              robotic surgical system. <Strong>The surgeon remains in control throughout the procedure.</Strong>{" "}
              Depending on the system and procedure, robotic assistance can provide:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {roboticFeatures.map((f) => (
                <div key={f.title} className="rounded-2xl border-t-2 border-[#0d7481] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <p className="font-bold leading-[1.4] text-[#1a1c1e]">{f.title}</p>
                  <p className="mt-2 text-base">{f.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border-l-4 border-[#fdd350] bg-[#fff8e1] px-5 py-4 text-base">
              The suitability of robotic-assisted surgery depends on your condition, the planned procedure and the
              surgeon's clinical judgement. Robotic surgery does not guarantee better outcomes than conventional
              laparoscopic surgery, and the potential benefits and risks should be discussed during consultation.
            </p>

            {/* Types */}
            <H2 id="types">Types of robotic weight-loss surgery</H2>
            <p>
              The most appropriate procedure depends on several factors, including BMI, eating patterns, existing
              health conditions, medical history and individual treatment goals.
            </p>

            <div className="mt-8 space-y-6">
              {procedures.map((p) => (
                <section key={p.name} className={`${card} p-6 md:p-8`} aria-labelledby={`proc-${p.n}`}>
                  <div className="flex items-start gap-4">
                    <span className={`${plex} text-2xl font-bold text-[#ebc241]`} aria-hidden="true">{p.n}</span>
                    <div className="min-w-0">
                      <div id={`proc-${p.n}`}><H3>{p.name}</H3></div>
                      {p.body.map((para) => (
                        <p key={para.slice(0, 24)} className="mt-3 text-base md:text-[17px]">{para}</p>
                      ))}
                      <Link to={p.to} className={`mt-4 inline-flex items-center gap-2 text-base ${inlineLink}`}>
                        Learn more about {p.linkLabel} <Arrow />
                      </Link>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <figure className="my-10">
              <img
                src={sleeveVsBypassImg}
                alt="Diagram comparing gastric sleeve and gastric bypass: a narrowed stomach versus a small pouch connected to the small intestine"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
              />
              <figcaption className={`mt-3 ${plex} text-sm text-[#6e797b]`}>
                Sleeve gastrectomy reduces stomach size; bypass procedures also reroute food through the small
                intestine. See our{" "}
                <Link to={LINKS.compareBlog} className={inlineLink}>sleeve vs bypass comparison</Link>.
              </figcaption>
            </figure>

            <p>
              Your surgeon will explain the differences between these procedures, including their expected
              benefits, limitations and potential complications, before recommending an approach.
            </p>

            {/* Candidate */}
            <H2 id="candidate">Am I a candidate for bariatric surgery?</H2>
            <p>
              Bariatric surgery may be considered when obesity affects your health or quality of life and
              non-surgical treatments have not achieved sufficient results. Factors your specialist may assess
              include:
            </p>
            <ul className={`mt-6 ${card} divide-y divide-[#eeeef0] px-6`}>
              {candidateFactors.map((f) => (
                <li key={f} className="flex gap-3 py-4 text-base md:text-[17px]">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              International guidelines recommend metabolic and bariatric surgery for appropriately selected adults
              with a <Strong>BMI of 35 or above</Strong>. Surgery may also be considered for selected patients with
              lower BMI values, particularly those with metabolic disease or other obesity-related conditions that
              have not improved sufficiently with non-surgical treatment.{" "}
              <Strong>Different BMI thresholds may apply to Asian populations.</Strong>
            </p>
            <div className="mt-6 rounded-[1.5rem] bg-[#005a65] p-6 text-white md:p-8">
              <p className={`${eyebrow} text-[#81d3e1]`}>Important</p>
              <p className="mt-2 text-lg font-semibold leading-[1.5]">
                BMI alone does not determine whether surgery is suitable for you.
              </p>
              <p className="mt-2 text-base text-[#d9f3f6]">
                A specialist needs to assess your individual circumstances, health risks and treatment options
                before making a recommendation.
              </p>
            </div>

            {/* Benefits and risks */}
            <H2 id="benefits-risks">What are the potential benefits of robotic bariatric surgery?</H2>
            <p>
              Robotic assistance may offer technical advantages during selected procedures. However, the results
              depend on the procedure, the patient's health and the surgical team's experience. Potential
              considerations include:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className={`${card} p-5`}>
                  <div className="flex gap-3">
                    <Check />
                    <div>
                      <p className="font-bold text-[#1a1c1e]">{b.title}</p>
                      <p className="mt-1 text-base">{b.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#bec8cb] bg-[#f3f3f6] p-6 md:p-8">
              <H3>Every operation carries risks</H3>
              <p className="mt-3 text-base md:text-[17px]">Potential risks of bariatric surgery include:</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {risks.map((r) => (
                  <li key={r} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#3e484a]">{r}</li>
                ))}
              </ul>
              <p className="mt-4 text-base md:text-[17px]">
                Robotic assistance does not eliminate these risks or guarantee less pain, fewer complications or a
                faster recovery. Discuss the risks and expected benefits with your surgeon before deciding on
                treatment.
              </p>
            </div>

            {/* Life after */}
            <H2 id="life-after">Life after bariatric surgery: what should you expect?</H2>
            <p>
              Bariatric surgery is an important step in weight management, but ongoing care plays a major role in
              long-term outcomes.
            </p>
            <ol className="mt-6 space-y-4">
              {lifeAfter.map((l, i) => (
                <li key={l.title} className={`flex gap-5 ${card} p-5 md:p-6`}>
                  <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#005a65] ${plex} text-sm font-bold text-white`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <H3>{l.title}</H3>
                    <p className="mt-2 text-base md:text-[17px]">{l.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              Some patients also experience improvements in blood sugar, blood pressure, sleep apnoea and mobility.
              The extent of improvement varies, and outcomes cannot be guaranteed.
            </p>

            {/* Why Novo */}
            <H2 id="why-novo">Why consult Novo Robotic Surgery Centre in Ghaziabad?</H2>
            <p>
              Choosing bariatric surgery involves more than selecting a procedure. It requires an individual
              assessment, clear information about treatment options and a plan for recovery and long-term care.
            </p>
            <p className="mt-5">
              At <Strong>Novo Robotic Surgery Centre, Kaushambi, Ghaziabad</Strong>, you can consult the surgical
              team, led by <Link to={LINKS.doctor} className={inlineLink}>Dr. Vikrant Sharma</Link>, to discuss
              robotic-assisted weight-loss procedures, understand the possible benefits and risks, and learn what
              ongoing care may involve. A consultation can help you understand whether bariatric surgery is
              appropriate for your health needs and which options may be available.
            </p>

            {/* CTA */}
            <section
              id="book-consultation"
              aria-labelledby="book-consultation-title"
              className="relative mt-16 scroll-mt-28 overflow-hidden rounded-[1.5rem] bg-[#005a65] p-8 text-white md:p-12"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#0d7481] opacity-60" aria-hidden="true" />
              <div className="relative">
                <p className={`${eyebrow} text-[#81d3e1]`}>Kaushambi, Ghaziabad · Delhi NCR</p>
                <h2 id="book-consultation-title" className="mt-3 text-[28px] font-bold leading-[1.2] md:text-[36px]">
                  Take the first step towards better weight management
                </h2>
                <p className="mt-4 text-[#d9f3f6]">
                  If you have struggled to achieve lasting weight loss despite repeated attempts, you do not have to
                  navigate the options alone. Book a consultation to discuss your weight-management concerns and
                  learn whether robotic bariatric surgery may be suitable for you.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={LINKS.contact}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-6 py-4 font-bold text-[#241a00] transition-colors hover:bg-[#ebc241]"
                  >
                    Book a consultation <Arrow />
                  </Link>
                  <a
                    href="tel:+918882844375"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Call +91 88828 44375
                  </a>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-16 scroll-mt-28" aria-labelledby="faq-title">
              <p className={`${eyebrow} text-[#006875]`}>FAQ</p>
              <h2 id="faq-title" className="mt-2 mb-6 text-[26px] font-bold leading-[1.3] text-[#1a1c1e] md:text-[32px]">
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3">
                {faqs.map((f, i) => (
                  <details key={f.q} open={i === 0} className="group rounded-2xl bg-white px-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-bold text-[#1a1c1e] [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span aria-hidden="true" className="text-2xl text-[#005a65] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="m-0 pb-5 text-base leading-[1.6] text-[#3e484a]">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <p className="mt-10 text-sm italic text-[#6e797b]">
              This article is for general information and is not a substitute for medical advice. Please consult a
              qualified surgeon about your own situation.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}