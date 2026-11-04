import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroImg from "../../assets/images/surgeonSurgery1.jpeg";

// Route: /blog/gastrointestinal-surgery-ghaziabad-delhi-ncr
// Self-contained: title/description are also in src/data/seo.js (used by SeoManager),
// but this page does not import seo.js.

/* ---------------- SEO ---------------- */
const SITE = "https://www.novorobotic.com";
const SLUG = "/blog/gastrointestinal-surgery-ghaziabad-delhi-ncr";
const URL = `${SITE}${SLUG}`;
const TITLE = "Robotic GI Surgery in Ghaziabad & Delhi NCR | Novo Robotic";
const DESCRIPTION =
  "Explore gastrointestinal surgery options in Ghaziabad, including gallbladder, hernia, appendix, stomach and colorectal procedures at Novo Robotic Surgery Centre.";
const HEADLINE =
  "Gut Feeling Something's Wrong? Your Guide to Robotic & Laparoscopic GI Surgery in Ghaziabad";
const PUBLISHED = "2026-11-04";
const MODIFIED = "2026-11-04";

const LINKS = {
  contact: "/contact",
  doctor: "/doctors/dr-vikrant-sharma",
  gallbladder: "/services/gallbladder-surgery",
  appendix: "/services/appendix-surgery",
  hernia: "/services/hernia-surgery",
  colorectal: "/services/colorectal-cancer-surgery",
  stomach: "/services/stomach-cancer-surgery",
  oesophagus: "/services/oesophagus-surgery",
  sleeve: "/services/robotic-sleeve-gastrectomy",
  rouxEnY: "/services/robotic-roux-en-y-gastric-bypass",
  miniBypass: "/services/robotic-mini-gastric-bypass",
  roboticVsLap: "/blog/laparoscopic-vs-robotic-surgery",
};

/* ---------------- Content ---------------- */
const toc = [
  { id: "when-surgery", label: "When is surgery needed?" },
  { id: "types", label: "Common types of GI surgery" },
  { id: "tests", label: "Tests before surgery" },
  { id: "robotic-vs-laparoscopic", label: "Robotic vs laparoscopic vs open" },
  { id: "prepare-recover", label: "Preparing and recovering" },
  { id: "why-novo", label: "Why choose Novo" },
  { id: "book-consultation", label: "Book a consultation" },
  { id: "faq", label: "FAQs" },
];

const reasons = [
  "Gallstones causing repeated pain, jaundice or pancreatitis",
  "Appendicitis, which needs urgent removal before the appendix bursts",
  "Hernias (groin, belly button, old scar, or hiatal) that are painful or growing",
  "GERD (chronic acid reflux) not controlled by medicines",
  "Cancers of the food pipe, stomach, colon, rectum, gallbladder or pancreas",
  "Severe obesity with diabetes, high blood pressure or sleep apnoea",
];

const overview = [
  ["Cholecystectomy", "Gallbladder", "Gallstones, gallbladder infection", "Laparoscopic or robotic", "1–2 weeks"],
  ["Appendectomy", "Appendix", "Appendicitis", "Laparoscopic", "1–3 weeks"],
  ["Hernia repair", "Abdominal wall", "Inguinal, umbilical, incisional hernia", "Robotic, laparoscopic or open, with mesh", "1–3 weeks"],
  ["Fundoplication / hiatal hernia repair", "Food pipe, stomach", "Severe GERD, hiatal hernia", "Robotic or laparoscopic", "2–4 weeks"],
  ["Small bowel resection", "Small intestine", "Blockage, Crohn's, tumours", "Laparoscopic or open", "4–6 weeks"],
  ["Colectomy / rectal surgery", "Colon, rectum", "Colorectal cancer, diverticulitis, colitis", "Robotic, laparoscopic or open", "4–6 weeks"],
  ["Gastrectomy", "Stomach", "Stomach cancer, complicated ulcers", "Robotic, laparoscopic or open", "6–8 weeks"],
  ["Esophagectomy", "Food pipe", "Esophageal cancer, severe strictures", "Minimally invasive (robotic/laparoscopic) or open", "8–12 weeks"],
  ["Radical cholecystectomy", "Gallbladder, liver bed, lymph nodes", "Gallbladder cancer", "Robotic, laparoscopic or open", "4–6 weeks"],
  ["Whipple and pancreatic surgery", "Pancreas, duodenum", "Pancreatic tumours, chronic pancreatitis", "Mostly open; robotic in selected cases", "6–10 weeks"],
  ["Bariatric surgery", "Stomach, small intestine", "Severe obesity, metabolic disease", "Robotic or laparoscopic", "2–4 weeks"],
];

