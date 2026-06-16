import { NavLink } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-teal-700 rounded-3xl px-8 py-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-600/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-800/40 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready for a Better Recovery?
            </h2>
            <p className="text-teal-100 max-w-lg mx-auto mb-10 leading-relaxed">
              Experience the next generation of healthcare where precision meets compassion. Schedule your consultation with our robotic experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink to="/contact">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 min-w-48">
                  Book Your Consultation
                </button>
              </NavLink>
              <button className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 min-w-48 backdrop-blur-sm">
                View Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
