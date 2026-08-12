import { NavLink } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Accessibility, Circle, Droplet, Sparkles, Layers } from 'lucide-react';
import Bengin from '../../assets/images/Bengin.png'
const conditions = [
  {
    icon: Circle,
    title: 'Uterine Fibroids',
    body: 'Non-cancerous growths in the uterus that can cause heavy menstrual bleeding, pelvic pain and pressure on the bladder or bowel.',
  },
  {
    icon: Droplet,
    title: 'Ovarian Cysts',
    body: 'Fluid-filled sacs on the ovaries. While many resolve naturally, persistent or large cysts may require surgical removal to prevent rupture or torsion.',
  },
  {
    icon: Sparkles,
    title: 'Endometriosis',
    body: 'Tissue similar to the uterine lining grows outside the uterus, causing severe pain and potentially forming endometriomas (cysts) on the ovaries.',
  },
  {
    icon: Layers,
    title: 'Adenomyosis',
    body: 'Endometrial tissue grows into the muscular wall of the uterus, leading to an enlarged uterus, heavy periods and intense cramping.',
  },
];

const indications = [
  {
    title: 'Significant Daily Impact',
    body: 'Symptoms severely affect your work, personal life or daily activities.',
  },
  {
    title: 'Heavy Bleeding & Anaemia',
    body: 'Excessive blood loss leading to fatigue and clinically diagnosed anaemia.',
  },
  {
    title: 'Persistent, Severe Pain',
    body: 'Chronic pelvic pain that does not respond to standard pain management.',
  },
  {
    title: 'Rapid Growth',
    body: 'Fibroids or cysts that are growing quickly or become unusually large.',
  },
  {
    title: 'Fertility Concerns',
    body: 'When conditions structurally impede conception and require delicate removal.',
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
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.5} /> Advanced Robotic Gynaecology
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em]">
              Benign Disorders of the Uterus and Ovaries:
              <br />
              <span className="text-[#0d7481]">
                Advanced Robotic Surgery in Kaushambi, Ghaziabad
              </span>
            </h1>

            <p className="mt-6 text-[#3e484a] leading-relaxed max-w-lg">
              Experience unparalleled precision and faster recovery for non-cancerous reproductive
              conditions. Our robotic-assisted techniques prioritise organ preservation and your
              quality of life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#005a65] px-7 py-3.5 font-[IBM_Plex_Sans] text-[11px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#0d7481] transition-colors"
              >
                Consult our specialists <ArrowRight className="w-4 h-4" strokeWidth={2} />
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
              Benign (non-cancerous) conditions of the uterus and ovaries — such as fibroids, cysts
              and endometriosis — are incredibly common. While not life-threatening, they can
              significantly impair a woman&apos;s quality of life, causing severe pain, heavy
              bleeding and fertility challenges.
            </p>
            <p className="mt-4 text-[#3e484a] leading-relaxed">
              At Novo Robotic Hospital, we recognise that these conditions require delicate, precise
              management. Our approach focuses on treating the disorder effectively while preserving
              healthy reproductive tissue and ensuring a swift return to daily activities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#eeeef0] p-7">
              <ShieldCheck className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
              <h3 className="mt-5 text-lg font-semibold">Non-Cancerous</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                Focusing on conditions that affect comfort and fertility, not oncology.
              </p>
            </div>

            <div className="rounded-xl bg-[#eeeef0] p-7 sm:mt-10">
              <Accessibility className="w-6 h-6 text-[#0d7481]" strokeWidth={2} />
              <h3 className="mt-5 text-lg font-semibold">Quality of Life</h3>
              <p className="mt-2 text-sm text-[#3e484a] leading-relaxed">
                Restoring normal function and relieving chronic discomfort.
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
              Common Benign Conditions We Treat
            </h2>
            <p className="mt-4 text-sm text-[#3e484a]">
              Precision robotic interventions for a range of structural and functional disorders.
            </p>
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
                    <span className="h-9 w-9 rounded-full bg-[#e8f6f8] flex items-center justify-center">
                      <c.icon className="w-4 h-4 text-[#0d7481]" strokeWidth={2} />
                    </span>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-[#3e484a] leading-relaxed">{c.body}</p>
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
              Surgery is typically considered when conservative treatments, such as medication, have
              failed to provide relief, or when the condition poses a risk to your overall health or
              fertility.
            </p>

            <div className="mt-10 space-y-6">
              {indications.map((i) => (
                <div key={i.title} className="flex gap-4">
                  <Check className="w-5 h-5 shrink-0 text-[#0d7481] mt-0.5" strokeWidth={2.5} />
                  <div>
                    <h3 className="font-bold text-sm">{i.title}</h3>
                    <p className="mt-1 text-sm text-[#3e484a] leading-relaxed">{i.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}