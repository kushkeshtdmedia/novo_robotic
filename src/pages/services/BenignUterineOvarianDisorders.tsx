import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Accessibility,
  Circle,
  Droplet,
  Sparkles,
  Layers,
  Cpu,
  Eye,
  HeartHandshake,
} from 'lucide-react';
import Bengin from '../../assets/images/Bengin.png';

const conditions = [
  {
    icon: Circle,
    title: 'Uterine Fibroids (Leiomyomas)',
    body: 'Fibroids are non-cancerous growths that develop within or on the muscular wall of the uterus. They may cause heavy menstrual bleeding, pelvic pressure, frequent urination, constipation, pain during intercourse, and fertility problems in some women.',
  },
  {
    icon: Droplet,
    title: 'Ovarian Cysts',
    body: 'Ovarian cysts are fluid-filled sacs that develop on or within the ovaries. While many cysts disappear naturally without treatment, larger or persistent cysts may cause pelvic pain, bloating, discomfort, or complications such as ovarian torsion, which requires immediate medical attention.',
  },
  {
    icon: Sparkles,
    title: 'Endometriosis and Endometriomas',
    body: 'Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus. It commonly affects the ovaries, fallopian tubes, and pelvic tissues, causing severe menstrual pain, chronic pelvic pain, painful intercourse, infertility, and ovarian cysts known as endometriomas.',
  },
  {
    icon: Layers,
    title: 'Adenomyosis',
    body: 'Adenomyosis develops when the tissue lining the uterus grows into its muscular wall. This condition often results in heavy menstrual bleeding, severe menstrual cramps, chronic pelvic pain, and an enlarged, tender uterus.',
  },
];

const indications = [
  { body: 'Symptoms significantly affect daily life.' },
  { body: 'Heavy bleeding leads to anemia.' },
  { body: 'Pelvic pain becomes persistent or severe.' },
  { body: 'Large fibroids or ovarian cysts continue to grow.' },
  { body: 'Fertility is affected.' },
  { body: 'Conservative treatments fail to provide adequate relief.' },
];

const procedures = [
  {
    icon: Circle,
    title: 'Robotic Myomectomy',
    body: 'Removes uterine fibroids while preserving the uterus, making it an excellent option for women who wish to maintain their fertility.',
  },
  {
    icon: Droplet,
    title: 'Robotic Ovarian Cystectomy',
    body: 'Removes ovarian cysts while preserving healthy ovarian tissue whenever possible, helping protect future reproductive function.',
  },
  {
    icon: Layers,
    title: 'Robotic Hysterectomy',
    body: 'Removes the uterus, and when necessary, the cervix or ovaries, for conditions such as severe fibroids, adenomyosis, or chronic abnormal uterine bleeding.',
  },
  {
    icon: Sparkles,
    title: 'Robotic Endometriosis Excision',
    body: 'Allows precise removal of endometriosis lesions and scar tissue, helping relieve chronic pain and improve fertility outcomes.',
  },
];

