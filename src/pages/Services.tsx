import { Bot, Heart, Bone, Brain, Eye, Activity } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Robotic Surgery',
    description: 'Minimally invasive procedures powered by the latest da Vinci systems for complex abdominal and thoracic surgeries.',
    color: 'teal',
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Robotic-assisted heart bypass and valve repairs with microscopic accuracy and faster recovery.',
    color: 'red',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Smart implant technology and robotic knee/hip replacements for life-long durability.',
    color: 'yellow',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Cutting-edge neuro-robotic procedures for brain and spinal cord conditions with pinpoint accuracy.',
    color: 'teal',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Laser-guided robotic eye surgeries for cataracts, retinal disorders, and vision correction.',
    color: 'cyan',
  },
  {
    icon: Activity,
    title: 'Oncology',
    description: 'Robotic tumor resection and minimally invasive cancer surgeries with precision targeting.',
    color: 'teal',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Expertise</p>
          <h1 className="text-5xl font-black text-gray-900 mb-5">World-Class Services</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            From robotic surgery to empathetic recovery care — our departments are equipped with the latest medical technology to deliver the best outcomes.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/60 rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-teal-600 transition-colors duration-300">
                  <Icon size={22} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                <button className="mt-5 text-teal-600 font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
                  Learn More &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
