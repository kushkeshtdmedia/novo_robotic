import { Link } from "react-router-dom";

/**
 * Blog: How to Spot a Hernia: Signs and Symptoms in Different Parts of the Body
 * Route: /blog/hernia-signs-and-symptoms
 * Text-only page (no images). Styled with the Precision Care design tokens.
 */

const sections = [
  { id: "what-is-hernia", label: "What is a hernia?" },
  { id: "inguinal", label: "Groin (inguinal)" },
  { id: "femoral", label: "Upper thigh (femoral)" },
  { id: "umbilical", label: "Belly button (umbilical)" },
  { id: "incisional", label: "Surgical scar (incisional)" },
  { id: "epigastric", label: "Upper abdomen (epigastric)" },
  { id: "hiatal", label: "Inside the chest (hiatal)" },
  { id: "treatment", label: "Management and treatment" },
  { id: "warning-signs", label: "Warning signs" },
  { id: "getting-treated", label: "Getting it treated" },
];

const herniaTypes = [
  {
    id: "inguinal",
    area: "Groin",
    name: "Inguinal hernia",
    note: "An inguinal hernia is the most common type of groin hernia and is more common in men.",
    signs:
      "A soft lump on one side of the groin, sometimes extending into the scrotum. It gets bigger when you stand or cough and flattens when you lie down.",
    symptoms:
      "A heavy, dragging feeling, and aching or burning that gets worse by the end of the day or after exercise.",
  },
  {
    id: "femoral",
    area: "Upper thigh",
    name: "Femoral hernia",
    note: "Femoral hernias are more common in women.",
    signs: "A small bulge just below the groin crease, at the top of the inner thigh.",
    symptoms: "Discomfort when standing or lifting. Some femoral hernias cause no symptoms at all.",
  },
  {
    id: "umbilical",
    area: "Belly button",
    name: "Umbilical hernia",
    signs:
      "A soft swelling at or beside the navel that becomes more noticeable when you laugh, cough or strain.",
    symptoms:
      "Mild tenderness or pressure around the belly button. This type is common after pregnancy and in people who carry weight around the middle.",
  },
  {
    id: "incisional",
    area: "Along a surgical scar",
    name: "Incisional hernia",
    signs:
      "A bulge or soft, spongy area along or near the scar from a previous abdominal operation, sometimes appearing months or years later.",
    symptoms:
      "A pulling sensation, discomfort when bending, and a bulge that slowly grows over time.",
  },
  {
    id: "epigastric",
    area: "Upper abdomen",
    name: "Epigastric hernia",
    signs: "A small lump in the middle of the belly, between the navel and the breastbone.",
    symptoms: "Tenderness or a burning pain, even when the lump is barely visible.",
  },
  {
    id: "hiatal",
    area: "Inside the chest",
    name: "Hiatal hernia",
    note: "Unlike the other types described above, a hiatal hernia occurs inside the body. Part of the stomach moves through an opening in the diaphragm into the chest, so there is usually no visible lump.",
    symptoms:
      "Frequent heartburn, acid reflux, a sour taste in the mouth, chest discomfort after meals, and difficulty swallowing.",
  },
];

const repairOptions = [
  { title: "Open surgery", text: "A single larger cut over the hernia." },
  { title: "Laparoscopic (keyhole) surgery", text: "A few small cuts and a camera." },
  {
    title: "Robotic surgery",
    text: "A minimally invasive approach in which the surgeon controls robotic instruments using a magnified 3D view. Depending on the type of hernia and the individual patient, it may offer smaller incisions, less postoperative discomfort, and a quicker return to daily activities.",
  },
];

const warningSigns = [
  "The bulge turns red or purple.",
  "It becomes hard and very painful.",
  "It can't be pushed back in.",
  "It comes with nausea, vomiting, fever, or an inability to pass gas or stool.",
];

const linkClass =
  "text-[#005a65] underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]";

function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-[Manrope] text-[24px] md:text-[32px] font-bold leading-[1.3] text-[#005a65] mt-16 mb-5"
    >
      {children}
    </h2>
  );
}

