import { Compass, Drum, ShieldCheck, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const values = [
  { icon: Compass, title: 'Visionary Positioning', text: 'We refine your concept, voice, and market presence into a compelling luxury narrative.' },
  { icon: ShieldCheck, title: 'Operational Excellence', text: 'We align service standards, flow, and kitchen systems with the guest experience you aspire to create.' },
  { icon: Drum, title: 'Distinctive Storytelling', text: 'From menus to service rituals, we make every detail feel intentional and memorable.' },
  { icon: Sparkles, title: 'Elevated Craft', text: 'We combine culinary strategy, design sensibility, and hospitality insight into one premium approach.' },
];

function MissionSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <AnimatedSection className="rounded-[2.5rem] border border-forest/10 bg-[radial-gradient(circle_at_top_left,_rgba(207,162,74,0.22),_transparent_40%),linear-gradient(135deg,_#fffaf1_0%,_#f8efe2_100%)] p-8 shadow-[0_25px_70px_rgba(15,23,18,0.06)]">
          <SectionHeading eyebrow="Our Mission" title="Designing luxury dining with intention." description="We help founders and leadership teams transform culinary ambition into measurable impact—blending premium strategy with world-class hospitality execution." />
        </AnimatedSection>
        <AnimatedSection className="grid gap-4 md:grid-cols-2">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group rounded-[2rem] border border-forest/10 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,18,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,18,0.1)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta transition group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-2xl text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/70">{item.text}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">0{index + 1}</p>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

export default MissionSection;
