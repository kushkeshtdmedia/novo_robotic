import { ArrowRight, CheckCircle, Eye, Cpu, Scissors, Shield, Zap, AlertTriangle, ThumbsUp, Activity, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const symptoms = [
  { icon: Zap, title: 'Sharp Pain', desc: 'Sharp pain starting near the navel and shifting to the lower right abdomen.' },
  { icon: Activity, title: 'Nausea', desc: 'Nausea and vomiting.' },
  { icon: AlertTriangle, title: 'Fever', desc: 'Mild fever.' },
  { icon: Shield, title: 'Swelling', desc: 'Abdominal swelling or tenderness.' },
];

const precisionBenefits = [
  {
    icon: Eye,
    title: 'High Precision Surgery',
    desc: 'The robotic system allows the surgeon to perform the procedure with exceptional accuracy, even in delicate and hard-to-reach areas around the appendix.',
    featured: true,
  },
  {
    icon: Scissors,
    title: 'Minimal Scarring',
    desc: 'This surgery is performed through very small "keyhole" incisions, which means that the scars are barely visible after recovery.',
    featured: false,
  },
  {
    icon: ThumbsUp,
    title: 'Less Pain & Discomfort',
    desc: 'Small incisions cause less damage to surrounding tissues, resulting in reduced post-operative pain and less need for pain medication.',
    featured: false,
  },
  {
    icon: Zap,
    title: 'Faster Recovery',
    desc: 'Most patients recover quicker and can return to their normal daily activities sooner compared to traditional open surgery.',
    featured: false,
    accent: true,
  },
  {
    icon: Shield,
    title: 'Lower Risk of Infection',
    desc: 'Robotic-assisted surgery helps minimize blood loss and reduces the chances of infection and other surgical complications.',
    featured: false,
  },
  {
    icon: Clock,
    title: 'Shorter Hospital Stay',
    desc: 'Many patients are discharged earlier due to faster healing and smoother recovery.',
    featured: false,
  },
];

const steps = [
  {
    num: '01',
    icon: Cpu,
    title: 'Small Entry Points',
    desc: 'Instead of one large incision, the surgeon makes a small cut (usually about 8–10 mm) in the abdomen. These small incisions help reduce pain, scarring, and recovery time.',
    image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
  },
  {
    num: '02',
    icon: Eye,
    title: 'Advanced 3D Visualisation',
    desc: 'A high-definition 3D camera is inserted through one of the small openings, providing the surgeon with a clear, magnified view of the internal organs and the inflamed appendix.',
    image: 'https://images.pexels.com/photos/8460168/pexels-photo-8460168.jpeg',
  },
  {
    num: '03',
    icon: Scissors,
    title: 'Precision-Guided Surgery',
    desc: 'From a nearby robotic console, the surgeon carefully controls the robotic arms to detach and remove the infected appendix with enhanced precision and stability while protecting surrounding tissues.',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Safe Removal and Closure',
    desc: 'Once removed, the appendix is extracted through small incisions. Subsequently, these small incisions are closed using a few stitches or surgical tape, promoting faster healing and minimal scarring.',
    image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg',
  },
];

export default function AppendixSurgery() {
  return (
    <div className="pt-20">
      {/* ─── Hero ─── */}
      <section className="relative min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
            alt="Appendix Surgery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/75 to-slate-700/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-28 w-full">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-5">
            <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
            <span>/</span>
            <span>General Surgery</span>
            <span>/</span>
            <span className="text-white font-semibold">Appendix Surgery</span>
          </nav>

          <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">Advanced Surgical Procedures</p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-5 max-w-2xl">
            Robotic Appendix<br />Surgery
          </h1>
          <p className="text-slate-200 text-lg max-w-lg mb-8 leading-relaxed">
            Precision-guided removal for rapid recovery and peace of mind. Experience the future of emergency care with our master robotic surgeons.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <NavLink to="/contact">
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/30 group">
                Book Emergency Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
            <button className="border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-full transition-all">
              View Success Rates
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3.5 hidden md:flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] text-slate-300 uppercase tracking-widest">Tech Standard</p>
            <p className="font-black text-white text-lg">0.1mm Precision</p>
          </div>
        </div>
      </section>

      {/* ─── Understanding Appendix — zigzag #1 (text left, symptoms right) ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Overview</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">Understanding Appendix (Appendicitis)?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The appendix is a small, finger-shaped organ attached to the large intestine in the lower right side of the abdomen. Normally, the appendix causes no problems. But when it becomes inflamed or infected, it leads to a condition known as 'appendicitis'.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              If appendicitis is not treated on time, the inflamed appendix can burst (rupture). This can cause an infection to spread within the abdomen and lead to a severe medical emergency, which requires immediate surgical treatment.
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-gray-900 mb-2">Why Do You Need an Appendectomy?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once the appendix (appendicitis) becomes inflamed, the best and safest treatment is an appendectomy (surgical removal). Because there is no non-surgical way to "unblock" an infected appendix, removing it promptly prevents the risk of a life-threatening burst.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                <AlertTriangle size={18} className="text-orange-500" />
              </div>
              <div>
                <p className="font-bold text-gray-900">What are the Common Symptoms of Appendix?</p>
                <p className="text-xs text-gray-500">Seek immediate care if you experience these</p>
              </div>
            </div>
            <div className="space-y-4">
              {symptoms.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start p-4 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors group">
                  <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                    <Icon size={16} className="text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is Robotic Surgery — zigzag #2 (image left, text right) ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8460168/pexels-photo-8460168.jpeg"
                alt="Robotic surgery console"
                className="w-full h-[440px] object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
              <p className="text-xs font-bold text-teal-700">10x Magnification</p>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-200/30 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Technology</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              What is Robotic Appendix Surgery (Appendectomy)?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Robotic appendix surgery, also known as robotic appendectomy, is a modern and minimally invasive surgical procedure used to remove a swollen or infected appendix. During this surgery, surgeons at the Novo Robotic Surgery Centre utilize a robot-assisted system equipped with small surgical instruments and a high-definition 3D camera. This enables the surgery to be performed through very small incisions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The robotic system does not work on its own, it is entirely controlled by the surgeon. This provides enhanced precision, flexibility, and superior visibility during the surgical procedure.
            </p>
            <div className="flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-xl px-5 py-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-teal-600 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">S</span>
                </div>
                <div className="w-8 h-8 bg-teal-400 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">M</span>
                </div>
              </div>
              <span className="text-sm text-teal-700 font-semibold">Jointly by 5+ Master Robotic Surgeons</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Precision Benefits ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">The Advantage</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Benefits of Robotic Appendix Surgery (Appendectomy)
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Robotic appendix surgery offers several benefits compared to traditional open surgery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {precisionBenefits.map(({ icon: Icon, title, desc, featured, accent }) => (
              <div
                key={title}
                className={`rounded-3xl p-7 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg ${
                  featured
                    ? 'bg-teal-700 text-white shadow-xl shadow-teal-700/20'
                    : accent
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${featured ? 'bg-white/20' : accent ? 'bg-yellow-500/30' : 'bg-teal-100'}`}>
                  <Icon size={18} className={featured ? 'text-white' : accent ? 'text-gray-700' : 'text-teal-600'} />
                </div>
                <p className={`font-bold text-sm ${featured ? 'text-white' : 'text-gray-900'}`}>{title}</p>
                <p className={`text-xs leading-relaxed ${featured ? 'text-teal-100' : accent ? 'text-gray-700' : 'text-gray-500'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Is Performed — zigzag steps ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              How Robotic Appendix Surgery is Performed at Novo Robotic
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              A seamless blend of surgical expertise and technological advancement in four distinct phases.
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 1;
              return (
                <div
                  key={step.num}
                  className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image — flips side on even steps */}
                  <div className={`relative ${isEven ? 'md:order-2' : ''}`}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent rounded-3xl" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-5 -right-5 w-16 h-16 bg-teal-700 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-700/30 border-4 border-white">
                      <span className="text-white font-black text-lg">{step.num}</span>
                    </div>
                    {/* Decorative blob */}
                    <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-36 h-36 bg-teal-100/60 rounded-full blur-3xl -z-10`} />
                  </div>

                  {/* Text */}
                  <div className={isEven ? 'md:order-1' : ''}>
                    <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mb-5">
                      <Icon size={22} className="text-teal-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">{step.desc}</p>

                    {/* Progress dots */}
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

      {/* ─── Gallery strip ─── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Facility</p>
          <h2 className="text-3xl font-black text-gray-900">Inside Novo Robotic Surgery Centre</h2>
        </div>
        <div className="flex gap-5 px-6 max-w-7xl mx-auto overflow-x-auto pb-4 scrollbar-hide">
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
          <div className="bg-teal-700 rounded-3xl px-8 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-teal-600/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-800/40 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 max-w-xl mx-auto leading-tight">
                If you are experiencing abdominal pain,<br />don't wait. Consult our experts today.
              </h2>
              <p className="text-teal-100 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
                Consult our experts today for a precise diagnosis and a comfortable recovery.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <NavLink to="/contact">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 min-w-48">
                    Consult Our Experts
                  </button>
                </NavLink>
                <button className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all min-w-48">
                  View Specialist Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
