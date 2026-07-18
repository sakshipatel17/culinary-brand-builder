import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const testimonials = [
  {
    quote: 'Heirloom helped us transform a beautiful concept into a polished, high-performing hospitality experience.',
    name: 'Alicia Laurent',
    role: 'Founder, Aurelia & Oak',
  },
  {
    quote: 'Their guidance brought clarity to our service standards and gave our menu a compelling premium edge.',
    name: 'Marcus Velez',
    role: 'Director, Northline Atelier',
  },
  {
    quote: 'Every recommendation felt thoughtful, refined, and deeply aligned with our guest experience.',
    name: 'Nadia Brooks',
    role: 'Operations Lead, The Orchard House',
  },
];

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Testimonials" title="Trusted by hospitality leaders shaping the future of flavor." description="The work we do is intimate, strategic, and built to leave a lasting impact on service, profitability, and perception." />
        <div className="mt-12 rounded-[2rem] border border-forest/10 bg-cream p-6 shadow-sm sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="rounded-[2rem] border border-forest/10 bg-white p-8"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-ink/70">“{current.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-forest">{current.name}</p>
                <p className="text-sm text-ink/60">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button key={testimonial.name} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition ${activeIndex === index ? 'w-8 bg-terracotta' : 'w-2.5 bg-forest/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
