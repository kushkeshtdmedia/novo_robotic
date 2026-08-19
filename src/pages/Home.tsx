import Hero from '../components/Hero';
import Departments from '../components/Departments';
import Engineering from '../components/Engineering';
import Doctors from '../components/leaderShip';
import Testimonials from '../components/Testimonials';
import BariatricTransformations from '../components/BariatricTransformations';

export default function HomePage() {
  return (
    <main>
      {/* H1 lives inside Hero — the single top-level heading for SEO */}
      <Hero />

      {/* Mission / trust band */}
      <section className="bg-teal-800 text-white py-16" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="mission-heading" className="sr-only">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed text-teal-50">
            Our mission is simple — to make your surgical experience as safe, comfortable, and stress-free as possible. Through advanced robotic-assisted techniques, we help patients benefit from less pain, minimal scarring, reduced hospital stays, and faster recovery.
          </p>
          <p className="mt-6 text-teal-200 text-sm">
            Committed to compassionate patient care, innovative surgical solutions, and the highest standards of medical excellence.
          </p>
        </div>
      </section>

      <Engineering />
      <Departments />
      <Doctors />
      <BariatricTransformations />
      <Testimonials />
    </main>
  );
}