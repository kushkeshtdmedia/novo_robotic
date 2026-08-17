import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Scale,
  TrendingDown,
  HeartPulse,
  CalendarDays,
  Stethoscope,
  Cpu,
  Scissors,
  GitMerge,
  Crosshair,
  Droplet,
  Timer,
  RefreshCw,
  Utensils,
  Phone,
  chervonDown,
  MapPin,
  ChevronDown,
} from 'lucide-react';
 import MiniGastricBypass1 from '../../assets/images/MiniGastricBypass.png';
 const faqs = [
  {
    q: 'How is Mini Gastric Bypass different from Roux-en-Y Gastric Bypass?',
    a: 'Mini Gastric Bypass involves a single connection between the stomach and intestine, making the procedure less complex than Roux-en-Y Gastric Bypass, which requires two intestinal connections.',
  },
  {
    q: 'What foods should I avoid after a Mini Gastric Bypass?',
    a: 'Avoid carbonated drinks, fried foods, sugary desserts, processed snacks, and high-fat meals. These foods can interfere with weight loss and may cause digestive discomfort.',
  },
  {
    q: 'How much water should I drink after surgery?',
    a: 'Aim to drink 1.5–2 liters of water daily by taking small sips throughout the day. Avoid drinking during meals to prevent stomach discomfort.',
  },
  {
    q: 'When can I lift heavy weights after surgery?',
    a: 'Heavy lifting is generally avoided for 4–6 weeks after surgery. Your surgeon will advise you based on your recovery.',
  },
  {
    q: 'Can Mini Gastric Bypass help with PCOS?',
    a: 'Weight loss after Mini Gastric Bypass may improve hormone balance, menstrual regularity, and symptoms of Polycystic Ovary Syndrome (PCOS) in many women.',
  },
  {
    q: 'Can I drink alcohol after the Mini Gastric Bypass?',
    a: 'Alcohol should be avoided during the initial recovery period. After recovery, alcohol should only be consumed in moderation and after discussing it with your bariatric surgeon.',
  },
  {
    q: "What happens if I don't follow the recommended diet?",
    a: 'Not following the prescribed diet may slow weight loss, increase the risk of nutritional deficiencies, cause digestive problems, or contribute to weight regain.',
  },
  {
    q: 'What is the success rate of Mini Gastric Bypass?',
    a: 'Mini Gastric Bypass has a high success rate when combined with healthy lifestyle changes. Most patients achieve significant and sustained weight loss while also experiencing improvement in obesity-related health conditions.',
  },
];
const candidates = [
  {
    icon: Scale,
    title: 'BMI 35+',
    body: 'Suitable for individuals with a Body Mass Index of 35 or higher, or 30+ combined with obesity-related comorbidities.',
  },
  {
    icon: TrendingDown,
    title: 'Weight History',
    body: 'For those who have had unsuccessful attempts at weight loss through diet and exercise alone.',
  },
  {
    icon: HeartPulse,
    title: 'Metabolic Health',
    body: 'Highly effective for Type 2 Diabetes, hypertension and PCOD management.',
  },
  {
    icon: CalendarDays,
    title: 'Age 18–65',
    body: 'Ideally suited for patients between 18 and 65 years of age with stable health markers.',
  },
];

const pathway = [
  {
    icon: Stethoscope,
    step: 'Step 01',
    title: 'Anaesthesia & Incisions',
    body: 'The procedure is performed under general anaesthesia. The surgeon makes tiny keyhole incisions in the abdomen to insert the robotic instruments and a high-definition 3D camera.',
  },
  {
    icon: Cpu,
    step: 'Step 02',
    title: 'Robotic System Setup',
    body: 'The robotic system is carefully positioned, allowing the surgeon to control the instruments with enhanced precision and flexibility, and to view the surgical area in magnified 3D throughout the procedure',
  },
  {
    icon: Scissors,
    step: 'Step 03',
    title: 'Stomach Pouch Creation',
    body: 'Using advanced robotic stapling technology, the surgeon creates a long, narrow stomach pouch from the upper part of the stomach. This smaller pouch limits food intake and helps patients feel full sooner after meals.',
  },
  {
    icon: GitMerge,
    step: 'Step 04',
    title: 'The Bypass Connection',
    body: 'A section of the small intestine is brought up and connected directly to the new stomach pouch. This single connection (anastomosis) helps reduce calorie absorption while supporting effective and long-term weight loss.',
  },
];

