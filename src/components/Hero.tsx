import { ArrowRight, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Video from '../assets/video/video.mp4'
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-12 grid gap-12 items-center md:grid-cols-2">
        {/* Left */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
            Novo Robotic Surgery Centre
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            The Future of{' '}
            <span className="text-teal-600 italic block">Robotic Surgery</span>
            <span className="text-teal-600 italic">Quicker Healing</span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl md:max-w-md">
            A leading destination for advanced robotic-assisted surgery in Ghaziabad and Delhi NCR. We combine world-class surgical expertise with state-of-the-art robotic technology for less pain, minimal scarring, and faster recovery.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <NavLink to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-700/25 group">
                Book a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
            <NavLink to="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-700 font-semibold hover:text-teal-600 transition-colors px-6 py-3.5 rounded-full border border-gray-200 hover:border-teal-500">
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-teal-500 transition-colors">
                  <Play size={14} className="ml-0.5" />
                </div>
                Explore Services
              </button>
            </NavLink>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="min-w-[140px]">
              <p className="text-3xl font-black text-gray-900">Minimal</p>
              <p className="text-sm text-gray-500">Scarring</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div className="min-w-[140px]">
              <p className="text-3xl font-black text-gray-900">3D HD</p>
              <p className="text-sm text-gray-500">Visualization</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div className="min-w-[140px]">
              <p className="text-3xl font-black text-gray-900">Faster</p>
              <p className="text-sm text-gray-500">Recovery</p>
            </div>
          </div>
        </div>

        {/* Right — Video Card */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
            <video
              src={Video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
          </div>

          {/* Precision badge */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 min-w-max">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-lg">
              &#x1F3AF;
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Surgical Approach</p>
              <p className="text-xl font-black text-gray-900">Minimally Invasive</p>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 w-40 h-40 bg-teal-200/40 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-200/40 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}