function HerniaCard({ type }) {
  return (
    <section
      id={type.id}
      aria-labelledby={`${type.id}-title`}
      className="scroll-mt-28 rounded-[1.5rem] bg-white p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
    >
      <p className="font-['IBM_Plex_Sans'] text-[13px] font-semibold text-[#0d7481]">{type.area}</p>
      <h3 id={`${type.id}-title`} className="mt-1 text-[22px] md:text-[24px] font-bold leading-[1.3] text-[#1a1c1e]">
        {type.name}
      </h3>
      {type.note && <p className="mt-3 text-[16px] leading-[1.6] text-[#3e484a]">{type.note}</p>}

      <dl className={`mt-5 grid gap-4 ${type.signs ? "sm:grid-cols-2" : ""}`}>
        {type.signs && (
          <div className="rounded-[1rem] bg-[#f3f3f6] p-5">
            <dt className="font-['IBM_Plex_Sans'] text-[14px] font-bold text-[#005a65]">Signs</dt>
            <dd className="mt-2 text-[15px] leading-[1.6] text-[#1a1c1e]">{type.signs}</dd>
          </div>
        )}
        <div className="rounded-[1rem] bg-[#f3f3f6] p-5">
          <dt className="font-['IBM_Plex_Sans'] text-[14px] font-bold text-[#005a65]">Symptoms</dt>
          <dd className="mt-2 text-[15px] leading-[1.6] text-[#1a1c1e]">{type.symptoms}</dd>
        </div>
      </dl>
    </section>
  );
}

