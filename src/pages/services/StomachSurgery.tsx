import { useState } from "react";
import { ArrowRight, ChevronRight, Utensils, Flame, Scale, Activity } from "lucide-react";
import OncoSurgeryJourney from '../../assets/images/StomachCancerSurgery.png';
import vikrantPic from '../../assets/images/VikrantOnco.jpeg';
import StomachSurgeryPic from '../../assets/images/StomachSurgeryPic.png'
/**
 * StomachSurgery — Novo Robotic Hospital
 * Route: <Route path="/services/stomach-surgery" element={<StomachSurgery />} />
 * Built with Tailwind utility classes, matching the styling conventions
 * used on the Oesophagus Surgery page (teal-800/teal-600 brand, yellow-400
 * accent, rounded-3xl cards, font-black/font-bold/font-semibold scale).
 */

const warningSigns = [
  { Icon: Utensils, title: "Feeling Full Quickly", body: "Satiety after eating only a small amount of food." },
  { Icon: Flame, title: "Persistent Indigestion", body: "Chronic discomfort or a burning sensation in the upper abdomen." },
  { Icon: Scale, title: "Unexplained Weight Loss", body: "Dropping weight without any changes to diet or exercise." },
  { Icon: Activity, title: "Abdominal Pain", body: "Vague, aching discomfort in the stomach area that persists." },
];

const procedures = [
  {
    title: "Robotic Total Gastrectomy",
    body: "Complete removal of the stomach for tumors located in the middle or upper sections, followed by esophagojejunal anastomosis.",
    tags: ["Radical lymphadenectomy", "Complex reconstruction"],
  },
  {
    title: "Partial Gastrectomy",
    body: "Removal of the lower part of the stomach (Distal Gastrectomy) while preserving the upper portion for better digestive function.",
    tags: ["Preserves function", "Faster recovery"],
  },
  {
    title: "Wedge Gastric Resection",
    body: "Ideal for GISTs and benign tumors, removing only a small wedge-shaped section of the stomach wall.",
    tags: ["Minimal resection", "Rapid healing"],
  },
];

const journey = [
  { title: "Detailed Pre-Surgical Evaluation", body: "Comprehensive staging with CT, PET, and endoscopic ultrasound to map the tumor's precise location." },
  { title: "Anesthesia & Port Placement", body: "General anesthesia is administered and 4–5 tiny incisions (8mm) are made for the robotic arms." },
  { title: "Robot Docking", body: "The Da Vinci robot is positioned over the patient and instruments are inserted under 3D HD visualization." },
  { title: "Tumor Mobilization", body: "The surgeon uses micro-instruments to separate the stomach from surrounding organs with precision." },
  { title: "Completion of Surgery", body: "The affected tissue is removed through a small incision and the digestive tract is reconstructed." },
];

const advantages = [
  { icon: "👁️", title: "Superior 3D Vision", body: "Surgeons see anatomy in vivid high-definition depth for safer dissection." },
  { icon: "✋", title: "Tremor-Free Precision", body: "Hand tremors are filtered out, allowing for microscopic accuracy." },
  { icon: "🩸", title: "Less Blood Loss", body: "Cautery and suturing are more precise, minimizing surgical trauma." },
  { icon: "⚡", title: "Faster Recovery", body: "Smaller incisions mean less pain and a quicker return to a normal diet." },
  { icon: "🧬", title: "D2 Lymphadenectomy", body: "Enhanced ability to remove critical lymph nodes for accurate cancer staging." },
  { icon: "🪑", title: "Ergonomic Comfort", body: "Surgeons operate seated, reducing fatigue and maintaining sharp focus." },
  { icon: "🏥", title: "Shorter Hospital Stay", body: "Most robotic patients are discharged 2–3 days earlier than open surgery." },
  { icon: "🎯", title: "Better Outcomes", body: "Improved oncological margins and reduced post-operative complications." },
];

