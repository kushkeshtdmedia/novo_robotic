import React, { useRef, useState } from "react";
import Tele from "../../assets/video/TeleSurgeryVideo.mp4";

/**
 * Tele-Robotic Surgery — page body only (no Navbar / no Footer).
 * Design tokens: "Healthcare Precision" (DESIGN.md)
 *   primary #005361 · primary-container #0d6d7e · secondary #fece54
 *   surface #fcf9f8 · surface-container #f0eded · outline-variant #bec8cb
 * Font: Manrope (already loaded site-wide).
 *
 * Drop in at: src/pages/TeleRoboticSurgery.tsx
 * Route it under /services/tele-robotic-surgery and add the SEO entry in src/data/seo.js
 *
 * Requires in src/vite-env.d.ts:
 *   declare module "*.mp4" { const src: string; export default src; }
 */

/* ------------------------------------------------------------------ */
/* Tiny inline icon set (no extra deps)                                */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string };

const I = {
  Console: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
  Hand: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 11V6a1.5 1.5 0 0 0-3 0m0 0v-.5a1.5 1.5 0 0 0-3 0V5m0 0a1.5 1.5 0 0 0-3 0v6" />
      <path d="M9 11V8.5a1.5 1.5 0 0 0-3 0V14a7 7 0 0 0 7 7h1a6 6 0 0 0 6-6v-4" />
    </svg>
  ),
  Signal: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12.5a9 9 0 0 1 14 0M8 16a5 5 0 0 1 8 0" /><circle cx="12" cy="19.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  Robot: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 8V4" /><circle cx="12" cy="3" r="1.4" />
      <path d="M9 13h.01M15 13h.01M10 16.5h4" />
    </svg>
  ),
  Eye: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Team: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17.5" cy="9.5" r="2.5" /><path d="M16 15.4A5.5 5.5 0 0 1 21 20" />
    </svg>
  ),
  Shield: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 5 6v6c0 4.4 3 7.9 7 9 4-1.1 7-4.6 7-9V6l-7-3Z" /><path d="m9.2 12 1.9 1.9 3.7-3.7" />
    </svg>
  ),
  Lock: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  Info: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" />
    </svg>
  ),
  Check: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  ),
  Spark: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  ),
  Arrow: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  ),
  Play: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
  ),
  Organ: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 4c3 0 4 2 5 2s2-2 5-2 4 3 4 6c0 5-4 10-9 10S3 15 3 10c0-3 1-6 4-6Z" />
    </svg>
  ),
  Calendar: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" /><path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "< 15 ms", label: "Console-to-instrument latency" },
  { value: "Sub-mm", label: "Instrument movement precision" },
  { value: "100%", label: "On-site surgical team present" },
];

const STEPS = [
  {
    icon: I.Console,
    title: "The surgeon sits at the robotic console",
    body:
      "Dr. Vikrant Sharma sits at a dedicated surgical console with a magnified 3D view of the operating field, either inside the operating theatre or at a remote centre.",
    note: "3D HD stereoscopic visualisation",
  },
  {
    icon: I.Hand,
    title: "The surgeon controls the instruments",
    body:
      "Hand and finger movements at the console are translated into instrument movement. Natural tremor is filtered out and large motions are scaled down for fine control.",
    note: "Tremor filtration + motion scaling",
  },
  {
    icon: I.Signal,
    title: "Movements are transmitted",
    body:
      "Each movement is sent as an encrypted data signal over a secure, high-speed, low-latency network to the robotic system standing beside the patient.",
    note: "AES-256 encrypted transmission",
  },
  {
    icon: I.Robot,
    title: "The robotic system reproduces the movement",
    body:
      "Robotic arms holding wristed instruments reproduce the movement inside the patient's body through incisions of roughly 8 mm, with a range of motion beyond the human wrist.",
    note: "Wristed instruments, 7 degrees of freedom",
  },
  {
    icon: I.Eye,
    title: "The surgeon sees it happen in real time",
    body:
      "Live video returns to the console in the same instant, so the surgeon watches each movement land and adjusts continuously — exactly as in open surgery.",
    note: "Continuous closed-loop feedback",
  },
  {
    icon: I.Team,
    title: "The on-site team stays with the patient",
    body:
      "A trained surgical and anaesthesia team remains physically present with the patient throughout the procedure, ready to take over at any point.",
    note: "Anaesthetist and scrub team bedside",
  },
];

