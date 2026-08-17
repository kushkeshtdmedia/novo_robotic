import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Scale,
  CalendarDays,
  HeartHandshake,
  TrendingDown,
  Activity,
  Sparkles,
  Timer,
  Crosshair,
  ChevronDown,
  Link
} from 'lucide-react';
import {  Check } from 'lucide-react';
import RouxEnYImage from '../../assets/images/RouxEnYGastricBypass.png';

const faqs = [
  {
    q: 'How much weight can I lose after the Roux-en-Y gastric bypass?',
    a: 'Many patients lose 60–80% of their excess body weight within 12 to 18 months when they follow the recommended diet, exercise, and follow-up plan.',
  },
  {
    q: 'What foods can I eat after gastric bypass surgery?',
    a: 'Your diet progresses gradually from clear liquids to protein-rich liquids, soft foods, and then healthy solid foods. Our bariatric team will provide a detailed meal plan.',
  },
  {
    q: 'Are there any foods I should avoid after gastric bypass?',
    a: 'Yes. Sugary foods, carbonated drinks, fried foods, and high-fat meals should be limited, as they may cause discomfort, slow weight loss, or lead to dumping syndrome.',
  },
  {
    q: 'Is Roux-en-Y gastric bypass reversible?',
    a: 'Although reversal is possible in rare situations, Roux-en-Y gastric bypass is considered a permanent procedure and should be viewed as a long-term treatment for obesity.',
  },
  {
    q: 'Can I regain weight after gastric bypass surgery?',
    a: 'Weight regain can happen if healthy eating habits and regular physical activity are not maintained. Ongoing follow-up with your bariatric team helps support long-term success.',
  },
];
const criteria = [
  {
    icon: Scale,
    title: 'BMI Metrics',
    body: 'BMI of 40+ or 35+ with obesity-related conditions like Type 2 Diabetes or hypertension.',
  },
  {
    icon: CalendarDays,
    title: 'Age Range',
    body: 'Typically recommended for adults between 18 and 65, evaluated on individual health status.',
  },
  {
    icon: HeartHandshake,
    title: 'Commitment',
    body: 'Readiness to embrace lifelong nutritional guidelines and regular physical activity.',
  },
];
const candidacy = [
  'Your BMI is 40 or above, or 35 and above with obesity-related conditions such as type 2 diabetes, high blood pressure, or sleep apnea',
  'You have tried to lose weight through diet, exercise, and lifestyle changes without long-term success',
  'You are between 18 and 65 years of age (patients outside this age group are evaluated individually)',
  'You are willing to commit to lifelong dietary changes, regular follow-ups, and a healthier lifestyle',
  'You are mentally and emotionally prepared for weight loss surgery',
  'You do not have untreated eating disorders or severe depression',
  'You are a non-smoker or willing to stop smoking at least 6 weeks before surgery',
];

const journey = [
  {
    step: '01',
    title: 'Small Incisions for Minimally Invasive Surgery',
    body: 'The surgeon makes 4–5 small keyhole incisions in the abdomen. Through these tiny openings, robotic instruments and a high-definition 3D camera are inserted, providing enhanced visibility and highly precise surgical movements.',
  },
  {
    step: '02',
    title: 'Creating a Small Stomach Pouch',
    body: 'The upper portion of the stomach is divided using surgical staplers to create a small stomach pouch that can hold only a limited amount of food. The remaining part of the stomach stays in place and continues producing digestive juices.',
  },
  {
    step: '03',
    title: 'Rerouting the Small Intestine',
    body: 'A portion of the small intestine is connected directly to the newly created stomach pouch. This allows food to bypass a part of the stomach and upper small intestine, helping reduce calorie absorption and support weight loss.',
  },
  {
    step: '04',
    title: 'Forming the "Y" Connection',
    body: 'The bypassed section of the intestine is reconnected further down the digestive tract, creating the characteristic "Y" shape of the Roux-en-Y procedure. This allows digestive enzymes to mix with food for proper digestion and nutrient absorption.',
  },
  {
    step: '05',
    title: 'Closure and Recovery',
    body: 'Once the procedure is completed, the small incisions are closed using sutures or surgical glue. Most patients are encouraged to start walking within a few hours after surgery, which helps improve blood circulation and supports faster recovery.',
  },
];

