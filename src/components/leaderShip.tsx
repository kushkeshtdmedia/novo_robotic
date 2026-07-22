import { useState } from 'react';
import { ArrowRight, Award, GraduationCap, Globe, BookOpen, Building2, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Drop the real photos into src/assets/images/ with these exact filenames
import ManralPic from '../../src/assets/images/NarendraSirPic.png'
import VikrantPic from '../../src/assets/images/VikrantSirHome.jpeg';

// Initials avatar shown if a photo is missing or fails to load
function LeaderImage({ src, name, alt }: { src: string; name: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .replace(/^(Mr\.|Dr\.)\s*/, '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  if (failed) {
    return (
      <div className="w-full h-[340px] md:h-[400px] bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
        <span className="text-6xl font-black text-white/90 tracking-wider">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full h-[340px] md:h-[400px] object-cover object-center"
    />
  );
}

const leaders = [
  {
    name: 'Mr. Narendra Singh Manral',
    role: 'Co-Founder & Director',
    subtitle: 'Chairman, TDM Group',
    image: ManralPic,
    bio: 'An astonishing Chairman of TDM Group with enormous experience in entrepreneurship and efficacious brand establishment. A successful leader empowering Technology and Education through different business units — TDM Networks, TD Media and TDM Foundation — crafting an era of confidence, connexion and contentment. On his second voyage as TDM, Mr. Manral is now disseminating his annexes to healthcare via Novo Robotic.',
    highlights: [
      { icon: Building2, text: 'Chairman — TDM Networks, TD Media & TDM Foundation' },
      { icon: Users, text: 'Empowering Technology & Education across business units' },
      { icon: Award, text: 'Proven brand establishment & entrepreneurial leadership' },
    ],
  },
  {
    name: 'Dr. Vikrant Sharma',
    role: 'Co-Founder & Director',
    subtitle: 'Lead Robotic & Bariatric Surgeon',
    image: VikrantPic,
    bio: 'A distinguished Bariatric, Metabolic, and Laparoscopic Gynecological Oncology surgeon, renowned in Kaushambi (GZB) and Delhi NCR. He earned his Master of Surgery from PGI, Rohtak, and pursued Superspecialist training in Minimal Access Surgery under the esteemed Oncosurgeon Dr. Shailesh Puntambekar in Pune. He further trained at prestigious institutions in the United Kingdom, Belgium and the USA, specializing in Bariatric and Robotic Surgery.',
    highlights: [
      { icon: GraduationCap, text: 'MS — PGI, Rohtak · Minimal Access Surgery superspecialisation' },
      { icon: Globe, text: 'Trained in the UK, Belgium & USA in Bariatric and Robotic Surgery' },
      { icon: BookOpen, text: '20+ papers published nationally & internationally' },
      { icon: Award, text: 'Heads a Robotic Surgery Training Academy for young surgeons' },
    ],
  },
];

export default function Leadership() {
  return (
    <section className="py-24 bg-white" aria-labelledby="leadership-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Led by Expert Hands, Driven by Technology
          </p>
          <h2 id="leadership-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Leadership
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Technology is only as effective as the hands that guide it. Novo Robotic Surgery Centre is built on the vision of two co-founders bridging enterprise and medicine.
          </p>
        </div>

        <div className="space-y-10">
          {leaders.map((leader, i) => (
            <article
              key={leader.name}
              className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center bg-slate-50 rounded-3xl p-6 md:p-10 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className={`md:col-span-2 relative ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <LeaderImage
                    src={leader.image}
                    name={leader.name}
                    alt={`${leader.name} — ${leader.role}, Novo Robotic Surgery Centre`}
                  />
                </div>
                <div className="absolute bottom-5 left-5 bg-teal-700 text-white rounded-2xl px-5 py-3 shadow-xl">
                  <p className="text-sm font-black leading-none">{leader.role}</p>
                  <p className="text-xs text-teal-200 mt-1">{leader.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3">
                <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase mb-4">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  {leader.role}
                </span>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-teal-600 font-semibold text-sm mb-5">{leader.subtitle}</p>

                <p className="text-gray-600 leading-relaxed mb-7">{leader.bio}</p>

                <ul className="space-y-4">
                  {leader.highlights.map((h) => {
                    const Icon = h.icon;
                    return (
                      <li key={h.text} className="flex gap-4 group">
                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors duration-300">
                          <Icon size={16} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed pt-2.5">{h.text}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement + CTA */}
        <div className="mt-12 bg-teal-800 rounded-3xl px-8 py-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-700/40 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                We don't just treat conditions — we care for people
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Our dedicated multidisciplinary team supports you at every stage of your journey, from your initial consultation and diagnosis to surgery and personalized post-operative recovery.
              </p>
            </div>
            <NavLink to="/contact" className="flex-shrink-0">
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 group whitespace-nowrap">
                Book a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}