const benefits = [
  {
    icon: Crosshair,
    title: 'Superior Precision',
    body: 'Eliminates human tremor and provides 10x magnification for exceptional accuracy.',
  },
  {
    icon: Droplet,
    title: 'Minimal Blood Loss',
    body: 'Small incisions and robotic-assisted dissection dramatically reduce intra-operative blood loss.',
  },
  {
    icon: Timer,
    title: 'Faster Recovery',
    body: 'Most patients return to light activities within 10 to 14 days post-surgery.',
  },
  {
    icon: RefreshCw,
    title: 'Metabolic Revision',
    body: 'Rapid improvement in glycaemic control for Type 2 Diabetes patients.',
  },
];

const recovery = [
  {
    phase: 'Phase 1',
    title: 'Liquid Diet',
    body: 'Patients begin with a liquid diet immediately after surgery to allow healing and maintain hydration.',
  },
  {
    phase: 'Phase 2',
    title: 'Soft Foods',
    body: 'The diet gradually progresses to soft foods as advised by the bariatric nutrition team.',
  },
  {
    phase: 'Phase 3',
    title: 'Regular Healthy Diet',
    body: 'Patients transition to a regular, healthy diet with balanced, nutrient-dense portions.',
  },
];

export default function MiniGastricBypass() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Robotic operating theatre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003b43]/95 via-[#005a65]/80 to-[#0d7481]/35" />
        </div>

        {/* watermark */}
        <span
          aria-hidden="true"
          className="hidden lg:block absolute top-6 left-6 text-[120px] font-extrabold leading-none tracking-[-0.02em] text-white/10 select-none"
        >
          Novo
        </span>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#9deffe]">
              Precision Bariatrics
            </span>

            <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Advanced Robotic Mini Gastric Bypass{' '}
              <span className="text-[#81d3e1]">(MGB/SAGB)</span> 
            </h1>
            <br></br>
                                                                               <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-300 leading-snug mb-5 max-w-2xl">
  Best Robotic Mini Gastric Bypass  Surgery in Kaushambi, Ghaziabad
</p>
            <p className="mt-6 text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
              A life-changing, single-anastomosis procedure performed with robotic precision. Fewer
              connections, shorter operating time and a proven path to sustained metabolic health.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0d7481] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#005a65] transition-colors"
              >
                Book a consultation <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </NavLink>
              
            </div>
          </div>

          <div className="mt-14 lg:mt-0 lg:absolute lg:bottom-16 lg:right-6">
            <div className="inline-flex items-center gap-4 rounded-xl bg-white/80 backdrop-blur-[20px] px-7 py-5 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <Crosshair className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
              <div>
                <p className="text-2xl font-bold text-[#005a65]">0.1mm</p>
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-0.5">
                  Surgical Precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UNDERSTANDING ============ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
         <div className="rounded-xl overflow-hidden bg-[#e8f6f8] shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
  <div className="p-5">
    <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#005a65]">
      Robotic Mini Gastric Bypass
    </span>
  </div>
  <img
    src={MiniGastricBypass1}
    alt="Illustration of the mini gastric bypass anatomy"
    className="w-full h-64 sm:h-80 lg:h-[26rem] object-contain object-center bg-[#e8f6f8] p-4"
  />