type Procedure = {
  title: string;
  body: string;
  links?: { label: string; to: string }[];
};

const procedures: Procedure[] = [
  {
    title: "Cholecystectomy (gallbladder removal)",
    body: "Gallstones are among the most common digestive problems in North India. When they cause repeated pain, infection or jaundice, the gallbladder is removed through 3–4 small cuts. You can live normally without a gallbladder; bile simply flows straight from the liver into the intestine. Most patients go home within 24–48 hours, which is why gallbladder surgery in Ghaziabad is often a planned, same-week operation.",
    links: [{ label: "Gallbladder Surgery", to: LINKS.gallbladder }],
  },
  {
    title: "Appendectomy (appendix removal)",
    body: "Appendicitis usually starts as pain around the navel that shifts to the lower right belly, often with fever and vomiting. It is an emergency because a burst appendix spreads infection through the abdomen. Laparoscopic appendectomy removes it through small cuts, and most patients go home in 1–2 days.",
    links: [{ label: "Appendix Surgery", to: LINKS.appendix }],
  },
  {
    title: "Hernia repair",
    body: "A hernia is a bulge where tissue pushes through a weak spot in the abdominal wall: the groin (inguinal), belly button (umbilical) or an old surgical scar (incisional). Hernias do not heal on their own and can trap bowel, which is an emergency. The surgeon pushes the tissue back and reinforces the wall with mesh. Robotic and laparoscopic hernia repair usually mean less pain and an earlier return to work, and robotic assistance is especially useful for large, recurrent or incisional hernias.",
    links: [{ label: "Hernia Surgery", to: LINKS.hernia }],
  },
  {
    title: "Fundoplication and hiatal hernia repair",
    body: "For people with long-standing acid reflux who still have heartburn or regurgitation despite medicines, the surgeon wraps the top of the stomach around the lower food pipe to strengthen the valve. Any hiatal hernia is repaired in the same sitting. Because this area sits deep under the diaphragm, the magnified 3D view of a robotic system helps the surgeon work precisely.",
  },
  {
    title: "Small bowel resection",
    body: "The damaged or blocked section of the small intestine is removed and the healthy ends are joined back together. It is used for blockage from adhesions, Crohn's disease strictures, tumours or loss of blood supply.",
  },
  {
    title: "Colectomy and rectal surgery",
    body: "Part or all of the large intestine is removed to treat colorectal cancer, recurrent diverticulitis, or severe ulcerative colitis or Crohn's disease. The rectum lies in the narrow pelvis, where robotic surgery's fine, wristed instruments can help the surgeon protect nearby nerves and structures. Some patients need a temporary stoma (an opening on the belly for stool), which is usually closed a few months later.",
    links: [{ label: "Colorectal Cancer Surgery", to: LINKS.colorectal }],
  },
  {
    title: "Gastrectomy (stomach surgery)",
    body: "Part (partial) or all (total) of the stomach is removed, mainly for stomach cancer and sometimes for ulcers that bleed, perforate or block. Afterwards, patients eat smaller, more frequent meals and may need vitamin B12 support.",
    links: [{ label: "Stomach Cancer Surgery", to: LINKS.stomach }],
  },
  {
    title: "Esophagectomy (food pipe surgery)",
    body: "Part of the food pipe is removed, usually for cancer, and the stomach is pulled up to replace it. It is a major operation that needs an experienced surgical, anaesthesia and ICU team, plus nutrition support during recovery. Minimally invasive and robotic approaches can reduce the strain on the chest and lungs compared with fully open surgery.",
    links: [{ label: "Oesophagus Surgery", to: LINKS.oesophagus }],
  },
  {
    title: "Radical cholecystectomy (gallbladder cancer surgery)",
    body: "When gallbladder cancer is found, the gallbladder is removed along with a margin of the nearby liver and the surrounding lymph nodes. This is different from routine gallstone surgery and should be planned by a surgeon experienced in GI cancer.",
  },
  {
    title: "Whipple procedure and pancreatic surgery",
    body: "The Whipple procedure (pancreaticoduodenectomy) removes the head of the pancreas, the first part of the small intestine, the gallbladder and part of the bile duct. It treats tumours of the pancreas and nearby organs. Other pancreatic operations relieve pain from chronic pancreatitis or drain infected collections.",
  },
  {
    title: "Bariatric (weight-loss) surgery",
    body: "Sleeve gastrectomy, Roux-en-Y gastric bypass and mini gastric bypass reduce stomach size and change how food is absorbed. They are considered for people with severe obesity, especially with type 2 diabetes, high blood pressure or sleep apnoea. Long-term success depends on diet changes, exercise and regular follow-up.",
    links: [
      { label: "Robotic Sleeve Gastrectomy", to: LINKS.sleeve },
      { label: "Robotic Roux-en-Y Gastric Bypass", to: LINKS.rouxEnY },
      { label: "Robotic Mini Gastric Bypass", to: LINKS.miniBypass },
    ],
  },
];

