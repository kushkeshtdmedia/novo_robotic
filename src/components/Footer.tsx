import { useState, useEffect } from 'react';
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
  { label: 'Appendix Surgery', to: '/services/appendix-surgery' },
  // { label: 'Bariatric / Weight Loss Surgery', to: '/services/bariatric-weight-loss-surgery' },
  { label: 'Benign Uterine & Ovarian Disorders', to: '/services/benign-uterine-ovarian-disorders' },
  { label: 'Colorectal Cancer Surgery', to: '/services/colorectal-cancer-surgery' },
  { label: 'Fertility Preserving Surgery', to: '/services/fertility-preserving-surgery' },
   { label: 'Oesophagus Surgery', to: '/services/oesophagus-general-surgery' },
];

const servicesCol2 = [
  { label: 'Hernia Surgery', to: '/services/hernia-surgery' },
  { label: 'Mini Gastric Bypass', to: '/services/mini-gastric-bypass' },
  // { label: 'Oesophagus Cancer Surgery', to: '/services/oesophagus-surgery' },
  { label: 'Robotic Sleeve Gastrectomy', to: '/services/robotic-sleeve-gastrectomy' },
  { label: 'Roux-en-Y Gastric Bypass', to: '/services/roux-en-gastric-bypass' },
  { label: 'Stomach Cancer Surgery', to: '/services/stomach-cancer-surgery' },
  { label: 'Gynecologic Cancer Surgery', to: '/services/gynecologic-cancer-surgery' },
];

const doctors = [{ label: 'Dr. Vikrant Sharma', to: '/doctors/dr-vikrant-sharma' }];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Contact Us', to: '/contact' },
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
const YouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23 12s0-3.5-.45-5.17a2.6 2.6 0 0 0-1.83-1.85C19.06 4.5 12 4.5 12 4.5s-7.06 0-8.72.48A2.6 2.6 0 0 0 1.45 6.83C1 8.5 1 12 1 12s0 3.5.45 5.17a2.6 2.6 0 0 0 1.83 1.85c1.66.48 8.72.48 8.72.48s7.06 0 8.72-.48a2.6 2.6 0 0 0 1.83-1.85C23 15.5 23 12 23 12zM9.75 15.25v-6.5L15.5 12z" />
  </svg>
);
const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

const socials = [
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/novorobotic_/' },
  { Icon: YouTube, label: 'YouTube', href: 'https://www.youtube.com/@novoroboticsurgerycentre' },
  { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/novorobotic/' },
  { Icon: LinkedIn, label: 'LinkedIn', href: 'https://www.linkedin.com/company/102020935/' },
];

/* Bulleted internal link */
const Item = ({ label, to, href }: { label: string; to?: string; href?: string }) => (
  <li className="flex items-start gap-2">
    <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: TEAL }} />
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

/* ── Privacy Policy modal ───────────────────────────── */
const PrivacyPolicyModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4 px-6 sm:px-8 py-5 border-b border-gray-200">
          <div>
            <h2 id="privacy-title" className="text-xl font-bold text-gray-900">
              Privacy Policy
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Novo Robotic Surgery Centre · Kaushambi, Ghaziabad
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close privacy policy"
            className="shrink-0 w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6 text-sm text-gray-600 leading-relaxed">
          <p>
            Novo Robotic Surgery Centre is committed to protecting the privacy and confidentiality
            of every patient and website visitor. This policy explains what information we collect,
            how it is used, and the choices available to you.
          </p>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">1. Information We Collect</h3>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>
                <span className="font-medium text-gray-800">Information you provide:</span> name,
                phone number, email address, age, and any details you share through appointment or
                enquiry forms.
              </li>
              <li>
                <span className="font-medium text-gray-800">Health information:</span> symptoms,
                medical history, reports, and scans shared with our clinical team for consultation
                or treatment planning.
              </li>
              <li>
                <span className="font-medium text-gray-800">Technical information:</span> browser
                type, device, and pages visited, collected automatically to help improve the
                website.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">2. How We Use Your Information</h3>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>To schedule appointments and respond to your enquiries.</li>
              <li>To provide medical consultation, treatment, and follow-up care.</li>
              <li>To share appointment reminders, reports, and post-operative instructions.</li>
              <li>To meet legal, regulatory, and medical record-keeping requirements.</li>
              <li>To improve our services and the functioning of this website.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">3. Confidentiality of Medical Records</h3>
            <p>
              All patient health information is treated as strictly confidential. Access is limited
              to the treating surgeon and authorised clinical staff directly involved in your care.
              Medical records are retained in accordance with applicable Indian medical record
              regulations.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">4. Sharing of Information</h3>
            <p>
              We do not sell, rent, or trade your personal or health information. Information may be
              shared only with referring or treating doctors involved in your care, diagnostic
              laboratories and imaging centres where required, insurance providers with your
              consent, or where disclosure is required by law or court order.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">5. Photographs and Clinical Images</h3>
            <p>
              Surgical or clinical images are used for educational, academic, or promotional
              purposes only with your explicit written consent. Identifying features are removed
              wherever possible.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">6. Data Security</h3>
            <p>
              We apply reasonable administrative, technical, and physical safeguards to protect your
              information against unauthorised access, alteration, or disclosure. However, no method
              of transmission over the internet is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">7. Cookies</h3>
            <p>
              This website may use cookies and similar technologies to remember preferences and
              understand how the site is used. You can disable cookies in your browser settings,
              though some features may not work as intended.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">8. Third-Party Links</h3>
            <p>
              Our website may contain links to external sites, including social media platforms and
              embedded maps. We are not responsible for the privacy practices or content of those
              third-party sites.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">9. Your Rights</h3>
            <p>
              You may request access to the personal information we hold about you, ask for
              corrections to inaccurate details, or withdraw consent for non-essential
              communication. Requests can be made using the contact details below.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">10. Medical Disclaimer</h3>
            <p>
              Content on this website is provided for general information only and does not
              constitute medical advice, diagnosis, or treatment. Always consult a qualified doctor
              regarding your individual condition. Treatment outcomes vary from patient to patient.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">11. Changes to This Policy</h3>
            <p>
              We may update this policy from time to time. Any revisions will be posted on this page
              with a revised effective date.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 mb-2">12. Contact Us</h3>
            <p>
              For any questions about this policy or your information, contact Novo Robotic Surgery
              Centre, B-12/13, near Dabur Lane, Anand Vihar, Kaushambi, Ghaziabad, Uttar Pradesh
              201010.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={`tel:${PHONES[0].dial}`}
                className="inline-flex items-center gap-2 font-medium text-gray-800 hover:text-[#22C8C8] transition-colors"
              >
                <span style={{ color: TEAL }}><Phone /></span>
                {PHONES[0].display}
              </a>
              <a
                href="mailto:inquiry@novorobotic.com"
                className="inline-flex items-center gap-2 font-medium text-gray-800 hover:text-[#22C8C8] transition-colors"
              >
                <span style={{ color: TEAL }}><Mail /></span>
                inquiry@novorobotic.com
              </a>
            </div>
          </section>
        </div>

        {/* footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-gray-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white hover:brightness-95 transition"
            style={{ backgroundColor: TEAL }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

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
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: TEAL }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(true)}
                      className={`${linkClass} text-left`}
                    >
                      Privacy Policy
                    </button>
                  </li>
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
                  target="_blank"
                  rel="noopener noreferrer"
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
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="hover:text-[#22C8C8] transition-colors font-medium"
            >
              Privacy Policy
            </button>
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

      {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
}