</div>

          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold leading-tight">
              Understanding MGB/SAGB
            </h2>

            <p className="mt-5 text-[#3e484a] leading-relaxed">
            Mini Gastric Bypass (MGB), also known as Single Anastomosis Gastric Bypass (SAGB), is an advanced minimally invasive weight-loss surgery designed to help individuals struggling with severe obesity. The procedure works in two ways—by reducing the size of the stomach and rerouting a portion of the small intestine. This helps patients feel full with smaller meals and reduces calorie and nutrient absorption in a controlled manner, supporting long-term weight loss and metabolic improvement.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
             Mini Gastric Bypass (MGB) has become a widely accepted bariatric procedure globally due to its simplicity, effectiveness, and strong safety profile compared to traditional gastric bypass techniques.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                'Reduced surgical time compared to RNY bypass',
                'Fewer internal connections, minimising leak risk',
                'Proven, reversible improvement of metabolic conditions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-[#e2e2e5] pt-4 text-sm text-[#3e484a]">
                  <Check className="w-4 h-4 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
     {/* ============ WHAT IS MGB ============ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481]">
                Procedure Overview
              </span>
              <h2 className="mt-4 text-3xl lg:text-[32px] font-bold leading-tight">
                What is Robotic Mini Gastric Bypass Surgery?
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-[#fdd350]" />

              <div className="mt-10 rounded-xl bg-[#e8f6f8] px-7 py-6 inline-block">
                <p className="text-3xl font-extrabold text-[#005a65]">01</p>
                <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3e484a] mt-1">
                  Single Anastomosis
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-[#3e484a] leading-relaxed">
              <p>
                Robotic Mini Gastric Bypass Surgery is an advanced form of bariatric surgery
                performed using robotic-assisted technology. In this surgery, a small stomach pouch
                is created and connected to the lower part of the small intestine using a single
                connection (anastomosis). This reduces food intake and limits calorie absorption in
                a controlled manner, leading to effective and sustained weight loss.
              </p>
              <p>
                Unlike traditional gastric bypass surgery, Mini Gastric Bypass requires only one
                intestinal connection (anastomosis), making the procedure technically simpler, less
                complex, and highly effective while maintaining a strong safety profile.
              </p>
              <p>
                The robotic system provides surgeons with enhanced precision, superior control, and
                a high-definition 3D magnified view of the surgical area. This allows highly
                accurate and delicate movements during surgery, improving safety and overall
                surgical outcomes.
              </p>

              <div className="mt-8 flex items-start gap-4 rounded-xl border border-[#e2e2e5] bg-[#f9f9fc] px-6 py-5">
                <Check className="w-5 h-5 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2.5} />
                <p className="text-sm">
                  Robotic Mini Gastric Bypass is widely recognised as a safe and effective bariatric
                  surgery for sustainable weight loss and improvement of obesity-related health
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============ CANDIDACY ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[32px] font-bold">Are You an Ideal Candidate?</h2>
            <p className="mt-4 text-[#3e484a]">
              Precision healthcare starts with the right diagnosis. Evaluate your eligibility for
              robotic bariatric intervention.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidates.map((c) => (
              <div
                key={c.title}
                className="rounded-xl bg-white p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
              >
                <c.icon className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-5 font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ROBOTIC PATHWAY ============ */}
      <section id="pathway" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-[32px] font-bold text-center">The Robotic Pathway</h2>

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#bec8cb]" />

            <div className="space-y-12 lg:space-y-4">
              {pathway.map((p, i) => {
                const textFirst = i % 2 === 0;
                return (
                  <div key={p.step} className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div
                      className={
                        textFirst
                          ? 'lg:text-right lg:pr-6 lg:py-8'
                          : 'lg:col-start-2 lg:pl-6 lg:py-8 lg:row-start-1'
                      }
                    >
                      <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#6e797b]">
                        {p.step}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                      <p className="mt-3 text-sm text-[#3e484a] leading-relaxed">{p.body}</p>
                    </div>

                    <div
                      className={
                        textFirst
                          ? 'mt-6 lg:mt-0 lg:pl-6 flex items-center justify-center rounded-xl bg-[#f3f3f6] h-40'
                          : 'mt-6 lg:mt-0 lg:col-start-1 lg:row-start-1 lg:pr-6 flex items-center justify-center rounded-xl bg-[#f3f3f6] h-40'
                      }
                    >
                      <p.icon className="w-10 h-10 text-[#6e797b]" strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS (DARK) ============ */}
      <section className="py-20 lg:py-28 bg-[#1a1c1e]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
             Benefits of Robotic Mini Gastric Bypass Surgery?
            </h2>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
              Choosing robotic-assisted MGB means redefining your recovery and rewriting your
              surgical mastery.
            </p>

            <div className="mt-12 rounded-xl bg-[#0d7481] px-7 py-6 inline-block">
              <p className="text-3xl font-extrabold text-white">98%</p>
              <p className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white/70 mt-1">
                Patient Satisfaction Rate
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-white/10 bg-white/5 p-7">
                <b.icon className="w-6 h-6 text-[#fdd350]" strokeWidth={2} />
                <h3 className="mt-5 font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECOVERY ============ */}
   <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-[32px] font-bold">
              Recovery &amp; Diet After Robotic Mini Gastric Bypass Surgery
            </h2>
            <p className="mt-5 text-[#3e484a] leading-relaxed">
              Recovery after Robotic Mini Gastric Bypass Surgery is generally faster due to the
              minimally invasive robotic approach. Most patients can return to light daily
              activities within a few days, although complete recovery may take a few weeks.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              Initially, patients follow a liquid diet, gradually progressing to soft foods and then
              a regular, healthy diet as advised by the bariatric nutrition team.
            </p>

            <div className="mt-10 space-y-4">
              {recovery.map((r) => (
                <div
                  key={r.phase}
                  className="rounded-lg border border-[#e2e2e5] bg-white px-6 py-5 flex items-start gap-4"
                >
                  <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481] pt-1 w-16 shrink-0">
                    {r.phase}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm">{r.title}</h3>
                    <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 w-full max-w-md mx-auto aspect-square rounded-xl bg-[#0d7481] p-8 flex flex-col justify-center">
            <Utensils className="w-7 h-7 text-[#fdd350]" strokeWidth={1.75} />
            <h3 className="mt-5 text-xl font-bold text-white">Long-Term Success</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Regular follow-ups, nutritional guidance, hydration, vitamin supplementation, and
              physical activity are key to lasting results after surgery.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHY NOVO ============ */}
      <section className="py-20 lg:py-28 bg-[#f3f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0d7481]">
                Our Speciality
              </span>
              <h2 className="mt-4 text-3xl lg:text-[32px] font-bold leading-tight">
                Why Choose Novo Robotic Surgery Centre for Robotic Mini Gastric Bypass Surgery?
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-[#fdd350]" />

              <ul className="mt-10 space-y-4">
                {[
                  'High-definition 3D visualisation & enhanced instrument control',
                  'Greater precision, less pain and minimal scarring',
                  'Personalised nutrition, lifestyle counselling & long-term follow-up',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-[#e2e2e5] pt-4 text-sm text-[#3e484a]"
                  >
                    <Check className="w-4 h-4 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 space-y-5 text-[#3e484a] leading-relaxed">
              <p>
                When it comes to a life-changing procedure like Robotic Mini Gastric Bypass Surgery,
                choosing the right centre is essential. At Novo Robotic Surgery Centre in Kaushambi,
                Ghaziabad, robotic surgery is not just a service, it is our speciality. Our
                experienced robotic bariatric surgeons combine advanced surgical expertise with
                compassionate patient care to deliver safe, precise, and effective weight loss
                surgery.
              </p>
              <p>
                Using the latest robotic technology, including high-definition 3D visualization and
                enhanced instrument control, we aim to provide greater precision, less pain, minimal
                scarring, and faster recovery. Beyond surgery, our dedicated team offers
                personalised treatment plans, nutritional guidance, lifestyle counselling, and
                long-term follow-up support to help patients achieve lasting weight loss success and
                improved overall health.
              </p>
              <p className="font-semibold text-[#005a65]">
                At Novo Robotic, we support your transformation every step of the way.
              </p>

              <div className="mt-8 rounded-xl bg-[#005a65] p-8 lg:p-10">
                <p className="text-sm lg:text-base text-white/85 leading-relaxed">
                  Book your consultation today at Novo Robotic Surgery Centre for advanced Robotic
                  Mini Gastric Bypass Surgery and start your journey to a healthier life.
                </p>
                <NavLink
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#fdd350] px-7 py-3.5 text-sm font-bold text-[#241a00] hover:bg-[#ebc241] transition-colors"
                >
                  Book a consultation <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ─── FAQs ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Need Clarity</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Answers to the questions patients ask us most about Mini Gastric Bypass.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 rounded-3xl border border-gray-200 open:bg-white open:shadow-[0px_10px_40px_rgba(0,0,0,0.04)] open:border-teal-200 transition-all duration-300"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-7 py-5">
                  <span className="font-bold text-gray-900 text-sm md:text-base group-open:text-teal-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-teal-100 group-open:bg-teal-700 flex items-center justify-center flex-shrink-0 transition-colors">
                    <ChevronDown
                      size={16}
                      className="text-teal-600 group-open:text-white group-open:rotate-180 transition-transform duration-300"
                    />
                  </span>
                </summary>
                <div className="px-7 pb-6 -mt-1">
                  <div className="border-l-4 border-teal-500 pl-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}