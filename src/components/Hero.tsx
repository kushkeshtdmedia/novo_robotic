import { ArrowRight, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Video from '../assets/video/Video.mp4';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-16 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20">
      <div className="max-w-7xl mx-auto px-6 pt-12 grid gap-12 items-center md:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase bg-teal-100 text-teal-700">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-teal-500" />
            Novo Robotic Surgery Centre
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
            The Future of{' '}
            <span className="italic block text-teal-600">Robotic Surgery</span>
            <span className="italic text-teal-600">Quicker Healing</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-xl md:max-w-md text-gray-500">
            A leading destination for advanced robotic-assisted surgery in Ghaziabad and Delhi NCR. We combine world-class surgical expertise with state-of-the-art robotic technology for less pain, minimal scarring, and faster recovery.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <NavLink to="/contact" className="w-full sm:w-auto">
           
            </NavLink>
            <NavLink to="/services" className="w-full sm:w-auto">
           
            </NavLink>
          </div>

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