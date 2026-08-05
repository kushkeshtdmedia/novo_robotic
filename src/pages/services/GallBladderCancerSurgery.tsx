import {
  ArrowRight,
  CheckCircle,
  Eye,
  Cpu,
  Shield,
  Zap,
  AlertTriangle,
  Activity,
  Phone,
  Star,
  Droplet,
  Clock,
  Target,
  Waves,
  HeartPulse,
  FileText,
  Scale,
  Utensils,
  Frown,
  CircleDot,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

/* ── design tokens ──────────────────────────────────────────────
   primary #0D7481 · secondary #FFD552 · tertiary #EBF2F3
   neutral #1A1C1E · variant #44474E
   Manrope (headline + body) · IBM Plex Sans (labels)
   index.html:
   <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
──────────────────────────────────────────────────────────────── */
const LABEL = "font-['IBM_Plex_Sans',sans-serif] text-[11px] font-semibold uppercase tracking-[0.1em]";
const H2 = 'text-3xl md:text-[38px] font-bold tracking-[-0.02em] text-[#1A1C1E] leading-[1.15]';
const BODY = 'text-[15px] leading-[1.6] text-[#44474E]';

const conditions = [
  {
    icon: Shield,
    title: 'Gallbladder Adenocarcinoma',
    desc: 'The most common type, arising from the glandular cells of the gallbladder lining. Robotic radical cholecystectomy removes the gallbladder along with adjacent liver tissue and regional lymph nodes.',
  },
  {
    icon: Activity,
    title: 'Complex Gallstone Disease',
    desc: 'Large or impacted stones with repeated inflammation, where dense adhesions make conventional laparoscopy difficult. Wristed instruments allow safe dissection in a scarred field.',
  },
  {
    icon: Zap,
    title: 'Chronic Cholecystitis',
    desc: 'Long-term inflammation that thickens the gallbladder wall and raises the risk of malignant change. Early definitive surgery prevents progression.',
  },
];

const symptoms = [
  { icon: AlertTriangle, title: 'Abdominal Pain' },
  { icon: Eye, title: 'Jaundice' },
  { icon: Scale, title: 'Weight Loss' },
  { icon: Utensils, title: 'Loss of Appetite' },
  { icon: Frown, title: 'Nausea & Vomiting' },
  { icon: CircleDot, title: 'Abdominal Lump' },
];

const steps = [
  { num: '01', title: 'Initial Consultation', desc: 'Imaging review, tumour markers and a staging discussion with the surgical oncology team.' },
  { num: '02', title: 'Surgical Planning', desc: 'CT and MRI reconstructions map the tumour, liver segments IVb/V and the vascular anatomy before the port plan is finalised.' },
  { num: '03', title: 'Small Incisions', desc: 'Four to five keyhole ports, each 8 mm or smaller, replace the long open incision.' },
  { num: '04', title: 'Robotic Setup', desc: 'The surgeon docks the console, and 3D high-definition vision with 10x magnification takes over from direct sight.' },
  { num: '05', title: 'Tumour Removal', desc: 'En-bloc resection of the gallbladder with a liver wedge and a full portal lymphadenectomy.' },
  { num: '06', title: 'Recovery', desc: 'Most patients are mobile within 24 hours and discharged in 2 to 3 days.', highlight: true },
];

const advantages = [
  { icon: Eye, title: '3D Visualisation', desc: 'Ten-times magnified stereoscopic vision reveals tissue planes and small vessels the naked eye misses.' },
  { icon: Droplet, title: 'Minimal Blood Loss', desc: 'Precise dissection and controlled energy use typically keep intra-operative loss under 100 ml.' },
  { icon: Clock, title: 'Faster Recovery', desc: 'Smaller incisions mean less pain and a quicker return to work and daily routine.' },
  { icon: Target, title: 'Cancer Clearance', desc: 'Wristed instruments reach the hepatoduodenal ligament for a complete lymph node harvest.' },
  { icon: CheckCircle, title: 'Reduced Infection', desc: 'A closed, minimally handled field lowers the rate of surgical site infection.' },
  { icon: Waves, title: 'Tremor Filtration', desc: 'The system filters natural hand tremor, so every movement at the tissue is steady.' },
];

const whyChoose = [
  { icon: Star, title: 'Specialised Expertise', desc: 'A dedicated GI and hepatobiliary oncology team with high-volume robotic experience.' },
  { icon: Cpu, title: 'SSI Mantra Technology', desc: "India's first indigenous surgical robotic system, with multi-arm precision and open console ergonomics." },
  { icon: HeartPulse, title: 'Holistic Oncology Support', desc: 'Nutrition, pain management, physiotherapy and counselling run alongside the surgical plan.' },
];

export default function GallBladderCancerSurgery() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    setSent(false);
  };

  const submit = () => {
    if (!form.name || !form.phone) return;
    console.log('Consultation request', form);
    setSent(true);
  };

  const field =
    'w-full rounded-lg bg-[#EBF2F3] px-3.5 py-3 text-[15px] text-[#1A1C1E] placeholder:text-[#44474E]/55 focus:outline-none focus:ring-2 focus:ring-[#0D7481]';

  return (
    <div
      className="pt-20 bg-white text-[#1A1C1E] antialiased"
      style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif' }}
    >
      {/* ═══ Hero ═══ */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
            alt="Robotic radical cholecystectomy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062A2E]/95 via-[#062A2E]/80 to-[#062A2E]/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <span className={`${LABEL} inline-block bg-white/15 text-white rounded-full px-4 py-1.5 mb-6`}>
            Advanced Oncology
          </span>

          <h1 className="text-4xl md:text-[52px] font-extrabold text-white leading-[1.12] tracking-[-0.02em] mb-5 max-w-2xl">
            Precision Oncology:
            <br />
            Advanced Robotic
            <br />
            Radical Cholecystectomy
          </h1>
          <br></br>
                                                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-300 leading-snug mb-5 max-w-2xl">
  Best Robotic Gall Bladder Cancer Surgery (Robotic Radical Cholecystectomy) in Kaushambi, Ghaziabad
</p>
          <p className="text-white/75 text-sm leading-[1.6] max-w-md mb-8">
            Employing the world&apos;s most trusted robotic platform for unmatched precision in
            treating complex gallbladder and hepatobiliary cancers.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <NavLink to="/contact">
              <button className="group flex items-center gap-2 bg-[#FFD552] hover:bg-[#F5C63C] text-[#1A1C1E] font-bold text-sm px-7 py-3.5 rounded-lg transition">
                Book Your Appointment
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
            <button className="border border-white/40 hover:bg-white/10 text-white font-bold text-sm px-7 py-3.5 rounded-lg transition">
              View Technology
            </button>
          </div>
        </div>

        {/* circular precision badge */}
        <div className="hidden md:grid absolute bottom-10 right-10 z-10 w-[136px] h-[136px] rounded-full bg-white/12 backdrop-blur-sm place-items-center text-center text-white">
          <div>
            <p className="text-[26px] font-extrabold tracking-[-0.02em] leading-none">0.3mm</p>
            <p className={`${LABEL} text-white/80 mt-1.5`}>
              Surgical
              <br />
              Precision
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Understanding ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className={`${H2} mb-5`}>
              Understanding
              <br />
              Gallbladder Cancer
            </h2>
            <p className={`${BODY} mb-4`}>
              Gallbladder cancer is uncommon but aggressive. It starts in the wall of the gallbladder and
              often causes no symptoms until it has spread into the liver bed or the surrounding bile
              ducts, which is why roughly two in three cases are found at an advanced stage.
            </p>
            <p className={BODY}>
              A radical cholecystectomy goes further than a routine gallbladder removal. It takes the
              gallbladder, a wedge of adjacent liver tissue and the regional lymph nodes in one specimen,
              giving the pathologist a clear margin and the patient the best chance of long-term control.
            </p>
          </div>

          <aside className="bg-[#EBF2F3] rounded-xl p-7">
            <div className="w-11 h-11 bg-[#FFD552] rounded-lg flex items-center justify-center mb-4">
              <FileText size={20} className="text-[#1A1C1E]" />
            </div>
            <h3 className="text-lg font-bold tracking-[-0.02em] mb-2.5">Why Early Diagnosis Is Key</h3>
            <p className={`${BODY} text-sm`}>
              Detected while the disease is still confined to the gallbladder wall, five-year survival is
              high. Once it reaches the liver or distant nodes, the picture changes sharply.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                'Higher survival rates with early-stage detection',
                'Eligibility for minimally invasive robotic resection',
                'Less need for extended open surgery later',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm leading-[1.6]">
                  <CheckCircle size={18} className="text-[#0D7481] flex-shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ═══ Conditions Treated ═══ */}
      <section className="py-20 bg-[#EBF2F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`${H2} mb-4`}>Conditions Treated</h2>
            <p className={`${BODY} max-w-xl mx-auto`}>
              Our specialised surgical oncology team handles complex hepatobiliary cases with high-risk
              anatomy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {conditions.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="bg-white rounded-xl p-7 flex flex-col">
                <div className="w-11 h-11 bg-[#EBF2F3] rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#0D7481]" />
                </div>
                <h3 className="text-lg font-bold tracking-[-0.02em] mb-2.5">{title}</h3>
                <p className={`${BODY} text-sm mb-5`}>{desc}</p>
                <button className="mt-auto self-start flex items-center gap-1.5 rounded-lg bg-[#EBF2F3] px-4 py-2 text-[13px] font-bold text-[#0D7481] hover:bg-[#DCE8EA] transition">
                  Learn More <ArrowRight size={14} />
                </button>
              </article>
            ))}

            <article className="bg-[#0D7481] rounded-xl p-7 text-white flex flex-col">
              <h3 className="text-lg font-bold tracking-[-0.02em] mb-2.5">Incidental Gallbladder Cancer</h3>
              <p className="text-sm leading-[1.6] text-white/85 mb-6">
                Cancer discovered on the pathology report after a routine gallbladder removal. A completion
                radical resection, done early, changes the outcome — and we perform it robotically.
              </p>
              <NavLink to="/contact" className="mt-auto self-start">
                <button className="bg-[#FFD552] hover:bg-[#F5C63C] text-[#1A1C1E] font-bold text-[13px] px-5 py-2.5 rounded-lg transition">
                  Get a Second Opinion
                </button>
              </NavLink>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ Recognising Symptoms ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#EBF2F3] rounded-xl p-8 md:p-12 grid md:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
            <div>
              <h2 className={`${H2} mb-4`}>
                Recognising
                <br />
                Symptoms
              </h2>
              <p className={`${BODY} text-sm`}>
                Early gallbladder cancer rarely announces itself. These signs are non-specific on their
                own, but together — or when they persist — they warrant imaging.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {symptoms.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl px-3.5 py-6 flex flex-col items-center gap-3 text-center"
                >
                  <Icon size={22} className="text-[#0D7481]" />
                  <p className="font-['IBM_Plex_Sans',sans-serif] text-[13px] font-medium leading-tight">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-[13px] text-[#44474E]">
            <AlertTriangle size={15} className="text-[#0D7481]" />
            If any of these last longer than two weeks, see a specialist.
          </div>
        </div>
      </section>

      {/* ═══ The Robotic Procedure Journey ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className={`${H2} mb-3`}>The Robotic Procedure Journey</h2>
            <p className={`${BODY} max-w-xl mx-auto`}>
              Step by step, from first consultation to going home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* illustration */}
            <figure className="m-0">
              <div className="bg-[#EBF2F3] rounded-xl p-6">
                <p className={`${LABEL} text-[#0D7481] mb-1`}>Radical Cholecystectomy</p>
                <p className="font-['IBM_Plex_Sans',sans-serif] text-[10px] font-semibold uppercase tracking-[0.1em] text-[#44474E] mb-4">
                  Robotic-Assisted
                </p>
                <img
                  src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg"
                  alt="Radical cholecystectomy, robotic-assisted"
                  className="w-full h-[280px] object-cover rounded-lg"
                />
              </div>
              <figcaption className="font-['IBM_Plex_Sans',sans-serif] text-xs leading-[1.6] text-[#44474E] mt-4">
                The gallbladder is removed en bloc with a wedge of liver segments IVb and V, together with
                the portal lymph node basin.
              </figcaption>
            </figure>

            {/* alternating timeline */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-[#EBF2F3] -translate-x-1/2" />

              <ol className="space-y-6">
                {steps.map((s, i) => {
                  const onLeft = i % 2 === 1; /* 02 · 04 · 06 sit left, in cards */
                  return (
                    <li
                      key={s.num}
                      className="grid grid-cols-[36px_1fr] md:grid-cols-[1fr_36px_1fr] gap-4 md:gap-5 items-start"
                    >
                      <span
                        className={
                          'relative z-10 w-9 h-9 rounded-full grid place-items-center text-[13px] font-bold md:col-start-2 md:row-start-1 ' +
                          (s.highlight ? 'bg-[#FFD552] text-[#1A1C1E]' : 'bg-[#0D7481] text-white')
                        }
                      >
                        {s.num}
                      </span>

                      <div
                        className={
                          'rounded-xl p-4 md:row-start-1 ' +
                          (onLeft
                            ? 'md:col-start-1 '
                            : 'md:col-start-3 md:bg-transparent md:p-0 ') +
                          (s.highlight ? 'bg-[#0D7481] text-white' : 'bg-[#EBF2F3]')
                        }
                      >
                        <h4 className="text-[15px] font-bold tracking-[-0.02em] mb-1">{s.title}</h4>
                        <p
                          className={
                            'text-[13px] leading-[1.6] ' +
                            (s.highlight ? 'text-white/85' : 'text-[#44474E]')
                          }
                        >
                          {s.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Advantages ═══ */}
      <section className="py-20 bg-[#0D7481]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[38px] font-bold tracking-[-0.02em] text-white leading-[1.15] mb-3">
              Advantages of Robotic Precision
            </h2>
            <p className="text-[15px] leading-[1.6] text-white/75 max-w-xl mx-auto">
              Redefining the standard of hepatobiliary oncology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="bg-white/10 rounded-xl p-7">
                <Icon size={22} className="text-[#FFD552] mb-4" />
                <h3 className="text-base font-bold tracking-[-0.02em] text-white mb-2">{title}</h3>
                <p className="text-[13px] leading-[1.6] text-white/75">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Why Choose Novo ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.05fr] gap-14 items-center">
          <div>
            <h2 className={`${H2} mb-7`}>
              Why Choose Novo
              <br />
              Robotic Hospital?
            </h2>
            <ul className="space-y-6">
              {whyChoose.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-[#EBF2F3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#0D7481]" />
                  </div>
                  <div>
                    <p className="font-bold tracking-[-0.02em] mb-1">{title}</p>
                    <p className="text-sm leading-[1.6] text-[#44474E]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7088462/pexels-photo-7088462.jpeg"
              alt="Novo Robotic surgical team at the console"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 bg-[#EBF2F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 md:p-12 grid md:grid-cols-[1fr_1.1fr] gap-14 items-start">
            <div>
              <h2 className={`${H2} mb-4`}>
                Take the First Step
                <br />
                Toward Recovery
              </h2>
              <p className={`${BODY} text-sm mb-6`}>
                Send your reports and our surgical oncology team will review them and call you back within
                one working day.
              </p>
              <a
                href="tel:+918006686744"
                className="inline-flex items-center gap-3 text-[17px] font-bold tracking-[-0.02em] text-[#0D7481]"
              >
                <span className="w-11 h-11 bg-[#0D7481] rounded-full grid place-items-center">
                  <Phone size={18} className="text-white" />
                </span>
                +91 (800) NOVO-SURGERY
              </a>
            </div>

            <div className="grid gap-3.5">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <label className={`${LABEL} text-[#44474E] grid gap-1.5`}>
                  First Name
                  <input className={field} value={form.name} onChange={update('name')} placeholder="Your name" />
                </label>
                <label className={`${LABEL} text-[#44474E] grid gap-1.5`}>
                  Phone Number
                  <input className={field} value={form.phone} onChange={update('phone')} placeholder="+91" />
                </label>
              </div>

              <label className={`${LABEL} text-[#44474E] grid gap-1.5`}>
                Email Address
                <input className={field} value={form.email} onChange={update('email')} placeholder="you@example.com" />
              </label>

              <label className={`${LABEL} text-[#44474E] grid gap-1.5`}>
                Select Option
                <select className={field} value={form.interest} onChange={update('interest')}>
                  <option value="">Select an option</option>
                  <option>Robotic radical cholecystectomy</option>
                  <option>Gallbladder cancer consultation</option>
                  <option>Second opinion on a pathology report</option>
                  <option>Something else</option>
                </select>
              </label>

              <label className={`${LABEL} text-[#44474E] grid gap-1.5`}>
                Tell Us About the Case
                <textarea
                  rows={3}
                  className={`${field} resize-y`}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Diagnosis, scans done so far, current symptoms"
                />
              </label>

              <button
                onClick={submit}
                className="w-full bg-[#0D7481] hover:bg-[#0A5C66] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition"
              >
                Submit Inquiry
              </button>

              {sent && (
                <p className="font-['IBM_Plex_Sans',sans-serif] text-[13px] font-semibold text-[#0D7481]">
                  Request received. We&apos;ll call you within one working day.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}