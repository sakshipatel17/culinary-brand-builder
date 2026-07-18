import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
};

function AnimatedCounter({ value, suffix = '', prefix = '' }: Props) {
  const [display, setDisplay] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const frame = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }, [shouldReduceMotion, value]);

  return (
    <motion.span
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-display text-3xl text-forest"
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
}

export default AnimatedCounter;
