import { useState } from 'react';
import { Play, X } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  videoCode: string;
};

const videoTestimonials: Testimonial[] = [
  { id: 1, name: 'Rajesh Kumar', role: 'Hernia Surgery Patient', videoCode: 'dQw4w9WgXcQ' },
  { id: 2, name: 'Priya Sharma', role: 'Gallbladder Surgery Patient', videoCode: 'dQw4w9WgXcQ' },
  { id: 3, name: 'Amit Patel', role: 'Bariatric Surgery Patient', videoCode: 'dQw4w9WgXcQ' },
  { id: 4, name: 'Neha Gupta', role: 'Post-Surgery Recovery', videoCode: 'dQw4w9WgXcQ' },
  { id: 5, name: 'Vikram Singh', role: 'Appendix Surgery Patient', videoCode: 'dQw4w9WgXcQ' },
  { id: 6, name: 'Sunita Devi', role: 'Hysterectomy Patient', videoCode: 'dQw4w9WgXcQ' },
];

/* Marquee speed — higher is slower */
const DURATION = 42;

const thumb = (code: string) => `https://img.youtube.com/vi/${code}/hqdefault.jpg`;

/* ── Single card ──────────────────────────────────── */
function Card({ item, onOpen }: { item: Testimonial; onOpen: (t: Testimonial) => void }) {
  return (
    <button
      onClick={() => onOpen(item)}
      className="group relative shrink-0 w-[260px] sm:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 text-left"
      aria-label={`Play testimonial from ${item.name}`}
    >
      <img
        src={thumb(item.videoCode)}
        alt={`${item.name} testimonial`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Play size={22} className="text-white ml-0.5" fill="white" />
        </span>
      </span>

      <span className="absolute bottom-0 left-0 right-0 p-4">
        <span className="block text-white font-bold text-sm">{item.name}</span>
        <span className="block text-teal-300 text-xs mt-0.5">{item.role}</span>
      </span>
    </button>
  );
}

export default function VideoTestimonials() {
  const [active, setActive] = useState<Testimonial | null>(null);

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
          {[...videoTestimonials, ...videoTestimonials, ...videoTestimonials].map((item, i) => (
            <Card key={`${item.id}-${i}`} item={item} onOpen={setActive} />
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
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-1.5 text-sm"
              aria-label="Close video"
            >
              <X size={20} /> Close
            </button>

            <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${active.videoCode}?autoplay=1&rel=0&modestbranding=1`}
                title={`${active.name} — Testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-white font-bold">{active.name}</p>
              <p className="text-teal-300 text-sm">{active.role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}