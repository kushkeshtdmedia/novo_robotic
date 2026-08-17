import { useState } from 'react';
import { Play, X } from 'lucide-react';
import Test1 from '../assets/video/Test1.mp4';
// import Test2 from '../assets/video/test2.mp4';
import Test2 from '../assets/video/Test2.mp4';
import Test3 from '../assets/video/Test3.mp4';
import Test4 from '../assets/video/Test4.mp4';
import Test5 from '../assets/video/Test5.mp4';
import Test6 from '../assets/video/Test6.mp4';
import Test7 from '../assets/video/Test7.mp4';
import Test8 from '../assets/video/Test8.mp4';
import Test9 from '../assets/video/Test9.mp4';
import Test10 from '../assets/video/Test10.mp4';

const videoTestimonials: string[] = [Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9, Test10];

/* Marquee speed — higher is slower */
const DURATION = 42;

/* ── Single card ──────────────────────────────────── */
function Card({ src, onOpen }: { src: string; onOpen: (src: string) => void }) {
  return (
    <button
      onClick={() => onOpen(src)}
      className="group relative shrink-0 w-[260px] sm:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 text-left bg-slate-900"
      aria-label="Play patient testimonial"
    >
      <video
        src={`${src}#t=0.1`}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Play size={22} className="text-white ml-0.5" fill="white" />
        </span>
      </span>
    </button>
  );
}

export default function VideoTestimonials() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50" aria-labelledby="testimonials-heading">
      {/* Marquee keyframes — self-contained, no tailwind.config change needed */}
      <style>{`
        @keyframes novo-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-33.3333%, 0, 0); }
        }
        .marquee-row:hover > div { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-row > div { animation: none !important; }
          .marquee-row { overflow-x: auto; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Patient Voices
          </p>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Real Stories, Real Recovery
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Watch real patients share their experiences with robotic surgery at Novo Robotic Surgery Centre.
          </p>
        </div>
      </div>

      {/* Full-bleed single marquee */}
      <div className="marquee-row relative overflow-hidden">
        <div
          className="flex gap-6 w-max"
          style={{ animation: `novo-marquee ${DURATION}s linear infinite` }}
        >
          {[...videoTestimonials, ...videoTestimonials, ...videoTestimonials].map((src, i) => (
            <Card key={i} src={src} onOpen={setActive} />
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        Hover to pause · Click any card to watch
      </p>

      {/* ── Lightbox ─────────────────────────────────── */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-1.5 text-sm"
              aria-label="Close video"
            >
              <X size={20} /> Close
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                key={active}
                src={active}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}