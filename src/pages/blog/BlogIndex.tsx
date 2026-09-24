import { Link } from "react-router-dom";

/**
 * Blog listing page
 * Route: /blog
 * Shows every post as a small card. Clicking a card opens the full article.
 */

// Add new posts here (newest first)
const posts = [
  {
    slug: "hernia-signs-and-symptoms",
    category: "General Surgery",
    title: "How to Spot a Hernia: Signs and Symptoms in Different Parts of the Body",
    excerpt:
      "How hernias show up in the groin, thigh, belly button, upper abdomen, an old scar or the chest, and the warning signs that need urgent care.",
    readTime: "5 min read",
  },
  {
    slug: "laparoscopic-vs-robotic-surgery",
    category: "Robotic Surgery",
    title: "Confused Between Laparoscopic and Robotic Surgery? Read This",
    excerpt:
      "How the two techniques differ, where each works best, what they cost, and what to ask your surgeon.",
    readTime: "5 min read",
  },
  {
    slug: "sleeve-gastrectomy-vs-gastric-bypass",
    category: "Bariatric Surgery",
    title: "Sleeve Gastrectomy vs Gastric Bypass: Which Weight-Loss Surgery Is Right for You?",
    excerpt:
      "Compare weight loss, diabetes, acid reflux, nutrition and recovery, and see who qualifies under the lower BMI cut-offs for Asians.",
    readTime: "6 min read",
  },
];

export default function BlogIndex() {
  return (
    <main className="bg-[#f9f9fc] text-[#1a1c1e] font-[Manrope]">
      <header className="bg-[#005a65] text-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6 pt-32 pb-14 md:pt-40 md:pb-20">
          <nav aria-label="Breadcrumb" className="font-['IBM_Plex_Sans'] text-[13px] text-[#b9f4ff]">
            <Link to="/" className="hover:text-white focus-visible:outline-2 focus-visible:outline-[#fdd350]">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white/80">Blog</span>
          </nav>
          <h1 className="mt-6 text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Blog
          </h1>
          <p className="mt-4 max-w-[60ch] text-[18px] leading-[1.6] text-[#e5eced]">
            Patient-friendly guides from Novo Robotic Surgery Centre, Kaushambi, Ghaziabad.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-5 md:px-6 py-16 md:py-24">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_10px_40px_rgba(0,90,101,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a65]"
              >
                <span className="font-['IBM_Plex_Sans'] text-[12px] font-semibold text-[#0d7481]">
                  {p.category} · {p.readTime}
                </span>
                <h2 className="mt-3 text-[19px] font-bold leading-[1.35] text-[#1a1c1e] group-hover:text-[#005a65]">
                  {p.title}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#3e484a]">{p.excerpt}</p>
                <span className="mt-auto pt-5 text-[14px] font-semibold text-[#005a65]">
                  Read more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
