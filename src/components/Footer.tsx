import { NavLink } from 'react-router-dom';
import Logo from './../assets/images/Logo.png';

/* Brand colors pulled from the logo */
const TEAL = '#22C8C8';
const YELLOW = '#FFD34E';

const MAPS_LINK =
  'https://www.google.com/maps/dir/?api=1&destination=Novo+Robotic+Surgery+Centre%2C+B-12%2F13%2C+near+Dabur+Lane%2C+Anand+Vihar%2C+Kaushambi%2C+Ghaziabad%2C+Uttar+Pradesh+201010';

/* ── Phone numbers (single source of truth) ─────────── */
const PHONES = [
  { display: '+91 88828 44375', dial: '+918882844375' },
  { display: '+91 85275 16622', dial: '+918527516622' },
];

/* ── Link data (mirrors the router) ─────────────────── */
const servicesCol1 = [
  // { label: 'All Treatments', to: '/services' },
  { label: 'Appendix Surgery', to: '/services/appendix-surgery' },
  { label: 'Bariatric / Weight Loss Surgery', to: '/services/bariatric-weight-loss-surgery' },
  { label: 'Benign Uterine & Ovarian Disorders', to: '/services/benign-uterine-ovarian-disorders' },
  { label: 'Colorectal Cancer Surgery', to: '/services/colorectal-cancer-surgery' },
  { label: 'Fertility Preserving Surgery', to: '/services/fertility-preserving-surgery' },
  // { label: 'Gallbladder Cancer Surgery', to: '/services/gallbladder-cancer-surgery' },
];

const servicesCol2 = [
  { label: 'Hernia Surgery', to: '/services/hernia-surgery' },
  { label: 'Mini Gastric Bypass', to: '/services/mini-gastric-bypass' },
  { label: 'Oesophagus Surgery', to: '/services/oesophagus-surgery' },
  { label: 'Robotic Sleeve Gastrectomy', to: '/services/robotic-sleeve-gastrectomy' },
  { label: 'Roux-en-Y Gastric Bypass', to: '/services/roux-en-gastric-bypass' },
  { label: 'Stomach Cancer Surgery', to: '/services/stomach-cancer-surgery' },
    {label: 'Gynecologic Cancer Surgery', slug: 'gynecologic-cancer-surgery'},
];

const doctors = [
  // { label: 'All Doctors', to: '/doctors' },
  { label: 'Dr. Vikrant Sharma', to: '/doctors/dr-vikrant-sharma' },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Contact Us', to: '/contact' },
];

const resources = [
  { label: 'Patient Resources', href: '#' },
  { label: 'Robotic Surgery FAQs', href: '#' },
  { label: 'New Patient Forms', href: '#' },
  { label: 'Ethics Guidelines', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const heading =
  'text-[11px] font-bold uppercase tracking-[0.16em] text-gray-800 mb-4 h-4 flex items-center';

const linkClass = 'text-sm text-gray-600 hover:text-[#22C8C8] transition-colors';

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
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: LinkedIn, label: 'LinkedIn', href: '#' },
];

/* Bulleted internal link */
const Item = ({ label, to, href }: { label: string; to?: string; href?: string }) => (
  <li className="flex items-start gap-2">
    <span
      className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
      style={{ backgroundColor: TEAL }}
    />
    {to ? (
      <NavLink to={to} className={linkClass}>
        {label}
      </NavLink>
    ) : (
      <a href={href} className={linkClass}>
        {label}
      </a>
    )}
  </li>
);

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Treatments — column 1 */}
              <div>
                <p className={heading}>Treatments</p>
                <ul className="space-y-2">
                  {servicesCol1.map((s) => (
                    <Item key={s.to} label={s.label} to={s.to} />
                  ))}
                </ul>
              </div>

              {/* Treatments — column 2 (heading kept invisible on desktop so rows align) */}
              <div>
                <p className={`${heading} lg:invisible`}>More Treatments</p>
                <ul className="space-y-2">
                  {servicesCol2.map((s) => (
                    <Item key={s.to} label={s.label} to={s.to} />
                  ))}
                </ul>
              </div>

              {/* Doctors + Quick links */}
              <div>
                <p className={heading}>Doctors</p>
                <ul className="space-y-2">
                  {doctors.map((d) => (
                    <Item key={d.to} label={d.label} to={d.to} />
                  ))}
                </ul>

                <p className={`${heading} mt-6`}>Quick Links</p>
                <ul className="space-y-2">
                  {quickLinks.map((q) => (
                    <Item key={q.to} label={q.label} to={q.to} />
                  ))}
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: TEAL }}
                    />
                    <a href={`tel:${PHONES[0].dial}`} className={linkClass}>
                      Book an Appointment
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources + Contact */}
              <div>
                <p className={heading}>Resources</p>
                <ul className="space-y-2">
                  {resources.map((r) => (
                    <Item key={r.label} label={r.label} href={r.href} />
                  ))}
                </ul>

                <p className={`${heading} mt-6`}>Contact</p>
                <ul className="space-y-3">
                  {PHONES.map((p) => (
                    <li key={p.dial}>
                      <a
                        href={`tel:${p.dial}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#22C8C8] transition-colors"
                      >
                        <span style={{ color: TEAL }}><Phone /></span>
                        {p.display}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="mailto:enquiry@novorobotic.com"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#22C8C8] transition-colors"
                    >
                      <span style={{ color: TEAL }}><Mail /></span>
                      enquiry@novorobotic.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Right: address, map, social ──────────────── */}
          <div className="lg:col-span-4 flex flex-col">
            <p className={heading}>Visit Us</p>
            <address className="not-italic flex items-start gap-2 text-sm text-gray-600 leading-relaxed mb-4">
              <span style={{ color: TEAL }}><Pin /></span>
              <span>
                B-12/13, near Dabur Lane<br />
                Anand Vihar, Kaushambi<br />
                Ghaziabad, Uttar Pradesh 201010
              </span>
            </address>

            <div className="w-full h-56 rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <iframe
                title="Novo Robotic Surgery Centre location"
                src="https://www.google.com/maps?q=Novo+Robotic+Surgery+Centre%2C+B-12%2F13%2C+near+Dabur+Lane%2C+Anand+Vihar%2C+Kaushambi%2C+Ghaziabad%2C+Uttar+Pradesh+201010&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-900 shadow-sm hover:brightness-95 transition"
                style={{ backgroundColor: YELLOW }}
              >
                Get Directions
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>

              <a
                href={`tel:${PHONES[0].dial}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-sm hover:brightness-95 transition"
                style={{ backgroundColor: TEAL }}
              >
                <Phone />
                Call Now
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
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

      {/* ── Bottom bar ───────────────────────────────── */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Novo Robotic Hospital. All rights reserved.
            <span className="ml-3 font-medium" style={{ color: TEAL }}>
              Precision In Care
            </span>
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            {PHONES.map((p) => (
              <a
                key={p.dial}
                href={`tel:${p.dial}`}
                className="hover:text-[#22C8C8] transition-colors font-medium"
              >
                {p.display}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating 24x7 call pill ───────────────────── */}
      <a
        href={`tel:${PHONES[0].dial}`}
        aria-label={`Call Novo Robotic Surgery Centre at ${PHONES[0].display}`}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 pl-3 pr-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg hover:brightness-95 transition"
        style={{ backgroundColor: TEAL }}
      >
        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
          24/7
        </span>
        {PHONES[0].display}
      </a>
    </footer>
  );
}