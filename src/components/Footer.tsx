import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo-B6jBI4Mi.png';

const resources = ['Patient Resources', 'Ethics Guidelines', 'Privacy Policy'];
const contactLinks = ['Contact Support', 'Emergency Line', 'LinkedIn'];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Brand */}
        <div className="md:col-span-1">
          <NavLink to="/" className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="Novo Robotic logo" className="w-16 h-16 object-contain" />
            <div>
              <span className="font-bold text-gray-900 text-lg block">Novo Robotic Hospital</span>
              <p className="text-sm text-gray-500">Precision In Care</p>
            </div>
          </NavLink>

          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Leading the way in robotic surgery and empathetic patient recovery.
          </p>

          <div className="mt-4 text-sm text-gray-600">
            <p className="font-semibold text-gray-700">Address</p>
            <p>Sector 6, Kaushambi, Ghaziabad, Uttar Pradesh</p>
            <p className="mt-2">Phone: +91 12345 67890</p>
          </div>
        </div>

        {/* Resources */}
        <div className="md:col-span-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Resources</p>
          <ul className="space-y-3">
            {resources.map((r) => (
              <li key={r}>
                <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">{r}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Contact</p>
          <ul className="space-y-3">
            {contactLinks.map((c) => (
              <li key={c}>
                <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">{c}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="md:col-span-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Find Us</p>
          <div className="w-full h-40 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Novo Robotic Location"
              src="https://www.google.com/maps?q=Novo+Robotic+Surgery+Centre+Ghaziabad&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          &copy; 2024 Novo Robotic Hospital. Precision In Care.
        </p>
      </div>
    </footer>
  );
}
