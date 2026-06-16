import { Crosshair, ShieldCheck, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Crosshair,
    title: '0.1mm Precision Accuracy',
    description: 'Our robotic arms eliminate human tremors, allowing for incisions and sutures that were previously impossible to the human eye.',
  },
  {
    icon: ShieldCheck,
    title: 'Clinical Excellence',
    description: 'Every procedure is overseen by double-certified surgeons with over 15 years of robotic-specialized training.',
  },
  {
    icon: HeartHandshake,
    title: 'Empathetic Recovery',
    description: 'Our hospital environment is designed to lower cortisol levels, featuring smart rooms that adapt to patient preferences.',
  },
];

export default function Engineering() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
              alt="Doctor with patient"
              className="w-full h-[540px] object-cover"
            />
          </div>
          <div className="absolute bottom-8 left-6 bg-white rounded-2xl shadow-xl px-6 py-5 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-teal-100 rounded-full flex items-center justify-center">
                <HeartHandshake size={16} className="text-teal-600" />
              </div>
              <p className="font-bold text-gray-900 text-sm">Empathetic Design</p>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              We believe that while machines provide the precision, humans provide the healing.
            </p>
          </div>
          <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-teal-200/30 rounded-full blur-3xl -z-10" />
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">The Vanguard Advantage</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Engineering<br />Better Lives
            </h2>
          </div>

          <div className="space-y-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-5 group">
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors duration-300">
                    <Icon size={20} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{f.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-700/25">
            Learn About Our Technology
          </button>
        </div>
      </div>
    </section>
  );
}
