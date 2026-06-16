import { ArrowRight, CheckCircle, Eye, Cpu, Scissors, Shield, Zap, AlertTriangle, Activity, Phone, Star, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const symptoms = [
  {
    icon: Zap,
    title: 'Sudden Pain',
    desc: 'Intense pain starting in the upper right side of the abdomen.',
  },
  {
    icon: Activity,
    title: 'Radiating Pain',
    desc: 'Pain that radiates to the shoulder blade or back.',
  },
  {
    icon: AlertTriangle,
    title: 'Nausea',
    desc: 'Often accompanied by vomiting or indigestion.',
  },
  {
    icon: Shield,
    title: 'Fever/Chills',
    desc: 'Signs that infection may be developing.',
  },
  {
    icon: Eye,
    title: 'Jaundice',
    desc: 'Yellowing of the skin or whites of the eyes.',
  },
];

const complications = [
  {
    title: 'Cholecystitis',
    desc: 'Inflammation of the gallbladder wall.',
  },
  {
    title: 'Choledocholithiasis',
    desc: 'Stones blocking the common bile duct.',
  },
  {
    title: 'Pancreatitis',
    desc: 'Inflammation of the pancreas caused by a stone.',
  },
  {
    title: 'Cholangitis',
    desc: 'Infection of the bile duct system.',
  },
];

const roboticAdvantages = [
  'No complications',
  'Frequent and quick',
  'Faster recovery and less pain',
  'High precision and safety',
];

const steps = [
  {
    num: '01',
    icon: Cpu,
    title: 'Anaesthesia',
    desc: 'General anaesthesia is administered to ensure the patient is comfortable and pain-free throughout the procedure.',
    image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg',
  },
  {
    num: '02',
    icon: Eye,
    title: 'Small Incisions',
    desc: 'The surgeon makes 3–4 tiny incisions (5–10 mm each) in the abdomen to insert the robotic instruments and 3D camera.',
    image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
  },
  {
    num: '03',
    icon: Scissors,
    title: '3D Camera',
    desc: 'A high-definition 3D camera is introduced, providing a magnified, crystal-clear view of the gallbladder and surrounding structures.',
    image: 'https://images.pexels.com/photos/8460168/pexels-photo-8460168.jpeg',
  },
  {
    num: '04',
    icon: Shield,
    title: 'Surgeon Control',
    desc: 'The surgeon operates from a robotic console, precisely controlling robotic arms to dissect and isolate the gallbladder with unmatched accuracy.',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
  },
  {
    num: '05',
    icon: CheckCircle,
    title: 'Removal',
    desc: 'The gallbladder is carefully separated, placed in a retrieval bag, and extracted through one of the small incisions.',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
  },
  {
    num: '06',
    icon: Activity,
    title: 'Recovery',
    desc: 'Incisions are closed with sutures or surgical tape. Most patients return home within 24 hours and resume normal activities within days.',
    image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg',
  },
];

const whyChoose = [
  {
    icon: Star,
    title: 'Advanced Care',
    desc: 'State-of-the-art robotic integration with zero-compromise care.',
  },
  {
    icon: CheckCircle,
    title: 'Experienced Surgeons',
    desc: 'Our team has performed thousands of procedures with exceptional accuracy.',
  },
  {
    icon: Shield,
    title: 'Patient Safety',
    desc: 'Stringent protocols for general and safety and patient safety at every step.',
  },
];

export default function GallbladderSurgery() {
  return (
    <div className="pt-20">
      {/* ─── Hero ─── */}
      <section className="relative min-h-[580px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
            alt="Gallbladder Surgery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-800/80 to-slate-700/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-5 flex-wrap">
            <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
            <ChevronRight size={12} />
            <span>General Surgery</span>
            <ChevronRight size={12} />
            <span className="text-white font-semibold">Gallbladder Surgery</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
            <p className="text-yellow-300 text-xs font-semibold uppercase tracking-widest">Advanced Surgical Procedures</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5 max-w-2xl">
            Best Robotic Gallbladder Stone Surgery (Cholecystectomy) in Kaushambi, Ghaziabad
          </h1>
          <p className="text-slate-300 text-base max-w-xl mb-8 leading-relaxed">
            Experience precision healthcare with our advanced robotic-assisted surgical systems, offering faster recovery and minimally invasive excellence.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <NavLink to="/contact">
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/30 group">
                Book Appointment
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
            <button className="border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-full transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ─── Understanding Gallbladder — zigzag (image left, text right) ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg"
                alt="Gallbladder anatomy"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <p className="text-xs font-bold text-teal-700">Anatomy Detail</p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100/50 rounded-full blur-2xl -z-10" />
          </div>

          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Overview</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Understanding Gallbladder &amp; Gallstones
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The gallbladder is a small organ located just below your liver. Its primary function is to store bile, a fluid produced by the liver that helps digest fats.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Gallstones are hardened deposits of digestive fluid that can form in your gallbladder. They range in size from as small as a grain of sand to as large as a golf ball.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Symptoms — full-width card grid ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Warning Signs</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Symptoms of Gallstones You Should Not Ignore
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Many people mistake these signs for indigestion, but they could indicate a serious medical condition.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {symptoms.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-6 text-center flex flex-col items-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                <div className="w-12 h-12 bg-teal-50 group-hover:bg-teal-100 rounded-2xl flex items-center justify-center transition-colors">
                  <Icon size={20} className="text-teal-600" />
                </div>
                <p className="font-bold text-gray-900 text-sm">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Crucial note */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 flex items-start gap-3 max-w-3xl mx-auto">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle size={15} className="text-amber-600" />
            </div>
            <div>
              <span className="font-bold text-amber-800 text-sm">Crucial Note: </span>
              <span className="text-amber-700 text-sm leading-relaxed">
                People often mistake gallbladder symptoms for simple indigestion or gastric issues, leading to delayed treatment.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Complications — zigzag (text left, image right) ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-2">Risk Factors</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Complications (if untreated)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Ignoring gallbladder stones can lead to life-threatening complications. Prompt diagnosis and treatment are essential for long-term health.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {complications.map(({ title, desc }) => (
                <div key={title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all group">
                  <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-red-700 transition-colors">{title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg"
                alt="Complications of untreated gallstones"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-3xl" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-red-100/40 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ─── What is Robotic Gallbladder Surgery — zigzag (text left, dual-image right) ─── */}
      <section className="py-20 bg-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-2">Technology</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              What is Robotic Gallbladder Stone Surgery?
            </h2>
            <p className="text-teal-100 leading-relaxed mb-4">
              This is a modern, minimally invasive procedure using an advanced robot-assisted system. Unlike traditional surgery, the surgeon operates through a console using high-definition 3D visualisation and micro-surgical instruments that offer greater range of motion than the human hand.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-6">
              <p className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <Star size={14} className="text-yellow-400" /> The Robotic Advantage
              </p>
              <ul className="space-y-2">
                {roboticAdvantages.map((adv) => (
                  <li key={adv} className="flex items-center gap-2 text-teal-100 text-sm">
                    <CheckCircle size={14} className="text-teal-300 flex-shrink-0" />
                    {adv}
                  </li>
                ))}
              </ul>
            </div>

            <NavLink to="/contact">
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full transition-all group">
                Book Consultation
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-xl h-64 mt-8">
              <img
                src="https://images.pexels.com/photos/8460168/pexels-photo-8460168.jpeg"
                alt="Robotic surgery"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-64 -mt-8">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
                alt="Surgeon at console"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* stat badges */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
                <p className="text-2xl font-black text-white">AI</p>
                <p className="text-teal-300 text-xs mt-1">Assistance</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
                <p className="text-2xl font-black text-white">10x</p>
                <p className="text-teal-300 text-xs mt-1">Your Precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Is Performed — numbered steps with timeline ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              How Robotic Gallbladder Stone Surgery (Cholecystectomy) is Performed
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              At Novo Robotic Surgery Centre, we follow a world-class surgical protocol to ensure the highest patient safety.
            </p>
          </div>

          {/* Step cards row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center">
                  <p className="text-3xl font-black text-slate-100 group-hover:text-teal-100 transition-colors mb-3 leading-none">{step.num}</p>
                  <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-600 rounded-2xl flex items-center justify-center mb-3 mx-auto transition-colors">
                    <Icon size={18} className="text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-bold text-gray-900 text-xs">{step.title}</p>
                </div>
              );
            })}
          </div>

          {/* Zigzag step detail rows */}
          <div className="space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 1;
              return (
                <div key={step.num} className={`grid md:grid-cols-2 gap-12 items-center`}>
                  <div className={`relative ${isEven ? 'md:order-2' : ''}`}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent rounded-3xl" />
                    </div>
                    <div className={`absolute -top-5 ${isEven ? '-right-5' : '-left-5'} w-14 h-14 bg-teal-700 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-700/30 border-4 border-white`}>
                      <span className="text-white font-black text-sm">{step.num}</span>
                    </div>
                    <div className={`absolute -bottom-5 ${isEven ? '-left-5' : '-right-5'} w-28 h-28 bg-teal-100/50 rounded-full blur-3xl -z-10`} />
                  </div>

                  <div className={isEven ? 'md:order-1' : ''}>
                    <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                      <Icon size={22} className="text-teal-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">{step.desc}</p>
                    <div className="flex items-center gap-2 mt-8">
                      {steps.map((_, di) => (
                        <div
                          key={di}
                          className={`rounded-full transition-all ${di === i ? 'w-6 h-2.5 bg-teal-600' : 'w-2.5 h-2.5 bg-teal-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Novo Robotic — zigzag (image left, points right) ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg"
                alt="Novo Robotic team"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent rounded-3xl" />
            </div>
            {/* Floating stat */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <Star size={18} className="text-teal-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-lg leading-none">500+</p>
                <p className="text-gray-500 text-xs">Successful Procedures</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Edge</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Why Choose Novo Robotic for Robotic Gallbladder Stone Surgery (Cholecystectomy)?
            </h2>
            <div className="space-y-5">
              {whyChoose.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex gap-4 items-start p-5 rounded-2xl bg-slate-50 hover:bg-teal-50 transition-colors group border border-slate-100 hover:border-teal-100">
                  <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon size={18} className="text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-teal-500">0{i + 1}</span>
                      <p className="font-bold text-gray-900 text-sm">{title}</p>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gallery strip ─── */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Facility</p>
          <h2 className="text-3xl font-black text-gray-900">Inside Novo Robotic Surgery Centre</h2>
        </div>
        <div className="flex gap-5 px-6 max-w-7xl mx-auto overflow-x-auto pb-4">
          {[
            { src: 'https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg', caption: 'Robotic OR Suite' },
            { src: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg', caption: 'Surgical Team' },
            { src: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg', caption: 'Recovery Ward' },
            { src: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg', caption: 'Patient Consultation' },
            { src: 'https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg', caption: 'Robotic Console' },
          ].map(({ src, caption }) => (
            <div key={caption} className="relative flex-shrink-0 w-64 rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300">
              <img src={src} alt={caption} className="w-64 h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">{caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-teal-800 rounded-3xl px-8 py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-teal-700/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-900/50 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 max-w-2xl mx-auto leading-tight">
                If you are experiencing gallbladder stone symptoms... Consult our experts today.
              </h2>
              <p className="text-teal-200 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
                Early diagnosis and treatment can significantly reduce complications. Get evaluated at the most advanced robotic surgery centre in the region.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <NavLink to="/contact">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 min-w-52">
                    Book Your Consultation
                  </button>
                </NavLink>
                <a href="tel:+919999999999">
                  <button className="flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all min-w-52">
                    <Phone size={16} />
                    Call +91 (800) NOVO ROBOT
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