export default function BenignUterineOvarianDisorders() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-[#eef2f4]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/5">
          <img
            src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Robotic gynaecological surgery suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef2f4] via-[#eef2f4]/85 to-[#eef2f4]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#0d7481]">
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.5} /> Advanced
              Robotic Gynaecology
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em]">
              Understanding Benign Disorders of the Uterus and Ovaries:
              <br />
              <span className="text-[#0d7481]">
                Advanced Robotic Surgery in Kaushambi, Ghaziabad
              </span>
            </h1>

            <p className="mt-6 text-[#3e484a] leading-relaxed max-w-lg">
              Benign disorders of the uterus and ovaries are non-cancerous
              conditions that affect the female reproductive system. Although
              these conditions are not cancerous, they can significantly impact a
              woman&apos;s quality of life by causing pelvic pain, heavy or
              irregular menstrual bleeding, abdominal discomfort, infertility, or
              pressure on nearby organs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#005a65] px-7 py-3.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#0d7481] transition-colors"
              >
                Consult our specialists{' '}
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </NavLink>
              <a
                href="#conditions"
                className="inline-flex items-center gap-2 rounded-lg border border-[#0d7481] px-7 py-3.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481] hover:bg-[#0d7481] hover:text-white transition-colors"
              >
                Explore procedures
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UNDERSTANDING ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#0d7481]">
              Understanding Benign Reproductive Conditions
            </h2>

            <p className="mt-6 text-[#3e484a] leading-relaxed">
              Common benign gynecological conditions include uterine fibroids,
              ovarian cysts, adenomyosis, endometriosis, and benign ovarian
              tumors.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              Depending on the condition and its severity, treatment may range
              from medication and lifestyle modifications to advanced minimally
              invasive procedures such as robotic-assisted surgery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#eeeef0] p-7">
              <ShieldCheck className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
              <h3 className="mt-5 text-lg font-semibold">Non-Cancerous</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                Non-cancerous conditions that affect the female reproductive
                system.
              </p>
            </div>

            <div className="rounded-xl bg-[#eeeef0] p-7 sm:mt-10">
              <Accessibility
                className="w-6 h-6 text-[#0d7481]"
                strokeWidth={2}
              />
              <h3 className="mt-5 text-lg font-semibold">Quality of Life</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                Relieving pelvic pain, heavy bleeding, abdominal discomfort and
                pressure on nearby organs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONDITIONS ============ */}
      <section id="conditions" className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#0d7481]">
              Common Benign Conditions of the Uterus and Ovaries
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 relative rounded-xl overflow-hidden bg-[#e8f6f8] min-h-[260px]">
              <img
                src={Bengin}
                alt="Anatomical illustration of the uterus and ovaries"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#003b43]/90 to-transparent p-6">
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                  Anatomical Overview
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {conditions.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 shrink-0 rounded-full bg-[#e8f6f8] flex items-center justify-center">
                      <c.icon
                        className="w-4 h-4 text-[#0d7481]"
                        strokeWidth={2}
                      />
                    </span>
                    <h3 className="text-lg font-semibold leading-snug">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-[#3e484a] leading-relaxed">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHEN IS SURGERY RECOMMENDED ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Gynaecologist reviewing a scan with a patient"
            className="w-full h-72 lg:h-[420px] rounded-xl object-contain lg:object-cover"
          />

          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#0d7481]">
              When Is Surgery Recommended?
            </h2>
            <p className="mt-5 text-[#3e484a] leading-relaxed">
              Many benign gynecological conditions can be managed with
              medications, hormonal therapy, or regular monitoring. However,
              surgery may be recommended when:
            </p>

            <div className="mt-10 space-y-6">
              {indications.map((i) => (
                <div key={i.body} className="flex gap-4">
                  <Check
                    className="w-5 h-5 shrink-0 text-[#0d7481] mt-0.5"
                    strokeWidth={2.5}
                  />
                  <p className="text-sm text-[#3e484a] leading-relaxed">
                    {i.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW ROBOTIC SURGERY HELPS ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#0d7481]">
              How Robotic Surgery Helps
            </h2>
            <p className="mt-6 text-[#3e484a] leading-relaxed">
              Robotic-assisted gynecological surgery is an advanced form of
              minimally invasive surgery that allows surgeons to perform complex
              procedures through a few small incisions with exceptional
              precision.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              The robotic system does not perform the surgery independently.
              Every movement is completely controlled by an experienced robotic
              surgeon, who operates from a high-definition console with magnified
              3D visualization and specialized robotic instruments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <Cpu className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
              <h3 className="mt-5 text-lg font-semibold">Surgeon Controlled</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                The robotic system does not perform the surgery independently.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] sm:mt-10">
              <Eye className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
              <h3 className="mt-5 text-lg font-semibold">Magnified 3D View</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                A high-definition console with magnified 3D visualization and
                specialized robotic instruments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COMMON ROBOTIC PROCEDURES ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#0d7481]">
              Common Robotic Gynecological Procedures
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedures.map((p) => (
              <div
                key={p.title}
                className="rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <span className="h-9 w-9 rounded-full bg-[#e8f6f8] flex items-center justify-center">
                  <p.icon className="w-4 h-4 text-[#0d7481]" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[#3e484a] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECOVERY ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#0d7481]">
              Recovery After Robotic Surgery
            </h2>
            <p className="mt-6 text-[#3e484a] leading-relaxed">
              One of the greatest benefits of robotic-assisted surgery is faster
              recovery. Most patients experience less postoperative discomfort
              than with conventional open surgery and can begin walking on the
              same day of the procedure. Hospital stays are generally shorter,
              and many patients return to their normal daily activities much
              sooner, although heavy lifting should be avoided for approximately
              4–6 weeks as advised by the surgeon.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              Recovery varies depending on the procedure performed and the
              individual&apos;s overall health, so following your surgeon&apos;s
              postoperative instructions is essential.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Patient recovering after robotic gynaecological surgery"
            className="w-full h-72 lg:h-[420px] rounded-xl object-contain lg:object-cover"
          />
        </div>
      </section>

      {/* ============ WHY CHOOSE NOVO ============ */}
      <section className="py-20 lg:py-28 bg-[#005a65]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-white">
              Why Choose Novo Robotic Surgery Centre?
            </h2>

            <p className="mt-6 text-white/80 leading-relaxed">
              At Novo Robotic Surgery Centre, we combine advanced robotic
              technology with experienced surgical expertise to deliver safe,
              precise, and patient-centered care.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              Our team is dedicated to providing personalized treatment plans for
              women with benign gynecological conditions, ensuring the best
              possible outcomes with minimal discomfort. We perform complex
              procedures with exceptional precision while preserving healthy
              tissue whenever possible.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 border border-white/15 p-8">
            <span className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center">
              <HeartHandshake
                className="w-4 h-4 text-[#fdd350]"
                strokeWidth={2}
              />
            </span>
            <p className="mt-6 text-white leading-relaxed">
              If you are experiencing persistent pelvic pain, heavy menstrual
              bleeding, ovarian cysts, fibroids, or other benign gynecological
              conditions, consult our experts to determine whether robotic
              surgery is the right treatment option for you.
            </p>

            <NavLink
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-7 py-3.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#241a00] hover:bg-[#ebc241] transition-colors"
            >
              Consult our experts{' '}
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}