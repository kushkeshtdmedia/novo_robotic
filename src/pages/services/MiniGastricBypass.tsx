import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Scale,
  TrendingDown,
  HeartPulse,
  CalendarDays,
  Stethoscope,
  Cpu,
  Scissors,
  GitMerge,
  Crosshair,
  Droplet,
  Timer,
  RefreshCw,
  Utensils,
  Phone,
  MapPin,
} from 'lucide-react';

const candidates = [
  {
    icon: Scale,
    title: 'BMI 35+',
    body: 'Suitable for individuals with a Body Mass Index of 35 or higher, or 30+ combined with obesity-related comorbidities.',
  },
  {
    icon: TrendingDown,
    title: 'Weight History',
    body: 'For those who have had unsuccessful attempts at weight loss through diet and exercise alone.',
  },
  {
    icon: HeartPulse,
    title: 'Metabolic Health',
    body: 'Highly effective for Type 2 Diabetes, hypertension and PCOD management.',
  },
  {
    icon: CalendarDays,
    title: 'Age 18–65',
    body: 'Ideally suited for patients between 18 and 65 years of age with stable health markers.',
  },
];

const pathway = [
  {
    icon: Stethoscope,
    step: 'Step 01',
    title: 'Anaesthesia & Incisions',
    body: 'General anaesthesia is administered, followed by four to five micro-incisions of 8mm to allow robotic-arm and camera access.',
  },
  {
    icon: Cpu,
    step: 'Step 02',
    title: 'Robotic System Setup',
    body: 'The surgeon docks the robotic arms, gaining 3D high-definition visualisation and superior dexterity inside the abdomen.',
  },
  {
    icon: Scissors,
    step: 'Step 03',
    title: 'Stomach Pouch Creation',
    body: 'Advanced robotic stapling devices create a narrow gastric pouch, restricting food intake capacity safely and uniformly.',
  },
  {
    icon: GitMerge,
    step: 'Step 04',
    title: 'The Bypass Connection',
    body: 'A single anastomosis is made between the pouch and mid-ileum, bypassing a section of the digestive tract.',
  },
];

const benefits = [
  {
    icon: Crosshair,
    title: 'Superior Precision',
    body: 'Eliminates human tremor and provides 10x magnification for exceptional accuracy.',
  },
  {
    icon: Droplet,
    title: 'Minimal Blood Loss',
    body: 'Small incisions and robotic-assisted dissection dramatically reduce intra-operative blood loss.',
  },
  {
    icon: Timer,
    title: 'Faster Recovery',
    body: 'Most patients return to light activities within 10 to 14 days post-surgery.',
  },
  {
    icon: RefreshCw,
    title: 'Metabolic Revision',
    body: 'Rapid improvement in glycaemic control for Type 2 Diabetes patients.',
  },
];

const recovery = [
  {
    phase: 'Phase 1',
    title: 'Clear Liquids (Week 1)',
    body: 'Maintaining hydration and allowing the staple lines to heal.',
  },
  {
    phase: 'Phase 2',
    title: 'Puréed Foods (Weeks 2–4)',
    body: 'Soft, high-protein blends to support muscle retention.',
  },
  {
    phase: 'Phase 3',
    title: 'Regular Solid Food (Month 2+)',
    body: 'Transitioning to small, nutrient-dense portions for life.',
  },
];

