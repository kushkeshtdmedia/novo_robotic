import { NavLink } from 'react-router-dom';
import Logo from './../assets/images/Logo.png';

/* Brand colors pulled from the logo */
const TEAL = '#22C8C8';
const YELLOW = '#FFD34E';

const MAPS_LINK =
  'https://www.google.com/maps/dir/?api=1&destination=Novo+Robotic+Surgery+Centre+Kaushambi+Ghaziabad';

const resources = [
  { label: 'Patient Resources', href: '#' },
  { label: 'Ethics Guidelines', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Robotic Surgery FAQs', href: '#' },
  { label: 'New Patient Forms', href: '#' },
];

const heading =
  'text-[11px] font-bold uppercase tracking-[0.16em] text-gray-800 mb-4 h-4 flex items-center';

/* ── Icons ──────────────────────────────────────────── */
const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);
const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 mt-0.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const X = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.9 2H22l-7 8 8.3 12h-6.5l-5-7.3L5.9 22H2.8l7.5-8.6L2.4 2H9l4.6 6.7L18.9 2zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20z" />
  </svg>
);
const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
  </svg>
);

const socials = [
  { Icon: X, label: 'X', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: LinkedIn, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── Left: logo + link columns ───────────────── */}
          <div className="lg:col-span-8">
            <NavLink to="/" className="inline-block mb-8">
              <img
                src={Logo}
                alt="Novo Robotic Surgery Centre — Precision In Care"
                className="h-16 w-auto object-contain"
              />
            </NavLink>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Resources */}
              <div>
                <p className={heading}>Resources</p>
                <ul className="space-y-2">
                  {resources.map((r) => (
                    <li key={r.label} className="flex items-start gap-2">
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: TEAL }}
                      />
                      <a
                        href={r.href}
                        className="text-sm text-gray-600 hover:text-[#22C8C8] transition-colors"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className={heading}>Contact</p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="tel:+911234567890"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#22C8C8] transition-colors"
                    >
                      <span style={{ color: TEAL }}><Phone /></span>
                      +91 12345 67890
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@novorobotic.com"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#22C8C8] transition-colors"
                    >
                      <span style={{ color: TEAL }}><Mail /></span>
                      info@novorobotic.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#22C8C8] transition-colors"
                    >
                      <span style={{ color: TEAL }}><LinkedIn /></span>
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>

              {/* Visit us + social */}
              <div>
                <p className={heading}>Visit Us</p>
                <address className="not-italic flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                  <span style={{ color: TEAL }}><Pin /></span>
                  <span>
                    Sector 6, Kaushambi<br />
                    Ghaziabad, Uttar Pradesh<br />
                    India - 201010
                  </span>
                </address>

                <p className={`${heading} mt-6`}>Social</p>
                <div className="flex items-center gap-3">
                  {socials.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:border-transparent transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = TEAL)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: map ──────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="w-full h-56 rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <iframe
                title="Novo Robotic Surgery Centre location"
                src="https://www.google.com/maps?q=Novo+Robotic+Surgery+Centre+Kaushambi+Ghaziabad&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 self-center inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-900 shadow-sm hover:brightness-95 transition"
              style={{ backgroundColor: YELLOW }}
            >
              Get Directions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────── */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Novo Robotic Hospital. All rights reserved.
            <span className="ml-3 font-medium" style={{ color: TEAL }}>
              Precision In Care
            </span>
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#22C8C8] transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}