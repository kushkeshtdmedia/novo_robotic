import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  Scale,
  HeartPulse,
  Stethoscope,
  Cpu,
  Timer,
  Sparkles,
  Users,
  Award,
  Apple,
  CalendarCheck,
  Ruler,
} from 'lucide-react';

const journey = [
  {
    step: '01',
    title: 'Precision Consultation',
    body: 'Comprehensive metabolic screening, BMI staging and 3D imaging to map your anatomy before the da Vinci system is planned.',
  },
  {
    step: '02',
    title: 'Robotic Preparation',
    body: 'Minimally invasive ports are placed within 8mm. The robotic console is calibrated to your surgeon\'s exact gestures.',
  },
  {
    step: '03',
    title: 'The Procedure',
    body: 'The sleeve or bypass is created with tremor-free articulation and real-time tissue-tension feedback, preserving anatomical integrity.',
  },
  {
    step: '04',
    title: 'Rapid Recovery',
    body: 'Most patients walk within hours of surgery and are discharged in 24 to 48 hours, with structured follow-up from day one.',
  },
];

const benefits = [
  {
    icon: Ruler,
    title: 'Microscopic Incisions',
    body: 'Significantly smaller scarring and reduced risk of wound infection compared with open metabolic surgery.',
  },
  {
    icon: Timer,
    title: 'Faster GI Return',
    body: 'The precision of robotic instruments lowers handling of the bowel, so normal digestion resumes sooner.',
  },
  {
    icon: HeartPulse,
    title: 'Reduced Post-Op Pain',
    body: 'Less abdominal wall trauma means significantly less reliance on analgesics during recovery.',
  },
];

const why = [
  {
    icon: Award,
    title: 'World-Class Surgeons',
    body: 'Our surgical team is internationally certified in 500+ robotic metabolic procedures with over 5,000 successful outcomes.',
  },
  {
    icon: Users,
    title: 'Multi-Disciplinary Care',
    body: 'Psychologists, dietitians and endocrine specialists work in tandem to ensure your mental and physical success.',
  },
  {
    icon: Cpu,
    title: 'Next-Gen Tech',
    body: 'We exclusively utilise the latest 4K Vinci systems, ensuring the highest surgical precision available globally.',
  },
];

