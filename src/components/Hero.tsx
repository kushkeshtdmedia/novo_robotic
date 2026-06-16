import { ArrowRight, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
            Unrivaled Precision System
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            The Future of{' '}
            <span className="text-teal-600 italic block">Surgical</span>
            <span className="text-teal-600 italic">Precision</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed max-w-md">
            Where high-precision robotic engineering meets empathetic patient care. Our advanced robotic systems provide surgical accuracy within 0.1mm for faster recovery times and better outcomes.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <NavLink to="/contact">
              <button className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-700/25 group">
                Book an Appointment
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
            <NavLink to="/services">
              <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-teal-600 transition-colors">
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-teal-500 transition-colors">
                  <Play size={14} className="ml-0.5" />
                </div>
                Explore Services
              </button>
            </NavLink>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-black text-gray-900">5k+</p>
              <p className="text-sm text-gray-500">Procedures</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-3xl font-black text-gray-900">99.8%</p>
              <p className="text-sm text-gray-500">Success Rate</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-3xl font-black text-gray-900">0.1mm</p>
              <p className="text-sm text-gray-500">Precision</p>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
              alt="Robotic Surgery"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
          </div>

          {/* Precision badge */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 min-w-max">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-lg">
              &#x1F3AF;
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Accuracy Rating</p>
              <p className="text-xl font-black text-gray-900">0.1mm Precision</p>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 w-40 h-40 bg-teal-200/40 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-200/40 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
