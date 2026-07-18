import { motion, useReducedMotion } from 'framer-motion';
import { Award, Compass, HeartHandshake } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

const values = [
  { title: 'Founder-led Vision', text: 'Every engagement begins with the founder’s story, from the first spark to the finished guest experience.' },
  { title: 'Hospitality With Heart', text: 'We design experiences that balance refinement with warmth, intimacy, and emotional resonance.' },
  { title: 'Crafted for Longevity', text: 'Our work helps brands grow with discipline, beauty, and sustainable decision-making.' },
];

const metrics = [
  { label: 'Projects Delivered', value: 48 },
  { label: 'Luxury Partners', value: 24 },
  { label: 'Average Growth', value: 31, suffix: '%' },
];

const timeline = [
  '2014 — Founding a boutique consultancy for chef-led concepts.',
  '2018 — Expanded into luxury hospitality brand strategy and menu development.',
  '2022 — Launch of high-touch consulting for multi-site culinary operators.',
  '2026 — Building enduring partnerships across hospitality and food lifestyle brands.',
];

function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO title="About Heirloom Culinary" description="Meet the founder-led team behind premium culinary strategy and hospitality design." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">About</p>
            <h1 className="mt-4 font-display text-5xl text-forest sm:text-6xl">Elevating culinary ambition with a premium lens.</h1>
            <p className="mt-6 text-lg leading-8 text-ink/70">Heirloom Culinary exists to help visionary food brands create memorable guest experiences that are as thoughtful as they are commercially strong.</p>
          </AnimatedSection>
          <AnimatedSection>
            <motion.img
              animate={shouldReduceMotion ? { y: 0 } : { y: [0, -8, 0], rotate: [0, -1, 0] }}
              transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              loading="lazy"
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
              alt="Founder in kitchen"
              className="h-[500px] w-full rounded-[2rem] object-cover shadow-premium"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <SectionLabel text="Founder" />
            <h2 className="mt-4 font-display text-3xl text-forest">Elena Marceau</h2>
            <p className="mt-4 text-base leading-8 text-ink/70">A culinary strategist, hospitality designer, and former restaurant executive, Elena brings a rare blend of aesthetics, operations insight, and guest empathy to every engagement.</p>
          </AnimatedSection>
          <AnimatedSection className="grid gap-4 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-forest/10 bg-cream p-6">
                <h3 className="font-display text-2xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{item.text}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-forest/10 bg-cream p-8 shadow-sm md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-white/70 p-6 text-center">
              <AnimatedCounter value={metric.value} suffix={metric.suffix ?? ''} />
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-terracotta">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_1fr]">
          <AnimatedSection className="rounded-[2rem] border border-forest/10 bg-cream p-8 shadow-sm">
            <div className="flex items-center gap-3 text-terracotta">
              <Compass size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">Mission</p>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/70">To make culinary excellence tangible—through beautifully designed menus, refined service systems, and experiences guests remember long after the meal.</p>
          </AnimatedSection>
          <AnimatedSection className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 text-terracotta">
              <HeartHandshake size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">Values</p>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/70">
              <li>• Curiosity and craft</li>
              <li>• Discretion and hospitality</li>
              <li>• Integrity in sourcing and service</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="rounded-[2rem] border border-forest/10 bg-cream p-8 shadow-sm">
            <div className="flex items-center gap-3 text-terracotta">
              <Award size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">Timeline & Awards</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {timeline.map((item) => (
                <motion.div key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} className="rounded-2xl border border-forest/10 bg-white p-4 text-sm leading-7 text-ink/70">{item}</motion.div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Hospitality Innovation Award 2023', 'Best Culinary Brand Strategy 2024', 'Luxury Service Excellence 2025'].map((award) => (
                <span key={award} className="rounded-full bg-forest px-4 py-2 text-sm font-medium text-cream">{award}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ text }: { text: string }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">{text}</p>;
}

export default About;
