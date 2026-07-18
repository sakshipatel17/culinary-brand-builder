import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import Logo from '../components/Logo';
import ScrollProgress from '../components/ScrollProgress';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 16));

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      const interactive = Boolean(target?.closest('a, button, input, textarea, select, [role="button"], .interactive-card'));
      setIsInteractive(interactive);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block" aria-hidden="true">
        <motion.span
          animate={{ x: cursorPos.x, y: cursorPos.y, scale: isInteractive ? 1.45 : 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 34, mass: 0.25 }}
          className="fixed left-0 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-terracotta/80 bg-terracotta/10"
        />
        <motion.span
          animate={{ x: cursorPos.x, y: cursorPos.y, scale: isInteractive ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 360, damping: 24, mass: 0.3 }}
          className="fixed left-0 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 blur-[1px]"
        />
      </div>
      <ScrollProgress />
      <header className={`sticky top-0 z-40 border-b border-forest/10 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-cream/80 shadow-[0_10px_35px_-20px_rgba(47,79,63,0.35)]' : 'bg-cream/90'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.03, rotate: -2 }} transition={{ type: 'spring', stiffness: 240, damping: 18 }}>
            <Logo />
          </motion.div>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="relative text-sm font-medium text-forest transition hover:text-terracotta">
                {({ isActive }) => (
                  <span className="relative inline-flex items-center">
                    <span>{item.label}</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-terracotta"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
          <motion.button whileTap={{ scale: 0.95 }} className="rounded-full border border-forest/20 bg-white/70 p-2 md:hidden" onClick={() => setOpen((prev) => !prev)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden border-t border-forest/10 bg-cream/95 md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-terracotta' : 'text-forest'}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-forest/10 bg-forest px-4 py-10 text-cream sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-3xl">Heirloom Culinary</p>
            <p className="mt-2 max-w-xl text-sm text-cream/80">Crafting elevated hospitality experiences with strategy, design, and culinary intelligence.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-cream/80">
              <motion.a whileHover={{ x: 3, color: '#CFA24A' }} href="mailto:hello@heirloomculinary.com" className="flex items-center gap-2 transition">
                <Mail size={16} /> hello@heirloomculinary.com
              </motion.a>
              <motion.a whileHover={{ x: 3, color: '#CFA24A' }} href="https://instagram.com" className="flex items-center gap-2 transition">
                <Instagram size={16} /> Instagram
              </motion.a>
              <motion.a whileHover={{ x: 3, color: '#CFA24A' }} href="https://linkedin.com" className="flex items-center gap-2 transition">
                <Linkedin size={16} /> LinkedIn
              </motion.a>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="self-start">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-forest transition hover:opacity-90">
                Book a Consultation <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}

export default Layout;
