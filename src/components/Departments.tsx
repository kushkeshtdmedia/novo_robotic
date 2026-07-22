import { ArrowRight, Stethoscope, Scissors, Activity, Scale, HeartPulse } from 'lucide-react';

const specialities = [
  {
    icon: Stethoscope,
    title: 'Gastrointestinal & Hepatobiliary Surgery',
    description: 'From complex abdominal conditions to routine care, our advanced robotic platforms enable precise tissue dissection and unmatched accuracy for treating gastrointestinal disorders.',
    span: 'lg:col-span-2',
    variant: 'default',
  },
  {
    icon: Scissors,
    title: 'Robotic Hernia & Gallbladder Repair',
    description: 'Experience rapid relief and recovery. Minimally invasive gallbladder removal and hernia repairs ensure maximum structural reinforcement with minimal anatomical trauma.',
    span: 'lg:col-span-2',
    variant: 'featured',
  },
  {
    icon: Activity,
    title: 'Precision Oncological Resections',
    description: 'Our surgical oncology team uses high-definition 3D visualization to target and remove tumours with extreme boundary accuracy, preserving as much healthy tissue as possible.',
    span: 'lg:col-span-2',
    variant: 'accent',
  },
  {
    icon: Scale,
    title: 'Bariatric & Weight Loss Surgery',
    description: 'Take control of your health with advanced robotic weight loss surgery. Our precise approach optimizes metabolic outcomes while prioritizing patient safety and long-term well-being.',
    span: 'lg:col-span-3',
    variant: 'default',
  },
  {
    icon: HeartPulse,
    title: 'Advanced Gynaecological Surgeries',
    description: 'Compassionate, specialized care for complex conditions like fibroids, endometriosis, and hysterectomies, ensuring quick healing and minimal disruption.',
    span: 'lg:col-span-3',
    variant: 'default',
  },
];

export default function Departments() {
  return (
    <section className="py-24 bg-white" aria-labelledby="specialities-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Expertise</p>
            <h2 id="specialities-heading" className="text-4xl md:text-5xl font-black text-gray-900">Our Surgical Specialities</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Under the expert leadership of our top robotic surgeons, we provide comprehensive, customized care across multiple disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
          {specialities.map((s) => {
            const Icon = s.icon;
            const isFeatured = s.variant === 'featured';
            const isAccent = s.variant === 'accent';

            return (
              <article
                key={s.title}
                className={`relative rounded-3xl p-8 flex flex-col justify-between min-h-[260px] group transition-all duration-300 ${s.span} ${
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
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isFeatured ? 'text-teal-100' : 'text-gray-600'}`}>
                    {s.description}
                  </p>
                </div>
                <button
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${
                    isFeatured
                      ? 'bg-white text-teal-700 px-4 py-2 rounded-full hover:bg-teal-50 w-fit'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  Learn More
                  <ArrowRight size={14} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}