export default function HerniaSignsAndSymptoms() {
  return (
    <main className="bg-[#f9f9fc] text-[#1a1c1e] font-[Manrope]">
      {/* Header block */}
      <header className="bg-[#005a65] text-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <nav aria-label="Breadcrumb" className="font-['IBM_Plex_Sans'] text-[13px] text-[#b9f4ff]">
            <Link to="/" className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#fdd350]">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <Link to="/blog" className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#fdd350]">
              Blog
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white/80">Hernia signs and symptoms</span>
          </nav>

          <h1 className="mt-8 max-w-[20ch] text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em]">
            How to spot a hernia: signs and symptoms in different parts of the body
          </h1>

          <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.6] text-[#e5eced]">
            Where a hernia appears, what it feels like, how it is treated, and the warning signs
            that need urgent care.
          </p>

          <p className="mt-8 font-['IBM_Plex_Sans'] text-[13px] text-[#81d3e1]">
            Novo Robotic Surgery Centre, Kaushambi, Ghaziabad
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-5 md:px-6 py-16 md:py-[120px] lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Table of contents */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav aria-label="On this page" className="sticky top-28 border-l border-[#bec8cb] pl-5">
            <p className="font-['IBM_Plex_Sans'] text-[13px] font-semibold text-[#3e484a] mb-4">
              On this page
            </p>
            <ul className="space-y-3 text-[14px]">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-[#3e484a] hover:text-[#005a65] focus-visible:outline-2 focus-visible:outline-[#005a65] rounded-sm"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Article */}
        <article className="lg:col-span-8 lg:col-start-5 max-w-[720px] text-[17px] md:text-[18px] leading-[1.7] text-[#1a1c1e]">
          <p className="text-[20px] md:text-[22px] leading-[1.6]">
            A hernia can develop quietly, and you may not notice it at first. You might see a small
            bulge while getting dressed or feel pressure, discomfort, or a pulling sensation when
            lifting something heavy.
          </p>
          <p className="mt-5 text-[#3e484a]">
            Hernias are common and treatable, but they usually do not go away on their own.
            Recognizing the signs and symptoms of a hernia in different parts of the body can help
            you seek medical advice early and avoid complications.
          </p>

          <SectionHeading id="what-is-hernia">What is a hernia?</SectionHeading>
          <p>
            A hernia happens when a weak spot in the abdominal wall allows fat or part of the
            intestine to push through, creating a bulge under the skin.
          </p>
          <p className="mt-5">
            Heavy lifting, chronic coughing, constipation, pregnancy, excess weight, and previous
            surgery can increase the risk. A hernia may cause pain, pressure, or a pulling
            sensation, but sometimes there are no symptoms at all.
          </p>

          <h2 className="mt-16 mb-6 text-[24px] md:text-[32px] font-bold leading-[1.3] text-[#005a65]">
            Signs and symptoms by body part
          </h2>
          <div className="space-y-6">
            {herniaTypes.map((t) => (
              <HerniaCard key={t.id} type={t} />
            ))}
          </div>

          <SectionHeading id="treatment">Management and treatment</SectionHeading>
          <p>
            Treatment depends on the type and size of the hernia, as well as your symptoms. A
            surgeon can usually diagnose a hernia through a physical examination. An ultrasound or
            CT scan may be recommended when more detail is needed.
          </p>

          <h3 className="mt-10 text-[22px] md:text-[24px] font-semibold leading-[1.4] text-[#1a1c1e]">
            Hernia repair surgery
          </h3>
          <p className="mt-4">
            Surgery is the definitive way to repair a hernia. During the procedure, the surgeon
            moves the bulging tissue back into place and repairs the weak area, sometimes using
            surgical mesh.
          </p>
          <dl className="mt-6 divide-y divide-[#e2e2e5] rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            {repairOptions.map((o) => (
              <div key={o.title} className="px-6 py-5">
                <dt className="font-bold text-[#005a65]">{o.title}</dt>
                <dd className="mt-1 text-[16px] leading-[1.6] text-[#3e484a]">{o.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[16px] text-[#3e484a]">
            Not sure how keyhole and robotic surgery differ? Read{" "}
            <Link to="/blog/laparoscopic-vs-robotic-surgery" className={linkClass}>
              laparoscopic vs robotic surgery
            </Link>
            .
          </p>

          {/* Warning signs */}
          <section
            id="warning-signs"
            aria-labelledby="warning-title"
            className="scroll-mt-28 mt-16 rounded-[1.5rem] border-2 border-[#ba1a1a] bg-[#ffdad6] p-6 md:p-8"
          >
            <h2 id="warning-title" className="text-[24px] md:text-[28px] font-bold leading-[1.3] text-[#93000a]">
              Warning signs: seek urgent care
            </h2>
            <p className="mt-3 text-[#1a1c1e]">
              Some hernias can become serious and need immediate medical attention. Go to a hospital
              if:
            </p>
            <ul className="mt-5 space-y-3">
              {warningSigns.map((w) => (
                <li key={w} className="flex gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-[#ba1a1a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 9v4M12 17h.01" />
                    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                  </svg>
                  <span className="font-semibold text-[#1a1c1e]">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#1a1c1e]">
              These can signal a <strong>strangulated hernia</strong>, where the blood supply to the
              trapped tissue is cut off. This is a surgical emergency.
            </p>
          </section>

          <SectionHeading id="getting-treated">Getting it treated</SectionHeading>
          <p>
            A hernia may become larger or more uncomfortable over time, even if it does not hurt at
            first. Getting the right treatment early can help prevent complications and support a
            smoother recovery.
          </p>
          <p className="mt-5">
            <Link to="/services/hernia-surgery" className={linkClass}>
              Robotic hernia surgery
            </Link>{" "}
            uses small keyhole incisions to repair the weak area with precise, minimally invasive
            techniques. Depending on your condition, it may offer smaller scars, less discomfort, and
            a quicker return to daily activities.
          </p>

          {/* CTA */}
          <section className="mt-16 rounded-[1.5rem] bg-[#005a65] px-6 py-10 md:px-10 text-white">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-[1.3]">
              Noticed signs of a hernia?
            </h2>
            <p className="mt-3 max-w-[56ch] text-[#e5eced]">
              Consult{" "}
              <Link to="/dr-vikrant-sharma" className="font-semibold text-white underline underline-offset-4 decoration-[#fdd350]">
                Dr. Vikrant Sharma
              </Link>
              , Robotic &amp; Bariatric Surgeon with 20+ years of surgical experience, at Novo
              Robotic Surgery Centre, Kaushambi, Ghaziabad.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-[0.5rem] bg-[#fdd350] px-6 py-3 font-bold text-[#241a00] hover:bg-[#ebc241] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a consultation
            </Link>
          </section>

          <p className="mt-10 text-[14px] italic leading-[1.6] text-[#6e797b]">
            This article is for general information only and is not a substitute for medical advice.
            Please consult a qualified surgeon about your specific condition.
          </p>
        </article>
      </div>
    </main>
  );
}