const stats = [
  { icon: TrendingDown, title: '60–80% EWL', body: 'Average excess weight loss within the first 12 to 18 months.' },
  { icon: Activity, title: 'Diabetes Control', body: 'Immediate improvement or remission of Type 2 Diabetes.' },
  { icon: Sparkles, title: 'Minimal Scarring', body: 'Robotic ports result in scars smaller than 1 centimetre.' },
  { icon: Timer, title: 'Faster Recovery', body: 'Return to normal activities significantly faster than open surgery.' },
];

const recoveryPath = [
  {
    title: "Hospital Stay",
    body: "Most patients stay in the hospital for 1 to 2 days after surgery.",
  },
  {
    title: "Diet Progression",
    body: "Your diet will gradually progress from clear liquids to pureed foods, then soft foods, and eventually healthy regular meals as guided by your bariatric team.",
  },
  {
    title: "Hydration Matters",
    body: "Drinking enough water throughout the day is important to help prevent dehydration during recovery.",
  },
  {
    title: "Activity & Return to Work",
    body: "Most patients can return to light desk work within 1 to 2 weeks. Heavy lifting and strenuous physical activities are usually restricted for about 4 to 6 weeks.",
  },
  {
    title: "Long-Term Nutrition Support",
    body: "Daily vitamins and nutritional supplements are important to help your body absorb essential nutrients after gastric bypass surgery.",
  },
  {
    title: "Follow-Up Visits",
    body: "Regular follow-up appointments help monitor weight loss progress, nutrition, and overall recovery after surgery.",
  },
];

const whyNovo = [
  {
    title: 'Bariatric Speciality Centre',
    body: 'Our surgeons perform hundreds of robotic bariatric procedures annually with superior outcome ratios.',
  },
  {
    title: 'Market-Leading Technology',
    body: 'Utilising the advanced da Vinci system for unmatched surgical control and stability.',
  },
  {
    title: 'Holistic Care Team',
    body: 'Psychologists, dietitians and physiotherapists integrated into your care plan.',
  },
  {
    title: 'Post-Op Monitoring',
    body: 'Remote tracking and monthly check-ins for the first two critical years.',
  },
];

