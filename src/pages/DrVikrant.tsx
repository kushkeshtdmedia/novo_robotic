import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Crosshair,
  GraduationCap,
  HeartHandshake,
  Award,
  BookOpen,
  Users,
  Activity,
  Microscope,
  Cpu,
  Stethoscope,
  Phone,
  Mail,
} from 'lucide-react';
import VikrantPic from '../../src/assets/images/VikrantSirHome.jpg';

const trust = [
  {
    icon: Crosshair,
    title: 'Unmatched Precision',
    body: 'Utilising sub-millimetre robotic precision to minimise tissue trauma and enhance surgical outcomes.',
  },
  {
    icon: GraduationCap,
    title: 'Advanced Fellowships',
    body: 'Trained at global centres of excellence, bringing international standards of robotic care to every patient.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient-Centricity',
    body: 'Every robotic procedure is tailored to individual physiological needs, prioritising long-term health and wellness.',
  },
];

const expertise = [
  { icon: Activity, label: 'Bariatric Surgery' },
  { icon: Microscope, label: 'GI Oncology' },
  { icon: Cpu, label: 'Robotic Gynaecology' },
  { icon: Stethoscope, label: 'General Surgery' },
];

export default function DrVikrantSharma() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f6f8] px-4 py-1.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#005a65]">
              <Award className="w-3.5 h-3.5" strokeWidth={2.5} /> Chief Robotic Surgeon
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#005a65]">
              Shaping the Future of
              <br />
              <span className="text-[#8a6d00]">Robotic Surgery</span>
            </h1>

            <p className="mt-6 text-xl font-semibold">Meet Dr. Vikrant Sharma</p>

            <p className="mt-3 font-[IBM_Plex_Sans] text-sm text-[#3e484a] leading-relaxed">
              MBBS, MS, FNB (Minimal Access Surgery), FACS (USA) · Proctor for Robotic Surgery ·
              Specialist Robotic, Bariatric &amp; GI Surgeon
            </p>

            <p className="mt-6 text-[#3e484a] leading-relaxed max-w-xl">
              With over 20 years of specialised experience and a track record of 10,000+ successful
              procedures, Dr. Sharma stands at the pinnacle of surgical innovation, combining
              technological mastery with compassionate patient care.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0d7481] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#005a65] transition-colors"
              >
                Request appointment <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </NavLink>

              <div className="rounded-lg bg-white px-6 py-3 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
                <p className="text-lg font-bold text-[#005a65] leading-none">20+</p>
                <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-1">
                  Years of Expertise
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={VikrantPic}
              alt="Dr. Vikrant Sharma, Chief Robotic Surgeon"
              className="w-full h-80 lg:h-[460px] rounded-xl object-cover object-top"
            />

            <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-8 lg:-left-8 inline-flex items-center gap-4 rounded-xl bg-white/85 backdrop-blur-[20px] px-7 py-5 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <Award className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
              <div>
                <p className="text-2xl font-bold text-[#005a65] leading-none">10,000+</p>
                <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-1.5">
                  Procedures Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST FACTOR ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#005a65]">The Trust Factor</h2>
            <p className="mt-4 text-sm text-[#3e484a]">
              Precision isn&apos;t just a technical metric — it&apos;s a commitment to patient safety
              and faster recovery times.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {trust.map((t) => (
              <div
                key={t.title}
                className="rounded-xl bg-white p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <t.icon className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-5 font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CREDENTIALS ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-[32px] font-bold text-[#005a65]">
            Academic Credentials &amp; Fellowships
          </h2>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-xl bg-[#0d7481] p-8 lg:p-10">
              <span className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
                Core Qualification
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">MBBS &amp; MS in General Surgery</h3>
              <GraduationCap className="mt-8 w-8 h-8 text-[#fdd350]" strokeWidth={1.75} />
            </div>

            <div className="rounded-xl bg-[#eeeef0] p-8">
              <span className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#6e797b]">
                USA
              </span>
              <h3 className="mt-3 text-xl font-bold">FACS</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                Fellow, American College of Surgeons
              </p>
            </div>

            <div className="rounded-xl bg-[#eeeef0] p-8">
              <span className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#6e797b]">
                Fellowship
              </span>
              <h3 className="mt-3 text-xl font-bold">FNB</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                Minimal Access Surgery, National Board of Examinations
              </p>
            </div>

            <div className="rounded-xl bg-[#eeeef0] p-8">
              <span className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#6e797b]">
                UK
              </span>
              <h3 className="mt-3 text-xl font-bold">Robotic Fellowship</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                Advanced console training in robotic-assisted surgery
              </p>
            </div>

            <div className="rounded-xl border border-[#e2e2e5] bg-white p-8 flex items-start gap-4">
              <Crosshair className="w-6 h-6 shrink-0 text-[#0d7481]" strokeWidth={2} />
              <div>
                <h3 className="font-bold">National Proctor for Robotic Surgery</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                  The highest level of certification for training fellow surgeons in robotic-assisted
                  procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCTOR ============ */}
      <section className="py-20 lg:py-28 bg-[#eeeef0]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={VikrantPic}
              alt="Dr. Sharma mentoring surgeons at the robotic console"
              className="w-full h-72 lg:h-[380px] rounded-xl object-cover object-top"
            />
            <div className="absolute bottom-5 right-5 rounded-lg bg-white/85 backdrop-blur-[20px] px-5 py-4 max-w-[220px]">
              <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#0d7481]">
                SS Innovations Partnership
              </p>
              <p className="mt-1 text-sm font-bold">Training the next generation of surgeons</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#005a65]">
              National Proctor for Robotic Surgery
            </h2>
            <p className="mt-5 text-[#3e484a] leading-relaxed">
              As a designated National Proctor, Dr. Sharma plays a critical role in the advancement
              of medical technology in India. He leads the training initiatives for the SS
              Innovations robotic system, mentoring surgeons across the country to adopt robotic
              precision in their practice.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <BookOpen className="w-5 h-5 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-bold text-sm">Curriculum Development</h3>
                  <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">
                    Developing standardised protocols for robotic GI and bariatric surgeries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-5 h-5 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-bold text-sm">Advanced Mentorship</h3>
                  <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">
                    Conducting live operating workshops and certifying surgeons on advanced robotic
                    manoeuvres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE EXPERTISE ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#005a65]">
              Core Areas of Expertise
            </h2>
            <p className="mt-4 text-sm text-[#3e484a]">
              Mastering complex procedures with minimally invasive techniques.
            </p>

            <ul className="mt-10 space-y-3">
              {expertise.map((e) => (
                <li
                  key={e.label}
                  className="flex items-center gap-4 rounded-lg border border-[#e2e2e5] bg-white px-6 py-4 text-sm font-semibold"
                >
                  <e.icon className="w-5 h-5 text-[#0d7481]" strokeWidth={2} />
                  {e.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <img
              src={VikrantPic}
              alt="Dr. Vikrant Sharma in the robotic operating theatre"
              className="w-full h-80 lg:h-[420px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003b43]/95 via-[#005a65]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white">Precision That Transforms Lives</h3>
              <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-md">
                The da Vinci and SSI Mantra systems allow for 10x magnification and articulated
                motion that exceeds the human hand, enabling complex resections with minimal impact
                on surrounding healthy tissue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY QUOTE ============ */}
      <section className="relative py-20 lg:py-28 bg-[#0d7481] overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute top-10 right-10 text-[160px] font-extrabold leading-none text-white/10 select-none"
        >
          &rdquo;
        </span>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-white">
            Surgeon&apos;s Philosophy
          </span>

          <blockquote className="mt-8 text-2xl lg:text-[32px] font-bold italic leading-snug text-white">
            “My approach to surgery is defined by precision and empathy. Technology is the tool, but
            the patient&apos;s holistic recovery is always the ultimate objective. We aren&apos;t
            just performing surgery; we are restoring quality of life.”
          </blockquote>

          <p className="mt-8 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#fdd350]">
            — Dr. Vikrant Sharma
          </p>
        </div>
      </section>

      {/* ============ CONSULTATION ============ */}
 
    </div>
  );
}