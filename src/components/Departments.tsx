import { ArrowRight, Bot, Heart, Bone, TrendingUp } from 'lucide-react';

const departments = [
  {
    icon: Bot,
    title: 'Robotic Surgery',
    description: 'Minimally invasive procedures powered by the latest da Vinci systems for complex abdominal and thoracic surgeries.',
    cta: 'Explore Unit',
    variant: 'default',
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Robotic-assisted heart bypass and valve repairs with microscopic accuracy.',
    cta: 'View Specialists',
    variant: 'featured',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Smart implant technology and robotic knee/hip replacements for life-long durability.',
    cta: 'Learn More',
    variant: 'accent',
  },
];

export default function Departments() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Precision Departments</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Leading the frontier of medical science through dedicated robotic centers of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const Icon = dept.icon;
            const isFeatured = dept.variant === 'featured';
            const isAccent = dept.variant === 'accent';

            return (
              <div
                key={dept.title}
                className={`relative rounded-3xl p-8 flex flex-col justify-between min-h-[280px] group transition-all duration-300 ${
                  isFeatured
                    ? 'bg-teal-700 text-white shadow-xl shadow-teal-700/25'
                    : isAccent
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    isFeatured ? 'bg-white/20' : isAccent ? 'bg-yellow-500/40' : 'bg-teal-100'
                  }`}>
                    <Icon size={22} className={isFeatured ? 'text-white' : isAccent ? 'text-gray-800' : 'text-teal-600'} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
                    {dept.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isFeatured ? 'text-teal-100' : 'text-gray-600'}`}>
                    {dept.description}
                  </p>
                </div>
                <button
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${
                    isFeatured
                      ? 'bg-white text-teal-700 px-4 py-2 rounded-full hover:bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {dept.cta}
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Impact bar */}
        <div className="mt-8 bg-gray-50 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Clinical Impact</p>
            <p className="text-sm text-gray-600">Average recovery time reduced by 45%</p>
          </div>
          <div className="flex items-center gap-12">
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900">5k+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Procedures</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-teal-600">99.8%</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Success</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-teal-600">
            <TrendingUp size={20} />
            <span className="text-sm font-semibold">Improving outcomes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
