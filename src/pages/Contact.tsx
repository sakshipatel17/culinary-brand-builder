import { Clock3, Mail, MapPin, Phone, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

function Contact() {
  return (
    <>
      <SEO title="Contact Heirloom Culinary" description="Book a culinary consultancy consultation or connect with the Heirloom Culinary team." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Contact</p>
            <h1 className="mt-4 font-display text-5xl text-forest sm:text-6xl">Let’s create something unforgettable.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">Whether you are launching a new concept or refining an existing one, we would love to discuss your vision.</p>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedSection className="space-y-6">
              <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-sm">
                <h2 className="font-display text-3xl text-forest">Visit or Connect</h2>
                <div className="mt-6 space-y-4 text-sm text-ink/70">
                  <div className="flex items-start gap-3"><MapPin className="mt-1 text-terracotta" size={18} /> <span>204 Orchard Avenue, New York, NY 10012</span></div>
                  <div className="flex items-start gap-3"><Phone className="mt-1 text-terracotta" size={18} /> <span>+1 (212) 555-0147</span></div>
                  <div className="flex items-start gap-3"><Mail className="mt-1 text-terracotta" size={18} /> <span>hello@heirloomculinary.com</span></div>
                  <div className="flex items-start gap-3"><Clock3 className="mt-1 text-terracotta" size={18} /> <span>Mon–Fri: 9am–6pm, Sat–Sun by appointment</span></div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-forest/10 bg-cream p-8 shadow-sm">
                <h3 className="font-display text-2xl text-forest">Social Links</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {['Instagram', 'LinkedIn', 'Pinterest'].map((item) => (
                    <a key={item} href="#" className="rounded-full border border-forest/20 px-4 py-2 text-sm font-medium text-forest">{item}</a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-forest/10 bg-forest p-8 shadow-premium">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Map</p>
              <h2 className="mt-3 font-display text-3xl text-cream">Our studio is based in the heart of New York.</h2>
            </div>
            <div className="rounded-[1.5rem] border border-cream/20 p-5 text-cream/80">
              <div className="flex items-center gap-2"><Send size={18} className="text-gold" /><span>Private consultations available by appointment.</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
