import { Linkedin, Twitter, Search } from 'lucide-react';

const doctors = [
  { name: 'Dr. Elias Vance', title: 'Chief of Robotics', specialty: 'Cardiovascular Robotic Specialist', exp: '18 yrs', image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg' },
  { name: 'Dr. Sarah Chen', title: 'Head of Spine', specialty: 'Robotic Orthopedic Surgeon', exp: '14 yrs', image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg' },
  { name: 'Dr. Julian Thorne', title: 'Oncology Lead', specialty: 'Minimally Invasive Specialist', exp: '16 yrs', image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg' },
  { name: 'Dr. Amara Okoro', title: 'Neurologist', specialty: 'Neuro-Robotic Consultant', exp: '12 yrs', image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg' },
  { name: 'Dr. Marcus Reid', title: 'Cardiologist', specialty: 'Heart Bypass Specialist', exp: '20 yrs', image: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg' },
  { name: 'Dr. Priya Nair', title: 'Ophthalmologist', specialty: 'Laser Vision Correction', exp: '10 yrs', image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg' },
];

export default function DoctorsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Team</p>
          <h1 className="text-5xl font-black text-gray-900 mb-5">Meet Our Surgeons</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Globally recognized pioneers in robotic-assisted medicine, combining decades of expertise with cutting-edge technology.
          </p>
          <div className="mt-8 max-w-md mx-auto relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Doctors grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div key={doc.name} className="group rounded-3xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden h-72">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                    <Linkedin size={14} />
                  </button>
                  <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                    <Twitter size={14} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mb-1">{doc.title}</p>
                <h3 className="font-bold text-gray-900 text-lg">{doc.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{doc.specialty}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-teal-50 text-teal-700 font-semibold px-3 py-1 rounded-full">{doc.exp} experience</span>
                  <button className="text-sm text-teal-600 font-semibold hover:underline">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