const recovery = [
  { n: 1, title: "Walking within 24h", body: "Early mobilization is key to preventing complications and speeding up bowel function." },
  { n: 2, title: "Gradual Diet", body: "Starting with liquids on day 2, moving to soft foods as the gut heals over several weeks." },
  { n: 3, title: "Return to Activity", body: "Most patients return to light work within 2–3 weeks, significantly faster than traditional surgery." },
];

export default function StomachSurgery() {
  const [active, setActive] = useState(0);

  return (
    <div className="pt-20">

      {/* ─── Hero ─── */}
      <section className="relative min-h-[520px] flex items-end overflow-hidden bg-gradient-to-br from-slate-100 via-teal-50 to-teal-100">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-28 w-full grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <nav className="flex items-center gap-2 text-xs text-teal-700 mb-6">
              <span className="hover:text-teal-900 transition-colors">Home</span>
              <ChevronRight size={12} />
              <span className="text-teal-500">General Surgery</span>
              <ChevronRight size={12} />
              <span className="text-teal-900 font-semibold">Stomach Surgery</span>
            </nav>

            <p className="text-yellow-500 text-xs font-semibold uppercase tracking-widest mb-3">
              Robotic Oncology
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-5">
              Precision Oncology:<br />
              Advanced Robotic<br />
              <span className="text-teal-700">Gastrectomy</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed">
              Minimally invasive stomach cancer surgery with superior accuracy and faster recovery. Our cutting-edge robotic technology provides surgeons with 10× magnification and tremor-free dexterity.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-teal-700/30 group">
                Consult Our Expert
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 font-semibold px-7 py-3.5 rounded-full transition-all duration-200">
                View Technology
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50">
            <img
  src={StomachSurgeryPic}
  alt="Robotic gastrectomy at Novo Robotic Hospital"
  className="w-full h-auto object-contain"
/>
            </div>
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-lg">🔬</div>
                <div>
                  <p className="text-xl font-black text-gray-900 leading-none">0.1mm</p>
                  <p className="text-xs text-gray-500 mt-0.5">Sub-millimeter precision</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic leading-relaxed">
                Harnessing the da Vinci robotic platform to transform survival outcomes in gastric oncology.
              </p>
            </div> */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ─── Understanding Stomach Cancer ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Oncology</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Understanding<br />Stomach Cancer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gastric cancer requires a multidisciplinary approach combining surgical precision with oncological expertise. At Novo, we specialize in identifying cellular anomalies early and intervening with minimal tissue disruption.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our robotic platform allows for extensive lymph node dissection — a critical factor in cancer staging and long-term survival — that was previously challenging with traditional laparoscopic methods.
            </p>
            <button className="flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-2.5 transition-all">
              Download Oncology Guide <ArrowRight size={14} />
            </button>
          </div>

          <div>
            <p className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
              ⚠ Early Warning Signs
            </p>
            <div className="grid grid-cols-2 gap-4">
              {warningSigns.map(({ Icon, title, body }) => (
                <div key={title} className="bg-slate-50 border-l-4 border-yellow-400 rounded-2xl p-5">
                  <Icon size={18} className="text-teal-600 mb-3" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Robotic Solution ─── */}
      <section className="py-20 bg-teal-700 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Robotic Solution</h2>
          <p className="text-teal-100 leading-relaxed mb-12">
            Robotic Gastrectomy is a leap forward from traditional open or laparoscopic surgery. Using the Da Vinci surgical system, our surgeons operate with wrist-like instruments that provide a range of motion far exceeding the human hand.
          </p>
          <div className="flex justify-center gap-16 flex-wrap">
            <div>
              <p className="text-4xl font-black text-yellow-400 leading-none">10×</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-200 mt-2">Visual Magnification</p>
            </div>
            <div>
              <p className="text-4xl font-black text-yellow-400 leading-none">540°</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-200 mt-2">Instrument Rotation</p>
            </div>
            <div>
              <p className="text-4xl font-black text-yellow-400 leading-none">0%</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-200 mt-2">Tremor Transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Procedure Spectrum ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Specialisations</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Procedure Spectrum</h2>
              <p className="text-gray-500 text-sm mt-2">Tailoring the surgical approach based on tumor location and stage.</p>
            </div>
            <div className="hidden md:block w-12 h-1.5 bg-yellow-400 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {procedures.map((p) => (
              <article key={p.title} className="bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 text-lg mb-5">⚕</div>
                <h3 className="font-black text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.body}</p>
                <div className="flex flex-col gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-bold uppercase tracking-wide text-teal-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Surgical Journey ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">The Surgical Journey</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50">
              <img
                src={OncoSurgeryJourney}
                alt="Robotic surgical journey"
                className="w-full h-auto object-contain md:h-[420px] md:object-cover"
              />
            </div>
            <ol className="space-y-2">
              {journey.map((s, i) => (
                <li
                  key={s.title}
                  onMouseEnter={() => setActive(i)}
                  className={`flex gap-4 rounded-2xl p-4 transition-colors cursor-default ${
                    i === active ? "bg-teal-50" : ""
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-black text-sm mt-0.5 transition-colors ${
                      i === active ? "bg-teal-600 text-white" : "bg-slate-100 text-gray-500"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── Clinical Advantages ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Clinical Advantages</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Why robotic surgery is the gold standard for gastric oncology.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-50">
              <div className="text-2xl mb-4">{a.icon}</div>
              <p className="font-black text-gray-900 mb-2">{a.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Recovery Pathway ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">Recovery Pathway</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recovery.map((r) => (
              <article key={r.n} className="bg-slate-50 rounded-3xl p-8 text-center border border-gray-100">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-black mx-auto mb-4">
                  {r.n}
                </div>
                <h4 className="font-black text-gray-900 mb-2">{r.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust & Expertise ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">Trust &amp; Expertise</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Novo Robotic Hospital, we don't just treat cancer — we treat patients. Our multidisciplinary approach ensures every case is reviewed by a team of oncologists, radiologists, and robotic surgeons.
            </p>

            <div className="flex items-center gap-8 mb-8">
              <div>
                <p className="text-3xl font-black text-gray-900 leading-none">10,000+</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mt-1">Successful Surgeries</p>
              </div>
              <div className="w-px h-11 bg-gray-200" />
              <div>
                <p className="text-3xl font-black text-gray-900 leading-none">98%</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mt-1">Patient Satisfaction</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h4 className="font-black text-gray-900 mb-2">Multidisciplinary Team Approach</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Your treatment plan is optimized through collaborative expertise across oncology, nutrition, and robotic surgery.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50">
              <img
                src={vikrantPic}
                alt="Dr. Vivek, Oncologic Surgery"
                className="w-full h-auto object-contain md:h-[440px] md:object-cover md:object-top"
              />
            </div>
            <span className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg">
              Cancer Care Clinic
            </span>
            <div className="absolute bottom-5 left-5 bg-teal-800/85 backdrop-blur-sm text-white rounded-2xl px-5 py-3">
              <p className="font-black leading-none">Dr. Vikrant</p>
              <p className="text-xs text-teal-200 mt-1">Surgeon</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-teal-800 rounded-3xl px-8 py-14 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-72 h-72 bg-teal-700/40 rounded-full -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-900/50 rounded-full translate-x-1/4 translate-y-1/4" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Take the First Step Toward Recovery</h2>
              <p className="text-teal-200 text-sm leading-relaxed max-w-xl mx-auto mb-8">
                Our specialists are ready to discuss your options. Early intervention with robotic technology offers the best path back to a healthy life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30">
                  Book a Consultation
                </button>
                <button className="border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full transition-all duration-200">
                  Request a Call Back
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}