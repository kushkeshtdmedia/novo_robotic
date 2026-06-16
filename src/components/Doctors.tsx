import { Linkedin, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const doctors = [
  { name: 'Dr. Elias Vance', title: 'Chief of Robotics', specialty: 'Cardiovascular Robotic Specialist', image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg' },
  { name: 'Dr. Sarah Chen', title: 'Head of Spine', specialty: 'Robotic Orthopedic Surgeon', image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg' },
  { name: 'Dr. Julian Thorne', title: 'Oncology Lead', specialty: 'Minimally Invasive Specialist', image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg' },
  { name: 'Dr. Amara Okoro', title: 'Neurologist', specialty: 'Neuro-Robotic Consultant', image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg' },
];

export default function Doctors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Master Surgeons</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            The humans behind the machines. Meet our globally recognized pioneers in robotic-assisted medicine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div key={doc.name} className="group rounded-3xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden h-64">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                    <Linkedin size={14} />
                  </button>
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                    <Twitter size={14} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mb-1">{doc.title}</p>
                <h3 className="font-bold text-gray-900 text-lg">{doc.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <NavLink to="/doctors">
            <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200">
              View All Surgeons
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
