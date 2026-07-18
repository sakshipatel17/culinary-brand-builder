import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

function NewsletterSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-forest px-8 py-12 text-cream shadow-premium lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Newsletter</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Stay inspired by the latest luxury food insights.</h2>
          <p className="mt-4 text-base leading-8 text-cream/80">Receive stories, strategy notes, and culinary trends curated for founders and hospitality teams.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <motion.input whileFocus={shouldReduceMotion ? undefined : { scale: 1.01, boxShadow: '0 0 0 4px rgba(207, 162, 74, 0.2)' }} placeholder="Your email" className="rounded-full border border-cream/20 bg-white/10 px-5 py-3 text-sm text-cream outline-none placeholder:text-cream/60" />
          <motion.button whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest">
            Subscribe <ArrowRight size={16} />
          </motion.button>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default NewsletterSection;