const tests = [
  { title: "Upper GI endoscopy", text: "A thin camera passed through the mouth to examine the food pipe, stomach and duodenum, and take biopsies." },
  { title: "Colonoscopy", text: "A camera passed through the rectum to check the colon for polyps, bleeding, colitis or cancer. Many polyps are removed during the test itself." },
  { title: "ERCP", text: "An endoscopic procedure to remove bile duct stones or place a stent, often done before gallbladder surgery." },
  { title: "Ultrasound, CT and MRI/MRCP", text: "Imaging of the gallbladder, liver, pancreas and bowel." },
  { title: "Blood tests", text: "Liver function, tumour markers and fitness checks for anaesthesia." },
];

const comparison = [
  ["Incision", "Small cuts (about 0.8–1.2 cm)", "3–5 cuts of 0.5–1.5 cm", "One cut, often 10–20 cm"],
  ["Surgeon's view", "Magnified 3D, high definition", "2D (sometimes 3D) on a screen", "Direct, unmagnified"],
  ["Instrument movement", "Wristed, tremor-filtered", "Straight, rigid", "Hands inside the body"],
  ["Pain after surgery", "Less", "Less", "More"],
  ["Hospital stay", "Usually shorter", "Usually shorter", "Usually longer"],
  [
    "Particularly useful for",
    "Deep or narrow areas: rectum, food pipe, hiatal hernia, complex hernias, revisional and bariatric surgery, many GI cancers",
    "Gallbladder, appendix, hernia, reflux, many bowel and bariatric operations",
    "Very large tumours, emergencies with widespread infection, some complex pancreatic and liver surgery",
  ],
];

const before = [
  { title: "Pre-operative check-up", text: "Blood tests, ECG, chest X-ray and an anaesthesia review." },
  { title: "Medicines", text: "Tell your doctor about every medicine you take. Blood thinners and some diabetes drugs may need to be stopped or adjusted." },
  { title: "Fasting", text: "Usually no food for 6–8 hours before surgery; some bowel operations need a bowel-cleansing preparation." },
  { title: "Smoking and alcohol", text: "Stopping 2–4 weeks before surgery lowers the risk of lung and wound problems." },
  { title: "Plan ahead", text: "Arrange for a family member to stay with you and for time off work." },
];

const after = [
  { title: "Diet", text: "Start with liquids, move to soft food, then normal meals as advised. Bariatric and stomach surgery patients follow a staged diet plan." },
  { title: "Walk early", text: "Short walks from the first day reduce the risk of clots and help the bowel start working again." },
  { title: "Wound care", text: "Keep cuts clean and dry; avoid lifting heavy weights for 4–6 weeks." },
  { title: "Follow-up", text: "The first review is usually within 7–10 days, when dressings are checked and biopsy reports are discussed." },
];

