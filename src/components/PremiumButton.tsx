import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

function PremiumButton({ to, children, variant = 'primary', className = '' }: Props) {
  const shouldReduceMotion = useReducedMotion();

  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition';
  const styles = variant === 'primary'
    ? 'bg-gold text-forest shadow-[0_16px_30px_-18px_rgba(47,79,63,0.45)]'
    : 'border border-cream/40 bg-transparent text-cream';

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -3, boxShadow: '0 22px 36px -22px rgba(47, 79, 63, 0.45)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      <Link to={to} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}

export default PremiumButton;
