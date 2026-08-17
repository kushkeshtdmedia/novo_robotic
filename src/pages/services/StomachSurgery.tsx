import { useState } from "react";
import { ArrowRight, ChevronRight, Utensils, Flame, Scale, Activity, ChevronDown,
  Droplet,        // ← add
  AlertTriangle } from "lucide-react";
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
const faqs = [
  {
    q: 'Can stomach ulcers turn into cancer?',
    a: 'Most stomach ulcers do not become cancer, but persistent ulcers should always be properly evaluated.',
  },
  {
    q: 'Is stomach cancer curable?',
    a: 'Yes. Early-stage stomach cancer has a much higher chance of successful treatment.',
  },
  {
    q: 'What treatments are available for stomach cancer?',
    a: 'Treatment may include surgery, robotic surgery, chemotherapy, immunotherapy, targeted therapy, and radiation therapy.',
  },
  {
    q: 'Is robotic stomach cancer surgery safe?',
    a: 'Yes. It is considered safe when performed by an experienced robotic GI cancer surgeon.',
  },
  {
    q: 'Can stomach cancer spread to other organs?',
    a: 'Yes. It can spread to the liver, lymph nodes, lungs, peritoneum, and other organs if not treated.',
  },
  {
    q: 'Does smoking increase the risk of stomach cancer?',
    a: 'Yes. Smoking significantly increases the risk of stomach cancer.',
  },
];

const warningSigns = [
  { Icon: Utensils, title: "Early Satiety", body: "Feeling full after eating only a small amount (early satiety)" },
  { Icon: Flame, title: "Persistent Indigestion", body: "Persistent indigestion or heartburn that does not improve with medication" },
  { Icon: Activity, title: "Upper Abdominal Pain", body: "A dull, ongoing pain or discomfort in the upper abdomen" },
  { Icon: Scale, title: "Unexplained Weight Loss", body: "Unexplained weight loss and loss of appetite" },
  { Icon: Droplet, title: "Nausea or Vomiting", body: "Nausea or occasional vomiting, sometimes with blood" },
  { Icon: AlertTriangle, title: "Dark or Tarry Stools", body: "Dark or black, tarry stools, which may indicate internal bleeding" },
];

const procedures = [
  {
    title: 'Robotic Total Gastrectomy',
    body: 'Complete robotic removal of the stomach for advanced stomach cancer, followed by reconstruction of the digestive system using advanced robotic surgery technology for better precision and recovery.',
    tags: ['Advanced Stomach Cancer', 'Digestive Reconstruction'],
  },
  {
    title: 'Robotic Partial (Subtotal) Gastrectomy',
    body: 'Removal of the cancer-affected part of the stomach while preserving the healthy portion whenever possible. This robotic stomach cancer surgery helps maintain better digestion and faster recovery.',
    tags: ['Stomach Preserving', 'Better Digestion'],
  },
  {
    title: 'Robotic Wedge Gastric Resection',
    body: 'A minimally invasive robotic procedure used to remove small or early-stage stomach tumours with precision while preserving most of the stomach tissue.',
    tags: ['Early-Stage Tumours', 'Tissue Preserving'],
  },
  {
    title: 'Advanced Robotic Lymph Node Dissection',
    body: 'Careful robotic removal of nearby lymph nodes to check and prevent the spread of stomach cancer, helping improve accurate cancer staging and treatment outcomes.',
    tags: ['Accurate Staging', 'Spread Prevention'],
  },
];

const journey = [
  { title: "Detailed Pre-Surgical Evaluation", body: "Before surgery, the patient undergoes a complete medical assessment including blood tests, endoscopy, CT/PET scans, and cancer staging. The surgical team carefully evaluates the size, location, and spread of the stomach tumor to create a personalized treatment plan." },
  { title: "Anesthesia and Patient Preparation", body: "On the day of surgery, the patient is given general anesthesia to ensure a painless and comfortable procedure. The abdomen is cleaned and prepared for minimally invasive robotic surgery." },
  { title: "Small Keyhole Incisions", body: "Instead of one large cut, the surgeon creates a few tiny keyhole incisions in the abdomen. Through these small openings, robotic instruments and a high-definition 3D camera are inserted." },
  { title: "Robotic System Docking", body: "The robotic system is connected to the surgical ports. The advanced robotic arms hold specialized surgical instruments that can move with exceptional precision and flexibility inside the body." },
  { title: "Surgeon-Controlled Robotic Surgery", body: "The surgeon sits at a nearby robotic console and controls every movement of the robotic instruments in real time. The robot never works independently. The high-definition magnified 3D view helps the surgeon precisely remove the stomach cancer while protecting nearby nerves, blood vessels, and healthy tissues." },
  { title: "Removal of Cancerous Tissue", body: "Depending on the stage and location of the cancer, part of the stomach or the entire stomach may be removed. Nearby lymph nodes may also be removed to help prevent cancer spread and improve treatment outcomes." },
  { title: "Reconstruction of the Digestive Tract", body: "After removing the affected portion, the digestive system is carefully reconstructed so the patient can continue eating and digesting food normally." },
  { title: "Completion of Surgery", body: "Once the procedure is completed, the robotic instruments are removed and the tiny incisions are closed with minimal stitches, resulting in smaller scars and reduced pain." },
];

