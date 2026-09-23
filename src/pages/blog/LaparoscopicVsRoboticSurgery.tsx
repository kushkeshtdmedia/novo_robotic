import { Link } from "react-router-dom";

/**
 * Blog: Confused Between Laparoscopic and Robotic Surgery? Read This
 * Route: /blog/laparoscopic-vs-robotic-surgery
 * Text-only page (no images). Styled with the Precision Care design tokens.
 */

const sections = [
  { id: "what-is-laparoscopic", label: "What is laparoscopic surgery?" },
  { id: "what-is-robotic", label: "What is robotic surgery?" },
  { id: "comparison", label: "Quick comparison" },
  { id: "common-benefits", label: "What both have in common" },
  { id: "when-robotic", label: "When robotic may be better" },
  { id: "when-laparoscopic", label: "When laparoscopic is enough" },
  { id: "cost", label: "What about the cost?" },
  { id: "questions", label: "Questions to ask your surgeon" },
  { id: "bottom-line", label: "The bottom line" },
];

const comparisonRows = [
  ["Incisions", "Small", "Small"],
  ["Surgeon's view", "Usually 2D on a screen", "Magnified 3D HD view"],
  ["Instrument movement", "Straight, limited angles", "Wristed, highly flexible"],
  ["Precision in tight spaces", "Good", "Excellent"],
  ["Recovery time", "Faster than open surgery", "Faster than open surgery, sometimes quicker still"],
  ["Cost", "Lower", "Higher"],
];

const commonBenefits = [
  "Smaller scars",
  "Less pain after surgery",
  "Lower risk of wound infection",
  "Shorter hospital stay",
  "Faster return to daily activities",
];

const roboticCases = [
  {
    title: "Complex procedures",
    text: "Surgeries deep in the pelvis or near important nerves and blood vessels benefit from the added precision.",
  },
  {
    title: "Cancer surgery",
    text: "Precise removal of tumours and nearby lymph nodes while protecting healthy tissue.",
  },
  {
    title: "Weight loss surgery",
    text: "Procedures like sleeve gastrectomy and gastric bypass can be easier to perform precisely in patients with higher BMI.",
  },
  {
    title: "Organ-preserving surgery",
    text: "For example, fertility-preserving procedures in women.",
  },
];

const surgeonQuestions = [
  "Which approach do you recommend for my condition, and why?",
  "How many of these procedures have you performed?",
  "What is the expected recovery time for each option?",
  "What are the risks specific to my case?",
  "What will the total cost be, and is it covered by my insurance?",
];

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

