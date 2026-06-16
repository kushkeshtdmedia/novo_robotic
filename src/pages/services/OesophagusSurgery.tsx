import { ArrowRight, CheckCircle, Cpu, Eye, Scissors, Activity, HeartPulse, Shield, Zap, AlertTriangle, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const symptoms = [
  'Difficulty swallowing (Dysphagia)',
  'Persistent heartburn',
  'Unexplained weight loss',
  'Food regurgitation',
  'Chest pain or pressure',
  'Chronic cough or hoarseness',
];

const benefits = [
  { icon: Cpu, label: '3D Precision', desc: 'Enhanced visualisation for intricate tissue handling and safety.' },
  { icon: Zap, label: 'Faster Recovery', desc: 'Return to life faster with significantly reduced hospital stay.' },
  { icon: Scissors, label: 'Less Pain', desc: 'Smaller incisions dramatically reduce post-op pain.' },
  { icon: Eye, label: 'Keyhole Access', desc: 'Tiny ports minimise large open incisions for better healing.' },
];

const conditions:any = [
  {
    title: 'Oesophageal Cancer',
    desc: 'Advanced robotic oesophagectomy allows for complete tumour removal with meticulous lymph node dissection, significantly improving survival outcomes and recovery quality.',
    tags: ['Precision Staging', 'Oncology Focus', 'Restoration Care'],
    featured: true,
  },
  {
    title: 'GERD & Acid Reflux',
    desc: 'Robotic Nissen Fundoplication provides long-term relief from persistent heartburn and acidity when medication fails.',
    tags: [],
    featured: false,
  },
  {
    title: 'Achalasia Cardia',
    desc: "Expert robotic Heller's Myotomy to restore normal swallowing function with precision recovery and safety.",
    tags: [],
    featured: false,
  },
  {
    title: 'Hiatus Hernia & Barrett\'s',
    desc: "Comprehensive repair of hiatus hernias and expert management of pre-cancerous Barrett's oesophagus using advanced robotic surgical tools.",
    link: true,
    featured: false,
  },
];

const steps = [
  {
    num: '1',
    title: 'Pre-Surgical Evaluation',
    desc: 'Detailed mapping of the oesophagus and surrounding structures using advanced diagnostic imaging for absolute precision.',
  },
  {
    num: '2',
    title: 'Small Keyhole Incisions',
    desc: 'Instead of open surgery, several small (5mm) ports are created for the robotic arms, ensuring minimal scarring.',
  },
  {
    num: '3',
    title: 'Robotic System Setup',
    desc: 'The 3D da Vinci system is docked, providing Dr. Sharma with a high-definition 3D view and tremor-filtered precision.',
  },
  {
    num: '4',
    title: 'The Procedure & Closure',
    desc: 'Precise surgery is performed followed by meticulous closure for the best cosmetic and functional results.',
  },
];

const whyUs = [
  'Board Certified Surgical Specialist with 20+ years of experience',
  'NABH Accredited facility meeting international standards of surgical care',
  'Personalised patient journey from diagnosis to complete recovery',
  'Outcomes data that consistently meets global surgical benchmarks',
];

const warningSigns = ['Acidity', 'Chest Pain', 'Dysphagia'];

export default function OesophagusSurgery() {
  return (
    <div className="pt-20">

      {/* ─── Hero ─── */}
      <section className="relative min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
            alt="Robotic Oesophagus Surgery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/75 to-teal-700/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-28 w-full">
          <nav className="flex items-center gap-2 text-xs text-teal-200 mb-6">
            <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
            <ChevronRight size={12} />
            <span className="text-teal-300">General Surgery</span>
            <ChevronRight size={12} />
            <span className="text-white font-semibold">Oesophagus Surgery</span>
          </nav>

          <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Robotic Surgical Excellence · Kaushambi, Ghaziabad
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 max-w-3xl">
            Advanced Robotic<br />
            Oesophagus <span className="text-teal-300">(Food Pipe)</span><br />
            Surgery
          </h1>
          <p className="text-teal-100 text-lg max-w-xl mb-8 leading-relaxed">
            Experience life-changing precision and minimally invasive care led by renowned specialist Dr. Vikrant Sharma in Kaushambi, Ghaziabad.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <NavLink to="/contact">
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 group">
                Book Your Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
            <button className="flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-full transition-all duration-200">
              Learn Process
            </button>
          </div>
        </div>
      </section>

      {/* ─── Understanding the Oesophagus ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Anatomy</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Understanding the Oesophagus<br />(Food Pipe)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The oesophagus is a muscular tube connecting the throat to the stomach, vital for carrying food and liquids. When medical conditions disrupt this pathway, everyday life becomes a challenge.
            </p>

            <p className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle size={16} className="text-yellow-500" />
              Common Symptoms to Watch For:
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {symptoms.map((s) => (
                <li key={s} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-600">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8460168/pexels-photo-8460168.jpeg"
                alt="Robotic surgical system"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl border border-gray-100">
              <p className="text-xs font-bold text-teal-700">Advanced Robotic Platform</p>
              <p className="text-xs text-gray-500 mt-0.5">da Vinci Surgical System</p>
            </div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-teal-200/25 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ─── What is Robotic Oesophagus Surgery ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Technology</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            What is Robotic Oesophagus Surgery?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Leveraging 3Di da Vinci robotic technology, we offer surgical precision that goes beyond human capability by ensuring minimal trauma and maximum success.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group text-center border border-gray-50">
                <div className="w-14 h-14 bg-teal-50 group-hover:bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-bold text-gray-900 mb-2">{b.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Conditions We Treat ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Specialisations</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Conditions We Treat</h2>
              <p className="text-gray-500 text-sm mt-2">Specialist care for complex oesophageal disorders.</p>
            </div>
            <div className="hidden md:block w-12 h-1.5 bg-yellow-400 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Featured card */}
            <div className="md:row-span-2 bg-teal-800 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-700/40 rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-black mb-3">Oesophageal Cancer</h3>
                <p className="text-teal-100 text-sm leading-relaxed mb-6">
                  Advanced robotic oesophagectomy allows for complete tumour removal with meticulous lymph node dissection, significantly improving survival outcomes and recovery quality.
                </p>
                <div className="flex flex-wrap gap-2">
                  {conditions[0].tags.map((tag:any) => (
                    <span key={tag} className="bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* GERD */}
            <div className="bg-slate-50 rounded-3xl p-7 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <HeartPulse size={16} className="text-teal-600" />
              </div>
              <h3 className="font-black text-gray-900 mb-2">GERD &amp; Acid Reflux</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Robotic Nissen Fundoplication provides long-term relief from persistent heartburn and acidity when medication fails.
              </p>
            </div>

            {/* Achalasia */}
            <div className="bg-slate-50 rounded-3xl p-7 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity size={16} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-2">Achalasia Cardia</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Expert robotic Heller's Myotomy to restore normal swallowing function with precision recovery and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hiatus Hernia - full width card */}
          <div className="mt-6 bg-slate-50 rounded-3xl p-7 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-md transition-shadow">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cpu size={16} className="text-teal-600" />
                </div>
                <h3 className="font-black text-gray-900">Hiatus Hernia &amp; Barrett's</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Comprehensive repair of hiatus hernias and expert management of pre-cancerous Barrett's oesophagus using advanced robotic surgical tools.
              </p>
              <button className="mt-4 flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-2.5 transition-all">
                Explore treatment plan <ArrowRight size={14} />
              </button>
            </div>
            <div className="md:w-56 h-32 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
                alt="Hiatus Hernia treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── How Robotic Surgery is Performed ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              How Robotic Surgery<br />is Performed
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              A step-by-step guide to your surgical day, prioritising safety and surgical excellence at every milestone.
            </p>
            <div className="flex items-center gap-3 bg-teal-700 rounded-2xl px-5 py-3.5 w-fit">
              <Shield size={15} className="text-yellow-400" />
              <span className="text-sm font-semibold text-white">International Safety Protocols Followed</span>
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 group">
                <div className="flex-shrink-0 w-11 h-11 bg-teal-600 group-hover:bg-teal-700 rounded-2xl flex items-center justify-center text-white font-black text-sm transition-colors shadow-md shadow-teal-600/25">
                  {step.num}
                </div>
                <div className="pt-1">
                  <p className="font-bold text-gray-900 mb-1">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Doctor Profile ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
                alt="Dr. Vikrant Sharma"
                className="w-full h-[480px] object-cover object-top"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-teal-700 text-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-xl font-black leading-none">20+</p>
              <p className="text-xs text-teal-200 mt-0.5">Years Surgical Excellence</p>
            </div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-teal-100/40 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Lead Surgeon</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Dr. Vikrant Sharma</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dr. Sharma is a leading pioneer in robotic and laparoscopic gastrointestinal surgery with experience handling the most difficult cases throughout India, and is focused on bringing international standards of surgical care to patients.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                  <CheckCircle size={16} className="text-teal-600" />
                </div>
                <p className="font-bold text-gray-900 text-sm">Board Certified</p>
                <p className="text-xs text-gray-500 mt-0.5">Surgical Specialist</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                  <Shield size={16} className="text-teal-600" />
                </div>
                <p className="font-bold text-gray-900 text-sm">NABH Accredited</p>
                <p className="text-xs text-gray-500 mt-0.5">Certified Surgical Excellence</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <NavLink to="/doctors">
              <button className="flex items-center gap-2 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 group">
                Learn more about Dr. Sharma
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* ─── Don't Ignore Warning Signs ─── */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-teal-800 rounded-3xl px-8 py-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-teal-700/40 rounded-full -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-900/50 rounded-full translate-x-1/4 translate-y-1/4" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Don't Ignore Warning Signs</h2>
                <p className="text-teal-200 text-sm leading-relaxed max-w-sm">
                  Early detection of oesophageal issues leads to significantly better surgical outcomes.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {warningSigns.map((sign) => (
                  <span key={sign} className="bg-white/15 border border-white/25 text-white font-semibold text-sm px-5 py-2.5 rounded-full">
                    {sign}
                  </span>
                ))}
              </div>
              <NavLink to="/contact" className="flex-shrink-0">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 whitespace-nowrap">
                  Consult a Doctor
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
