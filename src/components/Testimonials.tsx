import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videoTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Hernia Surgery Patient',
    videoCode: 'dQw4w9WgXcQ', // YouTube video ID (replace with actual testimonial videos)
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Gallbladder Surgery Patient',
    videoCode: 'dQw4w9WgXcQ',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Bariatric Surgery Patient',
    videoCode: 'dQw4w9WgXcQ',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Post-Surgery Recovery',
    videoCode: 'dQw4w9WgXcQ',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Appendix Surgery Patient',
    videoCode: 'dQw4w9WgXcQ',
  },
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
    }, 6000); // Change video every 6 seconds
    return () => clearInterval(interval);
  }, [autoScroll]);

  const goToPrevious = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) =>
      prev === 0 ? videoTestimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Patient Voices
          </p>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Real Stories, Real Recovery
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Watch real patients share their experiences with robotic surgery at Novo Robotic Surgery Centre.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoTestimonials[currentIndex].videoCode}?autoplay=1&controls=1&modestbranding=1`}
              title={`${videoTestimonials[currentIndex].name} - Testimonial`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Patient Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white text-lg font-bold">{videoTestimonials[currentIndex].name}</p>
            <p className="text-teal-300 text-sm">{videoTestimonials[currentIndex].role}</p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 transition-colors rounded-full p-3 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 transition-colors rounded-full p-3 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {videoTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoScroll(false);
                setCurrentIndex(index);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-teal-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-scroll indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className="text-sm text-gray-500 hover:text-teal-600 transition-colors underline"
          >
            {autoScroll ? '⏸ Pause' : '▶ Play'} auto-scroll
          </button>
        </div>
      </div>
    </section>
  );
}
