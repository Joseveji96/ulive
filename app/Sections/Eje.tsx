import { useRef, useEffect, useState, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import About from './About';
import Hero2 from './Hero2';

export default function Eje() {
  const containerRef = useRef(null);
  const isSnapping = useRef(false);
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(0);
  const lastScrollY = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener('resize', updateVh);
    return () => window.removeEventListener('resize', updateVh);
  }, []);

  // Sección About con posición inicial correcta
  const rawSection2Y = useTransform(scrollY, [0, 100], [vh, vh * 0.48]);
  const section2Y = useSpring(rawSection2Y, {
    stiffness: 40,
    damping: 18,
    mass: 1.2,
  });

  // Hero: escala más leve
  const rawHeroScale = useTransform(scrollY, [0, 220], [1, 1.06]);
  const heroScale = useSpring(rawHeroScale, {
    stiffness: 30,
    damping: 15,
    mass: 1,
  });

  const snapTo = useCallback((target: number) => {
    isSnapping.current = true;
    window.scrollTo({ top: target, behavior: 'smooth' });

    const waitForScrollEnd = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - target) < 2) {
        isSnapping.current = false;
      } else {
        requestAnimationFrame(waitForScrollEnd);
      }
    };
    requestAnimationFrame(waitForScrollEnd);
  }, []);

  const handleScroll = useCallback(() => {
    if (isSnapping.current) return;
    const y = window.scrollY;
    const diirection = y > lastScrollY.current ? 'down' : 'up';
    lastScrollY.current = y;
    console.log('Scroll Y:', y, diirection, 'Last Scroll Y:', lastScrollY.current);
    if (y > 0 && y < 350) {
      if (diirection === 'up') {
        snapTo(0);
      } else {
        snapTo(350);
      }
    }
  }, [snapTo, lastScrollY]);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const onScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 150);
    };

    window.addEventListener('scroll', onScrollEnd);
    return () => {
      window.removeEventListener('scroll', onScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="relative w-full h-[148vh] overflow-hidden">
      <div className="relative">
        {/* Hero */}
        <motion.section
          className="absolute top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden"
          style={{
            scale: heroScale,
          }}
        >
          <Hero2 />
        </motion.section>
        {/* About */}
        <motion.section
          className="absolute top-0 left-0 w-full min-h-screen bg-white z-20"
          initial={{ y: mounted ? vh : 750 }}
          style={{ y: section2Y }}
        >
          <About />
        </motion.section>
      </div>
    </div>
  );
}
