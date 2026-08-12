import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  PlayCircle,
  Check,
  Microscope,
  Activity,
  Stethoscope,
  ShieldCheck,
  Scissors,
  Layers,
  Cpu,
  Hand,
  Eye,
  Droplet,
  Timer,
  ClipboardList,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import  ColorectalImage from '../../assets/images/ColorectalCancerSurgery1.png';
const conditions = [
  {
    icon: Activity,
    title: 'Colon Cancer',
    body: 'Comprehensive removal of cancerous segments of the large intestine with full lymph node clearance.',
  },
  {
    icon: Microscope,
    title: 'Rectal Cancer',
    body: 'Ultra-low resections performed with sphincter preservation and functional recovery in mind.',
  },
  {
    icon: Layers,
    title: 'Rectal Prolapse',
    body: 'Robotic rectopexy to restore pelvic anatomy with long-term stability and minimal recurrence.',
  },
  {
    icon: ShieldCheck,
    title: 'Benign Issues',
    body: 'Treatment for diverticular disease, inflammatory bowel disease and complex fistulae.',
  },
];

const symptoms = [
  'Changes in bowel habits lasting more than a few days',
  'Rectal bleeding or blood in the stool',
  'Persistent abdominal discomfort — cramps, gas or pain',
  'Unexplained weight loss or ongoing fatigue',
];

const steps = [
  {
    icon: Stethoscope,
    title: 'Anaesthesia & Incisions',
    body: 'General anaesthesia is administered, then four to five 8mm ports are made to allow the entry of robotic arms.',
  },
  {
    icon: Cpu,
    title: 'Docking the System',
    body: 'The da Vinci robotic arms are precisely docked and connected to the surgical ports with surgical precision.',
  },
  {
    icon: Hand,
    title: 'Surgeon Control',
    body: 'The surgeon operates at the console, controlling the instruments with 3D high-definition visualisation.',
  },
  {
    icon: Scissors,
    title: 'Tumour Removal',
    body: 'The affected bowel segment is dissected along with regional lymph nodes with minimal surrounding tissue trauma.',
  },
  {
    icon: Layers,
    title: 'Anastomosis',
    body: 'The healthy ends of the colon or rectum are precisely reconnected to restore continuity of the bowel.',
  },
  {
    icon: Check,
    title: 'Closure',
    body: 'The small port sites are closed, and the small incisions are dressed with minimal scarring.',
  },
];

const procedures = [
  {
    title: 'Colectomy',
    body: 'Removal of the entire colon or a diseased portion, tailored to tumour position and stage.',
  },
  {
    title: 'Hemicolectomy',
    body: 'Removal of either the right or left side of the colon based on tumour location.',
  },
  {
    title: 'Sigmoid Colectomy',
    body: 'Targeted removal of the sigmoid colon, the most common site for diverticular disease.',
  },
  {
    title: 'LAR & APR',
    body: 'Lower Anterior Resection and Abdominoperineal Resection for rectal tumours.',
  },
  {
    title: 'Rectopexy',
    body: 'Internal repair of rectal prolapse, restoring the natural anatomical position.',
  },
];

const advantages = [
  { icon: Eye, title: '3D Visualisation', body: 'Magnified views allow for identifying fine nerves.' },
  { icon: Hand, title: 'Wristed Motion', body: 'Wristed instruments reach beyond the limits of tight spaces.' },
  { icon: Droplet, title: 'Minimal Blood Loss', body: 'Precise cautery and dissection reduce transfusion needs.' },
  { icon: Timer, title: 'Faster Recovery', body: 'Patients return to normal life in half the time.' },
];

const timeline = [
  { day: 'Day 0–1', title: 'Mobilisation', body: 'Walk patients walk on the same evening of surgery.' },
  { day: 'Day 2–3', title: 'Transition to Diet', body: 'Returning soft foods are tolerated within 48 hours.' },
  { day: 'Day 4–5', title: 'Hospital Discharge', body: 'Average stay is 30% shorter than open surgery.' },
  { day: 'Week 2', title: 'Normal Activities', body: 'Full return to light work and desk routines.' },
];

