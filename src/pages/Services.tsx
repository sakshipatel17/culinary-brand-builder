import { ArrowRight, ChefHat, Factory, HeartPulse, ShieldCheck, ShoppingBasket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

const services = [
  { icon: ChefHat, title: 'Restaurant Consulting', price: '$3,500', description: 'Executive-level guidance for concept refinement, guest journey design, and culinary positioning.' },
  { icon: Sparkles, title: 'Menu Engineering', price: '$2,400', description: 'A premium menu strategy that elevates desirability while driving stronger margins.' },
  { icon: ShieldCheck, title: 'Food Safety', price: '$1,900', description: 'Build robust operations and compliance standards without sacrificing the luxury experience.' },
  { icon: ShoppingBasket, title: 'Supply Chain', price: '$2,100', description: 'Create sourcing frameworks that support quality, consistency, and resilience.' },
  { icon: Factory, title: 'Kitchen Optimization', price: '$2,800', description: 'Reimagine workflow, station design, and service choreography for smoother execution.' },
  { icon: HeartPulse, title: 'Nutrition Planning', price: '$1,700', description: 'Support wellness-led menus with culinary integrity and guest-friendly offerings.' },
];

function Services() {
  return (
    <>
      <SEO title="Services | Heirloom Culinary" description="Explore premium culinary consulting services for restaurants, menus, kitchens, and hospitality brands." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Services</p>
            <h1 className="mt-4 font-display text-5xl text-forest sm:text-6xl">Consulting tailored to culinary excellence.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">Our services are designed for restaurants and culinary brands that want beauty, discipline, and business intelligence in equal measure.</p>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-forest">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{service.description}</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-gold">Starting at {service.price}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-forest/10 bg-cream p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Engagements</p>
            <h2 className="mt-3 font-display text-3xl text-forest">A premium process from discovery to launch.</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
            Book a Discovery Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;