const COMPARISON: Array<{ param: string; robotic: string; tele: string }> = [
  {
    param: "Where the surgeon sits",
    robotic: "At a console inside the same operating theatre",
    tele: "At a console inside the theatre, or at a remote centre",
  },
  {
    param: "Who controls the instruments",
    robotic: "The surgeon — the robot never acts on its own",
    tele: "The surgeon — the robot never acts on its own",
  },
  {
    param: "Incisions",
    robotic: "Usually 8 mm keyhole incisions, depending on the procedure",
    tele: "Usually 8 mm keyhole incisions, depending on the procedure",
  },
  {
    param: "On-site surgical team",
    robotic: "Present with the patient",
    tele: "Present with the patient",
  },
  {
    param: "What links console to robot",
    robotic: "A direct cable connection within the theatre",
    tele: "A secure, encrypted, high-speed communication network",
  },
  {
    param: "What it changes",
    robotic: "Precision and control beyond the human hand",
    tele: "The same precision, without distance limiting access to it",
  },
];

const PROCEDURES = [
  { title: "Gallbladder surgery", sub: "Robotic cholecystectomy", href: "/services/gallbladder-surgery" },
  { title: "Hernia repair", sub: "Inguinal, ventral and incisional hernia", href: "/services/hernia-surgery" },
  { title: "Appendix surgery", sub: "Robotic appendicectomy", href: "/services/appendix-surgery" },
  { title: "Bariatric surgery", sub: "Sleeve gastrectomy and gastric bypass", href: "/services/robotic-sleeve-gastrectomy" },
  { title: "Colorectal surgery", sub: "Colon and rectal procedures", href: "/services/colorectal-cancer-surgery" },
  { title: "Gynaecological surgery", sub: "Uterine and ovarian procedures", href: "/services/benign-disorders-uterus-ovaries" },
  { title: "Cancer surgery", sub: "Selected gastrointestinal and gynaecologic cancers", href: "/services/stomach-cancer-surgery" },
  { title: "Upper GI surgery", sub: "Stomach and oesophagus procedures", href: "/services/oesophagus-surgery" },
];

const SAFETY_CARDS = [
  { icon: I.Shield, title: "The patient is never alone", body: "A full surgical and anaesthesia team stays at the bedside for the whole procedure." },
  { icon: I.Lock, title: "The link is encrypted and redundant", body: "Dedicated high-speed connectivity with an automatic fallback path if quality drops." },
  { icon: I.Team, title: "The surgeon can hand over instantly", body: "If anything is unclear, control passes to the on-site surgeon without pausing the case." },
];

const TELEMETRY = [
  { label: "Console-to-instrument latency", value: "Under 15 ms", pct: 96, tone: "primary" as const },
  { label: "Encrypted link integrity", value: "Verified", pct: 100, tone: "primary" as const },
  { label: "Redundant network path", value: "Standing by", pct: 78, tone: "gold" as const },
  { label: "Instrument motion fail-safe", value: "Armed", pct: 100, tone: "primary" as const },
  { label: "On-site handover readiness", value: "Ready", pct: 100, tone: "primary" as const },
];

