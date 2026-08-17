import { memo, useState } from 'react';

/**
 * Bariatric before / after gallery.
 * Images only — each file already contains the before|after split, and no
 * per-patient copy is shown. Full-width stage + centred thumbnail rail.
 *
 * Perf: one large image mounted at a time, thumbnails lazy-loaded,
 * rail memo()'d, fixed aspect ratio = no layout shift.
 */

// Vite asset imports are DEFAULT exports — not named.
import image1 from '../assets/images/Image1Bariactic.jpeg';
import image2 from '../assets/images/Image2Bariactic.jpeg';
import image3 from '../assets/images/Image3Bariactic.jpeg';
// import image4 from '../assets/images/Image4Bariactic.jpeg';
import image5 from '../assets/images/Image5Bariactic.jpeg';
import image6 from '../assets/images/Image6Bariactic.jpeg';
import image7 from '../assets/images/Image7Briactic.jpeg';

const IMAGES: readonly string[] = [image1, image2, image3,  image5, image6, image7];

/* ---------------- thumbnail rail ---------------- */

const ThumbRail = memo(function ThumbRail({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Patient transformations"
      className="mt-8 flex snap-x snap-mandatory justify-start gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:justify-center [&::-webkit-scrollbar]:hidden"
    >
      {IMAGES.map((src, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            role="tab"
            aria-selected={isActive}
            aria-label={`View transformation ${i + 1}`}
            onClick={() => onSelect(i)}
            className={`aspect-[4/3] w-24 shrink-0 snap-start overflow-hidden rounded-[1rem] bg-white outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#fdd350] sm:w-28 ${
              isActive
                ? 'ring-2 ring-[#fdd350]'
                : 'opacity-55 ring-1 ring-[#005a65]/15 hover:opacity-100'
            }`}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain p-1"
            />
          </button>
        );
      })}
    </div>
  );
});

/* ---------------- arrow button ---------------- */

function Arrow({
  dir,
  onClick,
}: {
  dir: 'prev' | 'next';
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous transformation' : 'Next transformation'}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#005a65] shadow-[0_6px_20px_-6px_rgba(0,90,101,0.5)] ring-1 ring-[#005a65]/10 transition-colors hover:bg-[#005a65] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd350] ${
        dir === 'prev' ? 'left-3 sm:-left-5' : 'right-3 sm:-right-5'
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d={dir === 'prev' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* ---------------- section ---------------- */

export default function BariatricTransformations() {
  const [active, setActive] = useState(0);
  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + IMAGES.length) % IMAGES.length);

  return (
    <section className="bg-[#f7fbfb] py-20" aria-labelledby="bariatric-transformations-heading">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d7481]">
            Patient Outcomes
          </p>
          <h2
            id="bariatric-transformations-heading"
            className="mt-3 font-[Manrope] text-3xl font-extrabold leading-tight text-[#00343a] md:text-4xl"
          >
            Before &amp; after our bariatric patients
          </h2>
          <span
            className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#fdd350]"
            aria-hidden="true"
          />
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Real transformations from robotic-assisted weight loss surgery at Novo, each
            supported by a structured post-operative plan with our dietitian and surgical team.
          </p>
        </div>

        {/* Stage */}
        <div className="relative mt-12">
          <Arrow dir="prev" onClick={() => go(-1)} />
          <figure className="overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-[0_14px_50px_-24px_rgba(0,90,101,0.55)] ring-1 ring-[#005a65]/10">
            <img
              key={active}
              src={IMAGES[active]}
              alt={`Bariatric surgery patient transformation ${active + 1} of ${IMAGES.length}`}
              decoding="async"
              className="aspect-[4/3] w-full rounded-[1rem] bg-[#eef5f5] object-contain"
            />
          </figure>
          <Arrow dir="next" onClick={() => go(1)} />
        </div>

        <ThumbRail active={active} onSelect={setActive} />

        <p className="mt-10 rounded-[1.5rem] bg-white p-5 text-center text-sm leading-relaxed text-slate-500 ring-1 ring-[#005a65]/10">
          <strong className="font-semibold text-[#00343a]">Please note:</strong> photographs are
          shared with written patient consent. Results differ from person to person and depend on
          starting health, the procedure chosen, and long-term lifestyle changes. These images are
          not a promise of a specific outcome. Book a consultation with Dr. Vikrant Sharma to find
          out what is realistic for you.
        </p>
      </div>
    </section>
  );
}