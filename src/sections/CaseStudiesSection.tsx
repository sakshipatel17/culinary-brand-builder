import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const studies = [
  {
    title: 'The Orchard House',
    result: '+32% Average Check',
    text: 'A refined rebrand and menu expansion elevated guest perception and lifted premium sales in under six months.',
  },
  {
    title: 'Northline Atelier',
    result: '+24% Kitchen Efficiency',
    text: 'Flow redesign and service choreography reduced delays while preserving the intimacy of the experience.',
  },
  {
    title: 'Cinder & Thyme',
    result: 'Top 3 in Local Rankings',
    text: 'Strategy and social storytelling grew awareness, reviews, and repeat bookings in high-demand neighborhoods.',
  },
];

function CaseStudiesSection() {
  return (
    <section className="bg-cream/70 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Case Studies" title="Results that feel as rich as the dining experience itself." description="Each engagement is designed to strengthen the brand, sharpen the guest journey, and support long-term profitability." />
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
            View Portfolio <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {studies.map((study, index) => (
            <AnimatedSection key={study.title} className={`group overflow-hidden rounded-[2.2rem] border border-forest/10 bg-white shadow-[0_16px_50px_rgba(15,23,18,0.05)] ${index === 1 ? 'lg:-translate-y-6' : ''}`}>
              <div className="relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80" alt={study.title} className="h-48 w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1712]/60 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">{study.result}</p>
                <h3 className="mt-3 font-display text-2xl text-forest">{study.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{study.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
