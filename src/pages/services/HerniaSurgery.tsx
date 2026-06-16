import { ArrowRight, CheckCircle, XCircle, Zap, Eye, Settings, Layers, Scissors, AlertTriangle, Users, Shield, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const symptoms = [
  'Visible bulge or swelling',
  'Pain or discomfort when bending',
  'Pressure or heaviness in abdomen',
  'Burning sensation at bulge site',
];

const traditionalCons = [
  'Large abdominal incisions (3–4 inches)',
  'Greater post-operative pain and trauma',
  'Higher risk of bleeding and surgical-site infection',
  'Longer hospital stay (3–5 days)',
  'Slower return to daily activities (4–6 weeks)',
];

const roboticPros = [
  'Tiny micro-incisions (under 1cm)',
  'Significantly less post-operative pain',
  'Reduced risk of bleeding and infection',
  'Shorter hospital stay (often same-day discharge)',
  'Normal return to daily activities in 1–2 weeks',
];

const steps = [
  { num: '01', icon: Scissors, title: 'Small Incisions', desc: 'Tiny cuts, usually less than 1cm.' },
  { num: '02', icon: Eye, title: '3D High-Definition Vision', desc: 'Magnified 10x view for clarity and precision.' },
  { num: '03', icon: Settings, title: 'Robotic Precision Control', desc: 'Robotic arms eliminate tremor for precise movement.' },
  { num: '04', icon: Layers, title: 'Hernia Repair with Mesh', desc: 'Reinforcing mesh ensures long-term to prevent recurrence.' },
  { num: '05', icon: Zap, title: 'Next Closure & Recovery', desc: 'Careful suturing to minimise healing time.' },
];

const herniaTypes = [
  {
    title: 'Robotic Inguinal Hernia',
    color: 'teal',
    desc: 'The most common type — a protrusion of intestine through a weak spot in the lower abdominal muscles, near the groin. Robotic approach offers superior outcomes.',
  },
  {
    title: 'Robotic Ventral Hernia',
    color: 'featured',
    desc: 'Occurs through the abdominal wall muscles. Can include umbilical and epigastric hernias. Robotic repair ensures a tension-free, reinforced closure.',
  },
  {
    title: 'Robotic Incisional Hernia',
    color: 'teal',
    desc: 'Develops at the site of a prior surgical incision. Robotic surgery provides complex repair with minimal complications.',
  },
  {
    title: 'Robotic Hiatus Hernia',
    color: 'accent',
    desc: 'Part of the stomach pushes into the chest through the diaphragm. Robotic anti-reflux repair restores normal anatomy effectively.',
  },
];

const whyUs = [
  { icon: Zap, title: 'Modern Tech', desc: 'State-of-the-art robotic-assisted technology using the latest surgical systems.' },
  { icon: Users, title: 'Expert Care', desc: 'Dedicated hernia specialists with extensive robotic surgery training.' },
  { icon: Shield, title: 'Trust', desc: 'Thousands of successful hernia repairs with industry-leading safety records.' },
];

export default function HerniaSurgery() {
  return (
    <div className="pt-20">
      {/* ─── Hero ─── */}
      <section className="bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <NavLink to="/" className="hover:text-teal-600 transition-colors">Home</NavLink>
              <span>/</span>
              <span className="text-gray-500">General Surgery</span>
              <span>/</span>
              <span className="text-teal-600 font-semibold">Hernia Surgery</span>
            </nav>

            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Robotic Surgery For</p>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-5">
              Robotic <span className="text-teal-600 italic">Hernia</span><br />Surgery
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-8">
              Precision-guided, faster recovery and better outcomes than traditional surgery. Experience the next evolution in surgical excellence.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <NavLink to="/contact">
                <button className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-700/25 group">
                  Book Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </NavLink>
              <button className="border-2 border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 font-semibold px-6 py-3.5 rounded-full transition-all duration-200">
                View Specialist Team
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
                alt="Robotic Hernia Surgery"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent rounded-3xl" />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3 min-w-max">
              <div className="w-9 h-9 bg-teal-100 rounded-full flex items-center justify-center">
                <Award size={16} className="text-teal-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Accuracy Rating</p>
                <p className="font-black text-gray-900">0.1mm Accuracy</p>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-teal-200/40 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ─── Understanding Hernia ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Overview</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">Understanding Hernia</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A hernia happens when an organ pushes through an opening in the muscle or tissue that holds it in place. It can often appear as a noticeable bulge through a weak spot in the abdominal muscles. Usually painless at first, hernias can become dangerous if left untreated.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              It often appears as a covering of bulge from the tissue into the intestine throughout the muscles, causing pressure or discomfort over time. Early diagnosis and prompt treatment can prevent potentially life-threatening complications.
            </p>
            <blockquote className="border-l-4 border-teal-500 pl-5 py-3 bg-teal-50 rounded-r-xl text-sm text-gray-700 italic leading-relaxed">
              "A hernia typically occurs on its own and may gradually become larger over time. Early diagnosis and proper treatment can help prevent complications."
            </blockquote>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                <AlertTriangle size={18} className="text-orange-500" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Common Symptoms</p>
                <p className="text-xs text-gray-500">Don't hesitate, early intervention is key</p>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {symptoms.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{s}</span>
                </li>
              ))}
            </ul>
            <div className="bg-teal-700 rounded-2xl p-5 text-white">
              <p className="font-bold mb-1 flex items-center gap-2">
                <Shield size={16} /> Expert Diagnosis
              </p>
              <p className="text-teal-100 text-sm leading-relaxed">
                Our doctors use high-resolution imaging to detect and localise the hernia accurately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is Robotic Hernia Surgery ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8460168/pexels-photo-8460168.jpeg"
                alt="Robotic surgery precision"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-yellow-300/30 rounded-full blur-2xl -z-10" />
          </div>

          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Technology</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              What is Robotic Hernia<br />Surgery?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Robotic hernia surgery, also known as robot-assisted hernia repair, is an advanced and minimally invasive method used to treat hernias through small incisions. The robotic system provides surgeons with a highly magnified, 3D view of the surgical area, with over 30x magnification through the robotic system to process effectively.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              During the surgery, the surgeon controls using precise robotic instruments that move with extraordinary high definition, with over 30 degrees of free purpose. The advanced technology allows for greater precision, flexibility, and control to prevent proper separation in places to tissues effectively.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Zap, label: '3D Vision' },
                { icon: Shield, label: 'Nano Precision' },
                { icon: Users, label: 'Enhanced Control' },
                { icon: Award, label: 'Expert Healing' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <Icon size={14} className="text-teal-600" />
                  <span className="text-sm font-semibold text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Comparison ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Side by Side</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Comparison: Traditional vs. Robotic</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              See how our robotic approach dramatically improves the surgical experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <Scissors size={18} className="text-gray-500" />
                </div>
                <p className="font-bold text-gray-700 text-lg">Traditional Surgery</p>
              </div>
              <ul className="space-y-4">
                {traditionalCons.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Robotic */}
            <div className="bg-teal-700 rounded-3xl p-8 shadow-xl shadow-teal-700/25">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <p className="font-bold text-white text-lg">Novo Robotic Surgery</p>
              </div>
              <ul className="space-y-4">
                {roboticPros.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-teal-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It's Performed ─── */}
      <section className="py-20 bg-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-300 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              How Robotic Hernia Surgery Is Performed at Novo<br />Robotic Surgery Centre
            </h2>
            <p className="text-teal-100 max-w-lg mx-auto text-sm">
              Our streamlined, patient-focused process ensures the optimal surgical results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors group">
                  <p className="text-yellow-400 font-black text-2xl mb-3">{step.num}</p>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="font-bold text-white mb-2 text-sm">{step.title}</p>
                  <p className="text-teal-100 text-xs leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Hernia Types ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Specialisations</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Common Types of Hernias Treated Robotically at<br />Novo Robotic
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Our robotic hernia programme covers a comprehensive range of all types.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {herniaTypes.map((type, i) => (
              <div
                key={type.title}
                className={`rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl ${
                  type.color === 'featured'
                    ? 'bg-teal-700 text-white shadow-lg shadow-teal-700/25'
                    : type.color === 'accent'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${type.color === 'featured' ? 'bg-white/20' : type.color === 'accent' ? 'bg-yellow-500/30' : 'bg-teal-100'}`}>
                  <Layers size={18} className={type.color === 'featured' ? 'text-white' : type.color === 'accent' ? 'text-gray-700' : 'text-teal-600'} />
                </div>
                <h3 className={`font-bold text-sm ${type.color === 'featured' ? 'text-white' : 'text-gray-900'}`}>{type.title}</h3>
                <p className={`text-xs leading-relaxed ${type.color === 'featured' ? 'text-teal-100' : 'text-gray-600'}`}>{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Novo ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Why Choose Novo<br />Robotic?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Choosing Novo Robotic means getting advanced hernia surgery treatment with a strong focus on precision, safety, and patient recovery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The centre offers robot-assisted techniques using modern surgical technology and high-definition 3D visualisation, helping surgeons perform the procedure with unmatched accuracy and control. All Novo Robotic patient receives individualised attention and comprehensive management throughout the treatment journey — from diagnosis to post-surgical care. With experienced robotic surgeons who handle a variety of abdominal hernias, we are trusted leaders for robotic hernia surgery.
            </p>
            <div className="space-y-4">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
                alt="Expert surgical team"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-teal-200/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-teal-700 rounded-3xl px-8 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-600/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-800/40 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready for a Better Recovery?</h2>
              <p className="text-teal-100 max-w-lg mx-auto mb-10 leading-relaxed text-sm">
                If you are experiencing hernia pain, swelling, or discomfort, don't ignore the symptoms. Consult our specialists for accurate diagnosis and advanced robotic hernia treatment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <NavLink to="/contact">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 min-w-48">
                    Consult Our Experts
                  </button>
                </NavLink>
                <button className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all min-w-48">
                  View Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
