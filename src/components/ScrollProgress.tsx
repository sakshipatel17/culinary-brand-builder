import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return <motion.div className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-terracotta via-gold to-forest" style={{ scaleX }} />;
}

export default ScrollProgress;