export default function BariatricSurgery() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Robotic bariatric surgery suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003b43]/95 via-[#005a65]/80 to-[#0d7481]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block font-[IBM_Plex_Sans] text-xs font-bold tracking-[0.1em] uppercase text-[#9deffe] mb-6">
              Metabolic &amp; Bariatric Excellence
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Precision Bariatric Surgery:{' '}
              <em className="not-italic text-[#81d3e1]">Advanced Robotic</em> Weight Loss Solutions
            </h1>
            <p className="mt-6 text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
              Experience the next frontier in weight loss therapy. Our robotic-assisted approach
              is engineered for microscopic precision, faster physical recovery and a path to
              sustainable metabolic health.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-7 py-3.5 text-sm font-bold text-[#241a00] hover:bg-[#ebc241] transition-colors"
              >
                Book Your Specialist <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </NavLink>
              <a
                href="#technology"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Glass stat badges */}
          <div className="mt-16 flex flex-wrap gap-4 lg:absolute lg:bottom-16 lg:right-6 lg:mt-0">
            {[
              { value: '0.1mm', label: 'Surgical Precision' },
              { value: '50%', label: 'Faster Recovery' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white/80 backdrop-blur-[20px] px-8 py-5 text-center shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <p className="text-2xl font-bold text-[#005a65]">{s.value}</p>
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REDEFINING CAPACITY ============ */}
      <section id="technology" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="rounded-xl overflow-hidden bg-[#e8f6f8] shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <div className="p-5">
              <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#005a65]">
                Robotic Gastric Sleeve Procedure
              </span>
            </div>
            <img
              src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Robotic gastric sleeve procedure illustration"
              className="w-full h-64 lg:h-80 object-contain lg:object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight">Redefining Capacity</h2>
            <p className="mt-5 text-[#3e484a] leading-relaxed">
              Robotic bariatric surgery isn&apos;t just about weight loss. It is a sophisticated
              metabolic intervention. Our robotic approach allows for the precise resection of the
              stomach&apos;s capacity, transforming it from a volume of approximately 1.5L to a
              streamlined 50 to 150ml sleeve.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <Activity className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-3 font-bold">Precision</h3>
                <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">
                  Millimetre-accurate stapling lines with uniform tissue thickness.
                </p>
              </div>
              <div>
                <ShieldCheck className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-3 font-bold">Safety</h3>
                <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">
                  Minimised leak rates and consistent staple-line reinforcement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CANDIDACY ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold">Is Robotic Bariatric Surgery for You?</h2>
            <p className="mt-4 text-[#3e484a]">
              We follow global clinical standards to ensure the best patient outcomes and safety
              protocols.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            {/* BMI card */}
            <div className="rounded-xl bg-white p-8 lg:p-10 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold">BMI Thresholds</h3>
                  <p className="mt-3 text-sm text-[#3e484a] leading-relaxed max-w-sm">
                    Candidacy typically begins at a Body Mass Index of 40 or higher, or a BMI of 35
                    combined with obesity-related health conditions.
                  </p>
                </div>
                <Scale className="w-10 h-10 shrink-0 text-[#0d7481]" strokeWidth={1.5} />
              </div>

              <ul className="mt-8 space-y-3 font-[IBM_Plex_Sans] text-sm text-[#3e484a]">
                <li className="flex items-center gap-3 border-t border-[#e2e2e5] pt-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#fdd350]" />
                  BMI &gt; 40 kg/m² — Class III Obesity
                </li>
                <li className="flex items-center gap-3 border-t border-[#e2e2e5] pt-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#fdd350]" />
                  BMI &gt; 35 kg/m² + Comorbidities
                </li>
              </ul>
            </div>

            {/* Comorbidity card */}
            <div className="rounded-xl bg-[#0d7481] p-8 lg:p-10 text-white">
              <Sparkles className="w-8 h-8 text-[#fdd350]" strokeWidth={1.75} />
              <h3 className="mt-5 text-xl font-semibold">Comorbidity Focus</h3>
              <p className="mt-3 text-sm text-white/85 leading-relaxed">
                Surgery is highly recommended for patients suffering from Type 2 Diabetes,
                Hypertension or Obstructive Sleep Apnea, where metabolic correction is the primary
                clinical goal.
              </p>

              <div className="mt-10">
                <div className="flex items-end justify-between">
                  <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
                    Diabetes Remission
                  </span>
                  <span className="text-2xl font-bold">92%</span>
                </div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-white/20">
                  <div className="h-1.5 rounded-full bg-[#fdd350] w-[92%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ JOURNEY ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-[32px] font-bold text-center">
            Your Journey to Transformation
          </h2>

          <div className="mt-16 relative">
            {/* vertical spine */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#bec8cb]" />

            <div className="space-y-12 lg:space-y-0">
              {journey.map((item, i) => (
                <div key={item.step} className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center relative">
                  <div
                    className={
                      i % 2 === 0
                        ? 'lg:text-right lg:pr-4 lg:py-10'
                        : 'lg:col-start-2 lg:pl-4 lg:py-10'
                    }
                  >
                    <h3 className="font-semibold text-lg">
                      <span className="font-[IBM_Plex_Sans] text-[#0d7481] mr-2">{item.step}.</span>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{item.body}</p>
                  </div>

                  {/* node */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-[#0d7481] text-white text-xs font-bold font-[IBM_Plex_Sans]">
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS + SUCCESS ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold">Clinical Benefits</h2>
            <div className="mt-10 space-y-8">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-5">
                  <div className="shrink-0 h-11 w-11 rounded-lg bg-white flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-[#0d7481]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold">{b.title}</h3>
                    <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl bg-white p-8 lg:p-10 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#fdd350]/20" />
            <h3 className="relative text-2xl font-bold leading-tight">
              Success &amp;<br />Sustainability
            </h3>
            <p className="relative mt-4 text-sm text-[#3e484a] leading-relaxed">
              Our patients don&apos;t just lose weight, they retain their metabolic health. Using
              1-to-1 dietician handoffs, robotic bariatric surgery leads to more consistent
              weight-loss plateaus compared with traditional methods.
            </p>

            <div className="relative mt-10 space-y-7">
              {[
                { label: 'Excess Weight Loss (12 Months)', value: '70–80%', width: 'w-[78%]' },
                { label: 'Diabetes Remission Rate', value: '65%', width: 'w-[65%]' },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between font-[IBM_Plex_Sans] text-xs font-bold uppercase tracking-[0.1em] text-[#3e484a]">
                    <span>{m.label}</span>
                    <span className="text-[#005a65]">{m.value}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-[#e2e2e5]">
                    <div className={`h-1.5 rounded-full bg-[#0d7481] ${m.width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ NUTRITION ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Dietician consultation for post-operative nutrition"
            className="w-full h-72 lg:h-[420px] rounded-xl object-contain lg:object-cover"
          />

          <div>
            <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481]">
              Post-Care Programme
            </span>
            <h2 className="mt-4 text-3xl lg:text-[32px] font-bold leading-tight">
              Precision Nutrition for Post-Op Life
            </h2>
            <p className="mt-5 text-[#3e484a] leading-relaxed">
              Surgery is the catalyst. Nutrition is the fuel. Our dedicated bariatric dietitians
              work with you to navigate the phases of recovery — from clear liquids to nutrient-dense
              whole foods. We provide a tailored roadmap to ensure you meet your protein and vitamin
              requirements while enjoying a sustainable relationship with food.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#f3f3f6] px-6 py-5">
                <p className="text-xl font-bold text-[#005a65]">24/7</p>
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-1">
                  Diet Support
                </p>
              </div>
              <div className="rounded-lg bg-[#f3f3f6] px-6 py-5">
                <p className="text-xl font-bold text-[#005a65]">Lifetime</p>
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-1">
                  Follow-Up
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY NOVO ============ */}
      <section className="py-20 lg:py-28 bg-[#005a65]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-[32px] font-bold text-center text-white">
            Why Novo Robotic for Weight Loss?
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {why.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-white/15 bg-white/5 p-8 text-center"
              >
                <w.icon className="w-7 h-7 mx-auto text-[#fdd350]" strokeWidth={1.75} />
                <h3 className="mt-5 font-bold text-white">{w.title}</h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FORM ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-xl bg-white p-8 lg:p-12 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <h2 className="text-3xl font-bold text-center">Take the First Step</h2>
            <p className="mt-3 text-sm text-[#3e484a] text-center max-w-md mx-auto">
              Your transformation begins with a conversation. Fill out this form below for a
              confidential assessment.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 000 000 0000"
                  className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="inquiry"
                className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
              >
                Inquiry Type
              </label>
              <select
                id="inquiry"
                defaultValue="eligibility"
                className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
              >
                <option value="eligibility">BMI &amp; Eligibility Consultation</option>
                <option value="sleeve">Robotic Gastric Sleeve</option>
                <option value="bypass">Robotic Gastric Bypass</option>
                <option value="nutrition">Post-Op Nutrition Programme</option>
              </select>
            </div>

            <button
              type="button"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#8a6d00] px-6 py-4 text-sm font-bold text-white hover:bg-[#725a00] transition-colors"
            >
              Schedule my consultation <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>

            <p className="mt-4 text-center font-[IBM_Plex_Sans] text-[11px] text-[#6e797b]">
              Your data is encrypted and HIPAA compliant.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}