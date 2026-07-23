import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-20">
      <div className="max-w-3xl w-full bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-10 text-center">
        <p className="text-teal-600 font-semibold uppercase tracking-[0.3em] mb-4">404 — Page Not Found</p>
        <h1 className="text-5xl sm:text-6xl font-black text-slate-900 mb-6">Where are you going?</h1>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          The page you are looking for does not exist or has been moved. Use the button below to return to the homepage and continue exploring our robotic surgery services.
        </p>
        <NavLink to="/" className="inline-flex items-center justify-center rounded-full bg-teal-700 px-8 py-4 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
          Back to Home
        </NavLink>
      </div>
    </section>
  );
}
