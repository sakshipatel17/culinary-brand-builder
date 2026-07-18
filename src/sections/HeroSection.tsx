import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Sparkles } from 'lucide-react';
import { useState } from 'react';
import PremiumButton from '../components/PremiumButton';

const headlineWords = ['Cultivating', 'excellence', 'on', 'the', 'plate.'];

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  return (
    <section className="relative overflow-hidden bg-forest px-4 py-20 text-cream sm:px-6 lg:px-8 lg:py-28">
      <motion.div
        className="absolute inset-0"
        animate={shouldReduceMotion ? { opacity: 1 } : { backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'], scale: [1, 1.03, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at top left, rgba(207, 162, 74, 0.2), transparent 35%), linear-gradient(120deg, rgba(47,79,63,0.85), rgba(182,92,61,0.3))' }}
      />
      <div className="absolute inset-0">
        <img loading="lazy" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80" alt="Luxury dining experience" className="h-full w-full object-cover opacity-35" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/70" />
      <motion.div animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, -10, 0], x: [0, 8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-6 top-24 hidden rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-cream/90 backdrop-blur md:block lg:right-16">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-gold" />
          Luxury storytelling • premium operations
        </div>
      </motion.div>
      <motion.div animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, 10, 0], x: [0, -8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-24 left-6 hidden rounded-full border border-cream/20 bg-forest/40 px-4 py-3 text-sm font-medium text-cream/90 backdrop-blur lg:block">
        Award-winning hospitality strategy
      </motion.div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <motion.div initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <motion.p initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Heirloom Culinary</motion.p>
          <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            {headlineWords.map((word, index) => (
              <motion.span key={word} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 + index * 0.08 }} className="mr-3 inline-block">
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.7 }} className="mt-6 max-w-2xl text-lg leading-8 text-cream/80">
            A luxury food consultancy for ambitious restaurants and culinary brands seeking elevated experience, refined operations, and unforgettable storytelling.
          </motion.p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.div initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.95 }}>
              <PremiumButton to="/contact" variant="primary">
                Reserve a Consultation <ArrowRight size={16} />
              </PremiumButton>
            </motion.div>
            <motion.div initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}>
              <PremiumButton to="/portfolio" variant="secondary">
                <Play size={16} /> Explore Case Studies
              </PremiumButton>
            </motion.div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['18+', 'Global Launches'],
              ['94%', 'Client Retention'],
              ['4.9/5', 'Luxury Hospitality Feedback'],
            ].map(([value, label], index) => (
              <motion.div key={label} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 1.1 + index * 0.08 }} whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.02 }} className="rounded-2xl border border-cream/15 bg-white/10 px-4 py-4 backdrop-blur">
                <p className="font-display text-2xl text-gold">{value}</p>
                <p className="mt-1 text-sm text-cream/80">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.01, y: -4 }}
          className="rounded-[2rem] border border-cream/20 bg-cream/10 p-4 backdrop-blur"
          style={{ transform: shouldReduceMotion ? undefined : `rotateX(${tilt.y * -8}deg) rotateY(${tilt.x * 8}deg)` }}
        >
          <img loading="lazy" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80" alt="Chef presenting elegant cuisine" className="h-[420px] w-full rounded-[1.5rem] object-cover" />
        </motion.div>
      </div>
      <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} className="relative mx-auto mt-12 flex max-w-7xl items-center justify-center gap-2 text-sm text-cream/80">
        <ChevronDown size={16} /> Scroll to discover more
      </motion.div>
    </section>
  );
}

export default HeroSection;
