import React, { useState } from "react";

/**
 * StomachSurgery — Novo Robotic Hospital
 * Route: <Route path="/services/stomach-surgery" element={<StomachSurgery />} />
 *
 * Self-contained: all styles live in the <style> block below (scoped under
 * .nrh) so this works with or without Tailwind configured.
 *
 * IMAGE SLOTS — drop your own photos in here (import or URL). When empty,
 * a tasteful gradient/SVG fallback is shown so nothing looks broken.
 */
const HERO_IMG = "";       // operating-room photo (background of hero)
const DOCTOR_IMG = "";     // surgeon photo (Trust & Expertise section)

const warningSigns = [
  { icon: "🍽️", title: "Feeling Full Quickly", body: "Satiety after eating only a small amount of food." },
  { icon: "🔥", title: "Persistent Indigestion", body: "Chronic discomfort or a burning sensation in the upper abdomen." },
  { icon: "⚖️", title: "Unexplained Weight Loss", body: "Dropping weight without any changes to diet or exercise." },
  { icon: "🩸", title: "Abdominal Pain", body: "Vague, aching discomfort in the stomach area that persists." },
];

const procedures = [
  {
    title: "Robotic Total Gastrectomy",
    body: "Complete removal of the stomach for tumors located in the middle or upper sections, followed by esophagojejunal anastomosis.",
    tags: ["Radical lymphadenectomy", "Complex reconstruction"],
  },
  {
    title: "Partial Gastrectomy",
    body: "Removal of the lower part of the stomach (Distal Gastrectomy) while preserving the upper portion for better digestive function.",
    tags: ["Preserves function", "Faster recovery"],
  },
  {
    title: "Wedge Gastric Resection",
    body: "Ideal for GISTs and benign tumors, removing only a small wedge-shaped section of the stomach wall.",
    tags: ["Minimal resection", "Rapid healing"],
  },
];

const journey = [
  { title: "Detailed Pre-Surgical Evaluation", body: "Comprehensive staging with CT, PET, and endoscopic ultrasound to map the tumor's precise location." },
  { title: "Anesthesia & Port Placement", body: "General anesthesia is administered and 4–5 tiny incisions (8mm) are made for the robotic arms." },
  { title: "Robot Docking", body: "The Da Vinci robot is positioned over the patient and instruments are inserted under 3D HD visualization." },
  { title: "Tumor Mobilization", body: "The surgeon uses micro-instruments to separate the stomach from surrounding organs with precision." },
  { title: "Completion of Surgery", body: "The affected tissue is removed through a small incision and the digestive tract is reconstructed." },
];

const advantages = [
  { icon: "👁️", title: "Superior 3D Vision", body: "Surgeons see anatomy in vivid high-definition depth for safer dissection." },
  { icon: "✋", title: "Tremor-Free Precision", body: "Hand tremors are filtered out, allowing for microscopic accuracy." },
  { icon: "🩸", title: "Less Blood Loss", body: "Cautery and suturing are more precise, minimizing surgical trauma." },
  { icon: "⚡", title: "Faster Recovery", body: "Smaller incisions mean less pain and a quicker return to a normal diet." },
  { icon: "🧬", title: "D2 Lymphadenectomy", body: "Enhanced ability to remove critical lymph nodes for accurate cancer staging." },
  { icon: "🪑", title: "Ergonomic Comfort", body: "Surgeons operate seated, reducing fatigue and maintaining sharp focus." },
  { icon: "🏥", title: "Shorter Hospital Stay", body: "Most robotic patients are discharged 2–3 days earlier than open surgery." },
  { icon: "🎯", title: "Better Outcomes", body: "Improved oncological margins and reduced post-operative complications." },
];

const recovery = [
  { n: 1, title: "Walking within 24h", body: "Early mobilization is key to preventing complications and speeding up bowel function." },
  { n: 2, title: "Gradual Diet", body: "Starting with liquids on day 2, moving to soft foods as the gut heals over several weeks." },
  { n: 3, title: "Return to Activity", body: "Most patients return to light work within 2–3 weeks, significantly faster than traditional surgery." },
];

