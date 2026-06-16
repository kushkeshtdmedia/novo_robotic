import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const info = [
  { icon: Phone, label: 'Emergency Line', value: '+91 98765 43210', sub: 'Available 24/7' },
  { icon: Mail, label: 'Email Us', value: 'care@novorobotic.com', sub: 'Reply within 2 hours' },
  { icon: MapPin, label: 'Location', value: '14 Precision Avenue, Mumbai', sub: 'Maharashtra, India 400001' },
  { icon: Clock, label: 'OPD Hours', value: 'Mon – Sat: 8am – 8pm', sub: 'Sun: Emergency only' },
];

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Reach Us</p>
          <h1 className="text-5xl font-black text-gray-900 mb-5">Get In Touch</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Whether it's booking an appointment or a general inquiry, our team is here for you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          {/* Form */}
          <div className="bg-gray-50 rounded-3xl p-10 shadow-sm">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Send a Message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Phone</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Department</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-600">
                  <option value="">Select Department</option>
                  <option>Robotic Surgery</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Neurology</option>
                  <option>Ophthalmology</option>
                  <option>Oncology</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Message</label>
                <textarea rows={4} placeholder="Tell us about your concern..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none" />
              </div>
              <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-700/25">
                Book Appointment
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {info.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex gap-5 bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{label}</p>
                  <p className="font-bold text-gray-900 mt-0.5">{value}</p>
                  <p className="text-sm text-gray-500">{sub}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden h-64 bg-teal-50 flex items-center justify-center border border-teal-100">
              <div className="text-center">
                <MapPin size={32} className="text-teal-400 mx-auto mb-2" />
                <p className="text-teal-600 font-semibold text-sm">14 Precision Avenue, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