export default function RouxEnYGastricBypass() {
  return (
    <div className="pt-20 bg-[#f9f9fc] font-[Manrope] text-[#1a1c1e]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Robotic surgical theatre at Novo Robotic Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003b43]/95 via-[#005a65]/80 to-[#0d7481]/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-[#fdd350] px-4 py-1.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-[#241a00]">
              Advanced Bariatric Surgery
            </span>

            <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              Precision Roux-en-Y Gastric Bypass (RYGB)
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-300 leading-snug max-w-2xl">
              Best Robotic Roux-en-Y Gastric Bypass Surgery in Kaushambi, Ghaziabad
            </p>

            <p className="mt-6 text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
              A gold-standard robotic procedure designed for sustainable weight loss and
              transformative metabolic improvement. Experience the pinnacle of surgical precision at
              Novo.
            </p>

            <NavLink
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white hover:bg-white/10 transition-colors"
            >
              Contact a specialist <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ============ UNDERSTANDING ============ */}
    <section className="py-20 lg:py-28">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <h2 className="text-3xl lg:text-[32px] font-bold leading-tight text-[#005a65]">
          Understanding RYGB
        </h2>

        <p className="mt-5 text-[#3e484a] leading-relaxed">
          Roux-en-Y Gastric Bypass, commonly known as gastric bypass surgery, is one of the most effective bariatric procedures for long-term weight loss in people struggling with severe obesity and obesity-related health conditions. In this procedure, the stomach is made smaller and a portion of the small intestine is bypassed. This helps patients feel full after eating smaller meals while reducing calorie absorption.
        </p>
        <p className="mt-4 text-[#3e484a] leading-relaxed">
          Robotic Roux-en-Y Gastric Bypass not only supports significant weight loss but may also help improve obesity-related conditions such as type 2 diabetes, high blood pressure, sleep apnea, fatty liver disease, acid reflux, and joint pain. Gastric bypass surgery is often recommended for patients who have not achieved long-term weight loss through diet, exercise, or medications alone.
        </p>

        <ul className="mt-10 space-y-4">
          {[
            { k: 'Restrictive', v: 'Smaller pouch limits capacity' },
            { k: 'Malabsorptive', v: 'Bypassing intestine reduces calorie uptake' },
            { k: 'Metabolic', v: 'Positive changes in hunger hormones' },
          ].map((b) => (
            <li key={b.k} className="flex items-start gap-3 text-sm text-[#3e484a]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d7481]" />
              <span>
                <strong className="font-bold text-[#1a1c1e]">{b.k}:</strong> {b.v}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative rounded-xl overflow-hidden bg-[#e8f6f8] shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
        <img
          src={RouxEnYImage}
          alt="Anatomical illustration of the Roux-en-Y gastric bypass"
          className="w-full h-auto max-h-[420px] object-contain mx-auto"
        />

        <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-lg bg-white/80 backdrop-blur-[20px] px-5 py-3">
          <span className="h-8 w-8 rounded-full bg-[#0d7481] flex items-center justify-center">
            <Crosshair className="w-4 h-4 text-white" strokeWidth={2} />
          </span>
          <div>
            <p className="font-[IBM_Plex_Sans] text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e484a]">
              Instrument Scale
            </p>
            <p className="text-lg font-bold text-[#005a65] leading-none mt-0.5">0.1mm</p>
          </div>
        </div>
      </div>
    </div>

    {/* Robotic RYGB explainer */}
    <div className="mt-14 lg:mt-20 rounded-[1.5rem] bg-[#f3f3f6] p-8 lg:p-12">
      <h3 className="text-2xl lg:text-[28px] font-bold leading-tight text-[#005a65]">
        What is the Robotic Roux-en-Y Gastric Bypass?
      </h3>

      <div className="mt-6 grid lg:grid-cols-2 gap-6 lg:gap-10">
        <p className="text-[#3e484a] leading-relaxed">
          Robotic Roux-en-Y Gastric Bypass is an advanced form of bariatric surgery performed using robotic-assisted technology. During the procedure, the surgeon controls robotic instruments through a high-definition 3D console, allowing highly precise movements and improved surgical accuracy.
        </p>
        <p className="text-[#3e484a] leading-relaxed">
          Robotic technology provides better vision, greater control, and enhanced precision, especially during complex weight loss procedures. Because it is a minimally invasive technique, patients usually experience smaller incisions, less pain, less blood loss, shorter hospital stay, and faster recovery compared to traditional open surgery.
        </p>
      </div>

      <div className="mt-8 rounded-xl border-l-4 border-[#fdd350] bg-white p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
        <p className="text-[#1a1c1e] leading-relaxed">
          At Novo Robotic Surgery Centre, advanced robotic technology is used to improve patient safety, surgical precision, and overall surgical outcomes.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ============ CANDIDACY ============ */}
    <section className="py-20 lg:py-28">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl lg:text-[32px] font-bold text-[#005a65]">
        Is RYGB Right for You?
      </h2>
      <p className="mt-4 text-[#3e484a]">
        We assess every patient based on clinical guidelines and long-term health potential.
      </p>
    </div>

    <div className="mt-14 grid md:grid-cols-3 gap-6">
      {criteria.map((c) => (
        <div
          key={c.title}
          className="rounded-xl bg-white p-8 text-center shadow-[0px_10px_40px_rgba(0,0,0,0.04)]"
        >
          <span className="mx-auto h-12 w-12 rounded-full bg-[#e8f6f8] flex items-center justify-center">
            <c.icon className="w-5 h-5 text-[#0d7481]" strokeWidth={2} />
          </span>
          <h3 className="mt-5 font-bold">{c.title}</h3>
          <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{c.body}</p>
        </div>
      ))}
    </div>

    {/* Full candidacy criteria */}
    <div className="mt-14 lg:mt-20 rounded-[1.5rem] bg-[#f3f3f6] p-8 lg:p-12">
      <h3 className="text-2xl lg:text-[28px] font-bold leading-tight text-[#005a65]">
        Who is an Ideal Candidate for Robotic Roux-en-Y Gastric Bypass Surgery?
      </h3>
      <p className="mt-4 text-[#3e484a] leading-relaxed">
        Before undergoing gastric bypass surgery, every patient receives a detailed evaluation by our bariatric team. You may be an ideal candidate for Roux-en-Y Gastric Bypass if:
      </p>

      <ul className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-4">
        {candidacy.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0d7481]">
              <Check className="h-3 w-3 text-white" strokeWidth={3} />
            </span>
            <span className="text-sm text-[#3e484a] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

      {/* ============ PROCEDURAL JOURNEY ============ */}
   <section className="py-20 lg:py-28 bg-[#0d7481]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl lg:text-[32px] font-bold text-center text-white">
      The Robotic Procedural Journey
    </h2>
    <p className="mt-5 max-w-3xl mx-auto text-center text-white/80 leading-relaxed">
      Robotic Roux-en-Y Gastric Bypass surgery is performed under general anesthesia and usually takes around 90 to 120 minutes. The procedure uses advanced robotic-assisted technology that allows surgeons to perform complex bariatric surgery with greater precision, control, and enhanced visualization.
    </p>

    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
      {journey.map((j) => (
        <div key={j.step}>
          <p className="text-4xl font-extrabold text-white/25 leading-none">{j.step}</p>
          <h3 className="mt-4 font-bold text-white leading-snug">{j.title}</h3>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{j.body}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ============ OUTCOME STATS ============ */}
      <section className="py-16 lg:py-20 bg-[#f9f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.title} className="px-6 py-6 border-l border-[#e2e2e5] first:border-l-0">
                <s.icon className="w-5 h-5 text-[#0d7481]" strokeWidth={2} />
                <h3 className="mt-4 font-bold text-sm">{s.title}</h3>
                <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECOVERY + WHY NOVO ============ */}
{/* ---------------- RECOVERY ---------------- */}
<section className="py-20 lg:py-28 bg-[#eeeef0]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-2xl lg:text-3xl font-semibold text-[#005a65]">
      Recovery After Robotic Roux-en-Y Gastric Bypass Surgery
    </h2>
    <p className="mt-4 max-w-3xl text-sm lg:text-base text-[#3e484a] leading-relaxed">
      One of the most common questions patients ask is, “How long will recovery take?”
      The good news is that robotic surgery usually allows faster recovery compared to
      traditional open surgery.
    </p>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recoveryPath.map((r, i) => (
        <div
          key={r.title}
          className="group bg-white rounded-xl p-7 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border-t-4 border-[#fdd350] hover:-translate-y-1 transition-transform duration-300"
        >
          <span className="h-9 w-9 rounded-full bg-[#005a65] text-white flex items-center justify-center font-[IBM_Plex_Sans] text-[12px] font-bold">
            {i + 1}
          </span>
          <h3 className="mt-5 text-base font-bold text-[#005a65]">{r.title}</h3>
          <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">{r.body}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ---------------- WHY NOVO ---------------- */}
<section className="py-20 lg:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-5">
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#005a65] leading-snug">
          Why Choose Novo Robotic Surgery Centre for Robotic Roux-en-Y Gastric Bypass Surgery?
        </h2>
        <div className="mt-6 h-1 w-20 bg-[#fdd350] rounded-full" />
      </div>

      <div className="lg:col-span-7 space-y-5 text-sm lg:text-base text-[#3e484a] leading-relaxed">
        <p>
          Choosing where to undergo weight loss surgery is a significant decision, and at
          Novo Robotic Surgery Centre, we understand the immense trust our patients place
          in us. Unlike general hospitals where bariatric procedures may only be performed
          occasionally, robotic surgery is our primary focus, and Roux-en-Y Gastric Bypass
          is one of the most commonly performed weight loss surgeries at our centre.
        </p>
        <p>
          Our experienced bariatric surgeons use advanced robotic technology to perform
          gastric bypass surgery with enhanced precision, control, and safety. At Novo
          Robotic Surgery Centre, we provide comprehensive, patient-centered care, from
          detailed pre-operative evaluations and personalized treatment plans to
          nutritional guidance, post-operative care, and long-term weight management
          support.
        </p>
        <p>
          We are committed to helping our patients achieve safe surgical outcomes, faster
          recovery, and sustainable weight loss results while providing compassionate care
          at every step of their journey.
        </p>

        <div className="mt-8 rounded-xl bg-[#005a65] p-7 lg:p-8">
          <p className="text-sm lg:text-base text-white/90 leading-relaxed">
            Excess weight affecting your health and confidence? Our specialists at Novo
            Robotic Surgery Centre offer advanced Robotic Gastric Bypass Surgery to help
            you achieve effective, long-term weight loss with safer surgery and faster
            recovery.
          </p>
       <Link
  to="/contact-us"
  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#fdd350] px-7 py-3 text-sm font-bold text-[#005a65] hover:bg-white transition-colors"
>
  Book a Consultation
</Link>
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
              Answers to the questions patients ask us most about Roux-en-Y gastric bypass.
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