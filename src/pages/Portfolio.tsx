import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Award, BadgeCheck, Building2, CakeSlice, ChevronDown, ChefHat, Factory, Play, Quote, Sparkles, Store, UtensilsCrossed, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

type WorkItem = {
  title: string;
  category: string;
  categoryKey: 'Strategy' | 'Design' | 'Launch';
  image: string;
  result: string;
  blurb: string;
  span: string;
  accent: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

type Testimonial = {
  quote: string;
  author: string;
  restaurant: string;
  image: string;
};

const works: WorkItem[] = [
  {
    title: 'Maison Verdure',
    category: 'Fine Dining Repositioning',
    categoryKey: 'Strategy',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    result: 'Raised guest satisfaction by 31% and doubled premium wine sales.',
    blurb: 'A refined service ritual and beverage program that made the room feel cinematic from arrival to dessert.',
    span: 'lg:col-span-7 lg:row-span-2',
    accent: 'from-[#2f4331] via-[#4d6a44] to-[#c9a963]',
  },
  {
    title: 'Saffron House',
    category: 'Menu & Service Design',
    categoryKey: 'Design',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    result: 'Improved meal pacing and increased repeat reservations by 24%.',
    blurb: 'A calmer kitchen rhythm and more magnetic menu storytelling that elevated perceived luxury.',
    span: 'lg:col-span-5',
    accent: 'from-[#7c4f2d] via-[#b86f4b] to-[#f4d7a1]',
  },
  {
    title: 'Lark & Vine',
    category: 'Launch Strategy',
    categoryKey: 'Launch',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80',
    result: 'Delivered a high-demand opening with strong media attention and optimized service flow.',
    blurb: 'A launch system that balanced exceptional guest experience with operational precision from day one.',
    span: 'lg:col-span-5',
    accent: 'from-[#394235] via-[#5f7452] to-[#dfb86f]',
  },
];

const categories = ['All', 'Strategy', 'Launch', 'Design'] as const;
const processSteps = [
  { title: 'Discovery', text: 'We map your brand voice, guest journey, and operational friction with intention.' },
  { title: 'Research', text: 'We study your market, menu architecture, and service rituals to uncover leverage points.' },
  { title: 'Strategy', text: 'We design a luxury blueprint that aligns positioning, experience, and profitability.' },
  { title: 'Implementation', text: 'We rollout menu systems, service standards, and launch materials with clarity.' },
  { title: 'Training', text: 'We equip your team with the confidence and rituals to deliver consistently.' },
  { title: 'Growth', text: 'We refine performance, anticipate demand, and scale your brand with elegance.' },
];

const industries = [
  { title: 'Fine Dining', icon: ChefHat },
  { title: 'Cafes', icon: Store },
  { title: 'Hotels', icon: Building2 },
  { title: 'Cloud Kitchens', icon: Factory },
  { title: 'Food Manufacturing', icon: UtensilsCrossed },
  { title: 'Bakeries', icon: CakeSlice },
  { title: 'Catering', icon: Sparkles },
  { title: 'Luxury Restaurants', icon: Award },
];

const galleryImages: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80', alt: 'Elegant plated dining experience', title: 'Chef-led storytelling' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80', alt: 'Luxury kitchen service', title: 'Operational glamour' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80', alt: 'Signature dish presentation', title: 'Visual appetite' },
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80', alt: 'Restaurant ambiance', title: 'Atmospheric detail' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80', alt: 'Luxury service moment', title: 'Memorable service' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80', alt: 'Fine dining interior', title: 'Refined interiors' },
];

const testimonials: Testimonial[] = [
  {
    quote: 'Their work transformed our room from beautiful to unforgettable. The numbers, the atmosphere, and the guest experience all improved together.',
    author: 'Elena Marquez',
    restaurant: 'Maison Verdure',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote: 'Every detail felt intentional. Our team moved faster, guests stayed longer, and our bookings rose immediately after launch.',
    author: 'Nicolas Hart',
    restaurant: 'Saffron House',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote: 'The strategy felt as luxurious as the final service. We now operate with more calm and convert more guests with confidence.',
    author: 'Sofia Bennett',
    restaurant: 'Lark & Vine',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
];

const benefits = [
  { label: 'Revenue Growth', value: 38, suffix: '%', detail: 'average uplift' },
  { label: 'Food Waste', value: 25, suffix: '%', detail: 'reduction' },
  { label: 'Satisfaction', value: 40, suffix: '%', detail: 'higher delight' },
  { label: 'Service Speed', value: 35, suffix: '%', detail: 'faster throughput' },
];

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 35, suffix: '%', label: 'Average Revenue Growth' },
  { value: 20, suffix: '+', label: 'Industry Awards' },
];

type FilterType = (typeof categories)[number];

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
};

