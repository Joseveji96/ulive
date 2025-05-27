import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Hero from './Hero';
import About from './About';

export default function Eje() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const section2Ref = useRef(null);
  const isSnapping = useRef(false);
  const { scrollY } = useScroll();

  const section2Y = useTransform(
    scrollY,
    [0, 450, 600],
    ['100vh', '30vh', '0vh']
  );
  const smoothSection2Y = useSpring(section2Y, { stiffness: 80, damping: 20 });
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const heroScale = useTransform(scrollY, [0, 400], [0, 1.1]);

  const snapTo = (target: number) => {
    isSnapping.current = true;
    window.scrollTo({ top: target, behavior: 'smooth' });

    // Esperar hasta que el scroll termine realmente
    const waitForScrollEnd = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - target) < 2) {
        isSnapping.current = false;
      } else {
        requestAnimationFrame(waitForScrollEnd);
      }
    };
    requestAnimationFrame(waitForScrollEnd);
  };

  const handleScroll = () => {
    if (isSnapping.current) return;

    const y = window.scrollY;

    if (y > 0 && y < 100) {
      snapTo(0);
    } else if (y >= 100 && y < 400) {
      snapTo(350);
    }
  };

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const onScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 120);
    };

    window.addEventListener('scroll', onScrollEnd);

    return () => {
      window.removeEventListener('scroll', onScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[150vh] overflow-y-hidden">
      <div className="h-[150vh] relative">
        {/* Hero */}
        <motion.section
          ref={heroRef}
          className="absolute top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden"
          style={{
            opacity: heroOpacity,
            y: heroScale
          }}
        >
          <Hero />
        </motion.section>

        {/* About */}
        <motion.section
          ref={section2Ref}
          className="absolute top-0 left-0 w-full min-h-screen bg-white z-20"
          style={{
            y: smoothSection2Y
          }}
        >
          <About />
        </motion.section>
      </div>
    </div>
  );
}
