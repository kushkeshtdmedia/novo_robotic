import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Logo from '../../src/assets/images/Logo.png';

type ServiceItem = { label: string; slug: string };
type ServiceCategory = { label: string; sub: ServiceItem[] };

const serviceMenu: ServiceCategory[] = [
  {
    label: 'General Surgery',
    sub: [
      { label: 'Gallbladder Surgery', slug: 'gallbladder-surgery' },
      { label: 'Hernia Surgery', slug: 'hernia-surgery' },
      { label: 'Appendix Surgery', slug: 'appendix-surgery' },
      { label: 'Stomach Surgery', slug: 'stomach-surgery' },
      { label: 'Oesophagus Surgery', slug: 'oesophagus-surgery' },
    ],
  },
{
  label: 'Bariatric & Metabolic Surgery',
  sub: [
    { label: 'Robotic Sleeve Gastrectomy', slug: 'robotic-sleeve-gastrectomy' },
    { label: 'Robotic Roux-en-Y Gastric Bypass', slug: 'roux-en-gastric-bypass' },
    { label: 'Robotic Mini Gastric Bypass', slug: 'mini-gastric-bypass' },
  ],
},
  {
    label: 'Cancer Surgery',
    sub: [
      { label: 'Colorectal Cancer Surgery', slug: 'colorectal-cancer-surgery' },
      { label: 'Gallbladder Cancer Surgery', slug: 'gallbladder-cancer-surgery' },
      {label: 'Gynecologic Cancer Surgery', slug: 'gynecologic-cancer-surgery'},
      { label: 'Stomach Cancer Surgery', slug: 'stomach-surgery' }
      // { label: 'Pancreatic Cancer Surgery', slug: 'pancreatic-cancer-surgery' },
    ],
  },
  {
    label: 'Gynecological Surgery',
    sub: [
      { label: 'Fertility Preserving Surgery', slug: 'fertility-preserving-surgery' },
      { label: 'Benign Uterus & Ovary Disorders', slug: 'benign-uterine-ovarian-disorders' },
    ],
  },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Doctors', to: '/doctors/dr-vikrant-sharma' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeSub, setActiveSub] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const closeAll = () => {
    setMegaOpen(false);
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSubOpen(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Novo Robotic Hospital" className="h-8 w-auto object-contain" />
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-0.5' : 'text-gray-600 hover:text-teal-600'}`
            }
          >
            Home
          </NavLink>

          <div className="relative" ref={megaRef} onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${megaOpen ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}>
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
            </button>

            {megaOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] rounded-2xl shadow-2xl bg-white shadow-gray-300/40 border border-gray-100 overflow-hidden flex"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <div className="w-64 py-4 bg-gray-50">
                  {serviceMenu.map((cat, i) => (
                    <button
                      key={cat.label}
                      onMouseEnter={() => setActiveSub(i)}
                      className={`w-full text-left px-5 py-3 flex items-center justify-between gap-2 text-sm font-medium transition-colors ${activeSub === i ? 'bg-teal-600 text-white' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'}`}
                    >
                      <span>{cat.label}</span>
                      <ChevronRight size={14} className="flex-shrink-0" />
                    </button>
                  ))}
                </div>

                <div className="flex-1 py-6 px-6">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-teal-600">
                    {serviceMenu[activeSub].label}
                  </p>
                  <ul className="space-y-1">
                    {serviceMenu[activeSub].sub.map((item) => (
                      <li key={item.slug}>
                        <NavLink
                          to={`/services/${item.slug}`}
                          onClick={closeAll}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                        >
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full group-hover:bg-teal-600 flex-shrink-0" />
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-0.5' : 'text-gray-600 hover:text-teal-600'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/contact">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md">
              Book Appointment
            </button>
          </NavLink>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto bg-white border-gray-100">
          <NavLink to="/" end onClick={closeAll} className={({ isActive }) => `py-2 font-medium text-sm ${isActive ? 'text-teal-600' : 'text-gray-700'}`}>
            Home
          </NavLink>

          <div>
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex items-center justify-between py-2 font-medium text-sm text-gray-700">
              Services
              <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 border-l-2 border-teal-100 mt-1 space-y-1">
                {serviceMenu.map((cat, i) => (
                  <div key={cat.label}>
                    <button
                      onClick={() => setMobileSubOpen(mobileSubOpen === i ? null : i)}
                      className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-600 hover:text-teal-600"
                    >
                      {cat.label}
                      <ChevronDown size={12} className={`transition-transform ${mobileSubOpen === i ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSubOpen === i && (
                      <div className="pl-3 border-l border-teal-100 space-y-1 mb-1">
                        {cat.sub.map((item) => (
                          <NavLink
                            key={item.slug}
                            to={`/services/${item.slug}`}
                            onClick={closeAll}
                            className="block py-1.5 text-xs text-gray-500 hover:text-teal-600"
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map(({ label, to }) => (
            <NavLink key={label} to={to} onClick={closeAll} className={({ isActive }) => `py-2 font-medium text-sm ${isActive ? 'text-teal-600' : 'text-gray-700'}`}>
              {label}
            </NavLink>
          ))}

          <NavLink to="/contact" onClick={closeAll}>
            <button className="mt-2 bg-yellow-400 text-gray-900 font-semibold px-5 py-2.5 rounded-full w-fit text-sm">
              Book Appointment
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}