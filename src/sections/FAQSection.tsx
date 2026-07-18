import { ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { faqs } from '../utils/faq';

function FAQSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="FAQ" title="Answers that bring clarity to your next move." description="Whether you are launching a new concept or refining an established one, we provide strategic guidance that feels both luxurious and practical." />
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <AnimatedSection key={faq.question} className="rounded-[1.5rem] border border-forest/10 bg-cream px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-forest">{faq.question}</p>
                <ChevronRight size={18} className="text-terracotta" />
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/70">{faq.answer}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
