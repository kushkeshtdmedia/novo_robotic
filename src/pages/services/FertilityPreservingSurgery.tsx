import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
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
import FertilityImage3 from '../../assets/images/FertilityImage3.png';;

const advantages = [
  {
    icon: Eye,
    title: '3D High-Definition Visualization',
    body: 'The surgeon sees the pelvic cavity magnified up to 10x in high-definition 3D, making it easier to distinguish between abnormal tissue (like a tumor or endometriosis) and healthy reproductive tissue.',
  },
  {
    icon: Hand,
    title: 'Wristed Instruments with Extreme Dexterity',
    body: 'Tiny instruments mimic the human wrist but can rotate with a range of motion far greater than human hands. This makes working in tight spaces—like deep in the pelvic bowl—much safer.',
  },
  {
    icon: ShieldCheck,
    title: 'Fewer Post-Surgical Adhesions (Scar Tissue)',
    body: 'Traditional open surgery exposes pelvic tissues to dry air and handling, causing internal scar tissue that can block fallopian tubes. Robotic surgery uses microscopic incisions and minimizes tissue trauma, drastically reducing the risk of fertility-blocking scars.',
  },
];

const procedures = [
  {
    title: 'Robotic Myomectomy',
    involves: 'Removal of uterine fibroids (benign growths).',
    helps:
      'The robotic system enables precise removal of fibroids and meticulous multi-layer reconstruction of the uterine wall, helping preserve uterine strength for future pregnancies when clinically appropriate.',
  },
  {
    title: 'Robotic Resection of Deep Endometriosis',
    involves:
      'Removal of deep endometriosis affecting pelvic organs and surrounding tissues.',
    helps:
      'Enhanced precision helps surgeons remove diseased tissue while minimizing injury to the ovaries, fallopian tubes, urinary tract, and other healthy pelvic structures that play a role in fertility.',
  },
  {
    title: 'Robotic Ovarian Cystectomy',
    involves:
      'Removal of complex ovarian cysts, such as endometriomas or dermoid cysts.',
    helps:
      'Precise dissection helps remove the cyst while preserving as much healthy ovarian tissue as possible, supporting ovarian function and future fertility.',
  },
  {
    title:
      'Fertility-Sparing Robotic Surgery for Early-Stage Gynecologic Cancers',
    involves:
      'Selected procedures, such as radical trachelectomy and fertility-preserving surgical staging, for carefully selected patients with early-stage gynecologic cancers.',
    helps:
      'In appropriate candidates, these procedures aim to treat cancer while preserving reproductive potential whenever it is considered safe and oncologically appropriate.',
  },
];

const recovery = [
  {
    title: 'Hospital Stay',
    body: 'Many patients are discharged on the same day or after a single overnight stay, depending on the procedure performed and their overall recovery.',
  },
  {
    title: 'Pain Management',
    body: 'Smaller incisions are typically associated with less post-operative pain, reduced need for pain medication, and improved comfort during recovery.',
  },
  {
    title: 'Returning to Daily Activities',
    body: 'Most patients can resume light daily activities within 1 to 2 weeks, although recovery time varies based on the type of surgery and individual healing.',
  },
  {
    title: 'Planning for Pregnancy',
    body: "If your surgery involved the uterus or other reproductive organs, your surgeon will recommend a personalized timeline before trying to conceive. In many cases, patients are advised to wait approximately 3 to 6 months after major uterine reconstruction to allow adequate healing, although the exact timing depends on your condition and your surgeon's assessment.",
  },
];

