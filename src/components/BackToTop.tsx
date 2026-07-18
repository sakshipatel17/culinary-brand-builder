import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 bg-cream text-forest shadow-premium"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </motion.button>
  );
}

export default BackToTop;
