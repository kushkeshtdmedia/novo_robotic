import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/BariaticBlog11.jpeg";
import milestoneImg from "../../assets/images/BariaticBlog12.jpeg";

/* ---------------- SEO ---------------- */
const SITE = "https://novorobotic.com";
const SLUG = "/blog/robotic-surgery-delhi-ncr";
const URL = `${SITE}${SLUG}`;
const TITLE = "Robotic Surgery in Delhi NCR: Benefits, Cost & Recovery";
const DESCRIPTION =
  "Delhi NCR now leads India in robotic surgery. Learn how it works, who it helps and why patients choose Novo Robotic Surgery Centre, Kaushambi, Ghaziabad.";
const OG_IMAGE = `${SITE}/blog/robotic-surgery-system-delhi-ncr.jpg`;
const PUBLISHED = "2026-10-21";
const MODIFIED = "2026-10-21";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: [OG_IMAGE, `${SITE}/blog/novo-robotic-200-robotic-surgeries.jpg`],
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    author: { "@type": "Organization", name: "Novo Robotic Surgery Centre", url: SITE },
    publisher: { "@type": "Organization", name: "Novo Robotic Surgery Centre", url: SITE },
    about: [
      { "@type": "MedicalProcedure", name: "Robotic surgery" },
      { "@type": "Place", name: "Delhi NCR" },
    ],
    keywords:
      "robotic surgery Delhi NCR, robotic surgery Ghaziabad, robotic surgeon Kaushambi, robotic bariatric surgery, robotic cancer surgery, Dr. Vikrant Sharma",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: "Robotic Surgery in Delhi NCR", item: URL },
    ],
  },
];

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function useBlogSeo() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${TITLE} | Novo Robotic`;

    setMeta("name", "description", DESCRIPTION);
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("property", "og:type", "article");
    setMeta("property", "og:title", TITLE);
    setMeta("property", "og:description", DESCRIPTION);
    setMeta("property", "og:url", URL);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("property", "og:site_name", "Novo Robotic Surgery Centre");
    setMeta("property", "og:locale", "en_IN");
    setMeta("property", "article:published_time", PUBLISHED);
    setMeta("property", "article:modified_time", MODIFIED);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", TITLE);
    setMeta("name", "twitter:description", DESCRIPTION);
    setMeta("name", "twitter:image", OG_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = URL;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-jsonld";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      script.remove();
    };
  }, []);
}

/* ---------------- Content ---------------- */
const toc = [
  { id: "what-is-robotic-surgery", label: "What is robotic surgery?" },
  { id: "why-delhi-ncr-leads", label: "Why Delhi NCR is leading India" },
  { id: "benefits", label: "Benefits for patients" },
  { id: "procedures", label: "Procedures at Novo" },
  { id: "why-novo", label: "Why patients choose Novo" },
  { id: "book-consultation", label: "Book a consultation" },
];

const robotFeatures = [
  { title: "Magnified 3D view", text: "of the area being operated on" },
  { title: "Wristed instruments", text: "that bend and rotate more than the human wrist" },
  { title: "Tremor filtering", text: "so even tiny movements stay smooth and controlled" },
  { title: "Small incisions", text: "instead of one large cut" },
];

const trends = [
  {
    title: "More robotic systems, more experience.",
    text: "As more centres install robots, surgeons across NCR are building deep experience in robot-assisted procedures.",
  },
  {
    title: "Made-in-India technology.",
    text: "Indian-developed robotic platforms are helping lower the cost barrier, so robotic surgery is no longer limited to a handful of big-city hospitals.",
  },
  {
    title: "Beyond urology.",
    text: "Robotic surgery has expanded into general surgery, gynaecology, cancer surgery, bariatric (weight-loss) surgery and more.",
  },
  {
    title: "Telesurgery.",
    text: "NCR has already seen robotic operations performed with the surgeon in one location and the patient in another. New Delhi hosted a global robotic surgery conference in April 2026 that featured live telesurgeries (SS Innovations, Apr 2026).",
  },
];

const benefits = [
  "Smaller cuts and smaller scars",
  "Less pain",
  "Less blood loss",
  "Shorter hospital stay",
  "Faster return",
  "Lower risk of wound infection",
  "Greater precision",
];

const procedures = [
  { area: "General surgery", items: ["Gallbladder surgery", "Hernia surgery", "Appendix surgery", "Oesophagus surgery"] },
  { area: "Weight-loss (bariatric) surgery", items: ["Robotic sleeve gastrectomy", "Roux-en-Y gastric bypass", "Mini gastric bypass"] },
  { area: "Cancer surgery", items: ["Stomach cancer", "Colorectal cancer", "Gynecologic cancer"] },
  { area: "Women's health", items: ["Fertility-preserving surgery", "Benign disorders of uterus and ovaries"] },
];

const reasons = [
  { title: "An experienced robotic surgeon", text: "Surgery at Novo is led by Dr. Vikrant Sharma, who specialises in robotic and minimally invasive surgery." },
  { title: "A dedicated robotic centre", text: "Novo is built around robotic surgery, so the whole team, from anaesthesia to nursing, works with robotic cases every day." },
  { title: "One place for many conditions", text: "General, cancer, bariatric and gynaecological robotic surgery under one roof." },
  { title: "Clear guidance before surgery", text: "We explain your options honestly, including when robotic surgery is not the best choice." },
  { title: "Easy to reach", text: "Kaushambi, Ghaziabad sits on the Delhi border, a short drive from East Delhi, Noida, Indirapuram and Vaishali." },
];

/* ---------------- UI bits ---------------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['IBM_Plex_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.1em] text-[#006875]">
    {children}
  </p>
);

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="scroll-mt-28 text-[26px] md:text-[32px] font-bold leading-[1.3] text-[#1a1c1e] mt-16 mb-5">
    {children}
  </h2>
);

const Check = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none text-[#0d7481]" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------------- Page ---------------- */
export default function RoboticSurgeryDelhiNCR() {
  useBlogSeo();

  return (
    <main className="bg-[#f9f9fc] font-['Manrope',sans-serif] text-[#1a1c1e] antialiased">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#e6f4f6] to-[#f9f9fc] pt-28 md:pt-36 pb-12">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-['IBM_Plex_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.1em] text-[#6e797b]">
              <li><Link to="/" className="hover:text-[#005a65]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/blog" className="hover:text-[#005a65]">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#005a65]" aria-current="page">Robotic Surgery in Delhi NCR</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdd350]/40 px-4 py-1.5 font-['IBM_Plex_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.1em] text-[#574500]">
              Patient Guide · Delhi NCR
            </span>
            <h1 className="mt-6 text-[36px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1a1c1e]">
              Robotic Surgery in Delhi NCR: Why the Region Is Leading India, and{" "}
              <em className="not-italic md:italic text-[#005a65]">What It Means for You</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-[#3e484a]">
              How robotic surgery works, who it helps, which conditions it can treat, and how to
              choose the right robotic surgery centre in Delhi NCR.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-['IBM_Plex_Sans',sans-serif] text-sm text-[#3e484a]">
              <span>By <strong className="text-[#1a1c1e]">Novo Robotic Surgery Centre</strong></span>
              <time dateTime={PUBLISHED}>21 October 2026</time>
              <span>6 min read</span>
            </div>
          </div>

          <figure className="relative mt-12">
            <img
              src={heroImg}
              alt="Multi-arm robotic surgery system with 3D surgical console view, as used for robotic surgery in Delhi NCR"
              width={1600}
              height={900}
              fetchPriority="high"
              className="w-full rounded-3xl object-cover shadow-[0_10px_40px_rgba(0,0,0,0.06)] aspect-[16/9]"
            />
            <div className="absolute left-3 bottom-3 md:left-8 md:bottom-8 rounded-xl md:rounded-2xl border border-white/60 bg-white/80 px-3 py-2 md:px-5 md:py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <p className="font-['IBM_Plex_Sans',sans-serif] text-[9px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-[#006875]">
                Surgeon-controlled
              </p>
              <p className="text-xs md:text-xl font-bold text-[#1a1c1e]">3D vision · Tremor filtering</p>
            </div>
          </figure>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of contents */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <Eyebrow>In this guide</Eyebrow>
              <ul className="mt-4 space-y-3 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-[#3e484a] hover:text-[#005a65] transition-colors">{t.label}</a>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#fdd350] px-4 py-3 text-sm font-bold text-[#241a00] hover:bg-[#ebc241] transition-colors"
              >
                Book Consultation <Arrow />
              </Link>
            </div>
          </aside>

          <article className="lg:col-span-8 lg:col-start-5 max-w-[760px] text-[17px] md:text-lg leading-[1.75] text-[#3e484a]">
            <p className="mt-4">
              India is fast becoming a major centre for robotic surgery, and{" "}
              <strong className="text-[#1a1c1e]">Delhi NCR is leading the way</strong>. At the Society of
              Robotic Surgery (SRS) India 2026 conference, experts pointed to the region's growing number
              of robotic systems and the rising volume of robot-assisted operations performed here. It is
              also the first time the society's international meeting has come to Asia.
            </p>
            <p className="mt-5">
              For patients in Delhi, Noida, Ghaziabad and the rest of NCR, this is more than a headline.
              It means world-class, minimally invasive surgery is now available close to home, without
              travelling abroad or to another city.
            </p>
            <p className="mt-5">
              In this guide, we explain what robotic surgery is, how it helps patients, which conditions
              it can treat, and how to choose the right robotic surgery centre in Delhi NCR.
            </p>

            <H2 id="what-is-robotic-surgery">What is robotic surgery?</H2>
            <p>
              Robotic surgery is a form of minimally invasive (keyhole) surgery. The surgeon operates
              through a few small cuts, using thin instruments and a high-definition 3D camera.{" "}
              <strong className="text-[#1a1c1e]">The robot does not operate on its own.</strong> Your
              surgeon sits at a console a few feet away and controls every movement. The robotic arms
              simply translate the surgeon's hand movements into smaller, steadier and more precise ones.
            </p>
            <p className="mt-5">Think of it as giving an experienced surgeon better eyes and steadier hands:</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {robotFeatures.map((f) => (
                <div key={f.title} className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-t-2 border-[#0d7481]">
                  <p className="font-bold text-[#1a1c1e]">{f.title}</p>
                  <p className="text-base mt-1">{f.text}</p>
                </div>
              ))}
            </div>

            <H2 id="why-delhi-ncr-leads">Why Delhi NCR is leading India in robotic surgery</H2>
            <p>
              Delhi NCR has a rare mix of experienced surgeons, large hospitals, teaching institutions and
              modern healthcare infrastructure. Experts say this makes the region a natural hub for
              robotic and minimally invasive care.
            </p>
            <p className="mt-5">A few trends are driving the growth:</p>
            <ul className="mt-6 space-y-5">
              {trends.map((t, i) => (
                <li key={t.title} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#005a65] font-['IBM_Plex_Sans',sans-serif] text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p><strong className="text-[#1a1c1e]">{t.title}</strong> {t.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              For patients, the result is simple: advanced robotic surgery is now available in Delhi NCR,
              with surgeons who perform these procedures regularly.
            </p>

            <figure className="my-12 -mx-5 md:mx-0">
              <img
                src={milestoneImg}
                alt="Novo Robotic Surgery Centre celebrates completing 200 robotic surgeries in Ghaziabad, Delhi NCR"
                width={1600}
                height={666}
                loading="lazy"
                decoding="async"
                className="w-full md:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
              />
              <figcaption className="mt-3 px-5 md:px-0 font-['IBM_Plex_Sans',sans-serif] text-sm text-[#6e797b]">
                Novo Robotic Surgery Centre has completed 200 robotic surgeries. Thank you for trusting us
                with your care.
              </figcaption>
            </figure>

            <H2 id="benefits">Benefits of robotic surgery for patients</H2>
            <p>Compared with traditional open surgery, robotic surgery usually means:</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <Check />
                  <span className="font-semibold text-[#1a1c1e] text-base">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl border-l-4 border-[#fdd350] bg-[#fff8e1] px-5 py-4 text-base">
              Every patient is different. Recovery depends on your health, age and the type of operation.
              Your surgeon will tell you whether robotic surgery is the right option for you.
            </p>

            <H2 id="procedures">Robotic procedures available at Novo Robotic Surgery Centre</H2>
            <p>
              At Novo Robotic Surgery Centre in Kaushambi, Ghaziabad, we offer robotic surgery across
              general, cancer, bariatric and gynaecological care.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <table className="w-full text-left text-base">
                <caption className="sr-only">Robotic procedures at Novo Robotic Surgery Centre</caption>
                <thead className="bg-[#005a65] text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-['IBM_Plex_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.1em] w-[38%]">Area</th>
                    <th scope="col" className="px-5 py-4 font-['IBM_Plex_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.1em]">Procedures</th>
                  </tr>
                </thead>
                <tbody>
                  {procedures.map((p, i) => (
                    <tr key={p.area} className={i % 2 ? "bg-[#f3f3f6]" : ""}>
                      <th scope="row" className="px-5 py-4 align-top font-bold text-[#1a1c1e]">{p.area}</th>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-2">
                          {p.items.map((it) => (
                            <span key={it} className="rounded-full bg-[#e6f4f6] px-3 py-1 text-sm font-medium text-[#004f58]">{it}</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              We also offer <strong className="text-[#1a1c1e]">tele-robotic surgery</strong>, bringing
              expert robotic care to patients beyond our own operating theatre.
            </p>

            <H2 id="why-novo">Why patients choose Novo Robotic Surgery Centre in Ghaziabad</H2>
            <p>
              Choosing where to have robotic surgery matters as much as choosing the technology. Here is
              what to look for, and what Novo offers:
            </p>
            <ol className="mt-6 space-y-4">
              {reasons.map((r, i) => (
                <li key={r.title} className="flex gap-5 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <span className="font-['IBM_Plex_Sans',sans-serif] text-2xl font-bold text-[#ebc241]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-bold text-[#1a1c1e]">{r.title}</p>
                    <p className="text-base mt-1">{r.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <section
              id="book-consultation"
              aria-labelledby="book-consultation-title"
              className="scroll-mt-28 mt-16 rounded-3xl bg-[#005a65] p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#0d7481] opacity-60" aria-hidden="true" />
              <div className="relative">
                <p className="font-['IBM_Plex_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.1em] text-[#81d3e1]">
                  Kaushambi, Ghaziabad · Delhi NCR
                </p>
                <h2 id="book-consultation-title" className="mt-3 text-[28px] md:text-[36px] font-bold leading-[1.2]">
                  Book a consultation
                </h2>
                <p className="mt-4 text-[#d9f3f6]">
                  Delhi NCR is now one of India's leading regions for robotic surgery, and you don't need to
                  travel far to benefit. If you or a family member has been advised surgery, speak to our team
                  about whether a robotic approach is right for you.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-6 py-4 font-bold text-[#241a00] hover:bg-[#ebc241] transition-colors"
                >
                  Book a consultation with Dr. Vikrant Sharma <Arrow />
                </Link>
              </div>
            </section>

            <p className="mt-10 text-sm italic text-[#6e797b]">
              This article is for general information and is not a substitute for medical advice.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}