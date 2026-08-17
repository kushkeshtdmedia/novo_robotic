import { ArrowRight, CheckCircle, Eye, Cpu, Scissors, Layers, Activity, Utensils, Users, Monitor, TrendingDown, HeartPulse, Shield, Zap, Scale,ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import GastrectomyImage from '../../assets/images/Gastrectomy1.jpeg';
import VikrantPic from '../../assets/images/VikrantOnco.jpeg';
import GastrectomyImage2 from '../../assets/images/GastrectomyImage2.jpeg';

const faqs = [
  {
    q: 'Is robotic sleeve gastrectomy a safe procedure?',
    a: 'Yes. When performed by an experienced bariatric surgeon, robotic sleeve gastrectomy is considered a safe and effective treatment for obesity. Like any surgery, it has risks, but careful patient selection and proper post-operative care help minimize complications.',
  },
  {
    q: 'What is the minimum BMI required for sleeve gastrectomy?',
    a: 'The surgery is commonly recommended for people with a BMI of 35 or higher, or a BMI of 30 or above if they have obesity-related health problems. Your surgeon will determine if you are eligible.',
  },
  {
    q: 'Is robotic sleeve gastrectomy painful?',
    a: 'Some discomfort is normal after surgery, but pain is generally manageable with medication and improves over the first few days.',
  },
  {
    q: 'How much weight can I lose after sleeve gastrectomy?',
    a: 'Most patients lose around 60–70% of their excess body weight within 12 to 18 months if they follow the recommended diet and exercise plan.',
  },
  {
    q: 'What can I eat after robotic sleeve gastrectomy?',
    a: 'Your diet progresses from clear liquids to protein-rich liquids, soft foods, and eventually healthy solid foods under the guidance of your healthcare team.',
  },
  {
    q: 'Will I have loose skin after losing weight?',
    a: 'Some patients may develop loose skin after significant weight loss. The amount depends on factors such as age, genetics, and the amount of weight lost.',
  },
  {
    q: 'Can I become pregnant after sleeve gastrectomy?',
    a: 'Yes. Pregnancy is possible after surgery, but doctors generally recommend waiting 12–18 months before trying to conceive.',
  },
];
const candidateCriteria = [
  {
    icon: Scale,
    title: 'BMI Criteria',
    color: 'default',
    items: [
      'BMI of 40 or higher (morbid obesity)',
      'BMI of 35–39.9 with obesity-related health conditions',
      'In some cases, BMI of 30–34.9 with uncontrolled Type 2 Diabetes or metabolic syndrome',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Health Conditions',
    color: 'featured',
    items: [
      'Type 2 Diabetes',
      'High Blood Pressure',
      'Sleep Apnea',
      'Fatty Liver Disease',
      'Joint Pain & Osteoarthritis',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Commitment to Lifestyle Changes',
    color: 'default',
    items: [
      'Healthy eating habits',
      'Regular physical activity',
      'Long-term follow-up care',
      'Commitment to dietary guidelines after surgery',
    ],
  },
  {
    icon: Activity,
    title: 'General Health & Readiness',
    color: 'default',
    items: [
      'Be medically fit for surgery and anesthesia',
      'Usually between 18–70 years of age',
      'Be mentally and emotionally prepared for long-term lifestyle changes',
    ],
  },
];

const steps = [
  {
    num: '01',
    icon: Cpu,
    title: 'Robotic Instrument Entry',
    desc: 'Surgeons place highly articulated robotic instruments through tiny keyhole incisions, minimising tissue trauma.',
  },
  {
    num: '02',
    icon: Eye,
    title: '3D HD Visualisation',
    desc: 'The surgeon views the surgical field in high-definition 3D, providing depth perception and clarity beyond traditional laparoscopy.',
  },
  {
    num: '03',
    icon: Scissors,
    title: 'Precision Removal',
    desc: 'Careful removal of 70–80% of the stomach, following the natural curvature to ensure optimal metabolic results.',
  },
  {
    num: '04',
    icon: Layers,
    title: 'Sleeve Shaping',
    desc: 'Creating a narrow, banana-shaped sleeve using precise robotic stapling, designed for long-term safety and health.',
  },
];

const advantages = [
  { icon: Activity, label: 'Minimally invasive surgical procedure' },
  { icon: Zap, label: 'Superior surgical precision and control' },
  { icon: Scissors, label: 'Smaller incisions with minimal scarring' },
  { icon: TrendingDown, label: 'Faster Recovery and Shorter Hospital Stay' },
  { icon: Scale, label: 'Effective long-term weight loss management' },
  { icon: HeartPulse, label: 'Improvement in obesity-related health conditions' },
];

const recoverySteps = [
  { icon: Monitor, label: 'Immediate post-surgery monitoring and medical care' },
  { icon: Utensils, label: 'Gradual diet progression from liquids to solid foods' },
  { icon: Activity, label: 'Mild discomfort during the initial recovery period' },
  { icon: Users, label: 'Regular follow-up consultations with the surgical team' },
  { icon: HeartPulse, label: 'Long-term lifestyle and dietary changes for successful weight management' },
];

const whyUs = [
  'Unmatched Surgical Precision with the latest robotic platforms',
  'Outcomes data that meets international healthcare standards',
  'Personalised care plans from pre-op preparation to long-term weight maintenance',
];

export default function RoboticSleeveGastrectomy() {
  return (
    <div className="pt-20">
      {/* ─── Hero ─── */}
      <section className="relative min-h-[480px] flex items-end overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
      alt="Bariatric Surgery"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/85 via-teal-800/70 to-teal-700/40" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 pt-24 w-full">
    <nav className="flex items-center gap-2 text-xs text-teal-200 mb-6">
      <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
      <span>/</span>
      <span className="text-teal-300">Bariatric &amp; Metabolic Surgery</span>
      <span>/</span>
      <span className="text-white font-semibold">Robotic Sleeve Gastrectomy</span>
    </nav>

    <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">Bariatric Excellence</p>
    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 max-w-2xl">
      Robotic Sleeve<br />Gastrectomy <span className="text-teal-300">(Gastric<br />Sleeve)</span>
    </h1>
    <p className="text-teal-100 text-lg max-w-lg mb-6 leading-relaxed">
      Advanced precision for life-changing weight management.
    </p>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-300 leading-snug mb-5 max-w-2xl">
      Best Sleeve Gastrectomy (Gastric Sleeve) Surgery in Kaushambi, Ghaziabad
    </p>

    {/* Understanding boxes */}
    <div className="grid gap-5 lg:grid-cols-2 max-w-4xl">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <p className="font-bold text-white mb-2">Understanding Sleeve Gastrectomy</p>
        <p className="text-teal-100 text-sm leading-relaxed">
          Sleeve Gastrectomy, commonly known as the Gastric Sleeve or Vertical Sleeve Gastrectomy (VSG), is a permanent non-reversible Bariatric surgery performed laparoscopically. During the procedure, nearly 70–80% of the stomach is removed, leaving behind a small banana-shaped sleeve that can hold much less food.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <p className="font-bold text-white mb-2">How It Curbs Hunger</p>
        <p className="text-teal-100 text-sm leading-relaxed">
          Unlike gastric bypass surgery, the intestines are not altered. The procedure also removes the part of the stomach that produces ghrelin, commonly known as the "hunger hormone." As a result, patients feel full sooner, experience reduced hunger, and find long-term weight management easier and more sustainable.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ─── What is Robotic Sleeve Gastrectomy ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Technology</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              What is Robotic Sleeve<br />Gastrectomy?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
             Robotic Sleeve Gastrectomy is an advanced form of gastric sleeve surgery performed using robotic-assisted technology. The surgeon controls highly precise robotic instruments through a console, allowing better accuracy, enhanced visualization, and improved surgical precision. The robotic approach helps achieve smaller incisions, less pain, reduced blood loss, and faster recovery compared to traditional surgery methods. 
            </p>
            <div className="flex items-center gap-3 bg-teal-50 rounded-xl px-5 py-3 w-fit">
              <Cpu size={16} className="text-teal-600" />
              <span className="text-sm font-semibold text-teal-700">Next-Gen Robotic Control</span>
            </div>
          </div>

          <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src={GastrectomyImage}
    alt="Robotic surgical console"
    className="block w-full h-auto"
  />
</div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
              <p className="text-xs font-semibold text-teal-700">3D Surgical Precision</p>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-200/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ─── Ideal Candidate ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Eligibility</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Who is an Ideal Candidate?</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Personalised evaluation for optimal outcomes.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidateCriteria.map((card) => {
              const Icon = card.icon;
              const isFeatured = card.color === 'featured';
              return (
                <div
                  key={card.title}
                  className={`rounded-3xl p-7 flex flex-col gap-4 ${isFeatured ? 'bg-teal-700 text-white shadow-xl shadow-teal-700/25' : 'bg-white shadow-sm hover:shadow-md transition-shadow'}`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isFeatured ? 'bg-white/20' : 'bg-teal-100'}`}>
                    <Icon size={18} className={isFeatured ? 'text-white' : 'text-teal-600'} />
                  </div>
                  <p className={`font-bold text-sm ${isFeatured ? 'text-white' : 'text-gray-900'}`}>{card.title}</p>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isFeatured ? 'bg-yellow-400' : 'bg-teal-400'}`} />
                        <span className={`text-xs leading-relaxed ${isFeatured ? 'text-teal-100' : 'text-gray-600'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── How It Is Performed ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Procedure</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">How it is<br />Performed</h2>
          </div>

          <div className="space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center group-hover:bg-teal-700 transition-colors shadow-md shadow-teal-600/25">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="pt-1">
                    <p className="font-bold text-gray-900 mb-1">{step.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Robotic Advantage ─── */}
      <section className="py-20 bg-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-300 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">The Robotic Advantage</h2>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-4 border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-white text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={VikrantPic}
                alt="Surgical team"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Recovery Path ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Post Surgery</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Your Path to Recovery</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">A structured, guided recovery programme designed for your long-term success.</p>
          </div>

          <div className="relative flex flex-col sm:flex-row items-stretch justify-between gap-4">
            {/* Connector line on desktop */}
            <div className="hidden sm:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-teal-100 z-0" />

            {recoverySteps.map(({ icon: Icon, label }, i) => (
              <div key={label} className="relative z-10 flex flex-col items-center gap-3 flex-1 text-center">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg transition-all ${i === 2 ? 'bg-teal-700 shadow-teal-700/30' : 'bg-white border-2 border-teal-100 hover:border-teal-300'}`}>
                  <Icon size={24} className={i === 2 ? 'text-white' : 'text-teal-600'} />
                </div>
                <p className={`text-xs font-semibold ${i === 2 ? 'text-teal-700' : 'text-gray-700'}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Novo ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={GastrectomyImage2}
                alt="Hospital facility"
                className="w-full h-[440px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Why Choose Novo<br />Robotic?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Novo Robotic Surgery Centre, we define the future of bariatric surgery. Our Centre of excellence is dedicated to providing the safest, most effective outcomes for patients seeking lasting weight transformation.
            </p>
            <ul className="space-y-4 mb-8">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <NavLink to="/contact">
              <button className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-700/25 group">
                Book a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Start Your Transformation</h2>
              <p className="text-teal-100 max-w-lg mx-auto mb-10 leading-relaxed text-sm">
                Struggling with obesity or weight-related health issues? Consult our experts today for advanced Robotic Sleeve Gastrectomy (Gastric Sleeve) and take the first step toward healthier, long-term weight loss. 
              </p>
              <NavLink to="/contact">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30">
                  Consult Our Experts
                </button>
              </NavLink>
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
              Answers to the questions patients ask us most about robotic sleeve gastrectomy.
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
