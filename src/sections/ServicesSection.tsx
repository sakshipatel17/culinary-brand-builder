import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChefHat, Factory, HeartPulse, ShieldCheck, ShoppingBasket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const services = [
  { icon: ChefHat, title: 'Restaurant Consulting', text: 'Turn concepts into experience-led hospitality systems with executive clarity.' },
  { icon: Sparkles, title: 'Menu Engineering', text: 'Curate compelling menus that balance luxury, profitability, and guest desire.' },
  { icon: ShieldCheck, title: 'Food Safety', text: 'Elevate compliance culture and operational discipline through premium protocols.' },
  { icon: ShoppingBasket, title: 'Supply Chain', text: 'Build sourcing strategy that stands for quality, resilience, and consistency.' },
  { icon: Factory, title: 'Kitchen Optimization', text: 'Create thoughtful layouts and production flow for seamless execution.' },
  { icon: HeartPulse, title: 'Nutrition Planning', text: 'Shape menus and guest offerings with culinary wellness in mind.' },
];

function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white/80 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Services" title="Premium support for every stage of growth." description="From brand positioning to operational refinement, each engagement is tailored to make your culinary vision feel elevated and enduring." />
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
            View Full Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection className="rounded-[2.5rem] border border-forest/10 bg-[linear-gradient(135deg,_#f7efe3_0%,_#fffaf1_100%)] p-8 shadow-[0_24px_70px_rgba(15,23,18,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Signature Offering</p>
            <h3 className="mt-4 font-display text-3xl text-forest">A luxury operating system for hospitality brands.</h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">We blend culinary intelligence, premium storytelling, and disciplined execution to make each guest experience feel effortless and unforgettable.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Concept Development', 'Menu Strategy', 'Service Design'].map((pill) => (
                <span key={pill} className="rounded-full border border-forest/10 bg-white/80 px-4 py-2 text-sm font-medium text-forest">{pill}</span>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} className="rounded-[2rem] border border-forest/10 bg-cream/80 p-6 shadow-sm">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="h-full"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-forest">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/70">{service.text}</p>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-gold">0{index + 1}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
