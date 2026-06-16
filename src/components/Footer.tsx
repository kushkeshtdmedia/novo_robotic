import { NavLink } from 'react-router-dom';

const resources = ['Patient Resources', 'Ethics Guidelines', 'Privacy Policy'];
const contactLinks = ['Contact Support', 'Emergency Line', 'LinkedIn'];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <NavLink to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <span className="font-bold text-gray-900">Novo Robotic Hospital</span>
          </NavLink>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Precision In Care. Leading the way in robotic surgery and empathetic patient recovery since 2014.
          </p>
        </div>

        {/* Resources */}
        <div>
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
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Contact</p>
          <ul className="space-y-3">
            {contactLinks.map((c) => (
              <li key={c}>
                <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">{c}</a>
              </li>
            ))}
          </ul>
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
