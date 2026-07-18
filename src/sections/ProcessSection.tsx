import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const steps = [
  'Discover your culinary identity and guest promise.',
  'Design a premium service and menu architecture.',
  'Implement refined operations and brand experiences.',
  'Scale with measurable hospitality performance.',
];

function ProcessSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <AnimatedSection className="rounded-[2.5rem] border border-forest/10 bg-[linear-gradient(135deg,_#f7efe3_0%,_#fffaf1_100%)] p-8 shadow-[0_24px_70px_rgba(15,23,18,0.05)]">
          <SectionHeading eyebrow="Process" title="A polished path from vision to execution." description="Every engagement is structured around clarity, beauty, and business performance—without sacrificing the soul of the dining experience." />
        </AnimatedSection>
        <AnimatedSection className="rounded-[2.5rem] border border-forest/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,18,0.05)]">
          <div className="relative space-y-5">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-terracotta via-gold to-forest" />
            {steps.map((step, index) => (
              <div key={step} className="relative flex items-start gap-4 rounded-[1.5rem] border border-forest/10 bg-cream/60 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gold/20 text-gold">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-terracotta">Step {index + 1}</p>
                  <p className="mt-1 text-base leading-7 text-ink/70">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ProcessSection;