export default function ColorectalCancerSurgery() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Robotic colorectal surgery theatre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003b43]/95 via-[#005a65]/85 to-[#0d7481]/45" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-[#fdd350] px-4 py-1.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#241a00]">
              Precision Oncology
            </span>

            <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Advanced Robotic Colorectal Cancer Surgery
            </h1><br></br>
                                                       <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-300 leading-snug mb-5 max-w-2xl">
  Best Robotic Colorectal Cancer Surgerys in Kaushambi, Ghaziabad
</p>
            <p className="mt-6 text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
              Experience the future of surgical excellence with robotic colectomy. Our da Vinci
              system offers unmatched precision, minimising trauma and ensuring the best possible
              oncological outcomes for colorectal care.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-7 py-3.5 text-sm font-bold text-[#241a00] hover:bg-[#ebc241] transition-colors"
              >
                Consult a specialist <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </NavLink>
              <a
                href="#procedure"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                <PlayCircle className="w-4 h-4" strokeWidth={2} /> Watch procedure video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UNDERSTANDING ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481]">
              Educational Overview
            </span>
            <h2 className="mt-4 text-3xl lg:text-[32px] font-bold leading-tight">
              Understanding Colorectal Cancer
            </h2>

            <p className="mt-5 text-[#3e484a] leading-relaxed">
              Colorectal cancer affects the large bowel — the colon and the rectum. Being it is one
              of the most common cancers worldwide, early detection through routine screening
              dramatically changes the survival curve.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              Our robotic approach allows for the removal of cancerous tissue with minimal impact on
              surrounding healthy nerves and vessels, crucial for maintaining bowel and bladder
              function post-surgery.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-[#0d7481] pl-5">
                <h3 className="font-bold text-sm">Early Detection</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                  Regular screening can identify polyps before they turn malignant.
                </p>
              </div>
              <div className="border-l-2 border-[#fdd350] pl-5">
                <h3 className="font-bold text-sm">Surgical Insight</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                  Nerve-sparing dissection preserves continence and quality of life.
                </p>
              </div>
            </div>
          </div>

          <img
            src={ColorectalImage}
            alt="Anatomical illustration of the colon and rectum"
            className="w-full h-72 lg:h-[440px] rounded-xl object-contain lg:object-cover bg-[#e8f6f8]"
          />
        </div>
      </section>

      {/* ============ CONDITIONS TREATED ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold">Conditions Treated</h2>
            <p className="mt-4 text-[#3e484a]">
              Our specialist team handles a wide array of colorectal conditions using minimally
              invasive techniques.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((c) => (
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

      {/* ============ SYMPTOMS ============ */}
      <section className="py-20 lg:py-28 bg-[#005a65]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-[32px] font-bold text-white">Recognising Symptoms</h2>
              <p className="mt-4 text-sm text-white/70">
                Early warning signs should never be ignored. Consult our specialists if you
                experience persistent changes.
              </p>

              <ul className="mt-10 space-y-4">
                {symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-4 border-b border-white/15 pb-4">
                    <Check className="w-5 h-5 shrink-0 text-[#fdd350] mt-0.5" strokeWidth={2.5} />
                    <span className="text-sm text-white/90 leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-[#0d7481] p-8">
                <p className="text-4xl font-extrabold text-white">90%</p>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  Survival rate when colorectal cancer is detected at an early stage.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/15 p-8">
                <p className="text-4xl font-extrabold text-[#fdd350]">2–3x</p>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  Greater instrument precision compared with manual laparoscopy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STEP BY STEP ============ */}
      <section id="procedure" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold">Step-by-Step Robotic Surgery</h2>
            <p className="mt-4 text-[#3e484a]">
              Visualising the path to recovery with robotic assistance.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {steps.map((s, i) => (
              <div key={s.title}>
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 shrink-0 rounded-full bg-[#e8f6f8] flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-[#0d7481]" strokeWidth={2} />
                  </span>
                  <h3 className="font-bold">
                    <span className="font-[IBM_Plex_Sans] text-[#6e797b] mr-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#3e484a] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCEDURE TYPES ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-[32px] font-bold leading-tight">
                Types of Robotic Colorectal Procedures
              </h2>
              <p className="mt-4 text-[#3e484a]">
                Tailored surgical approaches depending on the tumour location and stage.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#0d7481] px-5 py-2 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white">
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.5} /> Minimally Invasive Standard
            </span>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((p) => (
              <div
                key={p.title}
                className="rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{p.body}</p>
              </div>
            ))}

            <div className="rounded-xl bg-[#0d7481] p-7 text-white">
              <ClipboardList className="w-6 h-6 text-[#fdd350]" strokeWidth={2} />
              <h3 className="mt-4 font-bold">Custom Care Plan</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Every patient receives a stage-specific surgical strategy built by our tumour board.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE ADVANTAGES ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold">Core Advantages</h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              {advantages.map((a) => (
                <div key={a.title}>
                  <a.icon className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
                  <h3 className="mt-3 font-bold text-sm">{a.title}</h3>
                  <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl bg-[#f3f3f6] p-8">
              <h3 className="font-bold">Why Choose Novo Robotic?</h3>
              <ul className="mt-5 space-y-3">
                {[
                  'Dedicated colorectal robotic team',
                  'Specialised oncology unit with tumour board review',
                  'International patient protocols and coordination',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#3e484a]">
                    <Check className="w-4 h-4 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-white p-8 lg:p-10 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-semibold">Your Recovery Timeline</h3>

            <div className="mt-8 space-y-7">
              {timeline.map((t) => (
                <div key={t.day} className="flex gap-6 border-b border-[#e2e2e5] pb-6 last:border-0 last:pb-0">
                  <span className="w-20 shrink-0 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481] pt-1">
                    {t.day}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm">{t.title}</h4>
                    <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-xl bg-[#e8f6f8] p-8 lg:p-12 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]">
                Take the
                <br />
                First Step
              </h2>
              <p className="mt-5 text-sm text-[#3e484a] leading-relaxed max-w-sm">
                Your recovery starts with a conversation. Share your details and our colorectal
                coordinator will call you back within one working day.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <a href="tel:+918090808069" className="flex items-center gap-3 text-[#1a1c1e] hover:text-[#0d7481] transition-colors">
                  <Phone className="w-4 h-4 text-[#0d7481]" strokeWidth={2} /> +91 8090 808 069
                </a>
                <a href="mailto:contact@novorobotic.com" className="flex items-center gap-3 text-[#1a1c1e] hover:text-[#0d7481] transition-colors">
                  <Mail className="w-4 h-4 text-[#0d7481]" strokeWidth={2} /> contact@novorobotic.com
                </a>
                <p className="flex items-center gap-3 text-[#3e484a]">
                  <MapPin className="w-4 h-4 text-[#0d7481]" strokeWidth={2} /> Kaushambi, Ghaziabad
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="cr-name"
                    className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                  >
                    Name
                  </label>
                  <input
                    id="cr-name"
                    type="text"
                    placeholder="Full name"
                    className="mt-2 w-full rounded-lg bg-white border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cr-phone"
                    className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                  >
                    Phone
                  </label>
                  <input
                    id="cr-phone"
                    type="tel"
                    placeholder="+91"
                    className="mt-2 w-full rounded-lg bg-white border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cr-type"
                  className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                >
                  Inquiry Type
                </label>
                <select
                  id="cr-type"
                  defaultValue="second-opinion"
                  className="mt-2 w-full rounded-lg bg-white border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] transition-colors"
                >
                  <option value="second-opinion">Second opinion on a diagnosis</option>
                  <option value="colon">Colon cancer surgery</option>
                  <option value="rectal">Rectal cancer surgery</option>
                  <option value="benign">Benign colorectal condition</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="cr-message"
                  className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                >
                  Message
                </label>
                <textarea
                  id="cr-message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-2 w-full rounded-lg bg-white border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0d7481] px-6 py-4 text-sm font-bold text-white hover:bg-[#005a65] transition-colors"
              >
                Submit inquiry <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>

              <p className="text-center font-[IBM_Plex_Sans] text-[11px] text-[#6e797b]">
                Your details stay confidential and are shared only with the clinical team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}