export default function MiniGastricBypass() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Robotic operating theatre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003b43]/95 via-[#005a65]/80 to-[#0d7481]/35" />
        </div>

        {/* watermark */}
        <span
          aria-hidden="true"
          className="hidden lg:block absolute top-6 left-6 text-[120px] font-extrabold leading-none tracking-[-0.02em] text-white/10 select-none"
        >
          Novo
        </span>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#9deffe]">
              Precision Bariatrics
            </span>

            <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Advanced Robotic Mini Gastric Bypass{' '}
              <span className="text-[#81d3e1]">(MGB/SAGB)</span>
            </h1>

            <p className="mt-6 text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
              A life-changing, single-anastomosis procedure performed with robotic precision. Fewer
              connections, shorter operating time and a proven path to sustained metabolic health.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0d7481] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#005a65] transition-colors"
              >
                Book a consultation <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </NavLink>
              <a
                href="#pathway"
                className="inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-7 py-3.5 text-sm font-bold text-[#241a00] hover:bg-[#ebc241] transition-colors"
              >
                View technology
              </a>
            </div>
          </div>

          <div className="mt-14 lg:mt-0 lg:absolute lg:bottom-16 lg:right-6">
            <div className="inline-flex items-center gap-4 rounded-xl bg-white/80 backdrop-blur-[20px] px-7 py-5 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <Crosshair className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
              <div>
                <p className="text-2xl font-bold text-[#005a65]">0.1mm</p>
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-0.5">
                  Surgical Precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UNDERSTANDING ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="rounded-xl overflow-hidden bg-[#e8f6f8] shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <div className="p-5">
              <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#005a65]">
                Robotic Mini Gastric Bypass
              </span>
            </div>
            <img
              src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Illustration of the mini gastric bypass anatomy"
              className="w-full h-64 lg:h-80 object-contain lg:object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight">
              Understanding MGB/SAGB
            </h2>

            <p className="mt-5 text-[#3e484a] leading-relaxed">
              The Single Anastomosis Gastric Bypass, often called the Mini Gastric Bypass, is a
              highly effective and simplified version of traditional gastric bypass surgery. It
              involves creating a long, narrow stomach pouch and connecting it directly to the small
              intestine in a single loop.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              This procedure is generally accepted for a remarkable weight-loss outcome and
              metabolic improvement. By utilising our advanced robotic system, we enhance safety and
              precision beyond conventional laparoscopic methods.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                'Reduced surgical time compared to RNY bypass',
                'Fewer internal connections, minimising leak risk',
                'Proven, reversible improvement of metabolic conditions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-[#e2e2e5] pt-4 text-sm text-[#3e484a]">
                  <Check className="w-4 h-4 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ CANDIDACY ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold">Are You an Ideal Candidate?</h2>
            <p className="mt-4 text-[#3e484a]">
              Precision healthcare starts with the right diagnosis. Evaluate your eligibility for
              robotic bariatric intervention.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidates.map((c) => (
              <div
                key={c.title}
                className="rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <c.icon className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-5 font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ROBOTIC PATHWAY ============ */}
      <section id="pathway" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-[32px] font-bold text-center">The Robotic Pathway</h2>

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#bec8cb]" />

            <div className="space-y-12 lg:space-y-4">
              {pathway.map((p, i) => {
                const textFirst = i % 2 === 0;
                return (
                  <div key={p.step} className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div
                      className={
                        textFirst
                          ? 'lg:text-right lg:pr-6 lg:py-8'
                          : 'lg:col-start-2 lg:pl-6 lg:py-8 lg:row-start-1'
                      }
                    >
                      <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#6e797b]">
                        {p.step}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                      <p className="mt-3 text-sm text-[#3e484a] leading-relaxed">{p.body}</p>
                    </div>

                    <div
                      className={
                        textFirst
                          ? 'mt-6 lg:mt-0 lg:pl-6 flex items-center justify-center rounded-xl bg-[#f3f3f6] h-40'
                          : 'mt-6 lg:mt-0 lg:col-start-1 lg:row-start-1 lg:pr-6 flex items-center justify-center rounded-xl bg-[#f3f3f6] h-40'
                      }
                    >
                      <p.icon className="w-10 h-10 text-[#6e797b]" strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS (DARK) ============ */}
      <section className="py-20 lg:py-28 bg-[#1a1c1e]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Unrivalled Benefits of Robotic Surgery
            </h2>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
              Choosing robotic-assisted MGB means redefining your recovery and rewriting your
              surgical mastery.
            </p>

            <div className="mt-12 rounded-xl bg-[#0d7481] px-7 py-6 inline-block">
              <p className="text-3xl font-extrabold text-white">98%</p>
              <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white/70 mt-1">
                Patient Satisfaction Rate
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-white/10 bg-white/5 p-7">
                <b.icon className="w-6 h-6 text-[#fdd350]" strokeWidth={2} />
                <h3 className="mt-5 font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECOVERY ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold">Your Path to Recovery</h2>
            <p className="mt-4 text-[#3e484a]">
              Post-operative success is a collaborative effort. Our bariatric nutrition team guides
              you through a progressive dietary plan.
            </p>

            <div className="mt-10 space-y-4">
              {recovery.map((r) => (
                <div
                  key={r.phase}
                  className="rounded-lg border border-[#e2e2e5] bg-white px-6 py-5 flex items-start gap-4"
                >
                  <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481] pt-1 w-16 shrink-0">
                    {r.phase}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm">{r.title}</h3>
                    <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#0d7481] p-10 lg:p-12 h-full flex flex-col justify-center">
            <Utensils className="w-8 h-8 text-[#fdd350]" strokeWidth={1.75} />
            <h3 className="mt-6 text-2xl font-bold text-white">Guided Nutrition</h3>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Our multidisciplinary team includes bariatric dietitians, psychologists and physicians
              who help you navigate every phase of your weight-loss journey — for life, not just for
              the first year.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 lg:py-28 bg-[#005a65]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Start Your Transformation Today
            </h2>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-md">
              Take the first step towards a healthier, more vibrant version of yourself. Our team is
              ready to guide you through every stage of your robotic surgical journey.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#81d3e1]">
                  Call an Advisor
                </p>
                <a
                  href="tel:+919870291333"
                  className="mt-2 flex items-center gap-3 text-xl font-bold text-white hover:text-[#fdd350] transition-colors"
                >
                  <Phone className="w-5 h-5" strokeWidth={2} /> +91 98702 91333
                </a>
              </div>
              <div>
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#81d3e1]">
                  Hospital Location
                </p>
                <p className="mt-2 flex items-center gap-3 text-white">
                  <MapPin className="w-5 h-5" strokeWidth={2} /> Novo Robotic Medical Centre,
                  Kaushambi, Ghaziabad
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-8 lg:p-10">
            <h3 className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]">
              Request a Callback
            </h3>

            <div className="mt-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="mgb-name"
                    className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                  >
                    Full Name
                  </label>
                  <input
                    id="mgb-name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mgb-phone"
                    className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="mgb-phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="mgb-type"
                  className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                >
                  Inquiry Type
                </label>
                <select
                  id="mgb-type"
                  defaultValue="mgb"
                  className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
                >
                  <option value="mgb">Mini Gastric Bypass (MGB/SAGB)</option>
                  <option value="eligibility">BMI &amp; eligibility check</option>
                  <option value="revision">Revision bariatric surgery</option>
                  <option value="nutrition">Post-op nutrition programme</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mgb-message"
                  className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                >
                  Message
                </label>
                <textarea
                  id="mgb-message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#fdd350] px-6 py-4 text-sm font-bold text-[#241a00] hover:bg-[#ebc241] transition-colors"
              >
                Take the first step <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>

              <p className="text-center font-[IBM_Plex_Sans] text-[11px] text-[#6e797b]">
                By submitting, you agree to be contacted by the clinical coordination team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}