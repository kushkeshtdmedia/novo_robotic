import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Crosshair,
  Eye,
  Hand,
  ShieldCheck,
  Award,
  Cpu,
  HeartHandshake,
  CalendarCheck,
  Phone,
  MapPin,
} from 'lucide-react';
import FertilityImage from '../../assets/images/FertilityPreservingSurgery1.jpeg';
import FertilityImage2 from '../../assets/images/FertilityPreservingSurgery2.jpeg';
import FertilityImage3 from '../../assets/images/FertilityPreservingSurgery3.jpeg';
const advantages = [
  {
    icon: Eye,
    title: '3D High-Definition Visualisation',
    body: 'Magnified 10x views allow surgeons to distinguish between healthy tissue and diseased tissue with microscopic precision.',
  },
  {
    icon: Hand,
    title: 'Wristed Instruments',
    body: 'Extreme dexterity that mimics the human wrist but without tremor, perfect for complex suturing in the reproductive area.',
  },
  {
    icon: ShieldCheck,
    title: 'Fewer Post-Surgical Adhesions',
    body: 'Minimally invasive technique results in less internal scarring, significantly improving future conception rates.',
  },
];

const procedures = [
  {
    title: 'Robotic Myomectomy',
    body: 'Removal of fibroids with multi-layer uterine reconstruction for strength during future pregnancies.',
  },
  {
    title: 'Resection of Deep Endometriosis',
    body: 'Meticulous excision of endometriosis from pelvic organs while protecting nerves and blood supply.',
  },
  {
    title: 'Robotic Ovarian Cystectomy',
    body: 'Removal of ovarian cysts with maximum preservation of the healthy egg-producing ovarian cortex.',
  },
  {
    title: 'Early-Stage Gynae Oncology',
    body: 'Fertility-sparing approaches for early cervical and uterine cancers using robotic precision.',
  },
];

const recovery = [
  { title: 'Hospital Stay', body: 'Same-day or overnight stay. Most patients are mobile within hours.' },
  { title: 'Pain Management', body: 'Minimal discomfort managed with basic OTC medications.' },
  { title: 'Daily Activities', body: 'Return to work and light activity within 1 to 2 weeks.' },
  { title: 'Pregnancy Planning', body: 'Typically safe to start planning pregnancy in 3 to 6 months.' },
];

const whyNovo = [
  {
    icon: Award,
    title: 'Specialised Surgical Expertise',
    body: 'Our surgeons are fellowship-trained leaders in minimally invasive reproductive surgery.',
  },
  {
    icon: Cpu,
    title: 'State-of-the-Art Technology',
    body: 'We deploy the latest da Vinci robotic systems for maximum clinical outcome accuracy.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalised Care Path',
    body: 'Every patient receives a unique surgical and recovery plan tailored to their fertility goals.',
  },
];

