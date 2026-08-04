import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Scale,
  CalendarDays,
  HeartHandshake,
  TrendingDown,
  Activity,
  Sparkles,
  Timer,
  Crosshair,
} from 'lucide-react';

const criteria = [
  {
    icon: Scale,
    title: 'BMI Metrics',
    body: 'BMI of 40+ or 35+ with obesity-related conditions like Type 2 Diabetes or hypertension.',
  },
  {
    icon: CalendarDays,
    title: 'Age Range',
    body: 'Typically recommended for adults between 18 and 65, evaluated on individual health status.',
  },
  {
    icon: HeartHandshake,
    title: 'Commitment',
    body: 'Readiness to embrace lifelong nutritional guidelines and regular physical activity.',
  },
];

const journey = [
  {
    step: '01',
    title: 'Small Incisions',
    body: 'Keyhole ports are created for the robotic arms, ensuring minimal blood loss.',
  },
  {
    step: '02',
    title: 'Stomach Pouch',
    body: 'A walnut-sized pouch is created at the top of the stomach with robotic precision.',
  },
  {
    step: '03',
    title: 'Intestine Rerouting',
    body: 'The small intestine is divided and the lower part is lifted to the new pouch.',
  },
  {
    step: '04',
    title: '“Y” Connection',
    body: 'The bypassed segment is reconnected to allow digestive juices to mix with food.',
  },
  {
    step: '05',
    title: 'Closure',
    body: 'Internal checks are performed using 3D HD visualisation before final closure.',
  },
];

const stats = [
  { icon: TrendingDown, title: '60–80% EWL', body: 'Average excess weight loss within the first 12 to 18 months.' },
  { icon: Activity, title: 'Diabetes Control', body: 'Immediate improvement or remission of Type 2 Diabetes.' },
  { icon: Sparkles, title: 'Minimal Scarring', body: 'Robotic ports result in scars smaller than 1 centimetre.' },
  { icon: Timer, title: 'Faster Recovery', body: 'Return to normal activities significantly faster than open surgery.' },
];

const recoveryPath = [
  '1–2 day hospital stay',
  'Gradual diet progression',
  'Lifetime nutrition support',
];

const whyNovo = [
  {
    title: 'Bariatric Speciality Centre',
    body: 'Our surgeons perform hundreds of robotic bariatric procedures annually with superior outcome ratios.',
  },
  {
    title: 'Market-Leading Technology',
    body: 'Utilising the advanced da Vinci system for unmatched surgical control and stability.',
  },
  {
    title: 'Holistic Care Team',
    body: 'Psychologists, dietitians and physiotherapists integrated into your care plan.',
  },
  {
    title: 'Post-Op Monitoring',
    body: 'Remote tracking and monthly check-ins for the first two critical years.',
  },
];

