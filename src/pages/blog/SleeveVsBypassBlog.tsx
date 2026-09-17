import { useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import IMG_INFOGRAPHIC from "../../assets/images/BlogPagePic1.jpeg";
import IMG_TRANSFORMATION from "../../assets/images/BlogPagePic2.jpeg";
import IMG_DOCTOR from "../../assets/images/VikrantBlogPage.jpeg";
/**
 * Blog: Sleeve Gastrectomy vs Gastric Bypass
 * Route suggestion: /blog/sleeve-gastrectomy-vs-gastric-bypass
 * Header & Footer intentionally excluded (use shared Navbar / Footer).
 *
 * Replace image paths below with your actual assets.
 */
// const IMG_INFOGRAPHIC = "src/assets/images/BlogPagePic1.jpeg";
// const IMG_TRANSFORMATION = "src/assets/images/BlogPagePic2.jpeg";
// const IMG_DOCTOR = "/images/doctors/dr-vikrant-sharma.webp";

/* ---------- Small inline icons (2px stroke, no extra deps) ---------- */
type IconProps = { className?: string };
const Icon = ({ d, className = "w-5 h-5" }: IconProps & { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d={d} />
  </svg>
);
const CheckIcon = (p: IconProps) => <Icon {...p} d="M20 6 9 17l-5-5" />;
const ArrowIcon = (p: IconProps) => <Icon {...p} d="M5 12h14M13 5l7 7-7 7" />;
const ShieldIcon = (p: IconProps) => <Icon {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />;
const InfoIcon = (p: IconProps) => <Icon {...p} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01" />;
const StomachIcon = (p: IconProps) => <Icon {...p} d="M9 2v4c0 2-2 3-2 6a7 7 0 0 0 14 0c0-3-3-4-5-2s-4 1-4-2V2" />;
const RouteIcon = (p: IconProps) => <Icon {...p} d="M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 15V9a4 4 0 0 1 4-4h6M18 9v6a4 4 0 0 1-4 4H8" />;
const ClockIcon = (p: IconProps) => <Icon {...p} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2" />;
const BedIcon = (p: IconProps) => <Icon {...p} d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />;
const TrendIcon = (p: IconProps) => <Icon {...p} d="m22 17-8.5-8.5-5 5L2 7M16 17h6v-6" />;
const PillIcon = (p: IconProps) => <Icon {...p} d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7zM8.5 8.5l7 7" />;

/* ---------- Reusable pieces ---------- */
const labelCaps = "font-['IBM_Plex_Sans'] text-[12px] font-bold tracking-[0.1em] uppercase";

const SectionHeading = ({ n, children, id }: { n?: number; children: ReactNode; id: string }) => (
  <h2 id={id} className="flex items-center gap-3 text-[26px] md:text-[32px] font-bold leading-tight text-[#1a1c1e] scroll-mt-28">
    {n !== undefined && (
      <span className="grid place-items-center w-9 h-9 shrink-0 rounded-lg bg-[#005a65] text-white text-base font-bold">
        {n}
      </span>
    )}
    {children}
  </h2>
);

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] ${className}`}>{children}</div>
);

const CheckList = ({ items, tone = "teal" }: { items: string[]; tone?: "teal" | "gold" }) => (
  <ul className="space-y-3">
    {items.map((t) => (
      <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[#3e484a]">
        <CheckIcon className={`w-5 h-5 mt-0.5 shrink-0 ${tone === "teal" ? "text-[#0d7481]" : "text-[#745c00]"}`} />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

/* ---------- BMI calculator (sidebar) ---------- */
function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmi = useMemo(() => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w || h <= 0) return null;
    return w / (h * h);
  }, [height, weight]);

  const note =
    bmi === null ? null
    : bmi >= 35 ? "Surgery may be an option for you. Talk to a surgeon."
    : bmi >= 27.5 ? "Surgery may be an option if you have diabetes or other weight-related conditions."
    : "Surgery isn't usually recommended at this BMI.";

  const inputCls =
    "w-full rounded-lg border border-[#bec8cb] bg-white px-3 py-2 text-sm outline-none focus:border-[#005a65] focus:ring-2 focus:ring-[#005a65]/30";

  return (
    <div className="rounded-xl bg-[#f3f3f6] p-4">
      <p className={`${labelCaps} text-[#005a65] mb-3`}>BMI quick calculator</p>
      <div className="grid grid-cols-2 gap-2">
        <label className="text-xs text-[#3e484a]">
          Height (cm)
          <input type="number" inputMode="decimal" min={100} max={250} value={height}
            onChange={(e) => setHeight(e.target.value)} className={`${inputCls} mt-1`} placeholder="165" />
        </label>
        <label className="text-xs text-[#3e484a]">
          Weight (kg)
          <input type="number" inputMode="decimal" min={30} max={300} value={weight}
            onChange={(e) => setWeight(e.target.value)} className={`${inputCls} mt-1`} placeholder="95" />
        </label>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm" aria-live="polite">
        <span className="text-[#3e484a]">Your BMI</span>
        <span className="font-bold text-[#005a65]">{bmi ? bmi.toFixed(1) : "--"}</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-[#e2e2e5] overflow-hidden">
        <div className="h-full bg-[#0d7481] transition-all"
          style={{ width: `${bmi ? Math.min(100, (bmi / 50) * 100) : 0}%` }} />
      </div>
      {note && <p className="mt-2 text-xs leading-relaxed text-[#3e484a]">{note}</p>}
    </div>
  );
}

/* ---------- Data ---------- */
const comparisonRows: { factor: string; sleeve: string; bypass: string; sleeveFlag?: boolean }[] = [
  { factor: "What's done", sleeve: "Stomach made smaller", bypass: "Small pouch + intestine rerouted" },
  { factor: "Complexity", sleeve: "Simpler", bypass: "More complex" },
  { factor: "Long-term weight loss", sleeve: "Good", bypass: "Good, often more durable" },
  { factor: "Acid reflux (GERD)", sleeve: "Can start or worsen", bypass: "Often improves", sleeveFlag: true },
  { factor: "Blood sugar", sleeve: "Improves", bypass: "Tends to improve more" },
  { factor: "Vitamin needs", sleeve: "Supplements needed", bypass: "Lifelong supplements essential" },
  { factor: "Can it be reversed?", sleeve: "No", bypass: "Technically possible, rarely done" },
];

const questions = [
  "Based on my health, which procedure do you recommend, and why?",
  "I have (or don't have) acid reflux. How does that change the choice?",
  "What results can I realistically expect in 1, 3 and 5 years?",
  "Which supplements will I need, and for how long?",
  "What support do you offer after surgery (diet, follow-up, counselling)?",
];

/* ---------- Page ---------- */
export default function SleeveVsBypassBlog() {
  return (
    <main className="bg-[#f9f9fc] font-['Manrope'] text-[#1a1c1e]">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-[1280px] px-5 md:px-6 pt-10 md:pt-14 pb-10">
        <nav aria-label="Breadcrumb" className={`${labelCaps} text-[#6e797b] flex flex-wrap items-center gap-2`}>
          <Link to="/" className="hover:text-[#005a65]">Home</Link><span>/</span>
          <Link to="/blog" className="hover:text-[#005a65]">Blog</Link><span>/</span>
          <span className="text-[#005a65]">Sleeve gastrectomy vs gastric bypass</span>
        </nav>

        <span className={`${labelCaps} mt-6 inline-block rounded-full bg-[#fdd350] px-3 py-1 text-[#241a00]`}>
          Bariatric &amp; Metabolic Health
        </span>

        <h1 className="mt-5 max-w-4xl text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em]">
          Sleeve Gastrectomy vs Gastric Bypass: Which Weight-Loss Surgery Is Right for You?
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3e484a]">
          Sleeve or bypass? Compare weight loss, diabetes, acid reflux, nutrition and recovery in simple
          language, and learn how surgeons help you choose.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4 rounded-xl border border-[#bec8cb]/60 bg-white px-4 py-3 max-w-3xl">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-[#005a65] text-white">
            <ShieldIcon />
          </span>
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm font-semibold">Medically reviewed by Dr. Vikrant Sharma</p>
            <p className="text-xs text-[#6e797b]">Novo Robotic Surgery Centre · Kaushambi, Ghaziabad</p>
          </div>
          <span className="rounded-full bg-[#eeeef0] px-3 py-1 text-xs font-medium text-[#3e484a]">7 min read</span>
        </div>
      </section>

      {/* ===== Intro + sidebar ===== */}
      <section className="mx-auto max-w-[1280px] px-5 md:px-6 pb-16 grid gap-8 lg:grid-cols-[1fr_320px]">
        <article className="min-w-0 space-y-8">
          <Card className="p-6 md:p-8 space-y-5 text-[17px] leading-[1.7] text-[#3e484a]">
            <p>
              You have tried diets. You have tried the gym. Maybe you have lost weight a few times, only to see it
              come back. Now your doctor has mentioned weight-loss surgery, and suddenly you are facing a new question:
            </p>
            <p className="rounded-xl border-l-4 border-[#0d7481] bg-[#f3f3f6] px-5 py-4 font-semibold italic text-[#005a65]">
              Sleeve or bypass? Which one should I choose?
            </p>
            <p>
              Both are proven, well-studied operations. But they work differently, and the "better" one depends
              entirely on your body and health. Let's break it down in plain language.
            </p>
          </Card>

          <figure>
            <div className="overflow-hidden rounded-[1.5rem] bg-white border border-[#bec8cb]/50 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <img src={IMG_INFOGRAPHIC} loading="lazy" width={1200} height={900} className="w-full h-auto"
                alt="Illustrated comparison of sleeve gastrectomy and Roux-en-Y gastric bypass showing how each changes the stomach" />
            </div>
            <figcaption className="mt-3 flex gap-2 text-sm text-[#6e797b]">
              <InfoIcon className="w-4 h-4 mt-0.5 shrink-0" />
              A sleeve reshapes the stomach into a narrow tube. A gastric bypass creates a small pouch and
              reroutes food past part of the small intestine.
            </figcaption>
          </figure>
        </article>

        <aside className="lg:sticky lg:top-28 h-fit">
          <Card className="p-5 space-y-5">
            <div className="flex items-center gap-3">
              <img src={IMG_DOCTOR} alt="Dr. Vikrant Sharma" loading="lazy"
                className="w-14 h-14 rounded-xl object-cover bg-[#e2e2e5]" />
              <div>
                <p className="font-bold">Dr. Vikrant Sharma</p>
                <p className="text-xs text-[#6e797b]">Robotic &amp; Bariatric Surgeon</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-[#3e484a]">
              {["Robotic & minimally invasive surgery", "Bariatric and metabolic surgery", "Kaushambi, Ghaziabad (Delhi NCR)"].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckIcon className="w-4 h-4 mt-0.5 text-[#0d7481] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <BmiCalculator />
            <Link to="/contact"
              className={`${labelCaps} flex items-center justify-center gap-2 rounded-lg bg-[#fdd350] px-4 py-3 text-[#241a00] hover:bg-[#ebc241] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a65]`}>
              Book a consultation <ArrowIcon className="w-4 h-4" />
            </Link>
          </Card>
        </aside>
      </section>

      {/* ===== Article body (narrow column) ===== */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-6 space-y-16 md:space-y-24 pb-20">

        {/* 1. Eligibility */}
        <section className="max-w-4xl space-y-6">
          <SectionHeading n={1} id="eligibility">First, am I eligible?</SectionHeading>
          <Card className="p-6 md:p-8 space-y-5">
            <p className="text-[17px] leading-relaxed text-[#3e484a]">
              Here is something many people in India don't know: <strong className="text-[#1a1c1e]">the BMI cut-offs are lower for Asians.</strong>{" "}
              International guidelines released in 2022 by the leading global surgical bodies (ASMBS and IFSO) say:
            </p>
            <CheckList items={[
              "Surgery is recommended for anyone with a BMI of 35 or more, even without other health problems.",
              "It should be considered at a BMI of 30 to 34.9 if you have conditions like type 2 diabetes.",
              "For Asian populations, a BMI above 27.5 may qualify, because we tend to develop diabetes and heart disease at lower weights.",
            ]} />
            <div className="flex gap-4 rounded-xl bg-[#ffe089]/40 border border-[#ebc241]/60 p-5">
              <span className="grid place-items-center w-10 h-10 shrink-0 rounded-lg bg-[#fdd350] text-[#241a00]">
                <InfoIcon />
              </span>
              <div>
                <p className={`${labelCaps} text-[#574500]`}>Clinical insight</p>
                <p className="mt-1 text-[15px] leading-relaxed text-[#3e484a]">
                  BMI is only a starting point. Your surgeon also looks at diabetes, blood pressure, sleep apnoea,
                  joint problems and your past attempts at weight loss before recommending surgery.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* 2. Mechanisms */}
        <section className="max-w-4xl space-y-6">
          <SectionHeading n={2} id="how-they-work">Surgical mechanisms explained</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 md:p-7 space-y-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#9deffe]/50 text-[#005a65]"><StomachIcon /></span>
              <h3 className="text-2xl font-semibold leading-snug">How does sleeve gastrectomy work?</h3>
              <p className="text-[15px] leading-relaxed text-[#3e484a]">
                Think of your stomach like a large pouch that can hold a lot of food. During a sleeve gastrectomy,
                the surgeon removes about 75–80% of the stomach, leaving behind a narrow, banana-shaped tube, the "sleeve".
              </p>
              <p className={`${labelCaps} text-[#005a65] pt-2`}>What changes after surgery</p>
              <CheckList items={[
                "You feel full after eating much less.",
                "Hunger drops, because the part of the stomach that makes most of the hunger hormone is removed.",
                "Food still follows its normal path through the intestines.",
              ]} />
            </Card>

            <Card className="p-6 md:p-7 space-y-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#ffe089]/70 text-[#745c00]"><RouteIcon /></span>
              <h3 className="text-2xl font-semibold leading-snug">How does gastric bypass work?</h3>
              <p className="text-[15px] leading-relaxed text-[#3e484a]">
                This is a two-step change. In a Roux-en-Y gastric bypass, the surgeon creates a small pouch from the
                upper part of the stomach and connects it directly to the small intestine, so food skips most of the
                stomach and the first part of the intestine.
              </p>
              <p className={`${labelCaps} text-[#745c00] pt-2`}>What changes after surgery</p>
              <CheckList tone="gold" items={[
                "You eat smaller portions.",
                "Your body absorbs fewer calories.",
                "Gut hormones change in ways that strongly affect blood sugar.",
              ]} />
              <p className="rounded-lg bg-[#f3f3f6] p-3 text-xs leading-relaxed text-[#6e797b]">
                A popular variation, the mini gastric bypass, uses a single connection instead of two.
              </p>
            </Card>
          </div>
        </section>

        {/* Comparison table */}
        <section className="space-y-6">
          <div>
            <p className={`${labelCaps} text-[#6e797b]`}>Expert comparison</p>
            <SectionHeading id="comparison">Sleeve vs bypass: side by side</SectionHeading>
          </div>
          <div className="overflow-x-auto rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <table className="w-full min-w-[620px] text-left text-[15px]">
              <caption className="sr-only">Comparison of sleeve gastrectomy and gastric bypass</caption>
              <thead className="bg-[#005a65] text-white">
                <tr>
                  {["Factor", "Sleeve gastrectomy", "Gastric bypass"].map((h) => (
                    <th key={h} scope="col" className={`${labelCaps} px-6 py-4`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={r.factor} className={i % 2 ? "bg-[#f9f9fc]" : "bg-white"}>
                    <th scope="row" className="px-6 py-4 font-semibold text-[#1a1c1e]">{r.factor}</th>
                    <td className={`px-6 py-4 ${r.sleeveFlag ? "text-[#ba1a1a] font-medium" : "text-[#3e484a]"}`}>{r.sleeve}</td>
                    <td className="px-6 py-4 text-[#3e484a]">{r.bypass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Which suits you */}
        <section className="max-w-4xl space-y-6">
          <SectionHeading id="which-one">Which one might suit you?</SectionHeading>
          <Card className="p-6 md:p-8 space-y-6">
            <p className="text-[17px] text-[#3e484a]">There's no one-size-fits-all answer, but here's a general picture.</p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-[#81d3e1] bg-[#9deffe]/20 p-5 space-y-3">
                <p className="font-bold text-[#005a65]">A sleeve may be a better fit if:</p>
                <CheckList items={[
                  "You don't have significant acid reflux.",
                  "You want a simpler operation with no intestinal rerouting.",
                  "You take regular medicines that need normal absorption.",
                ]} />
              </div>
              <div className="rounded-xl border border-[#ebc241] bg-[#ffe089]/30 p-5 space-y-3">
                <p className="font-bold text-[#574500]">A bypass may be a better fit if:</p>
                <CheckList tone="gold" items={[
                  "You already suffer from heartburn or acid reflux.",
                  "You have type 2 diabetes or high blood pressure.",
                  "You have a higher BMI and want more durable weight loss.",
                ]} />
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-[#3e484a]">
              Your surgeon will also consider your age, eating habits, past surgeries and whether you can commit to
              lifelong follow-up.
            </p>
          </Card>
        </section>

        {/* Recovery */}
        <section className="max-w-4xl space-y-6">
          <SectionHeading id="recovery">Recovery: what to expect</SectionHeading>
          <Card className="p-6 md:p-8 space-y-6">
            <p className="text-[17px] leading-relaxed text-[#3e484a]">
              Both procedures are usually done through keyhole or robotic surgery, so recovery is quicker than with
              old-style open surgery.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <ClockIcon />, title: "Dietary transition", text: "Liquids, then purées, then soft foods, before returning to regular food over several weeks." },
                { icon: <BedIcon />, title: "Hospital stay", text: "Usually 1 to 3 days, depending on how you recover." },
                { icon: <TrendIcon />, title: "Trajectory", text: "Weight loss is fastest in the first 6 to 12 months." },
                { icon: <PillIcon />, title: "Ongoing care", text: "Lifelong vitamin and mineral supplements, regular blood tests and follow-up visits." },
              ].map((s) => (
                <div key={s.title} className="flex gap-4 rounded-xl bg-[#f3f3f6] p-5">
                  <span className="grid place-items-center w-10 h-10 shrink-0 rounded-lg bg-white text-[#005a65]">{s.icon}</span>
                  <div>
                    <p className={`${labelCaps} text-[#005a65]`}>{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#3e484a]">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[15px] font-medium text-[#1a1c1e]">
              Surgery is a powerful tool, but the best results come when it's paired with healthy eating and regular activity.
            </p>
          </Card>
        </section>

        {/* Questions */}
        <section className="space-y-6">
          <div>
            <p className={`${labelCaps} text-[#6e797b]`}>Patient empowerment</p>
            <SectionHeading id="questions">5 questions to ask your bariatric surgeon</SectionHeading>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
            <figure className="relative">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#e8e8ea] aspect-square">
                <img src={IMG_TRANSFORMATION} loading="lazy" width={1440} height={1440}
                  alt="Before and after photos of a Novo bariatric patient, from 132 kg to 66 kg"
                  className="w-full h-full object-cover scale-[1.04]" />
              </div>
              {/* Glass stat badge */}
              <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto flex items-center gap-4 rounded-xl border border-white/60 bg-white/80 backdrop-blur-[20px] px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <span className="grid place-items-center w-10 h-10 shrink-0 rounded-lg bg-[#005a65] text-white">
                  <TrendIcon />
                </span>
                <div>
                  <p className="text-xl font-extrabold text-[#005a65] leading-none">132 kg → 66 kg</p>
                  <p className={`${labelCaps} mt-1 text-[#6e797b]`}>Real patient · 66 kg lost</p>
                </div>
              </div>
              <figcaption className="mt-9 text-xs leading-relaxed text-[#6e797b]">
                Shared with the patient's consent. Individual results vary with health, diet and follow-up.
              </figcaption>
            </figure>
            <ol className="space-y-3">
              {questions.map((q, i) => (
                <li key={q}>
                  <Card className="flex items-center gap-4 p-4">
                    <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-[#005a65] text-white font-bold">{i + 1}</span>
                    <span className="text-[15px] leading-snug text-[#1a1c1e]">{q}</span>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Bottom line */}
        <section className="max-w-4xl">
          <Card className="p-6 md:p-10 space-y-6">
            <h2 id="bottom-line" className="text-[32px] font-bold">The bottom line</h2>
            <p className="text-lg leading-relaxed text-[#1a1c1e]">
              Both sleeve gastrectomy and gastric bypass are safe, well-established weight-loss procedures with
              extensive research supporting their use. However, there is no single surgery that is right for everyone.
            </p>
            <p className="text-[15px] leading-relaxed text-[#3e484a]">
              The choice depends on factors such as your weight, eating habits, existing health conditions, metabolic
              health, previous treatments and long-term weight-loss goals. Your surgeon can review these factors and
              recommend the most suitable approach for you.
            </p>

            <div className="grid gap-6 rounded-xl border border-[#bec8cb] bg-[#f3f3f6] p-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className={`${labelCaps} text-[#005a65]`}>Next step</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3e484a]">
                  If you are considering weight-loss surgery in Delhi NCR, you can consult Dr. Vikrant Sharma at Novo
                  Robotic Surgery Centre, Kaushambi, Ghaziabad. During your consultation, you can discuss whether a
                  sleeve gastrectomy, Roux-en-Y bypass or mini gastric bypass is the best option for you.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:min-w-[240px]">
                <Link to="/contact"
                  className={`${labelCaps} flex items-center justify-center gap-2 rounded-lg bg-[#005a65] px-5 py-3 text-white hover:bg-[#0d7481] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a65]`}>
                  Contact Dr. Vikrant Sharma <ArrowIcon className="w-4 h-4" />
                </Link>
                <Link to="/contact"
                  className={`${labelCaps} flex items-center justify-center gap-2 rounded-lg bg-[#fdd350] px-5 py-3 text-[#241a00] hover:bg-[#ebc241] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a65]`}>
                  Book a consultation
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Disclaimer */}
        <aside className="max-w-4xl flex gap-3 rounded-xl border border-[#bec8cb]/70 bg-[#eeeef0] p-5 text-sm leading-relaxed text-[#3e484a]">
          <InfoIcon className="w-5 h-5 shrink-0 text-[#6e797b]" />
          <p>
            This article is for general health awareness and does not replace personal medical advice. Please
            consult a qualified surgeon before making any treatment decision.
          </p>
        </aside>
      </div>
    </main>
  );
}