const whyNovo = [
  {
    icon: Award,
    body: 'When facing complex gynecological conditions, choosing Novo Robotic Surgery Centre in Kaushambi, Ghaziabad means receiving advanced, patient-Centreed care from an experienced team of robotic surgeons. We specialize in minimally invasive, fertility-preserving surgical techniques whenever clinically appropriate, helping women receive effective treatment while preserving their reproductive health whenever possible.',
  },
  {
    icon: Cpu,
    body: 'Using state-of-the-art robotic technology, our surgeons perform highly precise procedures through small keyhole incisions, enabling enhanced surgical accuracy while minimizing trauma to surrounding healthy tissues. Compared with traditional open surgery, this approach is often associated with less postoperative pain, reduced blood loss, smaller scars, a lower risk of complications, shorter hospital stays, and faster recovery.',
  },
  {
    icon: HeartHandshake,
    body: 'At Novo Robotic Surgery Centre, every patient receives a personalized treatment plan tailored to her diagnosis, symptoms, overall health, and future family goals. Our multidisciplinary team combines advanced robotic surgical expertise with evidence-based care to deliver the highest standards of treatment for both benign and selected early-stage gynecological conditions.',
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
              Protecting the Future: Robotic-Assisted Fertility-Preserving
              Surgery in Kaushambi, Ghaziabad
            </h1>

            <p className="mt-6 text-[#3e484a] leading-relaxed max-w-lg">
              For women facing complex gynecological conditions—such as severe
              endometriosis, large fibroids, or early-stage gynecological
              cancers—the path to healing once felt like a difficult compromise.
              Traditional open surgery often carried the risk of significant
              scarring, damage to reproductive organs, or even the need for a
              hysterectomy.
            </p>

            <NavLink
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#0d7481] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#005a65] transition-colors"
            >
              Request a consultation{' '}
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
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
                <p className="text-lg font-bold text-[#005a65] leading-none">
                  10x
                </p>
                <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-1">
                  Magnified 3D View
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY ROBOTIC SURGERY ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src={FertilityImage2}
            alt="Gynaecologist counselling a patient"
            className="w-full h-72 lg:h-[400px] rounded-xl object-contain lg:object-cover"
          />

          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#005a65]">
              Why Choose Robotic Surgery for Fertility Preservation?
            </h2>

            <p className="mt-5 text-[#3e484a] leading-relaxed">
              But today, advanced robotic-assisted surgery has transformed that
              approach. It enables highly specialized surgeons to treat complex
              pelvic conditions with exceptional precision while preserving
              healthy reproductive organs whenever medically possible, helping
              protect your fertility and future family plans.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              When the goal is to preserve fertility, precision is essential.
              Whether protecting healthy ovarian tissue, carefully removing
              disease while preserving the uterus, or reconstructing the uterine
              wall to support a future pregnancy, robotic-assisted surgery
              enables surgeons to perform complex procedures with exceptional
              accuracy while minimizing damage to surrounding healthy tissues.
            </p>
          </div>
        </div>
      </section>

      {/* ============ QUOTE BAND ============ */}
      <section className="py-20 lg:py-24 bg-[#005a65]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xl lg:text-2xl font-bold leading-[1.4] tracking-[-0.01em] text-white">
            Robotic surgery is not performed by a computer—it is an advanced
            surgical technology that is entirely controlled by your surgeon.
          </p>
          <p className="mt-6 text-sm lg:text-base text-white/75 leading-relaxed">
            The robotic system acts as an extension of the surgeon&apos;s hands,
            translating their movements into highly precise, controlled actions
            within the pelvis.
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
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-xl bg-white p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <a.icon className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-5 font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCEDURES ============ */}
    <section className="py-20 lg:py-28 bg-[#f3f3f6]">
  <div className="max-w-7xl mx-auto px-6">
    {/* heading */}
    <div className="max-w-3xl">
      <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#005a65]">
        Common Fertility-Sparing Procedures Performed with Robotic Surgery
      </h2>
      <p className="mt-4 text-[#3e484a] leading-relaxed">
        Depending on your diagnosis, several complex fertility-preserving
        procedures can be performed using advanced robotic-assisted surgical
        technology.
      </p>
    </div>

    <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
      {/* image — sticky, uncropped */}
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <div className="rounded-xl bg-[#e8f6f8] p-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
          <img
            src={FertilityImage3}
            alt="Illustration of the female reproductive anatomy"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* procedures — stacked rows */}
      <div className="lg:col-span-7 space-y-4">
        {procedures.map((p, i) => (
          <article
            key={p.title}
            className="group rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border-l-4 border-[#0d7481] hover:border-[#fdd350] transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0 h-8 w-8 rounded-full bg-[#005a65] flex items-center justify-center font-[IBM_Plex_Sans] text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <h3 className="font-bold text-[#1a1c1e] leading-snug pt-1">
                {p.title}
              </h3>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-5 sm:pl-12">
              <div>
                <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#6e797b]">
                  What It Involves
                </p>
                <p className="mt-1.5 text-sm text-[#3e484a] leading-relaxed">
                  {p.involves}
                </p>
              </div>
              <div>
                <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#6e797b]">
                  How It Helps Preserve Fertility
                </p>
                <p className="mt-1.5 text-sm text-[#3e484a] leading-relaxed">
                  {p.helps}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ============ RECOVERY TIMELINE ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#005a65]">
              What to Expect: Recovery and Next Steps
            </h2>
            <p className="mt-4 text-sm text-[#3e484a] leading-relaxed">
              Because robotic-assisted surgery is performed through small
              keyhole incisions (typically less than 1 cm), it generally causes
              less tissue trauma than traditional open surgery. This often
              results in a smoother recovery and an earlier return to daily
              activities.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-4 left-[12%] right-[12%] h-px bg-[#bec8cb]" />

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {recovery.map((r, i) => (
                <div key={r.title}>
                  <span
                    className={`mx-auto h-8 w-8 rounded-full flex items-center justify-center font-[IBM_Plex_Sans] text-[11px] font-bold text-white ${
                      i === recovery.length - 1
                        ? 'bg-[#fdd350] text-[#241a00]'
                        : 'bg-[#0d7481]'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-bold text-sm">{r.title}</h3>
                  <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                    {r.body}
                  </p>
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
              Why Choose Novo Robotic Surgery Centre for Fertility-Preserving
              Surgery?
            </h2>

            <div className="mt-10 space-y-7">
              {whyNovo.map((w, i) => (
                <div key={i} className="flex gap-4">
                  <span className="h-9 w-9 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                    <w.icon className="w-4 h-4 text-[#fdd350]" strokeWidth={2} />
                  </span>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white/10 border border-white/15 p-6">
            <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
              Robotic-Assisted Fertility-Preserving Surgery · Novo Robotic
              Hospital
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
    
    </div>
  );
}