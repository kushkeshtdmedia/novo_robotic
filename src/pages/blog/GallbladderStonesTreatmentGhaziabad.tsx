import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";

/**
 * Blog: Best Treatment for Gallbladder Stones in Ghaziabad: When Is Surgery Needed?
 * Route: /blog/gallbladder-stones-treatment-ghaziabad
 * Styled with the Precision Care design tokens.
 */

const SITE = "https://www.novorobotic.com";
const SLUG = "/blog/gallbladder-stones-treatment-ghaziabad";
const URL = `${SITE}${SLUG}`;
const TITLE =
  "Best Treatment for Gallbladder Stones in Ghaziabad: When Is Surgery Needed?";
const DESCRIPTION =
  "Gallbladder stones in Ghaziabad? Learn the symptoms, causes, tests and best treatment, and when laparoscopic or robotic gallbladder surgery is needed. Simple patient guide.";
const PUBLISHED = "2026-11-18";

const sections = [
  { id: "what-are-gallstones", label: "What are gallstones?" },
  { id: "symptoms", label: "Symptoms" },
  { id: "warning-signs", label: "Warning signs" },
  { id: "causes", label: "Causes and risk factors" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment-options", label: "Treatment options" },
  { id: "when-surgery", label: "When is surgery needed?" },
  { id: "types-of-surgery", label: "Types of surgery" },
  { id: "recovery", label: "Recovery" },
  { id: "myths", label: "Myths vs facts" },
  { id: "choosing-hospital", label: "Choosing a hospital" },
  { id: "faq", label: "FAQs" },
];

const symptoms = [
  "Pain in the upper right or middle of the belly, often starting 30 minutes to 2 hours after a heavy or oily meal",
  "Pain that spreads to the right shoulder or back, between the shoulder blades",
  "Pain that lasts from 30 minutes to several hours, often at night",
  "Nausea or vomiting along with the pain",
  "Bloating, gas, burping and indigestion, especially after fried or spicy food",
];

const warningSigns = [
  "Severe belly pain that does not settle within 4–5 hours",
  "Fever with chills along with belly pain",
  "Yellow eyes or skin (jaundice), dark urine or pale, clay-coloured stools",
  "Pain that goes straight through to the back with repeated vomiting (this can mean pancreatitis)",
];

const riskFactors = [
  "Are a woman, especially after pregnancy or while on birth control pills or hormone therapy",
  "Are over 40 years of age",
  "Are overweight, or have lost weight very fast (crash diets, after weight-loss surgery)",
  "Have diabetes or high cholesterol",
  "Eat a diet high in fried, oily and refined food and low in fibre",
  "Skip meals often or stay hungry for long hours",
  "Have a family history of gallstones",
  "Have certain blood disorders or liver problems",
];

const tests = [
  {
    test: "Ultrasound of the abdomen",
    shows:
      "The most common first test. Quick, painless and radiation-free; shows the number and size of stones",
  },
  {
    test: "Blood tests (LFT, CBC, amylase/lipase)",
    shows: "Checks for infection, jaundice or pancreas involvement",
  },
  {
    test: "MRCP (a special MRI)",
    shows: "Looks for stones that have slipped into the bile duct",
  },
  {
    test: "CT scan",
    shows: "Used in emergencies or when complications are suspected",
  },
  {
    test: "ERCP",
    shows:
      "Both a test and a treatment: removes stones stuck in the bile duct using a thin camera tube through the mouth",
  },
];

const surgeryIndications = [
  {
    title: "Even one episode of gallstone pain (biliary colic)",
    text: "Once stones start causing pain, attacks tend to come back and get worse.",
  },
  {
    title: "An infected or swollen gallbladder (acute cholecystitis)",
    text: "With fever and constant pain.",
  },
  {
    title: "Stones that have slipped into the bile duct",
    text: "Causing jaundice or infection (cholangitis). These are often first cleared by ERCP, followed by surgery.",
  },
  {
    title: "Gallstone pancreatitis",
    text: "Where a stone blocks the pancreas duct. Surgery is usually advised during the same hospital stay or soon after.",
  },
  {
    title: "A large stone or a full gallbladder",
    text: "A stone over 2–3 cm, a gallbladder full of stones, or a polyp over 1 cm.",
  },
  {
    title: "A thick-walled or “porcelain” gallbladder",
    text: "A calcified gallbladder carries a higher cancer risk.",
  },
];

const surgeryTypes = {
  head: ["", "Laparoscopic (keyhole)", "Robotic-assisted", "Open surgery"],
  rows: [
    ["Cuts", "3–4 small cuts of 0.5–1 cm", "3–5 small cuts", "One cut of 10–15 cm"],
    ["Hospital stay", "Usually 1 day", "Usually 1 day", "3–5 days"],
    ["Back to desk work", "About 1 week", "About 1 week", "4–6 weeks"],
    ["Pain and scars", "Mild, tiny scars", "Mild, tiny scars", "More pain, visible scar"],
    [
      "Best for",
      "Most patients",
      "Complex cases, obese patients, scarred or inflamed gallbladders",
      "Rare, difficult or emergency cases",
    ],
  ],
};

const recovery = [
  {
    when: "First few days",
    text: "Mild pain at the cut sites and some shoulder ache from the gas used during surgery; simple painkillers help",
  },
  { when: "About 1 week", text: "Back to office work and light daily tasks" },
  { when: "2–4 weeks", text: "Back to the gym, heavy lifting and full routine" },
];

const myths = [
  {
    myth: "Only the stones can be removed, the gallbladder can stay.",
    fact: "A gallbladder that has made stones keeps making them. Removing only the stones leads to quick return of the problem.",
  },
  {
    myth: "Gallstones and kidney stones are the same.",
    fact: "They are completely different organs, causes and treatments.",
  },
  {
    myth: "Without a gallbladder, I can never eat normal food again.",
    fact: "Most people return to a normal diet within weeks.",
  },
  {
    myth: "Home remedies can flush out stones.",
    fact: "No home remedy is proven to remove gallstones, and some can be harmful.",
  },
];

const hospitalChecklist = [
  "Experienced surgeons who perform laparoscopic and robotic cholecystectomy regularly",
  "Modern technology, such as a robotic surgery system and HD laparoscopic equipment",
  "24x7 emergency care, since gallbladder attacks often strike at night",
  "In-house diagnostics: ultrasound, MRCP, CT and ERCP under one roof",
  "Clear, upfront costs and help with health insurance and cashless claims",
  "Good aftercare, with diet advice and easy follow-up visits",
];

const faqs = [
  {
    q: "Can gallbladder stones go away on their own?",
    a: "No. Small stones may sometimes pass into the bile duct, but that often causes blockage and pain. Stones don't simply disappear.",
  },
  {
    q: "Is gallbladder surgery painful?",
    a: "The operation is done under general anaesthesia, so you feel nothing. After keyhole or robotic surgery, the pain is mild and settles in a few days.",
  },
  {
    q: "How long does the surgery take?",
    a: "Usually 45 minutes to 1.5 hours.",
  },
  {
    q: "Is gallbladder stone surgery covered by insurance?",
    a: "It is covered under most health insurance policies in India. Check your policy for any waiting period.",
  },
  {
    q: "What should I eat if I have gallstones and am waiting for surgery?",
    a: "Eat small, regular meals. Avoid fried, oily and very spicy food, full-cream dairy and red meat. Choose fruits, vegetables, dal, whole grains and plenty of water.",
  },
];

/* ---------- Structured data (Article + FAQ + Breadcrumb) ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Gallstones (Cholelithiasis)",
        alternateName: ["Gallbladder stones", "Cholelithiasis"],
        possibleTreatment: [
          { "@type": "MedicalProcedure", name: "Laparoscopic cholecystectomy" },
          { "@type": "MedicalProcedure", name: "Robotic cholecystectomy" },
        ],
      },
      breadcrumb: { "@id": `${URL}#breadcrumb` },
    },
    {
      "@type": "BlogPosting",
      "@id": `${URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: "en-IN",
      mainEntityOfPage: { "@id": `${URL}#webpage` },
      author: { "@type": "Organization", name: "Novo Robotic Surgery Centre", url: SITE },
      publisher: {
        "@type": "MedicalOrganization",
        name: "Novo Robotic Surgery Centre",
        url: SITE,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kaushambi, Ghaziabad",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
      keywords:
        "gallbladder stone treatment in Ghaziabad, gallstones surgery Ghaziabad, laparoscopic cholecystectomy Ghaziabad, robotic gallbladder surgery, gallbladder removal Delhi NCR",
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: "Gallbladder Stones Treatment in Ghaziabad", item: URL },
      ],
    },
  ],
};

/* ---------- Small UI helpers ---------- */
const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em] text-[#0d7481]">
    {children}
  </p>
);