export default function RouxEnYGastricBypass() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Robotic surgical theatre at Novo Robotic Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003b43]/95 via-[#005a65]/80 to-[#0d7481]/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-[#fdd350] px-4 py-1.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#241a00]">
              Advanced Bariatric Surgery
            </span>

            <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Precision Roux-en-Y Gastric Bypass (RYGB)
            </h1>

            <p className="mt-6 text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
              A gold-standard robotic procedure designed for sustainable weight loss and
              transformative metabolic improvement. Experience the pinnacle of surgical precision at
              Novo.
            </p>

            <NavLink
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white hover:bg-white/10 transition-colors"
            >
              Contact a specialist <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ============ UNDERSTANDING ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#005a65]">
              Understanding RYGB
            </h2>

            <p className="mt-5 text-[#3e484a] leading-relaxed">
              The Roux-en-Y Gastric Bypass is a dual-mechanism procedure that creates a tiny stomach
              pouch and reroutes the small intestine. This results in both restriction of food
              intake and reduced absorption of calories.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              Our robotic-assisted approach utilises the 0.1mm precision of the da Vinci system,
              allowing for cleaner incisions, more robust suturing and significantly reduced
              internal trauma.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                { k: 'Restrictive', v: 'Smaller pouch limits capacity' },
                { k: 'Malabsorptive', v: 'Bypassing intestine reduces calorie uptake' },
                { k: 'Metabolic', v: 'Positive changes in hunger hormones' },
              ].map((b) => (
                <li key={b.k} className="flex items-start gap-3 text-sm text-[#3e484a]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d7481]" />
                  <span>
                    <strong className="font-bold text-[#1a1c1e]">{b.k}:</strong> {b.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-[#e8f6f8] shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <img
              src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Anatomical illustration of the Roux-en-Y gastric bypass"
              className="w-full h-72 lg:h-[420px] object-contain lg:object-cover"
            />

            <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-lg bg-white/80 backdrop-blur-[20px] px-5 py-3">
              <span className="h-8 w-8 rounded-full bg-[#0d7481] flex items-center justify-center">
                <Crosshair className="w-4 h-4 text-white" strokeWidth={2} />
              </span>
              <div>
                <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a]">
                  Instrument Scale
                </p>
                <p className="text-lg font-bold text-[#005a65] leading-none mt-0.5">0.1mm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CANDIDACY ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#005a65]">
              Is RYGB Right for You?
            </h2>
            <p className="mt-4 text-[#3e484a]">
              We assess every patient based on clinical guidelines and long-term health potential.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {criteria.map((c) => (
              <div
                key={c.title}
                className="rounded-xl bg-white p-8 text-center shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <span className="mx-auto h-12 w-12 rounded-full bg-[#e8f6f8] flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-[#0d7481]" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCEDURAL JOURNEY ============ */}
      <section className="py-20 lg:py-28 bg-[#0d7481]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-[32px] font-bold text-center text-white">
            The Robotic Procedural Journey
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {journey.map((j) => (
              <div key={j.step}>
                <p className="text-4xl font-extrabold text-white/25 leading-none">{j.step}</p>
                <h3 className="mt-4 font-bold text-white">{j.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUTCOME STATS ============ */}
      <section className="py-16 lg:py-20 bg-[#f9f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.title} className="px-6 py-6 border-l border-[#e2e2e5] first:border-l-0">
                <s.icon className="w-5 h-5 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-4 font-bold text-sm">{s.title}</h3>
                <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECOVERY + WHY NOVO ============ */}
      <section className="py-20 lg:py-28 bg-[#eeeef0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-0 lg:gap-0 rounded-xl overflow-hidden shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            {/* Recovery path */}
            <div className="lg:col-span-4 bg-[#005a65] p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-white">Recovery Path</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Our comprehensive support ensures you are never alone on your transformation
                journey.
              </p>

              <ul className="mt-8 space-y-4">
                {recoveryPath.map((r, i) => (
                  <li key={r} className="flex items-center gap-4 text-sm text-white/90">
                    <span className="h-7 w-7 shrink-0 rounded-full border border-white/30 flex items-center justify-center font-[IBM_Plex_Sans] text-[11px] font-bold">
                      {i + 1}
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Novo */}
            <div className="lg:col-span-8 bg-white p-8 lg:p-10">
              <h3 className="text-xl font-semibold">Why Choose Novo?</h3>

              <div className="mt-8 grid sm:grid-cols-2 gap-8">
                {whyNovo.map((w) => (
                  <div key={w.title}>
                    <h4 className="font-bold text-sm text-[#005a65]">{w.title}</h4>
                    <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{w.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA FORM ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#005a65]">Take the First Step</h2>
            <p className="mt-4 text-sm text-[#3e484a]">
              Begin your journey toward a healthier, more vibrant life with a confidential
              consultation.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="rygb-name"
                  className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                >
                  Full Name
                </label>
                <input
                  id="rygb-name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg bg-white border border-[#e2e2e5] px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="rygb-phone"
                  className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                >
                  Phone Number
                </label>
                <input
                  id="rygb-phone"
                  type="tel"
                  placeholder="+91 (000) 000-0000"
                  className="mt-2 w-full rounded-lg bg-white border border-[#e2e2e5] px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="rygb-type"
                className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
              >
                Inquiry Type
              </label>
              <select
                id="rygb-type"
                defaultValue="bariatric"
                className="mt-2 w-full rounded-lg bg-white border border-[#e2e2e5] px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] transition-colors"
              >
                <option value="bariatric">Bariatric consultation</option>
                <option value="rygb">Roux-en-Y Gastric Bypass</option>
                <option value="eligibility">BMI &amp; eligibility check</option>
                <option value="revision">Revision surgery</option>
              </select>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-[#8a6d00] px-6 py-4 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#725a00] transition-colors"
            >
              Request confidential call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}