const PLATFORM = [
  "High-definition 3D vision cart",
  "Modular multi-arm patient cart",
  "True-to-scale wristed instruments",
  "Low-latency remote tele-console",
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6f797c]">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-[22ch] text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-[#1c1b1b] sm:text-[34px] lg:text-[40px]">
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function TeleRoboticSurgery({
  doctorImage = "/images/dr-vikrant-sharma.jpg",
  videoPoster = "/images/tele-robotic-console.jpg",
}: {
  doctorImage?: string;
  videoPoster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <main className="bg-[#fcf9f8] font-[Manrope,ui-sans-serif,system-ui] text-[#1c1b1b] antialiased">
      {/* ============================= HERO ============================= */}
      <section className="border-b border-[#e5e2e1] px-4 pb-14 pt-16 sm:px-6 lg:px-10 lg:pb-20 lg:pt-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            {/* copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#005361] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                <I.Spark className="h-3.5 w-3.5" />
                Advanced robotic surgery
              </span>

              <h1 className="mt-6 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#00404c] sm:text-[40px] lg:text-[46px]">
                Tele-robotic surgery in Kaushambi, Ghaziabad
              </h1>
              <p className="mt-3 text-[18px] font-semibold leading-7 text-[#0d6d7e]">
                Advanced robotic surgery at Novo Robotic Surgery Centre
              </p>

              <div className="mt-8 max-w-[62ch] space-y-4 border-l-2 border-[#bec8cb] pl-5">
                <h2 className="text-[20px] font-bold text-[#1c1b1b]">What is tele-robotic surgery?</h2>
                <p className="text-[16px] leading-7 text-[#3f484b]">
                  Tele-robotic surgery — also called remote robotic surgery — lets a surgeon operate
                  using a robotic system while sitting at a console, which may be in the same theatre
                  or at another centre altogether. The surgeon is in control the whole time; the robot
                  only carries out what the surgeon's hands tell it to do.
                </p>
                <p className="text-[16px] leading-7 text-[#3f484b]">
                  It allows an experienced robotic surgeon to treat patients who cannot easily travel
                  to a specialist centre. Every movement travels over a secure, high-speed link, and a
                  full surgical team stays with the patient in the operating theatre throughout.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-2xl bg-[#005361] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#0d6d7e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005361]"
                >
                  <I.Calendar className="h-[18px] w-[18px]" />
                  Book a consultation with Dr. Vikrant Sharma
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex h-12 items-center gap-2 rounded-2xl border border-[#bec8cb] bg-white px-5 text-[15px] font-semibold text-[#1c1b1b] transition-colors hover:border-[#005361] hover:text-[#005361] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005361]"
                >
                  See how it works
                  <I.Arrow className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* video card */}
            <figure className="overflow-hidden rounded-[1.5rem] border border-[#1c1b1b]/10 bg-[#111718] shadow-[0_18px_50px_-24px_rgba(0,83,97,0.45)]">
              <figcaption className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                <span className="flex items-center gap-1.5 text-[#fece54]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#fece54]" />
                  Live stream
                </span>
                <span className="text-white/25">|</span>
                <span>4K surgical console</span>
                <span className="text-white/25">|</span>
                <span className="ml-auto">AES-256 encrypted</span>
              </figcaption>

              <div className="relative aspect-[16/10] bg-[#0b1112]">
                <video
                  ref={videoRef}
                  src={Tele}
                  poster={videoPoster}
                  preload="metadata"
                  playsInline
                  controls={playing}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onEnded={() => setPlaying(false)}
                  className="h-full w-full object-cover"
                />

                {!playing && (
                  <>
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1112] via-transparent to-transparent" />
                    <button
                      type="button"
                      onClick={handlePlay}
                      aria-label="Play the tele-robotic surgery overview"
                      className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fece54] text-[#1c1b1b] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fece54]"
                    >
                      <I.Play className="ml-1 h-7 w-7" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold text-white">
                    Tele-robotic procedure — console view
                  </p>
                  <p className="truncate text-[11px] text-white/55">
                    Dr. Vikrant Sharma · Novo Robotic Surgery Centre, Kaushambi
                  </p>
                </div>
                <span className="ml-auto shrink-0 rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium tabular-nums text-white/70">
                  05:12
                </span>
              </div>
            </figure>
          </div>

          {/* stats */}
          <dl className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-14">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="rounded-[1.25rem] border border-[#bec8cb] bg-white px-6 py-5"
              >
                <dt className="text-[26px] font-bold tracking-[-0.01em] text-[#005361]">{s.value}</dt>
                <dd className="mt-1 text-[13px] leading-5 text-[#3f484b]">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ========================= HOW IT WORKS ========================= */}
      <section id="how-it-works" className="border-b border-[#e5e2e1] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <Eyebrow>Procedural workflow</Eyebrow>
          <SectionHeading>How does the surgeon perform tele-robotic surgery?</SectionHeading>
          <p className="mt-4 max-w-[70ch] text-[16px] leading-7 text-[#3f484b]">
            The procedure runs as a continuous loop between the surgeon and the robot. Each stage
            below happens within milliseconds of the one before it.
          </p>

          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="flex flex-col rounded-[1.5rem] border border-[#bec8cb] bg-white p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f4f6] text-[#005361]">
                      <Icon className="h-[22px] w-[22px]" />
                    </span>
                    <span className="rounded-full bg-[#1c1b1b] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-bold leading-6 text-[#1c1b1b]">{step.title}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-6 text-[#3f484b]">{step.body}</p>

                  <p className="mt-5 flex items-center gap-2 border-t border-[#e5e2e1] pt-4 text-[12px] font-medium text-[#6f797c]">
                    <I.Check className="h-3.5 w-3.5 text-[#0d6d7e]" />
                    {step.note}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ========================== COMPARISON ========================== */}
      <section className="border-b border-[#e5e2e1] bg-[#f6f3f2] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <Eyebrow>Clinical distinction</Eyebrow>
          <SectionHeading>Robotic surgery and tele-robotic surgery: what changes?</SectionHeading>
          <p className="mt-4 max-w-[70ch] text-[16px] leading-7 text-[#3f484b]">
            Both use the same robotic platform and the same instruments. The difference is where the
            surgeon sits, and what carries the movement from the console to the patient.
          </p>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[#bec8cb] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of robotic surgery and tele-robotic surgery
                </caption>
                <thead>
                  <tr className="bg-[#005361] text-white">
                    <th scope="col" className="w-[26%] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Parameter
                    </th>
                    <th scope="col" className="w-[37%] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Robotic surgery
                    </th>
                    <th scope="col" className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em]">
                      <span className="flex flex-wrap items-center gap-2">
                        Tele-robotic surgery
                        <span className="rounded-full bg-[#fece54] px-2 py-0.5 text-[10px] font-bold tracking-[0.08em] text-[#1c1b1b]">
                          At Novo
                        </span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.param} className={i % 2 ? "bg-[#f6f3f2]" : "bg-white"}>
                      <th
                        scope="row"
                        className="border-t border-[#e5e2e1] px-6 py-4 align-top text-[14px] font-semibold text-[#1c1b1b]"
                      >
                        {row.param}
                      </th>
                      <td className="border-t border-[#e5e2e1] px-6 py-4 align-top text-[14px] leading-6 text-[#3f484b]">
                        {row.robotic}
                      </td>
                      <td className="border-t border-l border-[#e5e2e1] bg-[#e8f4f6]/50 px-6 py-4 align-top text-[14px] font-medium leading-6 text-[#00404c]">
                        {row.tele}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== PROCEDURES ========================== */}
      <section className="border-b border-[#e5e2e1] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <Eyebrow>Clinical specialities</Eyebrow>
          <SectionHeading>Procedures performed with the robotic platform</SectionHeading>
          <p className="mt-4 max-w-[70ch] text-[16px] leading-7 text-[#3f484b]">
            Robotic assistance is considered for a range of general, bariatric, gynaecological and
            cancer procedures. Suitability is decided case by case after assessment.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCEDURES.map((p) => (
              <li key={p.title}>
                <a
                  href={p.href}
                  className="group flex h-full flex-col rounded-[1.25rem] border border-[#bec8cb] bg-white p-5 transition-colors hover:border-[#005361] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005361]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4f6] text-[#005361]">
                    <I.Organ className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold leading-5 text-[#1c1b1b] group-hover:text-[#005361]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-[#6f797c]">{p.sub}</p>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-start gap-3 rounded-[1.25rem] border border-[#efc047]/50 bg-[#fff8e4] p-5 text-[14px] leading-6 text-[#5a4300]">
            <I.Info className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#775a00]" />
            Whether a robotic or tele-robotic approach suits you depends on your diagnosis, prior
            surgeries and general fitness for anaesthesia. Dr. Sharma will confirm this at
            consultation.
          </p>
        </div>
      </section>

      {/* ============================ SAFETY ============================ */}
      <section className="border-b border-[#e5e2e1] bg-[#f6f3f2] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <Eyebrow>Clinical governance</Eyebrow>
              <SectionHeading>Is tele-surgery safe?</SectionHeading>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-[#3f484b]">
                The system is built so that no single failure can affect the patient. The robot cannot
                move on its own, instruments stop the moment the surgeon's hands leave the controls,
                and the network runs on a dedicated link with a second path held in reserve.
              </p>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-[#3f484b]">
                Just as importantly, tele-surgery does not replace the operating theatre. A qualified
                surgeon, anaesthetist and scrub team are with you for the entire procedure and can take
                over conventionally at any moment.
              </p>

              <ul className="mt-8 space-y-3">
                {SAFETY_CARDS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li
                      key={c.title}
                      className="flex gap-4 rounded-[1.25rem] border border-[#bec8cb] bg-white p-5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f4f6] text-[#005361]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold text-[#1c1b1b]">{c.title}</h3>
                        <p className="mt-1 text-[13px] leading-5 text-[#3f484b]">{c.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* telemetry panel */}
            <aside className="self-start rounded-[1.5rem] border border-[#bec8cb] bg-white p-6 lg:sticky lg:top-24">
              <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e2e1] pb-4">
                <h3 className="text-[15px] font-bold text-[#1c1b1b]">Safeguards checked before every case</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f4f6] px-2.5 py-1 text-[11px] font-semibold text-[#005361]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#005361]" />
                  Verified
                </span>
              </header>

              <ul className="divide-y divide-[#e5e2e1]">
                {TELEMETRY.map((t) => (
                  <li key={t.label} className="py-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[14px] font-medium text-[#1c1b1b]">{t.label}</p>
                      <p
                        className={
                          "shrink-0 text-[13px] font-semibold " +
                          (t.tone === "gold" ? "text-[#775a00]" : "text-[#005361]")
                        }
                      >
                        {t.value}
                      </p>
                    </div>
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#e5e2e1]">
                      <div
                        className={
                          "h-full rounded-full " + (t.tone === "gold" ? "bg-[#efc047]" : "bg-[#0d6d7e]")
                        }
                        style={{ width: `${t.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-2 border-t border-[#e5e2e1] pt-4 text-[12px] leading-5 text-[#6f797c]">
                Indicative of the pre-operative checklist followed at Novo Robotic Surgery Centre.
                Actual readings are recorded per case.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ====================== CENTRE OF EXCELLENCE ==================== */}
      <section className="border-b border-[#e5e2e1] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="relative">
              {/* <img
                src={gallBallderDoctorImage}
                alt="Dr. Vikrant Sharma, robotic surgeon at Novo Robotic Surgery Centre"
                className="w-full rounded-[1.5rem] border border-[#bec8cb] object-cover"
                loading="lazy"
              /> */}
              <span className="absolute -bottom-4 left-4 right-8 rounded-[1rem] bg-[#fece54] px-4 py-3 text-[13px] font-bold leading-5 text-[#1c1b1b] shadow-[0_10px_30px_-14px_rgba(0,83,97,0.5)]">
                20+ years of surgical experience
                <span className="mt-0.5 block text-[11px] font-medium text-[#5a4300]">
                  Dr. Vikrant Sharma · Robotic &amp; laparoscopic surgery
                </span>
              </span>
            </div>

            <div className="pt-6 lg:pt-0">
              <Eyebrow>Centre of excellence</Eyebrow>
              <SectionHeading>Tele-robotic surgery at Novo Robotic Surgery Centre</SectionHeading>
              <p className="mt-4 max-w-[68ch] text-[16px] leading-7 text-[#3f484b]">
                Novo Robotic Surgery Centre in Kaushambi, Ghaziabad brings an advanced robotic
                platform together with a surgical team led by Dr. Vikrant Sharma, who has over two
                decades of experience in minimal-access surgery.
              </p>
              <p className="mt-4 max-w-[68ch] text-[16px] leading-7 text-[#3f484b]">
                The focus is on combining that experience with technology that measurably helps
                patients — smaller incisions, less blood loss, shorter hospital stays and a quicker
                return to normal activity.
              </p>

              <div className="mt-8 rounded-[1.5rem] bg-[#005361] p-6 text-white">
                <h3 className="flex items-center gap-2.5 text-[16px] font-bold">
                  <I.Robot className="h-5 w-5 text-[#fece54]" />
                  SSI Mantra surgical platform
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {PLATFORM.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] leading-6 text-white/85">
                      <I.Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#fece54]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================= */}
      <section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[1.5rem] bg-[#005361] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[58ch]">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a1ecff]">
                  Novo Robotic Surgery Centre · Kaushambi, Ghaziabad
                </span>
                <h2 className="mt-5 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-white sm:text-[36px]">
                  Talk to Dr. Vikrant Sharma about your case
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-white/80">
                  A consultation covers whether a robotic or tele-robotic approach is suitable for you,
                  what the procedure involves, and what recovery realistically looks like.
                </p>
              </div>

           
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}