export default function FertilityPreservingSurgery() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="py-16 lg:py-24 bg-[#eaf0f3]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block rounded-full bg-[#005a65] px-4 py-1.5 font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-white">
              Robotic Gynaecology
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#005a65]">
              Protecting the Future: Robotic-Assisted Fertility-Preserving Surgery
            </h1>

            <p className="mt-6 text-[#3e484a] leading-relaxed max-w-lg">
              Advanced surgical precision designed to treat complex conditions while safeguarding
              your dream of future motherhood.
            </p>

            <NavLink
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#0d7481] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#005a65] transition-colors"
            >
              Request a consultation <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </NavLink>
          </div>

          <div className="relative">
            <img
              src={FertilityImage}
              alt="Robotic gynaecological surgery in progress"
              className="w-full h-72 lg:h-[420px] rounded-xl object-cover"
            />

            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg bg-white/85 backdrop-blur-[20px] px-5 py-3 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <Crosshair className="w-5 h-5 text-[#0d7481]" strokeWidth={2} />
              <div>
                <p className="text-lg font-bold text-[#005a65] leading-none">0.1mm</p>
                <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-1">
                  Precision Scale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UNDERSTANDING THE NEED ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src={FertilityImage2}
            alt="Gynaecologist counselling a patient"
            className="w-full h-72 lg:h-[400px] rounded-xl object-contain lg:object-cover"
          />

          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#005a65]">
              Understanding the Need
            </h2>

            <p className="mt-5 text-[#3e484a] leading-relaxed">
              For many women, complex gynaecological conditions like endometriosis or large fibroids
              present a daunting choice between health and future fertility.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              At Novo Robotic Surgery Centre, we believe you shouldn&apos;t have to choose. Our
              robotic platform provides a compassionate alternative, allowing for the meticulous
              removal of diseased tissue while preserving the integrity of reproductive organs.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <Check className="w-5 h-5 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-bold text-sm">Endometriosis Management</h3>
                  <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">
                    Precise excision of deep infiltrating lesions without damaging surrounding
                    organs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-5 h-5 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-bold text-sm">Fibroid Specialist Care</h3>
                  <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">
                    Organ-sparing removal even for complex, multiple or deeply embedded fibroids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUOTE BAND ============ */}
      <section className="py-20 lg:py-24 bg-[#005a65]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-[40px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
            An Extension of the Surgeon&apos;s Hands
          </h2>
          <p className="mt-6 text-sm lg:text-base text-white/75 leading-relaxed">
            Robotic surgery isn&apos;t about the machine replacing the doctor. It&apos;s about
            empowering our world-class surgeons with unparalleled vision and dexterity. In fertility
            preservation, every millimetre matters.
          </p>
          <span className="mt-8 mx-auto block h-1 w-16 rounded-full bg-[#fdd350]" />
        </div>
      </section>

      {/* ============ KEY ADVANTAGES ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#005a65]">
              Key Advantages for Future Pregnancy
            </h2>
            <p className="mt-4 text-sm text-[#3e484a]">
              Technology that works in harmony with your body.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-xl bg-white p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <a.icon className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-5 font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCEDURES ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#005a65]">
              Common Fertility-Sparing Procedures
            </h2>
            <p className="mt-4 text-sm text-[#3e484a]">
              Our expertise spans the most complex gynaecological surgeries, all focused on a single
              goal: preservation.
            </p>

            <img
              src={FertilityImage3}
              alt="Illustration of the female reproductive anatomy"
              className="mt-8 w-full h-56 rounded-xl object-contain lg:object-cover bg-[#e8f6f8]"
            />
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {procedures.map((p) => (
              <div
                key={p.title}
                className="rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] flex flex-col"
              >
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed flex-1">{p.body}</p>
                <NavLink
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#0d7481] hover:text-[#005a65] transition-colors"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECOVERY TIMELINE ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#005a65]">
              Recovery &amp; Next Steps
            </h2>
            <p className="mt-4 text-sm text-[#3e484a]">
              A clear path back to your normal life and your future goals.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-4 left-[12%] right-[12%] h-px bg-[#bec8cb]" />

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {recovery.map((r, i) => (
                <div key={r.title}>
                  <span
                    className={`mx-auto h-8 w-8 rounded-full flex items-center justify-center font-[IBM_Plex_Sans] text-[11px] font-bold text-white ${
                      i === recovery.length - 1 ? 'bg-[#fdd350] text-[#241a00]' : 'bg-[#0d7481]'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-bold text-sm">{r.title}</h3>
                  <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY NOVO ============ */}
      <section className="py-20 lg:py-28 bg-[#0d7481]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-white">
              Why Choose Novo Robotic Surgery Centre?
            </h2>

            <div className="mt-10 space-y-7">
              {whyNovo.map((w) => (
                <div key={w.title} className="flex gap-4">
                  <span className="h-9 w-9 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                    <w.icon className="w-4 h-4 text-[#fdd350]" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-sm">{w.title}</h3>
                    <p className="mt-1 text-sm text-white/70 leading-relaxed">{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white/10 border border-white/15 p-6">
            <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
              Robotic-Assisted Fertility-Preserving Surgery · Novo Robotic Hospital
            </p>
            <img
              src="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Surgeon at the robotic console"
              className="mt-4 w-full h-64 lg:h-80 rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 rounded-xl overflow-hidden shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
            <div className="lg:col-span-5 bg-[#005a65] p-8 lg:p-12">
              <h2 className="text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
                Start Your Journey Toward Healing
              </h2>
              <p className="mt-5 text-sm text-white/70 leading-relaxed">
                Have questions about fertility preservation? Our specialists are here to provide the
                clarity and confidence you need to take the next step.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <a
                  href="tel:+918081888777"
                  className="flex items-center gap-3 font-bold text-white hover:text-[#fdd350] transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2} /> +91 8081 888 777
                </a>
                <p className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-4 h-4" strokeWidth={2} /> Novo Centre, Kaushambi, Ghaziabad
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 lg:p-12">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="fp-name"
                    className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                  >
                    Full Name
                  </label>
                  <input
                    id="fp-name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fp-phone"
                    className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="fp-phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fp-interest"
                    className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a]"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="fp-interest"
                    defaultValue="general"
                    className="mt-2 w-full rounded-lg bg-[#f3f3f6] border border-transparent px-4 py-3 text-sm outline-none focus:border-2 focus:border-[#0d7481] focus:bg-white transition-colors"
                  >
                    <option value="general">General consultation</option>
                    <option value="myomectomy">Robotic myomectomy (fibroids)</option>
                    <option value="endometriosis">Endometriosis management</option>
                    <option value="cystectomy">Ovarian cystectomy</option>
                    <option value="onco">Gynae oncology — fertility sparing</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#fdd350] px-6 py-4 text-sm font-bold text-[#241a00] hover:bg-[#ebc241] transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" strokeWidth={2} /> Book initial consultation
                </button>

                <p className="text-center font-[IBM_Plex_Sans] text-[10px] text-[#6e797b]">
                  By submitting, you agree to be contacted by our clinical coordination team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}