const whyNovo = [
  { title: "Experienced GI and robotic surgeon", text: "Care led by Dr. Vikrant Sharma.", link: { label: "Meet Dr. Vikrant Sharma", to: LINKS.doctor } },
  { title: "Robotic and laparoscopic options", text: "For gallbladder, hernia, reflux, bowel, stomach, oesophagus and bariatric surgery." },
  { title: "GI cancer surgery", text: "For stomach, food pipe, colorectal and gallbladder cancers." },
  { title: "Robotic bariatric surgery", text: "Including sleeve gastrectomy, Roux-en-Y and mini gastric bypass." },
  { title: "A clear plan for every patient", text: "The right approach (robotic, laparoscopic or open) chosen for your condition, not one-size-fits-all." },
  { title: "Post-operative support", text: "Including diet guidance and scheduled follow-ups." },
];

const faqs = [
  {
    q: "Which is the most common gastrointestinal surgery?",
    a: "Gallbladder removal (cholecystectomy) and appendectomy are among the most frequently performed GI operations, followed closely by hernia repair.",
  },
  {
    q: "Is robotic GI surgery better than laparoscopic surgery?",
    a: "Both are minimally invasive. Robotic surgery gives the surgeon a magnified 3D view and wristed instruments, which helps most in deep or tight spaces such as the rectum, food pipe and hiatus, and in complex hernia, cancer and bariatric operations. For many simple procedures, laparoscopic surgery works just as well. Your surgeon will recommend the right option for you.",
  },
  {
    q: "How long is the hospital stay after robotic or laparoscopic GI surgery?",
    a: "For gallbladder, appendix or hernia surgery, most patients go home in 1–2 days. Major operations such as colectomy, gastrectomy, esophagectomy or the Whipple procedure need a longer stay, often a week or more.",
  },
  {
    q: "Can gallstones be treated without surgery?",
    a: "Medicines rarely dissolve stones permanently. If gallstones cause symptoms, removing the gallbladder is the standard treatment, as stones tend to recur and can lead to jaundice or pancreatitis.",
  },
  {
    q: "What is the cost of gallbladder or hernia surgery in Ghaziabad?",
    a: "Cost depends on the procedure, the approach (robotic, laparoscopic or open), room category, tests and insurance coverage. Contact Novo Robotic Surgery Centre for a personalised estimate after consultation.",
  },
  {
    q: "How do I choose the best GI surgeon in Delhi NCR?",
    a: "Look for a surgeon experienced in your specific procedure, access to both robotic and laparoscopic options, ICU and anaesthesia support, and clear follow-up care. Don't hesitate to ask how many similar operations the surgeon has performed.",
  },
  {
    q: "Is Novo Robotic Surgery Centre accessible from Noida and East Delhi?",
    a: "Yes. The centre is in Kaushambi, Ghaziabad, right on the Delhi–UP border, and is easily reachable from Noida, Indirapuram, Vaishali and East Delhi.",
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
        { "@type": "MedicalProcedure", name: "Gastrointestinal surgery", procedureType: "https://schema.org/SurgicalProcedure" },
        { "@type": "MedicalProcedure", name: "Robotic surgery" },
        { "@type": "Place", name: "Ghaziabad" },
      ],
      keywords:
        "gastrointestinal surgery Ghaziabad, GI surgeon Delhi NCR, robotic GI surgery, laparoscopic surgery Ghaziabad, gallbladder surgery Ghaziabad, hernia surgery Ghaziabad, colorectal surgery, stomach cancer surgery, Kaushambi",
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
        { "@type": "ListItem", position: 3, name: "GI Surgery in Ghaziabad", item: URL },
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
const th = `px-4 py-3 ${plex} text-xs font-bold uppercase tracking-[0.1em] align-bottom`;

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="scroll-mt-28 mt-16 mb-5 text-[26px] md:text-[32px] font-bold leading-[1.3] text-[#1a1c1e]">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[20px] md:text-[22px] font-semibold leading-[1.4] text-[#1a1c1e]">{children}</h3>
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
export default function GastrointestinalSurgeryGhaziabad() {
  return (
    <main className="bg-[#f9f9fc] font-['Manrope',sans-serif] text-[#1a1c1e] antialiased">
      <Helmet>
        <meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content={PUBLISHED} />
        <meta property="article:modified_time" content={MODIFIED} />
        <meta property="article:section" content="GI Surgery" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#e6f4f6] to-[#f9f9fc] pt-28 pb-12 md:pt-36">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className={`flex flex-wrap items-center gap-2 ${eyebrow} text-[#6e797b]`}>
              <li><Link to="/" className="hover:text-[#005a65]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/blog" className="hover:text-[#005a65]">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#005a65]" aria-current="page">GI Surgery in Ghaziabad</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <span className={`inline-flex items-center gap-2 rounded-full bg-[#fdd350]/40 px-4 py-1.5 ${eyebrow} text-[#574500]`}>
              GI Surgery · Patient Guide
            </span>
            <h1 className="mt-6 text-[34px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1a1c1e]">
              Gut Feeling Something's Wrong? Your Guide to{" "}
              <em className="text-[#005a65]">Robotic &amp; Laparoscopic GI Surgery</em> in Ghaziabad
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-[#3e484a]">
              The main digestive operations, when each is needed, how robotic surgery fits in, and what recovery
              looks like.
            </p>
            <div className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 ${plex} text-sm text-[#3e484a]`}>
              <span>By <Strong>Novo Robotic Surgery Centre</Strong></span>
              <time dateTime={PUBLISHED}>4 November 2026</time>
              <span>9 min read</span>
            </div>
          </div>

          <figure className="relative mt-12">
            <img
              src={heroImg}
              alt="Robotic surgical system with multiple instrument arms and 3D display, used for robotic GI surgery"
              width={1600}
              height={1066}
              fetchPriority="high"
              className="aspect-[16/9] w-full rounded-[1.5rem] object-cover shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            />
            <div className="absolute bottom-3 left-3 rounded-xl border border-white/60 bg-white/80 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl md:bottom-8 md:left-8 md:rounded-2xl md:px-5 md:py-4">
              <p className={`${plex} text-[9px] font-bold uppercase tracking-[0.1em] text-[#006875] md:text-[11px]`}>
                Keyhole GI surgery
              </p>
              <p className="text-xs font-bold text-[#1a1c1e] md:text-xl">Robotic · Laparoscopic</p>
            </div>
          </figure>
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

          <article className="min-w-0 max-w-[760px] text-[17px] leading-[1.75] text-[#3e484a] md:text-lg lg:col-span-8 lg:col-start-5">
            <p className="mt-4">
              Bloating that never settles, a stabbing pain under the right ribs after a heavy meal, a bulge in the
              groin that grows when you cough. Many people in Ghaziabad, Noida and across Delhi NCR live with
              symptoms like these for months before seeing a specialist. By then, a problem that needed a simple
              keyhole procedure can turn into an emergency.
            </p>
            <p className="mt-5">
              Gastrointestinal (GI) surgery covers operations on the food pipe, stomach, intestines, liver,
              gallbladder, pancreas and rectum. The good news: most GI operations today are done through small cuts,
              either laparoscopically or with robotic assistance, which usually means less pain, a shorter hospital
              stay and a quicker return to normal life.
            </p>
            <p className="mt-5">
              If you are looking for <Strong>gastrointestinal surgery in Ghaziabad</Strong> or an experienced{" "}
              <Strong>GI surgeon in Delhi NCR</Strong>, this guide explains the main procedures, when each is
              needed, how robotic surgery fits in, and what recovery looks like.
            </p>

            {/* When surgery */}
            <H2 id="when-surgery">When does a digestive problem need surgery?</H2>
            <p>
              Most digestive complaints are treated with medicines, diet changes or endoscopy. Surgery is advised
              when the problem is structural, keeps coming back, or carries a risk of rupture, blockage or cancer
              spread. Common reasons patients are referred to a GI surgeon:
            </p>
            <ul className={`mt-6 ${card} divide-y divide-[#eeeef0] px-6`}>
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 py-4 text-base md:text-[17px]">
                  <Check />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border-l-4 border-[#ba1a1a] bg-[#ffdad6]/50 px-5 py-4 text-base">
              <Strong>Warning signs that need same-day care:</Strong> severe abdominal pain, vomiting blood, black
              or bloody stools, a hard swollen belly, or yellow eyes with fever.
            </div>

            {/* Types */}
            <H2 id="types">Common types of gastrointestinal surgery</H2>
            <p>
              The table gives a quick overview; details on each follow. Recovery times are typical ranges for
              uncomplicated cases and vary with age, overall health and the extent of surgery.
            </p>
            <div className={`mt-6 overflow-x-auto ${card}`}>
              <table className="w-full min-w-[680px] text-left text-[15px] leading-[1.5]">
                <caption className="sr-only">Overview of common gastrointestinal surgeries</caption>
                <thead className="bg-[#005a65] text-white">
                  <tr>
                    <th scope="col" className={th}>Surgery</th>
                    <th scope="col" className={th}>Organ</th>
                    <th scope="col" className={th}>Treats</th>
                    <th scope="col" className={th}>Usual approach</th>
                    <th scope="col" className={th}>Typical return to routine</th>
                  </tr>
                </thead>
                <tbody>
                  {overview.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-[#f3f3f6]" : ""}>
                      <th scope="row" className="px-4 py-3 align-top font-bold text-[#1a1c1e]">{row[0]}</th>
                      <td className="px-4 py-3 align-top">{row[1]}</td>
                      <td className="px-4 py-3 align-top">{row[2]}</td>
                      <td className="px-4 py-3 align-top">{row[3]}</td>
                      <td className={`px-4 py-3 align-top whitespace-nowrap ${plex} font-semibold text-[#004f58]`}>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ol className="mt-8 space-y-5">
              {procedures.map((p, i) => (
                <li key={p.title} className={`${card} p-6 md:p-8`}>
                  <div className="flex items-start gap-4">
                    <span className={`${plex} text-2xl font-bold text-[#ebc241]`} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <H3>{p.title}</H3>
                      <p className="mt-3 text-base md:text-[17px]">{p.body}</p>
                      {p.links && (
                        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base">
                          {p.links.map((l) => (
                            <Link key={l.to} to={l.to} className={`inline-flex items-center gap-2 ${inlineLink}`}>
                              {l.label} <Arrow />
                            </Link>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            {/* Tests */}
            <H2 id="tests">Tests before surgery</H2>
            <p>
              An accurate diagnosis decides whether you need surgery at all, and which kind. Your doctor will usually
              start with one or more of these:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tests.map((t) => (
                <div key={t.title} className="rounded-2xl border-t-2 border-[#0d7481] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <p className="font-bold text-[#1a1c1e]">{t.title}</p>
                  <p className="mt-1 text-base">{t.text}</p>
                </div>
              ))}
            </div>

            {/* Robotic vs lap vs open */}
            <H2 id="robotic-vs-laparoscopic">Robotic vs laparoscopic vs open surgery: what's the difference?</H2>
            <p>
              <Strong>Open surgery</Strong> uses one larger incision. <Strong>Laparoscopic (keyhole) surgery</Strong>{" "}
              uses 3–5 small cuts, a camera and long, straight instruments. <Strong>Robotic-assisted surgery</Strong>{" "}
              also uses small cuts, but the surgeon controls the instruments from a console, with a magnified 3D view
              and instruments that bend like a human wrist. The robot never operates on its own; every movement is
              made by your surgeon.
            </p>
            <div className={`mt-6 overflow-x-auto ${card}`}>
              <table className="w-full min-w-[640px] text-left text-[15px] leading-[1.5]">
                <caption className="sr-only">Robotic vs laparoscopic vs open surgery</caption>
                <thead className="bg-[#005a65] text-white">
                  <tr>
                    <th scope="col" className={th}>Factor</th>
                    <th scope="col" className={th}>Robotic surgery</th>
                    <th scope="col" className={th}>Laparoscopic surgery</th>
                    <th scope="col" className={th}>Open surgery</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-[#f3f3f6]" : ""}>
                      <th scope="row" className="px-4 py-3 align-top font-bold text-[#1a1c1e]">{row[0]}</th>
                      <td className="px-4 py-3 align-top text-[#004f58]">{row[1]}</td>
                      <td className="px-4 py-3 align-top">{row[2]}</td>
                      <td className="px-4 py-3 align-top">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 rounded-2xl border-l-4 border-[#fdd350] bg-[#fff8e1] px-5 py-4 text-base">
              Not every patient needs robotic surgery, and not every operation benefits from it. Sometimes a
              minimally invasive operation is switched to open surgery mid-way for safety; this is a sound surgical
              decision, not a complication.
            </p>
            <p className="mt-5">
              If you are considering <Strong>robotic or laparoscopic surgery in Ghaziabad</Strong>, ask your surgeon
              which approach suits your case. For a deeper comparison, read{" "}
              <Link to={LINKS.roboticVsLap} className={inlineLink}>laparoscopic vs robotic surgery</Link>.
            </p>

            {/* Prepare & recover */}
            <H2 id="prepare-recover">Preparing for GI surgery and recovering well</H2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { heading: "Before surgery", items: before },
                { heading: "After surgery", items: after },
              ].map((col) => (
                <section key={col.heading} className={`${card} p-6`}>
                  <H3>{col.heading}</H3>
                  <ul className="mt-4 space-y-4">
                    {col.items.map((it) => (
                      <li key={it.title} className="flex gap-3 text-base">
                        <Check />
                        <span><Strong>{it.title}:</Strong> {it.text}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] bg-[#005a65] p-6 text-white md:p-8">
              <p className={`${eyebrow} text-[#81d3e1]`}>Call your surgeon promptly for</p>
              <p className="mt-2 text-lg font-semibold leading-[1.5]">
                Fever, wound redness or discharge, persistent vomiting, worsening belly pain, or yellow eyes.
              </p>
            </div>

            {/* Why Novo */}
            <H2 id="why-novo">Why patients choose Novo Robotic Surgery Centre for GI surgery</H2>
            <p>
              Novo Robotic Surgery Centre in Kaushambi, Ghaziabad, is easy to reach from Ghaziabad, Indirapuram,
              Vaishali, Noida and East Delhi. Patients choose Novo for:
            </p>
            <ol className="mt-6 space-y-4">
              {whyNovo.map((r, i) => (
                <li key={r.title} className={`flex gap-5 ${card} p-5`}>
                  <span className={`${plex} text-2xl font-bold text-[#ebc241]`} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-bold text-[#1a1c1e]">{r.title}</p>
                    <p className="mt-1 text-base">
                      {r.text}{" "}
                      {r.link && (
                        <Link to={r.link.to} className={inlineLink}>{r.link.label}</Link>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

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
                  Book a consultation
                </h2>
                <p className="mt-4 text-[#d9f3f6]">
                  If you or a family member has persistent digestive symptoms, a diagnosed gallstone or hernia, or has
                  been advised GI surgery, speak to our team.
                </p>
                <dl className="mt-6 grid grid-cols-1 gap-4 text-base sm:grid-cols-2">
                  <div>
                    <dt className={`${eyebrow} text-[#81d3e1]`}>Call</dt>
                    <dd className="mt-1">
                      <a href="tel:+918882844375" className="font-semibold hover:underline">+91 88828 44375</a>
                      {" / "}
                      <a href="tel:+918527516622" className="font-semibold hover:underline">+91 85275 16622</a>
                    </dd>
                  </div>
                  <div>
                    <dt className={`${eyebrow} text-[#81d3e1]`}>Email</dt>
                    <dd className="mt-1">
                      <a href="mailto:enquiry@novorobotic.com" className="font-semibold break-all hover:underline">enquiry@novorobotic.com</a>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className={`${eyebrow} text-[#81d3e1]`}>Address</dt>
                    <dd className="mt-1 text-[#d9f3f6]">
                      B-12/13, Near Dabur Lane, Anand Vihar, Kaushambi, Ghaziabad, Uttar Pradesh – 201010
                    </dd>
                  </div>
                </dl>
                <Link
                  to={LINKS.contact}
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-6 py-4 font-bold text-[#241a00] transition-colors hover:bg-[#ebc241]"
                >
                  Make an Appointment <Arrow />
                </Link>
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