function AnimatedCounter({ value, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const startTime = performance.now();
    const duration = 1400;

    const updateValue = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplayValue(Math.round(progress * value));

      if (progress < 1) {
        frame = window.requestAnimationFrame(updateValue);
      }
    };

    frame = window.requestAnimationFrame(updateValue);

    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return <span>{prefix}{displayValue}{suffix}</span>;
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<FilterType>('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredWorks = activeCategory === 'All' ? works : works.filter((work) => work.categoryKey === activeCategory);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <SEO title="Portfolio | Heirloom Culinary" description="See recent luxury food consultancy case studies and hospitality transformations." />

      <main className="overflow-hidden">
        <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(234,215,168,0.22),_transparent_45%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1712]/90 via-[#0f1712]/70 to-[#0f1712]/35" />
          </div>

          <motion.div
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -12, 0], scale: [1, 1.01, 1] }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0"
          />

          <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center">
            <AnimatedSection className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-cream backdrop-blur-xl">
                <Sparkles size={16} />
                Portfolio / Case Studies
              </div>
              <h1 className="mt-8 font-display text-4xl leading-[0.95] text-white sm:text-5xl lg:text-7xl">
                Elevated culinary stories designed to captivate, convert, and endure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                We shape premium hospitality experiences that feel effortless, beautiful, and commercially powerful from the first impression to repeat visits.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest transition hover:translate-y-[-2px]">
                  Book Your Consultation <ArrowRight size={16} />
                </Link>
                <button onClick={() => document.getElementById('featured-case-study')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20">
                  <Play size={16} />
                  Explore the work
                </button>
              </div>
            </AnimatedSection>

            <motion.button
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
              onClick={() => document.getElementById('featured-case-study')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur"
            >
              <ChevronDown size={16} />
              Scroll to featured work
            </motion.button>
          </div>
        </section>

        <section id="featured-case-study" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-forest/10 bg-white/80 p-6 shadow-[0_25px_120px_rgba(15,23,18,0.08)] backdrop-blur xl:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <AnimatedSection className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Featured Case Study</p>
                <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">
                  Maison Verdure became one of the most talked-about dining rooms in the city.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-ink/70">
                  We paired editorial storytelling with operational precision to reposition the brand around elevated service, premium pacing, and an unforgettable guest journey.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-forest/10 bg-cream/70 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Client</p>
                    <p className="mt-2 text-xl font-semibold text-forest">Maison Verdure</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-forest/10 bg-cream/70 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Industry</p>
                    <p className="mt-2 text-xl font-semibold text-forest">Fine Dining</p>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-forest/10 bg-[#f7efe3] p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-terracotta">Challenge</p>
                      <p className="mt-2 text-sm leading-7 text-ink/70">The brand looked polished, but the service choreography and guest experience were inconsistent during peak hours.</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-terracotta">Solution</p>
                      <p className="mt-2 text-sm leading-7 text-ink/70">We restructured the menu narrative, refined service rituals, and built a stronger premium identity that resonated across the room.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }} whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden rounded-[2rem] border border-forest/10 bg-cream/80 p-4 shadow-lg">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80" alt="Maison Verdure dining experience" className="h-[420px] w-full rounded-[1.5rem] object-cover" />
              </motion.div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.div key={benefit.label} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }} whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} className="rounded-[1.5rem] border border-forest/10 bg-[#fbf5ea] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-terracotta">{benefit.label}</p>
                  <div className="mt-3 text-3xl font-semibold text-forest">
                    <AnimatedCounter value={benefit.value} suffix={benefit.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-ink/65">{benefit.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Bento Portfolio</p>
                <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">A modern composition of hospitality stories and measurable impact.</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === category ? 'bg-forest text-cream' : 'bg-white text-forest shadow-sm'}`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <AnimatePresence mode="popLayout">
                {filteredWorks.map((work, index) => (
                  <motion.article
                    layout
                    key={work.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
                    className={`group relative overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-[0_20px_60px_rgba(15,23,18,0.08)] ${work.span} ${index === 0 ? 'min-h-[360px]' : 'min-h-[320px]'}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${work.accent} opacity-70`} />
                    <img loading="lazy" src={work.image} alt={work.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1712]/90 via-[#0f1712]/20 to-transparent" />
                    <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-3">
                        <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/90 backdrop-blur">
                          {work.category}
                        </span>
                        <div className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-display text-2xl text-white sm:text-3xl">{work.title}</h3>
                          <p className="mt-3 max-w-md text-sm leading-7 text-white/80">{work.blurb}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
                            {work.result}
                          </span>
                          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-forest">
                            View Details <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-forest/10 bg-[#f8efe2] p-6 shadow-[0_20px_90px_rgba(15,23,18,0.06)] sm:p-8 lg:p-10">
            <AnimatedSection className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Before & After</p>
              <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">A sharper experience that feels as premium at service as it does in the room.</h2>
            </AnimatedSection>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: 'Before',
                  items: ['Poor Menu Layout', 'High Food Waste', 'Slow Kitchen Operations'],
                  tone: 'border-terracotta/20 bg-white/70',
                },
                {
                  title: 'After',
                  items: ['Optimized Menu', 'Better Profit Margin', 'Faster Service'],
                  tone: 'border-forest/20 bg-[#f3ead5]',
                },
              ].map((card, index) => (
                <motion.div key={card.title} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} className={`rounded-[2rem] border p-6 sm:p-8 ${card.tone}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-forest">{card.title}</h3>
                    {card.title === 'After' ? <BadgeCheck className="text-forest" size={24} /> : <div className="rounded-full bg-terracotta/10 p-2 text-terracotta"><X size={18} /></div>}
                  </div>
                  <div className="mt-8 space-y-4">
                    {card.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-forest/10 bg-white/80 px-4 py-3 text-sm font-medium text-ink/80">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Results & Impact</p>
              <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">Beautiful design is only the beginning. The work compounds in revenue, loyalty, and operational calm.</h2>
            </AnimatedSection>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} className="rounded-[2rem] border border-forest/10 bg-white p-8 text-center shadow-[0_12px_40px_rgba(15,23,18,0.06)]">
                  <div className="text-4xl font-semibold text-forest sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-forest/10 bg-white/80 p-6 shadow-[0_20px_100px_rgba(15,23,18,0.06)] sm:p-8 lg:p-10">
            <AnimatedSection className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Client Testimonials</p>
              <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">Trusted by founders who value luxury, clarity, and a stronger guest experience.</h2>
            </AnimatedSection>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div className="rounded-[2rem] border border-forest/10 bg-[#f7efe3] p-6">
                <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].author} className="h-64 w-full rounded-[1.5rem] object-cover" />
                <div className="mt-5">
                  <p className="text-lg font-semibold text-forest">{testimonials[activeTestimonial].author}</p>
                  <p className="mt-1 text-sm text-ink/70">{testimonials[activeTestimonial].restaurant}</p>
                </div>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.div key={testimonials[activeTestimonial].author} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: 'easeOut' }} className="rounded-[2rem] border border-forest/10 bg-cream/70 p-8 shadow-sm">
                    <div className="flex items-center gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Sparkles key={index} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <div className="mt-6 flex items-start gap-3">
                      <Quote size={36} className="mt-1 shrink-0 text-terracotta" />
                      <p className="text-xl leading-9 text-ink/80">“{testimonials[activeTestimonial].quote}”</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button key={testimonial.author} onClick={() => setActiveTestimonial(index)} className={`h-2.5 rounded-full transition ${activeTestimonial === index ? 'w-10 bg-forest' : 'w-2.5 bg-forest/30'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Consulting Process</p>
              <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">An intentional path from vision to lasting commercial impact.</h2>
            </AnimatedSection>

            <div className="relative mt-12">
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-terracotta via-gold to-forest lg:block" />
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div key={step.title} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} className={`relative rounded-[2rem] border border-forest/10 bg-white p-6 shadow-sm lg:w-[calc(50%-1.5rem)] ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-terracotta lg:block" />
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">0{index + 1}</p>
                    <h3 className="mt-3 font-display text-2xl text-forest">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/70">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Industries We Serve</p>
              <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">From intimate cafes to high-volume hospitality groups, each engagement is shaped for luxury and growth.</h2>
            </AnimatedSection>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div key={industry.title} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }} whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }} className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,18,0.05)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7efe3] text-terracotta">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-forest">{industry.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/70">Tailored positioning, culinary storytelling, and guest experience strategy for every scale of hospitality.</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Image Gallery</p>
              <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">Immersive moments from the dining room, kitchen, and guest experience.</h2>
            </AnimatedSection>

            <div className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3">
              {galleryImages.map((image, index) => (
                <motion.button key={image.alt} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }} whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }} whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -3 }} onClick={() => setSelectedImage(image)} className="mb-5 block w-full overflow-hidden rounded-[2rem] border border-forest/10 bg-white p-2 text-left shadow-[0_18px_50px_rgba(15,23,18,0.06)]">
                  <img src={image.src} alt={image.alt} className="h-72 w-full rounded-[1.4rem] object-cover" />
                  <div className="px-3 pb-2 pt-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-terracotta">Gallery</p>
                    <p className="mt-2 text-lg font-semibold text-forest">{image.title}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-forest/10 bg-[radial-gradient(circle_at_top_left,_rgba(234,215,168,0.28),_transparent_42%),linear-gradient(135deg,_#f8efe2_0%,_#ffffff_100%)] p-8 shadow-[0_25px_120px_rgba(15,23,18,0.08)] sm:p-10 lg:p-16">
            <AnimatedSection className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">Consultation</p>
              <h2 className="mt-4 font-display text-3xl text-forest sm:text-4xl lg:text-5xl">Ready to Transform Your Food Business?</h2>
              <p className="mt-6 text-lg leading-8 text-ink/70">Let’s transform your hospitality experience into something memorable, measurable, and unmistakably premium.</p>
            </AnimatedSection>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:translate-y-[-2px]">
                Book Your Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-6 py-3 text-sm font-semibold text-forest transition hover:translate-y-[-2px]">
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f1712]/85 p-4 backdrop-blur-xl" onClick={() => setSelectedImage(null)}>
            <motion.div initial={shouldReduceMotion ? { scale: 1 } : { scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="relative max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-white p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-forest shadow-sm">
                <X size={18} />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[80vh] w-full rounded-[1.5rem] object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Portfolio;