export default function StomachSurgery() {
  const [active, setActive] = useState(0);

  return (
    <div className="nrh">
      <style>{css}</style>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header className="nrh-nav">
        <div className="nrh-wrap nrh-nav__inner">
          <a className="nrh-logo" href="/">Novo Robotic Hospital</a>
          <nav className="nrh-links">
            <a href="#procedures">Procedures</a>
            <a href="#technology">Technology</a>
            <a href="#patient-care">Patient Care</a>
            <a href="#about">About Us</a>
          </nav>
          <a className="nrh-btn nrh-btn--gold nrh-nav__cta" href="#book">Book Appointment</a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="nrh-hero" style={HERO_IMG ? { backgroundImage: `linear-gradient(90deg, rgba(244,246,247,.97) 0%, rgba(244,246,247,.78) 42%, rgba(244,246,247,.25) 70%, rgba(20,40,48,.1) 100%), url(${HERO_IMG})` } : undefined}>
        <div className="nrh-wrap nrh-hero__inner">
          <div className="nrh-hero__copy">
            <span className="nrh-eyebrow">Robotic Oncology</span>
            <h1>Precision Oncology:<br />Advanced Robotic<br />Gastrectomy</h1>
            <p className="nrh-lead">
              Minimally invasive stomach cancer surgery with superior accuracy and faster
              recovery. Our cutting-edge robotic technology provides surgeons with 10×
              magnification and tremor-free dexterity.
            </p>
            <div className="nrh-hero__actions">
              <a className="nrh-btn nrh-btn--teal" href="#book">Consult Our Expert →</a>
              <a className="nrh-btn nrh-btn--ghost" href="#technology">View Technology</a>
            </div>
          </div>

          <div className="nrh-hero__media">
            <Laparoscopic />
            <div className="nrh-floatcard">
              <div className="nrh-floatcard__top">
                <span className="nrh-floatcard__chip">🔬</span>
                <div>
                  <strong>0.1mm</strong>
                  <small>Sub-millimeter precision</small>
                </div>
              </div>
              <p>"Harnessing the power of the da Vinci robotic platform to transform survival outcomes in gastric oncology."</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UNDERSTANDING STOMACH CANCER ────────────────────── */}
      <section className="nrh-section nrh-understand" id="about">
        <div className="nrh-wrap nrh-understand__grid">
          <div>
            <h2 className="nrh-h2 nrh-h2--left">Understanding<br />Stomach Cancer</h2>
            <p className="nrh-body">
              Gastric cancer requires a multidisciplinary approach combining surgical
              precision with oncological expertise. At Novo, we specialize in identifying
              cellular anomalies early and intervening with minimal tissue disruption.
            </p>
            <p className="nrh-body">
              Our robotic platform allows for extensive lymph node dissection — a critical
              factor in cancer staging and long-term survival — that was previously
              challenging with traditional laparoscopic methods.
            </p>
            <a className="nrh-textlink" href="#guide">⬇ Download Oncology Guide</a>
          </div>

          <div>
            <h3 className="nrh-warnhead">⚠ Early Warning Signs</h3>
            <div className="nrh-warngrid">
              {warningSigns.map((w) => (
                <div className="nrh-warncard" key={w.title}>
                  <span className="nrh-warncard__icon">{w.icon}</span>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ROBOTIC SOLUTION ────────────────────────────── */}
      <section className="nrh-solution" id="technology">
        <div className="nrh-wrap nrh-solution__inner">
          <h2 className="nrh-h2 nrh-h2--light">The Robotic Solution</h2>
          <p className="nrh-solution__lead">
            Robotic Gastrectomy is a leap forward from traditional open or laparoscopic
            surgery. Using the Da Vinci surgical system, our surgeons operate with
            wrist-like instruments that provide a range of motion far exceeding the human hand.
          </p>
          <div className="nrh-stats">
            <div><strong>10×</strong><span>Visual Magnification</span></div>
            <div><strong>540°</strong><span>Instrument Rotation</span></div>
            <div><strong>0%</strong><span>Tremor Transfer</span></div>
          </div>
        </div>
      </section>

      {/* ── PROCEDURE SPECTRUM ──────────────────────────────── */}
      <section className="nrh-section" id="procedures">
        <div className="nrh-wrap">
          <div className="nrh-spectrum__head">
            <div>
              <h2 className="nrh-h2 nrh-h2--left">Procedure Spectrum</h2>
              <p className="nrh-sub">Tailoring the surgical approach based on tumor location and stage.</p>
            </div>
            <div className="nrh-arrows" aria-hidden>
              <button className="nrh-arrow">‹</button>
              <button className="nrh-arrow">›</button>
            </div>
          </div>
          <div className="nrh-cards3">
            {procedures.map((p) => (
              <article className="nrh-proc" key={p.title}>
                <span className="nrh-proc__icon">⚕</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <ul>
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SURGICAL JOURNEY ────────────────────────────────── */}
      <section className="nrh-section nrh-journey" id="patient-care">
        <div className="nrh-wrap">
          <h2 className="nrh-h2">The Surgical Journey</h2>
          <div className="nrh-journey__grid">
            <div className="nrh-journey__art"><GastrectomyArt /></div>
            <ol className="nrh-steps">
              {journey.map((s, i) => (
                <li
                  key={s.title}
                  className={i === active ? "is-active" : ""}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="nrh-steps__dot" />
                  <div>
                    <h4>Step {i + 1}: {s.title}</h4>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CLINICAL ADVANTAGES ─────────────────────────────── */}
      <section className="nrh-section nrh-adv">
        <div className="nrh-wrap">
          <h2 className="nrh-h2">Clinical Advantages</h2>
          <p className="nrh-sub nrh-sub--center">Why robotic surgery is the gold standard for gastric oncology.</p>
          <div className="nrh-cards4">
            {advantages.map((a) => (
              <article className="nrh-advcard" key={a.title}>
                <span className="nrh-advcard__icon">{a.icon}</span>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOVERY PATHWAY ────────────────────────────────── */}
      <section className="nrh-section">
        <div className="nrh-wrap">
          <h2 className="nrh-h2">Recovery Pathway</h2>
          <div className="nrh-cards3 nrh-recovery">
            {recovery.map((r) => (
              <article className="nrh-reccard" key={r.n}>
                <span className="nrh-reccard__num">{r.n}</span>
                <h4>{r.title}</h4>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST & EXPERTISE ───────────────────────────────── */}
      <section className="nrh-section nrh-trust">
        <div className="nrh-wrap nrh-trust__grid">
          <div>
            <h2 className="nrh-h2 nrh-h2--left">Trust &amp; Expertise:<br />Why Choose Us</h2>
            <p className="nrh-body">
              At Novo Robotic Hospital, we don't just treat cancer — we treat patients. Our
              multidisciplinary approach ensures every case is reviewed by a team of
              oncologists, radiologists, and robotic surgeons.
            </p>
            <div className="nrh-trust__stats">
              <div><strong>10,000+</strong><span>Successful Surgeries</span></div>
              <div className="nrh-trust__divider" />
              <div><strong>98%</strong><span>Patient Satisfaction</span></div>
            </div>
            <div className="nrh-trust__note">
              <h4>Multidisciplinary Team Approach</h4>
              <p>Your treatment plan is optimized through collaborative expertise across oncology, nutrition, and robotic surgery.</p>
            </div>
          </div>

          <div className="nrh-trust__media" style={DOCTOR_IMG ? { backgroundImage: `url(${DOCTOR_IMG})` } : undefined}>
            {!DOCTOR_IMG && <DoctorArt />}
            <span className="nrh-trust__clinic">Cancer Care Clinic</span>
            <div className="nrh-trust__name">
              <strong>Dr. Vivek</strong>
              <small>Oncologic Surgery</small>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="nrh-section" id="book">
        <div className="nrh-wrap">
          <div className="nrh-cta">
            <div className="nrh-cta__bag" aria-hidden>✚</div>
            <h2>Take the First Step Toward Recovery</h2>
            <p>Our specialists are ready to discuss your options. Early intervention with robotic technology offers the best path back to a healthy life.</p>
            <div className="nrh-cta__actions">
              <a className="nrh-btn nrh-btn--gold" href="#book">Book a Consultation</a>
              <a className="nrh-btn nrh-btn--ghost-light" href="#callback">Request a Call Back</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="nrh-footer">
        <div className="nrh-wrap nrh-footer__grid">
          <div className="nrh-footer__brand">
            <strong>Novo Robotic<br />Hospital</strong>
            <p>Pioneering surgical excellence through human-centered robotics and compassionate care.</p>
          </div>
          <div>
            <h5>Resources</h5>
            <a href="#">Patient Portal</a>
            <a href="#">Insurance Information</a>
            <a href="#">Virtual Tours</a>
          </div>
          <div>
            <h5>Connect</h5>
            <a href="#">Health Blog</a>
            <a href="#">Events &amp; Seminars</a>
            <a href="#">Career Opportunities</a>
          </div>
          <div>
            <h5>Contact</h5>
            <p>📍 100 Innovation Way, Science Park</p>
            <p>📞 +1 (800) NOVO-ROBOT</p>
            <p>✉ care@novorobotic.com</p>
          </div>
        </div>
        <div className="nrh-footer__bar">© 2024 Novo Robotic Hospital. Pioneering Surgical Excellence.</div>
      </footer>
    </div>
  );
}

/* ── SVG: laparoscopic inset (top-right of hero) ─────────── */
function Laparoscopic() {
  return (
    <svg className="nrh-lap" viewBox="0 0 240 170" role="img" aria-label="Laparoscopic view of the stomach">
      <defs>
        <radialGradient id="lapBg" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#7d2b2b" />
          <stop offset="100%" stopColor="#2a0d10" />
        </radialGradient>
        <linearGradient id="organ" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e98c86" />
          <stop offset="100%" stopColor="#c25f5e" />
        </linearGradient>
      </defs>
      <rect width="240" height="170" rx="6" fill="url(#lapBg)" />
      <path d="M70 120 C58 86 78 50 118 48 C150 46 176 64 178 92 C180 120 150 138 116 136 C96 135 80 138 70 120 Z" fill="url(#organ)" />
      <path d="M104 56 C120 70 124 96 112 122" fill="none" stroke="#9c4444" strokeWidth="3" opacity=".6" />
      <path d="M0 150 L96 96" stroke="#cfd6d8" strokeWidth="6" strokeLinecap="round" opacity=".9" />
      <path d="M240 30 L150 78" stroke="#cfd6d8" strokeWidth="6" strokeLinecap="round" opacity=".9" />
      <circle cx="120" cy="92" r="7" fill="#fff6d8" opacity=".7" />
    </svg>
  );
}

/* ── SVG: Partial Gastrectomy illustration (Surgical Journey) ─ */
function GastrectomyArt() {
  return (
    <svg viewBox="0 0 420 380" role="img" aria-label="Partial gastrectomy robotic procedure illustration">
      <defs>
        <linearGradient id="room" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8f0ec" />
          <stop offset="100%" stopColor="#bfe3dd" />
        </linearGradient>
        <linearGradient id="tummy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d98e86" />
          <stop offset="100%" stopColor="#b5635f" />
        </linearGradient>
        <linearGradient id="duod" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6a79a" />
          <stop offset="100%" stopColor="#cf7e6e" />
        </linearGradient>
        <radialGradient id="spark" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff6cf" />
          <stop offset="100%" stopColor="#fff6cf" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* room */}
      <rect x="6" y="6" width="408" height="368" rx="18" fill="url(#room)" />
      <path d="M6 110 L120 60 H300 L414 110" fill="#eafbf7" opacity=".7" />
      <rect x="36" y="150" width="34" height="34" rx="4" fill="#a9d8d0" opacity=".7" />

      {/* banner */}
      <rect x="70" y="44" width="220" height="34" rx="6" fill="#0f6b6b" />
      <text x="180" y="66" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="800" letterSpacing="1.5" fontFamily="Arial, sans-serif">PARTIAL GASTRECTOMY</text>

      {/* esophagus */}
      <path d="M236 78 C238 110 232 130 224 150" fill="none" stroke="#c98a7e" strokeWidth="13" strokeLinecap="round" />

      {/* stomach */}
      <path d="M210 150 C262 144 300 174 300 218 C300 268 256 296 206 290 C176 286 156 268 158 244 C160 224 180 222 196 230 C214 239 236 234 244 214 C250 198 240 182 214 180 C198 179 196 162 210 150 Z" fill="url(#tummy)" stroke="#9c504c" strokeWidth="2.5" />

      {/* removed portion (lower, lighter outline) */}
      <path d="M158 244 C160 224 180 222 196 230 C214 239 236 234 244 214" fill="none" stroke="#fff" strokeWidth="2.5" strokeDasharray="5 5" opacity=".85" />

      {/* duodenum */}
      <path d="M168 262 C150 300 170 330 120 344" fill="none" stroke="url(#duod)" strokeWidth="20" strokeLinecap="round" />

      {/* robotic arms */}
      <line x1="14" y1="150" x2="176" y2="236" stroke="#9fb0b6" strokeWidth="7" strokeLinecap="round" />
      <circle cx="14" cy="150" r="6" fill="#0f6b6b" />
      <line x1="14" y1="210" x2="180" y2="252" stroke="#9fb0b6" strokeWidth="7" strokeLinecap="round" />
      <circle cx="14" cy="210" r="6" fill="#0f6b6b" />
      <line x1="406" y1="300" x2="250" y2="252" stroke="#9fb0b6" strokeWidth="7" strokeLinecap="round" />
      <circle cx="406" cy="300" r="6" fill="#0f6b6b" />

      {/* spark at incision */}
      <circle cx="190" cy="244" r="26" fill="url(#spark)" />
      <circle cx="190" cy="244" r="4" fill="#fff" />

      {/* labels */}
      <g fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#2b4a52" letterSpacing="1">
        <text x="60" y="172">ROBOTIC</text>
        <text x="60" y="186">PRECISION</text>
        <text x="318" y="168">STOMACH</text>
        <text x="316" y="262">REMOVED</text>
        <text x="316" y="276">PORTION</text>
        <text x="40" y="356">DUODENUM</text>
      </g>
      <g stroke="#5b7a80" strokeWidth="1">
        <line x1="118" y1="178" x2="170" y2="210" />
        <line x1="312" y1="164" x2="280" y2="178" />
        <line x1="312" y1="258" x2="270" y2="248" />
        <line x1="96" y1="352" x2="120" y2="340" />
      </g>
    </svg>
  );
}

/* ── SVG: doctor fallback (Trust section) ────────────────── */
function DoctorArt() {
  return (
    <svg className="nrh-docart" viewBox="0 0 300 360" role="img" aria-label="Oncologic surgeon">
      <defs>
        <linearGradient id="docbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dfeeec" />
          <stop offset="100%" stopColor="#bcd9d3" />
        </linearGradient>
      </defs>
      <rect width="300" height="360" fill="url(#docbg)" />
      <circle cx="150" cy="132" r="54" fill="#caa28c" />
      <path d="M150 196 C90 196 64 244 60 360 H240 C236 244 210 196 150 196 Z" fill="#fff" />
      <path d="M150 196 L126 360 H174 Z" fill="#eef3f3" />
      <path d="M132 200 q18 22 36 0" fill="none" stroke="#7fa8a0" strokeWidth="5" strokeLinecap="round" />
      <circle cx="120" cy="300" r="9" fill="#7fa8a0" />
      <rect x="170" y="220" width="40" height="26" rx="3" fill="#0f6b6b" />
    </svg>
  );
}

/* ───────────────────────── STYLES ───────────────────────── */
const css = `
.nrh{--teal:#0f6b6b;--teal-deep:#0a5252;--navy:#15303b;--gold:#f1c84c;--ink:#1f2e35;--muted:#647982;--bg:#f5f7f8;--line:#e7ebed;
  font-family:'Inter','Segoe UI',system-ui,-apple-system,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.5;-webkit-font-smoothing:antialiased;}
.nrh *{box-sizing:border-box;}
.nrh a{text-decoration:none;color:inherit;}
.nrh-wrap{max-width:1160px;margin:0 auto;padding:0 28px;}

/* buttons */
.nrh-btn{display:inline-flex;align-items:center;gap:.5rem;font-weight:700;font-size:.95rem;padding:.85rem 1.5rem;border-radius:9px;border:1.5px solid transparent;cursor:pointer;transition:transform .15s,box-shadow .2s,background .2s;}
.nrh-btn:hover{transform:translateY(-2px);}
.nrh-btn--gold{background:var(--gold);color:#3a2e07;}
.nrh-btn--gold:hover{box-shadow:0 10px 24px rgba(241,200,76,.45);}
.nrh-btn--teal{background:var(--teal);color:#fff;}
.nrh-btn--teal:hover{box-shadow:0 12px 26px rgba(15,107,107,.35);}
.nrh-btn--ghost{background:#fff;border-color:var(--line);color:var(--navy);}
.nrh-btn--ghost-light{background:transparent;border-color:rgba(255,255,255,.5);color:#fff;}
.nrh-btn--ghost-light:hover{background:rgba(255,255,255,.1);}

/* nav */
.nrh-nav{position:sticky;top:0;z-index:50;background:rgba(245,247,248,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--line);}
.nrh-nav__inner{display:flex;align-items:center;justify-content:space-between;height:70px;}
.nrh-logo{font-weight:800;font-size:1.15rem;color:var(--navy);letter-spacing:-.3px;}
.nrh-links{display:flex;gap:2rem;}
.nrh-links a{font-size:.8rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#46606a;transition:color .2s;}
.nrh-links a:hover{color:var(--teal);}
.nrh-nav__cta{padding:.6rem 1.2rem;font-size:.78rem;letter-spacing:1px;text-transform:uppercase;}

/* hero */
.nrh-hero{position:relative;background:linear-gradient(120deg,#eef3f3 0%,#dfeae9 45%,#c7dcd9 100%);overflow:hidden;}
.nrh-hero__inner{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center;padding:78px 28px 90px;}
.nrh-eyebrow{display:inline-block;font-size:.7rem;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--teal);background:rgba(15,107,107,.1);border:1px solid rgba(15,107,107,.25);padding:.35rem .9rem;border-radius:999px;margin-bottom:1.4rem;}
.nrh-hero h1{font-size:3.4rem;line-height:1.05;font-weight:800;letter-spacing:-1.5px;color:var(--navy);margin:0 0 1.3rem;}
.nrh-lead{font-size:1.02rem;color:var(--muted);max-width:30rem;margin:0 0 2rem;}
.nrh-hero__actions{display:flex;gap:1rem;flex-wrap:wrap;}
.nrh-hero__media{position:relative;min-height:380px;}
.nrh-lap{position:absolute;top:0;right:0;width:74%;border-radius:8px;box-shadow:0 18px 40px rgba(20,40,48,.25);}
.nrh-floatcard{position:absolute;right:6%;bottom:6%;width:78%;max-width:300px;background:#fff;border-radius:14px;padding:1.1rem 1.2rem;box-shadow:0 20px 50px rgba(20,40,48,.18);}
.nrh-floatcard__top{display:flex;gap:.7rem;align-items:center;margin-bottom:.7rem;}
.nrh-floatcard__chip{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:rgba(241,200,76,.25);font-size:1.1rem;}
.nrh-floatcard__top strong{display:block;font-size:1.25rem;color:var(--navy);line-height:1;}
.nrh-floatcard__top small{color:var(--muted);font-size:.78rem;}
.nrh-floatcard p{margin:0;font-size:.84rem;color:var(--muted);font-style:italic;line-height:1.45;}

/* generic section / headings */
.nrh-section{padding:88px 0;}
.nrh-h2{font-size:2.5rem;font-weight:800;letter-spacing:-1px;color:var(--navy);text-align:center;margin:0 0 .4rem;}
.nrh-h2--left{text-align:left;}
.nrh-h2--light{color:#fff;}
.nrh-sub{color:var(--muted);font-size:.98rem;margin:.2rem 0 0;}
.nrh-sub--center{text-align:center;margin:.4rem auto 3rem;}
.nrh-body{color:var(--muted);font-size:1rem;margin:0 0 1.2rem;max-width:32rem;}
.nrh-textlink{display:inline-block;margin-top:.4rem;font-weight:700;color:var(--teal);font-size:.92rem;}
.nrh-textlink:hover{text-decoration:underline;}

/* understanding */
.nrh-understand{background:#fff;}
.nrh-understand__grid{display:grid;grid-template-columns:1fr 1.05fr;gap:56px;align-items:start;}
.nrh-warnhead{display:flex;align-items:center;gap:.5rem;font-size:1rem;font-weight:800;color:var(--navy);margin:0 0 1.2rem;}
.nrh-warngrid{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.nrh-warncard{background:#fafbfb;border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:10px;padding:1.1rem 1.1rem 1.2rem;}
.nrh-warncard__icon{font-size:1.2rem;}
.nrh-warncard h4{margin:.6rem 0 .35rem;font-size:.98rem;color:var(--navy);}
.nrh-warncard p{margin:0;font-size:.85rem;color:var(--muted);line-height:1.45;}

/* solution (teal band) */
.nrh-solution{background:var(--teal);color:#fff;padding:80px 0;text-align:center;}
.nrh-solution__lead{max-width:46rem;margin:1.2rem auto 2.6rem;color:rgba(255,255,255,.82);font-size:1rem;}
.nrh-stats{display:flex;justify-content:center;gap:5rem;flex-wrap:wrap;}
.nrh-stats div{display:flex;flex-direction:column;}
.nrh-stats strong{font-size:2.1rem;font-weight:800;color:var(--gold);line-height:1;}
.nrh-stats span{margin-top:.5rem;font-size:.72rem;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.7);}

/* spectrum */
.nrh-spectrum__head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:2.4rem;}
.nrh-arrows{display:flex;gap:.6rem;}
.nrh-arrow{width:40px;height:40px;border-radius:50%;border:1.5px solid var(--line);background:#fff;color:var(--navy);font-size:1.2rem;cursor:pointer;transition:.2s;}
.nrh-arrow:hover{background:var(--teal);color:#fff;border-color:var(--teal);}
.nrh-cards3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.nrh-proc{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.8rem 1.6rem;transition:transform .2s,box-shadow .2s;}
.nrh-proc:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(20,40,48,.08);}
.nrh-proc__icon{display:grid;place-items:center;width:46px;height:46px;border-radius:10px;background:#eaf4f2;color:var(--teal);font-size:1.3rem;margin-bottom:1.1rem;}
.nrh-proc h3{font-size:1.18rem;color:var(--navy);margin:0 0 .6rem;}
.nrh-proc p{color:var(--muted);font-size:.9rem;margin:0 0 1.1rem;line-height:1.5;}
.nrh-proc ul{list-style:none;margin:0;padding:0;}
.nrh-proc li{font-size:.74rem;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:var(--teal);padding-left:1rem;position:relative;margin-bottom:.4rem;}
.nrh-proc li::before{content:"";position:absolute;left:0;top:.45em;width:6px;height:6px;border-radius:50%;background:var(--gold);}

/* journey */
.nrh-journey__grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;margin-top:2.5rem;}
.nrh-journey__art svg{width:100%;height:auto;border-radius:18px;box-shadow:0 18px 44px rgba(20,40,48,.12);display:block;}
.nrh-steps{list-style:none;margin:0;padding:0;}
.nrh-steps li{display:flex;gap:1.1rem;padding:0 0 1.8rem .3rem;position:relative;cursor:default;}
.nrh-steps li:not(:last-child)::after{content:"";position:absolute;left:6px;top:18px;bottom:0;width:2px;background:var(--line);}
.nrh-steps__dot{width:14px;height:14px;border-radius:50%;border:2px solid #c3ced2;background:#fff;flex:none;margin-top:3px;z-index:1;transition:.2s;}
.nrh-steps li.is-active .nrh-steps__dot{background:var(--teal);border-color:var(--teal);box-shadow:0 0 0 4px rgba(15,107,107,.15);}
.nrh-steps h4{margin:0 0 .3rem;font-size:1.04rem;color:var(--navy);}
.nrh-steps p{margin:0;font-size:.88rem;color:var(--muted);line-height:1.5;}

/* advantages */
.nrh-adv{background:#fff;}
.nrh-cards4{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
.nrh-advcard{background:#fafbfb;border:1px solid var(--line);border-radius:14px;padding:1.7rem 1.3rem;text-align:center;transition:transform .2s,box-shadow .2s;}
.nrh-advcard:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(20,40,48,.08);}
.nrh-advcard__icon{font-size:1.5rem;}
.nrh-advcard h4{margin:.9rem 0 .5rem;font-size:1rem;color:var(--navy);}
.nrh-advcard p{margin:0;font-size:.85rem;color:var(--muted);line-height:1.5;}

/* recovery */
.nrh-recovery .nrh-reccard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.9rem 1.6rem;text-align:center;}
.nrh-reccard__num{display:inline-grid;place-items:center;width:40px;height:40px;border-radius:50%;background:var(--teal);color:#fff;font-weight:800;margin-bottom:1rem;}
.nrh-reccard h4{margin:0 0 .5rem;font-size:1.1rem;color:var(--navy);}
.nrh-reccard p{margin:0;color:var(--muted);font-size:.9rem;line-height:1.55;}

/* trust */
.nrh-trust{background:#fff;}
.nrh-trust__grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
.nrh-trust__stats{display:flex;align-items:center;gap:2rem;margin:1.8rem 0;}
.nrh-trust__stats strong{font-size:2.3rem;font-weight:800;color:var(--navy);line-height:1;}
.nrh-trust__stats span{font-size:.7rem;letter-spacing:1.3px;text-transform:uppercase;color:var(--muted);}
.nrh-trust__divider{width:1px;height:46px;background:var(--line);}
.nrh-trust__note{background:#f3f8f7;border:1px solid #dceae7;border-radius:12px;padding:1.2rem 1.3rem;}
.nrh-trust__note h4{margin:0 0 .4rem;font-size:.98rem;color:var(--navy);}
.nrh-trust__note p{margin:0;font-size:.86rem;color:var(--muted);line-height:1.5;}
.nrh-trust__media{position:relative;min-height:420px;border-radius:18px;overflow:hidden;background:#dfeeec center/cover no-repeat;box-shadow:0 20px 50px rgba(20,40,48,.16);}
.nrh-docart{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.nrh-trust__clinic{position:absolute;top:18px;right:18px;background:rgba(255,255,255,.85);color:var(--navy);font-size:.68rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:.4rem .7rem;border-radius:6px;}
.nrh-trust__name{position:absolute;left:18px;bottom:18px;background:rgba(15,48,59,.78);backdrop-filter:blur(4px);color:#fff;padding:.6rem .9rem;border-radius:8px;}
.nrh-trust__name strong{display:block;font-size:.95rem;}
.nrh-trust__name small{font-size:.72rem;opacity:.8;}

/* cta */
.nrh-cta{position:relative;background:var(--teal);color:#fff;border-radius:20px;text-align:center;padding:64px 32px;overflow:hidden;}
.nrh-cta__bag{position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:9rem;color:rgba(255,255,255,.07);font-weight:800;}
.nrh-cta h2{font-size:2.4rem;font-weight:800;color:#fff;margin:0 0 1rem;letter-spacing:-.6px;}
.nrh-cta p{max-width:40rem;margin:0 auto 2rem;color:rgba(255,255,255,.85);font-size:1rem;}
.nrh-cta__actions{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}

/* footer */
.nrh-footer{background:var(--teal-deep);color:rgba(255,255,255,.78);}
.nrh-footer__grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:36px;padding:64px 28px 48px;}
.nrh-footer__brand strong{display:block;font-size:1.25rem;color:#fff;margin-bottom:.9rem;line-height:1.2;}
.nrh-footer__brand p{font-size:.86rem;line-height:1.6;max-width:18rem;}
.nrh-footer h5{font-size:.78rem;letter-spacing:1.4px;text-transform:uppercase;color:#fff;margin:0 0 1.1rem;}
.nrh-footer a,.nrh-footer__grid p{display:block;font-size:.88rem;margin-bottom:.7rem;transition:color .2s;}
.nrh-footer a:hover{color:#fff;}
.nrh-footer__bar{border-top:1px solid rgba(255,255,255,.12);text-align:center;padding:1.4rem;font-size:.82rem;color:rgba(255,255,255,.6);}

/* responsive */
@media(max-width:960px){
  .nrh-hero h1{font-size:2.6rem;}
  .nrh-hero__inner,.nrh-understand__grid,.nrh-journey__grid,.nrh-trust__grid{grid-template-columns:1fr;}
  .nrh-hero__media{min-height:320px;margin-top:1rem;}
  .nrh-cards4{grid-template-columns:1fr 1fr;}
  .nrh-cards3{grid-template-columns:1fr;}
  .nrh-links{display:none;}
  .nrh-stats{gap:2.5rem;}
}
@media(max-width:560px){
  .nrh-wrap{padding:0 18px;}
  .nrh-section{padding:60px 0;}
  .nrh-hero h1{font-size:2.1rem;}
  .nrh-h2,.nrh-cta h2{font-size:1.9rem;}
  .nrh-warngrid,.nrh-cards4{grid-template-columns:1fr;}
  .nrh-nav__cta{display:none;}
  .nrh-trust__stats{gap:1.2rem;}
}
;