function Check() {
  return (
    <svg
      className="mt-1 h-5 w-5 flex-none text-[#0d7481]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function LaparoscopicVsRoboticSurgery() {
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
            <span className="text-white/80">Laparoscopic vs robotic surgery</span>
          </nav>

          <h1 className="mt-8 max-w-[18ch] text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Confused between laparoscopic and robotic surgery? Read this.
          </h1>

          <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.6] text-[#e5eced]">
            A plain-language guide to how the two techniques differ, where each one works best,
            and what to ask your surgeon before you decide.
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
          <p className="text-[20px] md:text-[22px] leading-[1.6] text-[#1a1c1e]">
            If your doctor has told you that you need surgery, you may have heard two terms come up:{" "}
            <strong>laparoscopic surgery</strong> and <strong>robotic surgery</strong>. Both sound
            modern and both promise faster recovery, so it's natural to wonder how they differ and
            which one is right for you.
          </p>
          <p className="mt-5 text-[#3e484a]">
            This guide explains both options in simple language so you can have a more confident
            conversation with your surgeon.
          </p>

          <SectionHeading id="what-is-laparoscopic">What is laparoscopic surgery?</SectionHeading>
          <p>
            Laparoscopic surgery, often called <strong>keyhole surgery</strong>, is a minimally
            invasive technique. Instead of one large cut, the surgeon makes a few small incisions,
            usually 0.5 to 1.5 cm each. A thin tube with a camera (the laparoscope) goes through one
            incision and shows the inside of your body on a screen. The surgeon then operates with
            long, thin instruments inserted through the other incisions.
          </p>
          <p className="mt-5">
            Laparoscopic surgery has been used safely for decades. It is commonly used for{" "}
            <Link to="/services/gallbladder-surgery" className="text-[#005a65] underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]">
              gallbladder removal
            </Link>
            ,{" "}
            <Link to="/services/appendix-surgery" className="text-[#005a65] underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]">
              appendix removal
            </Link>
            ,{" "}
            <Link to="/services/hernia-surgery" className="text-[#005a65] underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]">
              hernia repair
            </Link>
            , and many gynaecological procedures.
          </p>

          <SectionHeading id="what-is-robotic">What is robotic surgery?</SectionHeading>
          <p>
            Robotic surgery is also minimally invasive and also uses small incisions. The difference
            is in <strong>how the surgeon controls the instruments</strong>.
          </p>
          <p className="mt-5">
            The surgeon sits at a console in the operating room and guides robotic arms that hold
            the camera and instruments. The robot does not operate on its own.
          </p>

          <p className="my-8 border-l-4 border-[#fdd350] bg-white rounded-r-[0.75rem] px-6 py-5 text-[20px] font-semibold leading-[1.5] text-[#005a65] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            Every movement is controlled by your surgeon.
          </p>

          <p>The system simply extends the surgeon's abilities with:</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["3D HD view", "A magnified, high-definition 3D view of the surgical area"],
              ["Wristed instruments", "Instruments that bend and rotate more than the human hand"],
              ["Tremor filtering", "Smooths out even the tiniest hand movements"],
            ].map(([term, desc]) => (
              <div key={term} className="rounded-[1rem] border border-[#bec8cb] bg-white p-5">
                <dt className="font-['IBM_Plex_Sans'] text-[14px] font-bold text-[#005a65]">{term}</dt>
                <dd className="mt-2 text-[15px] leading-[1.55] text-[#3e484a]">{desc}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8">
            Robotic surgery is especially helpful in procedures that involve tight spaces or delicate
            structures, such as{" "}
            <Link to="/services/colorectal-cancer-surgery" className="text-[#005a65] underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]">
              colorectal cancer surgery
            </Link>
            ,{" "}
            <Link to="/services/stomach-cancer-surgery" className="text-[#005a65] underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]">
              stomach
            </Link>{" "}
            and{" "}
            <Link to="/services/oesophagus-surgery" className="text-[#005a65] underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]">
              oesophagus surgery
            </Link>
            ,{" "}
            <Link to="/services/gynecologic-cancer-surgery" className="text-[#005a65] underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]">
              gynaecologic cancer surgery
            </Link>
            , bariatric (weight loss) surgery, and complex hernia repairs.
          </p>

          <SectionHeading id="comparison">Laparoscopic vs robotic surgery: a quick comparison</SectionHeading>
          <div className="overflow-x-auto rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <table className="w-full min-w-[560px] text-left text-[15px]">
              <caption className="sr-only">Comparison of laparoscopic and robotic surgery</caption>
              <thead>
                <tr className="bg-[#005a65] text-white">
                  <th scope="col" className="px-5 py-4 font-['IBM_Plex_Sans'] font-semibold">Factor</th>
                  <th scope="col" className="px-5 py-4 font-['IBM_Plex_Sans'] font-semibold">Laparoscopic surgery</th>
                  <th scope="col" className="px-5 py-4 font-['IBM_Plex_Sans'] font-semibold">Robotic surgery</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([factor, lap, rob], i) => (
                  <tr key={factor} className={i % 2 ? "bg-[#f3f3f6]" : "bg-white"}>
                    <th scope="row" className="px-5 py-4 font-semibold text-[#1a1c1e] align-top">{factor}</th>
                    <td className="px-5 py-4 text-[#3e484a] align-top">{lap}</td>
                    <td className="px-5 py-4 text-[#1a1c1e] align-top">{rob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionHeading id="common-benefits">What both have in common</SectionHeading>
          <p>Both methods offer major advantages over traditional open surgery:</p>
          <ul className="mt-5 space-y-3">
            {commonBenefits.map((b) => (
              <li key={b} className="flex gap-3">
                <Check />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            So whichever option you choose, you are already choosing a less invasive path.
          </p>

          <SectionHeading id="when-robotic">When might robotic surgery be the better choice?</SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2">
            {roboticCases.map((c) => (
              <div key={c.title} className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                <h3 className="text-[18px] font-bold text-[#1a1c1e]">{c.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#3e484a]">{c.text}</p>
              </div>
            ))}
          </div>

          <SectionHeading id="when-laparoscopic">When is laparoscopic surgery enough?</SectionHeading>
          <p>
            For many routine procedures, such as gallbladder or appendix removal, laparoscopic
            surgery gives excellent results at a lower cost. A more advanced technology is not always
            necessary.
          </p>
          <p className="mt-5">
            This is why centres that offer both options tend to give the most balanced advice. At
            facilities like <strong>Novo Robotic Surgery Centre in Kaushambi, Ghaziabad</strong>, the
            surgical team reviews each patient's reports, health history, and goals before
            recommending an approach, rather than defaulting to one technique for everyone.
          </p>

          <SectionHeading id="cost">What about the cost?</SectionHeading>
          <p>
            Robotic surgery generally costs more than laparoscopic surgery because of the advanced
            equipment involved. However, a shorter hospital stay and faster return to work can offset
            part of that difference. Many health insurance plans in India now cover robotic
            procedures, so check with your insurer and hospital beforehand.
          </p>

          <SectionHeading id="questions">How to decide: questions to ask your surgeon</SectionHeading>
          <ul className="divide-y divide-[#e2e2e5] rounded-[1.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            {surgeonQuestions.map((q) => (
              <li key={q} className="flex gap-4 px-6 py-4">
                <span aria-hidden="true" className="font-['IBM_Plex_Sans'] font-bold text-[#0d7481]">Q</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <strong>The surgeon's experience matters as much as the technology.</strong> As{" "}
            <Link to="/dr-vikrant-sharma" className="text-[#005a65] font-semibold underline underline-offset-4 decoration-[#81d3e1] hover:decoration-[#005a65]">
              Dr. Vikrant Sharma
            </Link>
            , robotic and minimal access surgeon in Delhi NCR, often explains to patients, the robot
            is a tool. What makes the difference is the skill and judgement of the surgeon using it,
            and choosing the right method for each individual case.
          </p>

          <SectionHeading id="bottom-line">The bottom line</SectionHeading>
          <p>
            Laparoscopic and robotic surgery are both safe, effective, minimally invasive options.
            Robotic surgery adds greater precision and flexibility, which can make a real difference
            in complex operations. Laparoscopic surgery remains an excellent, cost-effective choice
            for many common procedures.
          </p>
          <p className="mt-5">
            The right answer depends on your diagnosis, overall health, and your surgeon's advice.
            Don't hesitate to ask questions until you feel fully comfortable with your decision.
          </p>

          {/* CTA */}
          <section className="mt-16 rounded-[1.5rem] bg-[#005a65] px-6 py-10 md:px-10 text-white">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-[1.3]">
              Still unsure which option suits you?
            </h2>
            <p className="mt-3 max-w-[52ch] text-[#e5eced]">
              A consultation with an experienced robotic surgeon in Delhi NCR can help you understand
              your choices clearly.
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