const benefits = [
  "Superior 3D magnified vision",
  "Tremor-free surgical precision",
  "More thorough lymph node clearance",
  "Significantly less blood loss",
  "Minimal incisions with maximum surgical access",
  "Lower risk of wound complications",
  "Less pain, shorter hospital stay, and minimal scarring",
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
                                                   <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-600 leading-snug mb-5 max-w-2xl">
  Advanced Robotic Stomach Cancer Surgery (Robotic Gastrectomy) in Kaushambi, Ghaziabad
</p>
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
              Stomach cancer, also known as gastric cancer, occurs when the cells lining the inside of the stomach begin to grow and multiply uncontrollably. Over time, these abnormal cells can form a tumour that may damage the stomach wall and, if left untreated, spread to nearby organs or other parts of the body. 
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
      What is Robotic Stomach Cancer Surgery?
    </h2>
    <p className="text-teal-100 leading-relaxed mb-4">
      Robotic stomach cancer surgery, also called robotic gastrectomy, is an advanced minimally invasive treatment for stomach (gastric) cancer. Instead of one large cut, the surgeon makes a few tiny keyhole incisions to remove part or all of the cancer-affected stomach using a robotic surgical system.
    </p>
    <p className="text-teal-100 leading-relaxed mb-12">
      The robotic system is completely controlled by the surgeon, providing enhanced 3D vision and highly precise movements. Compared to traditional open surgery, it offers less pain, minimal blood loss, smaller scars, faster recovery, and a shorter hospital stay.
    </p>
    <div className="flex justify-center gap-16 flex-wrap">
      <div>
        <p className="text-4xl font-black text-yellow-400 leading-none">3D</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-200 mt-2">Enhanced Vision</p>
      </div>
      <div>
        <p className="text-4xl font-black text-yellow-400 leading-none">100%</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-200 mt-2">Surgeon Controlled</p>
      </div>
      <div>
        <p className="text-4xl font-black text-yellow-400 leading-none">Keyhole</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-200 mt-2">Tiny Incisions</p>
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
        <h2 className="text-3xl md:text-4xl font-black text-gray-900">
          Types of Robotic Stomach Cancer Procedures at Novo Robotic Surgery Centre
        </h2>
      </div>
      <div className="hidden md:block w-12 h-1.5 bg-yellow-400 rounded-full shrink-0 ml-6 mb-3" />
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
      How Robotic Stomach Cancer Surgery is Performed at Novo Robotic Surgery Centre
    </h2>
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50 md:sticky md:top-24">
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
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
        Why Choose Novo Robotic Surgery Centre for Robotic Stomach Cancer Surgery?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Choosing Novo Robotic Surgery Centre for robotic stomach cancer surgery means receiving advanced, patient-focused care from experienced surgical oncologist Dr Vikrant and his expert team. With more than 10,000 successful minimally invasive surgeries performed over the last decade, NOVO is committed to delivering safe, precise, and effective cancer treatment.
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        Using advanced robotic technology with high-definition 3D vision, the surgical team can perform stomach cancer surgery with greater accuracy while protecting nearby healthy tissues. This minimally invasive approach helps patients experience smaller cuts, less pain, minimal blood loss, reduced scarring, shorter hospital stays, and faster recovery compared to traditional open surgery.
      </p>

      <div className="flex items-center gap-8 mb-8">
        <div>
          <p className="text-3xl font-black text-gray-900 leading-none">10,000+</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mt-1">Minimally Invasive Surgeries</p>
        </div>
        <div className="w-px h-11 bg-gray-200" />
        <div>
          <p className="text-3xl font-black text-gray-900 leading-none">25 Yrs</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mt-1">Of Surgical Experience</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <h4 className="font-black text-gray-900 mb-2">Complete Care at Every Stage</h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          At Novo Robotic Surgery Centre, patients receive complete care at every stage from detailed diagnosis and personalized treatment planning to post-surgery recovery and nutritional support. Our multidisciplinary team works closely together to ensure the best possible outcomes and help patients return to their normal lives as quickly and comfortably as possible.
        </p>
      </div>
    </div>

    <div className="relative">
      <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50">
        <img
          src={vikrantPic}
          alt="Dr. Vikrant Sharma, Surgical Oncologist"
          className="w-full h-auto object-contain md:h-[440px] md:object-cover md:object-top"
        />
      </div>
      <span className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg">
        Cancer Care Clinic
      </span>
      <div className="absolute bottom-5 left-5 bg-teal-800/85 backdrop-blur-sm text-white rounded-2xl px-5 py-3">
        <p className="font-black leading-none">Dr. Vikrant</p>
        <p className="text-xs text-teal-200 mt-1">Surgical Oncologist</p>
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
      {/* ─── FAQs ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Need Clarity</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Answers to the questions patients ask us most about robotic stomach cancer surgery.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 rounded-3xl border border-gray-200 open:bg-white open:shadow-[0px_10px_40px_rgba(0,0,0,0.04)] open:border-teal-200 transition-all duration-300"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-7 py-5">
                  <span className="font-bold text-gray-900 text-sm md:text-base group-open:text-teal-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-teal-100 group-open:bg-teal-700 flex items-center justify-center flex-shrink-0 transition-colors">
                    <ChevronDown
                      size={16}
                      className="text-teal-600 group-open:text-white group-open:rotate-180 transition-transform duration-300"
                    />
                  </span>
                </summary>
                <div className="px-7 pb-6 -mt-1">
                  <div className="border-l-4 border-teal-500 pl-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}