const H2 = ({ id, eyebrow, children }: { id: string; eyebrow: string; children: ReactNode }) => (
  <div className="mb-6">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 id={id} className="mt-2 scroll-mt-28 text-2xl font-bold leading-snug text-[#1a1c1e] md:text-[32px]">
      {children}
    </h2>
  </div>
);

const Check = ({ className = "text-[#0d7481]" }: { className?: string }) => (
  <svg className={`mt-1 h-5 w-5 flex-none ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Alert = () => (
  <svg className="mt-1 h-5 w-5 flex-none text-[#ba1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const card = "rounded-[1.5rem] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:p-8";

export default function GallbladderStonesTreatmentGhaziabad() {
  return (
    <main className="bg-[#f9f9fc] font-['Manrope'] text-[#1a1c1e]">
      <Helmet>
        <title>{`${TITLE} | Novo Robotic Surgery Centre`}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="article:published_time" content={PUBLISHED} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#005a65] via-[#0d7481] to-[#005a65] text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#81d3e1]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#fdd350]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-5 py-16 md:px-6 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em] text-[#b9f4ff]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">Gallbladder Stones</li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-[#fdd350] px-4 py-1 font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em] text-[#241a00]">
                Patient Guide · Gallbladder
              </span>
              <h1 className="mt-6 text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[56px]">
                Best Treatment for Gallbladder Stones in Ghaziabad:{" "}
                <em className="text-[#9deffe]">When Is Surgery Needed?</em>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e5eced]">
                Not every gallbladder stone needs an operation, but stones that cause pain or
                complications are best treated with keyhole surgery to remove the gallbladder.
                This guide explains, in simple words, how to know which group you fall into.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-6 py-3 font-bold text-[#241a00] transition hover:bg-[#ebc241]"
                >
                  Book a Consultation <Arrow />
                </Link>
                <Link
                  to="/services/gallbladder-surgery"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Gallbladder Surgery at Novo
                </Link>
              </div>
            </div>

            {/* Stat badges */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              {[
                { k: "~50%", v: "of people with gallstones never feel symptoms" },
                { k: "< 24 hrs", v: "typical hospital stay after keyhole surgery" },
                { k: "0.5–1 cm", v: "size of each laparoscopic cut" },
                { k: "~1 week", v: "to get back to desk work" },
              ].map((s, i) => (
                <div
                  key={s.k}
                  className={`rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-[20px] ${i % 2 ? "translate-y-6" : ""}`}
                >
                  <p className="font-['IBM_Plex_Sans'] text-2xl font-bold text-[#fdd350] md:text-3xl">{s.k}</p>
                  <p className="mt-2 text-sm leading-snug text-[#e5eced]">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BODY ---------- */}
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-12">
        {/* TOC */}
        <aside className="lg:col-span-3">
          <div className="sticky top-28 rounded-[1.5rem] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <Eyebrow>On this page</Eyebrow>
            <ul className="mt-4 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="block rounded-md px-2 py-1 text-[#3e484a] transition hover:bg-[#f3f3f6] hover:text-[#005a65]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="space-y-16 lg:col-span-9">
          {/* What are gallstones */}
          <section>
            <H2 id="what-are-gallstones" eyebrow="The basics">What Are Gallbladder Stones?</H2>
            <div className="space-y-4 text-base leading-relaxed text-[#3e484a] md:text-lg">
              <p>
                Your gallbladder is a small, pear-shaped pouch that sits just under the liver, on the
                right side of your upper belly. Its job is to store bile, a greenish-yellow juice that
                helps your body digest fatty food.
              </p>
              <p>
                Sometimes the bile becomes too thick or out of balance. Over time, it can harden into
                small pebble-like pieces called <strong>gallbladder stones</strong> or{" "}
                <strong>gallstones</strong> (doctors call this <em>cholelithiasis</em>). They can be as
                tiny as a grain of sand or as big as a golf ball. You may have just one, or dozens.
              </p>
              <p>
                Gallstones are very common in India, especially in North India, including Delhi NCR and
                Ghaziabad. Many people find out about them by chance during an ultrasound done for some
                other reason. The big question most patients then ask is:{" "}
                <em className="font-semibold text-[#005a65]">"Do I really need surgery?"</em> Let's find out.
              </p>
            </div>
          </section>

          {/* Symptoms */}
          <section>
            <H2 id="symptoms" eyebrow="Symptoms">Symptoms of Gallbladder Stones: What Your Body Tells You</H2>
            <p className="mb-6 text-base leading-relaxed text-[#3e484a] md:text-lg">
              About half of people with gallstones never feel anything. These are called "silent
              stones." When stones do cause trouble, it usually happens because a stone blocks the
              narrow opening of the gallbladder.
            </p>
            <div className={card}>
              <h3 className="text-lg font-semibold">Common signs include:</h3>
              <ul className="mt-4 space-y-3">
                {symptoms.map((s) => (
                  <li key={s} className="flex gap-3 text-[#3e484a]"><Check />{s}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-[1.5rem] border-l-4 border-[#fdd350] bg-[#ffe089]/30 p-6">
              <p className="text-[#574500]">
                <strong>Mistaking it for acidity?</strong> Many people in India mistake this pain for
                acidity or "gas" and keep taking antacids for months. If your "acidity" keeps returning
                after meals, get an ultrasound done.
              </p>
            </div>
          </section>

          {/* Warning signs */}
          <section>
            <div className="rounded-[1.5rem] border border-[#ffdad6] bg-[#ffdad6]/40 p-6 md:p-8">
              <Eyebrow>Urgent</Eyebrow>
              <h2 id="warning-signs" className="mt-2 scroll-mt-28 text-2xl font-bold text-[#93000a]">
                Warning Signs: See a Doctor the Same Day
              </h2>
              <ul className="mt-5 space-y-3">
                {warningSigns.map((s) => (
                  <li key={s} className="flex gap-3 text-[#410002]"><Alert />{s}</li>
                ))}
              </ul>
              <p className="mt-5 font-semibold text-[#93000a]">
                These signs mean a stone may have caused an infection or blockage, and you need urgent care.
              </p>
            </div>
          </section>

          {/* Causes */}
          <section>
            <H2 id="causes" eyebrow="Causes">Why Do Gallstones Form? Common Causes and Risk Factors</H2>
            <p className="mb-6 text-base leading-relaxed text-[#3e484a] md:text-lg">
              Gallstones form when bile has too much cholesterol or bilirubin, or when the gallbladder
              doesn't empty properly. You are at higher risk if you:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {riskFactors.map((r) => (
                <div key={r} className="flex gap-3 rounded-2xl bg-white p-5 text-[#3e484a] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <Check />{r}
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-[#3e484a]">
              You can't change your age or family history. But a balanced diet, regular meals and a
              healthy weight lower your chances of getting stones.
            </p>
          </section>

          {/* Diagnosis */}
          <section>
            <H2 id="diagnosis" eyebrow="Diagnosis">How Are Gallbladder Stones Diagnosed?</H2>
            <p className="mb-6 text-base leading-relaxed text-[#3e484a] md:text-lg">
              Finding gallstones is usually simple and painless. Your doctor will ask about your
              symptoms, press gently on your belly, and may suggest:
            </p>
            <div className="overflow-x-auto rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <table className="w-full min-w-[560px] text-left">
                <thead className="bg-[#005a65] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em]">Test</th>
                    <th scope="col" className="px-6 py-4 font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em]">What it shows</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((t, i) => (
                    <tr key={t.test} className={i % 2 ? "bg-[#f3f3f6]" : ""}>
                      <th scope="row" className="px-6 py-4 font-semibold text-[#005a65]">{t.test}</th>
                      <td className="px-6 py-4 text-[#3e484a]">{t.shows}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-base text-[#3e484a]">
              For the ultrasound, you will usually be asked to stay empty stomach for 6–8 hours, so the
              gallbladder is full and easy to see.
            </p>
          </section>

          {/* Treatment options */}
          <section>
            <H2 id="treatment-options" eyebrow="Treatment">Treatment Options for Gallbladder Stones</H2>
            <p className="mb-8 text-base leading-relaxed text-[#3e484a] md:text-lg">
              The right treatment depends on one main thing:{" "}
              <strong>are the stones causing symptoms or not?</strong>
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className={card}>
                <span className="font-['IBM_Plex_Sans'] text-sm font-bold text-[#0d7481]">01</span>
                <h3 className="mt-2 text-xl font-semibold">Watchful waiting (for silent stones)</h3>
                <p className="mt-3 text-[#3e484a]">
                  If your stones were found by chance and you have no pain, most doctors will suggest
                  simply keeping an eye on them. You may need a check-up and ultrasound from time to
                  time. You should get treated as soon as symptoms start.
                </p>
              </div>
              <div className={card}>
                <span className="font-['IBM_Plex_Sans'] text-sm font-bold text-[#0d7481]">02</span>
                <h3 className="mt-2 text-xl font-semibold">Medicines to dissolve stones</h3>
                <p className="mt-3 text-[#3e484a]">
                  A medicine called ursodeoxycholic acid (UDCA) can slowly dissolve small cholesterol
                  stones in a few selected patients. But it has big limits:
                </p>
                <ul className="mt-3 space-y-2 text-[#3e484a]">
                  <li className="flex gap-2"><Check />It works only on small stones made of cholesterol</li>
                  <li className="flex gap-2"><Check />It takes 6 months to 2 years of daily tablets</li>
                  <li className="flex gap-2"><Check />Stones often come back once you stop the medicine</li>
                </ul>
                <p className="mt-3 text-sm text-[#6e797b]">
                  So medicines are usually kept for people who cannot have surgery for health reasons.
                </p>
              </div>
              <div className={card}>
                <span className="font-['IBM_Plex_Sans'] text-sm font-bold text-[#0d7481]">03</span>
                <h3 className="mt-2 text-xl font-semibold">Home remedies and "stone-flushing" diets</h3>
                <p className="mt-3 text-[#3e484a]">
                  Apple cider vinegar, lemon water, olive oil cleanses or "gallbladder flush" kits cannot
                  dissolve or flush out gallstones. Some may even push a stone into the bile duct and
                  cause a dangerous blockage. A healthy diet helps prevent new stones, but it won't
                  remove the ones you already have.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#005a65] p-6 text-white md:p-8">
                <span className="font-['IBM_Plex_Sans'] text-sm font-bold text-[#fdd350]">04</span>
                <h3 className="mt-2 text-xl font-semibold">Surgery: the permanent solution</h3>
                <p className="mt-3 text-[#e5eced]">
                  The gallbladder makes the stones, so removing it is the only way to make sure they
                  don't return. This surgery is called <strong>cholecystectomy</strong>. It is one of
                  the most common and safest operations done worldwide, and today it is almost always
                  done through keyhole (laparoscopic) or robotic methods.
                </p>
              </div>
            </div>
          </section>

          {/* When surgery */}
          <section>
            <H2 id="when-surgery" eyebrow="The key question">When Is Gallbladder Surgery Needed?</H2>
            <p className="mb-6 text-base text-[#3e484a] md:text-lg">
              Your surgeon will usually recommend gallbladder removal if you have:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {surgeryIndications.map((s, i) => (
                <div key={s.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#9deffe] font-['IBM_Plex_Sans'] text-sm font-bold text-[#004f58]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1a1c1e]">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#3e484a]">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-[#3e484a]">
              Surgery may also be advised for silent stones in some people, such as those with
              diabetes, those who live far from good medical care, or those with a family history of
              gallbladder cancer. North India has a higher rate of gallbladder cancer than many other
              regions, so it is worth discussing this with your doctor.
            </p>

            <div className="mt-8 rounded-[1.5rem] border-l-4 border-[#0d7481] bg-[#9deffe]/30 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#004f58]">Is it risky to delay surgery?</h3>
              <p className="mt-3 text-[#3e484a]">
                <strong>Yes, once you have symptoms.</strong> Delaying can lead to infection, a burst
                gallbladder, jaundice or pancreatitis. Each of these makes the eventual surgery harder
                and the hospital stay longer. A planned operation when you are well is far safer and
                simpler than an emergency one.
              </p>
            </div>
          </section>

          {/* Types of surgery */}
          <section>
            <H2 id="types-of-surgery" eyebrow="Compare">Types of Gallbladder Surgery</H2>
            <div className="overflow-x-auto rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <table className="w-full min-w-[680px] text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-[#bec8cb]">
                    {surgeryTypes.head.map((h, i) => (
                      <th
                        key={h || "blank"}
                        scope="col"
                        className={`px-5 py-4 font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em] ${
                          i === 2 ? "bg-[#005a65] text-[#fdd350]" : "text-[#005a65]"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {surgeryTypes.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-[#eeeef0] last:border-0">
                      {row.map((cell, i) =>
                        i === 0 ? (
                          <th key={i} scope="row" className="px-5 py-4 font-semibold text-[#1a1c1e]">{cell}</th>
                        ) : (
                          <td key={i} className={`px-5 py-4 text-[#3e484a] ${i === 2 ? "bg-[#9deffe]/20 font-medium text-[#004f58]" : ""}`}>
                            {cell}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-[#3e484a]">
              <p>
                <strong className="text-[#005a65]">Laparoscopic cholecystectomy</strong> is the
                gold-standard treatment. The surgeon passes a tiny camera and thin instruments through
                small cuts and removes the gallbladder while watching on a screen.
              </p>
              <p>
                <strong className="text-[#005a65]">Robotic cholecystectomy</strong> works the same way,
                but the surgeon controls robotic arms from a console. The arms can bend like a human
                wrist, and the camera gives a magnified 3D view. This extra{" "}
                <em>surgical precision</em> can help in difficult cases.
              </p>
              <p>
                <strong className="text-[#005a65]">Open surgery</strong> is now rarely needed. It is
                used only when keyhole surgery isn't safe, for example in severe infection or heavy
                scarring.
              </p>
            </div>
          </section>

          {/* Recovery */}
          <section>
            <H2 id="recovery" eyebrow="After surgery">Recovery and Life After Gallbladder Removal</H2>
            <p className="mb-8 text-base text-[#3e484a] md:text-lg">
              Most patients walk the same day and go home within 24 hours. A typical recovery looks like this:
            </p>
            <ol className="relative space-y-6 border-l-2 border-[#81d3e1] pl-8">
              {recovery.map((r) => (
                <li key={r.when} className="relative">
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#f9f9fc] bg-[#0d7481]" />
                  <p className="font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em] text-[#0d7481]">{r.when}</p>
                  <p className="mt-1 text-[#3e484a]">{r.text}</p>
                </li>
              ))}
            </ol>
            <div className={`${card} mt-10`}>
              <h3 className="text-xl font-semibold">Can I live normally without a gallbladder?</h3>
              <p className="mt-3 text-[#3e484a]">
                <strong>Yes, completely.</strong> Your liver keeps making bile. It simply flows straight
                into the intestine instead of being stored first. Most people eat a normal diet within a
                few weeks.
              </p>
              <p className="mt-3 text-[#3e484a]">
                A few people notice loose motions or bloating after very oily meals in the first weeks.
                Eating small, frequent, low-fat meals and slowly adding fibre usually fixes this.
              </p>
            </div>
          </section>

          {/* Myths */}
          <section>
            <H2 id="myths" eyebrow="Myth vs fact">Common Myths About Gallstones</H2>
            <div className="space-y-4">
              {myths.map((m) => (
                <div key={m.myth} className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:grid-cols-2">
                  <div className="bg-[#f3f3f6] p-6">
                    <p className="font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em] text-[#ba1a1a]">Myth</p>
                    <p className="mt-2 font-medium text-[#1a1c1e]">"{m.myth}"</p>
                  </div>
                  <div className="p-6">
                    <p className="font-['IBM_Plex_Sans'] text-xs font-bold uppercase tracking-[0.1em] text-[#0d7481]">Fact</p>
                    <p className="mt-2 text-[#3e484a]">{m.fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Choosing hospital */}
          <section>
            <H2 id="choosing-hospital" eyebrow="Ghaziabad">
              Choosing the Right Hospital for Gallbladder Stone Treatment in Ghaziabad
            </H2>
            <p className="mb-6 text-base text-[#3e484a] md:text-lg">
              When looking for the best gallbladder stone treatment in Ghaziabad, check for:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {hospitalChecklist.map((h) => (
                <div key={h} className="flex gap-3 rounded-2xl border border-[#bec8cb] bg-white p-5 text-[#3e484a]">
                  <Check className="text-[#745c00]" />{h}
                </div>
              ))}
            </div>
            <p className="mt-6 text-[#3e484a]">
              At <Link to="/" className="font-semibold text-[#005a65] underline underline-offset-4">Novo Robotic Surgery Centre</Link>,
              Kaushambi, Ghaziabad, we offer{" "}
              <Link to="/services/gallbladder-surgery" className="font-semibold text-[#005a65] underline underline-offset-4">
                laparoscopic and robotic gallbladder surgery
              </Link>{" "}
              for patients across Ghaziabad and Delhi NCR.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <H2 id="faq" eyebrow="FAQs">Frequently Asked Questions</H2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#1a1c1e] [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base md:text-lg">{f.q}</h3>
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#f3f3f6] text-[#005a65] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-[#3e484a]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="relative overflow-hidden rounded-[1.5rem] bg-[#005a65] p-8 text-white md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#81d3e1]/20 blur-3xl" />
            <Eyebrow><span className="text-[#fdd350]">Conclusion</span></Eyebrow>
            <h2 className="relative mt-2 text-2xl font-bold md:text-[32px]">Don't wait for the next attack</h2>
            <p className="relative mt-4 max-w-3xl text-[#e5eced] md:text-lg">
              Silent gallstones can often be watched, but once they cause pain, surgery is the safest,
              permanent treatment. Modern laparoscopic and robotic surgery means tiny cuts, a one-day
              hospital stay and a quick return to normal life. If you have pain after meals, repeated
              "acidity" or any warning signs, don't wait. Book a consultation with a qualified gastro or
              general surgeon in Ghaziabad and get an ultrasound done.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-6 py-3 font-bold text-[#241a00] transition hover:bg-[#ebc241]"
              >
                Book Appointment <Arrow />
              </Link>
              <Link
                to="/services/gallbladder-surgery"
                className="inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4"
              >
                Explore gallbladder surgery <Arrow />
              </Link>
            </div>
          </section>

          <p className="border-t border-[#bec8cb] pt-6 text-sm italic text-[#6e797b]">
            This article is for general awareness and is not a substitute for medical advice. Please
            consult a qualified doctor for diagnosis and treatment.
          </p>
        </article>
      </div>
    </main>
  );
}