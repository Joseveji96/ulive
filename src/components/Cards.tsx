import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion, useInView } from 'framer-motion';

// Hook para detectar si es lg o mayor
function useIsLg() {
  const [isLg, setIsLg] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const listener = () => setIsLg(media.matches);
    listener();
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return isLg;
}

function Cards() {
  const ref1 = React.useRef(null);
  const isInView = useInView(ref1, { once: false, amount: 0.3 });
  const isLg = useIsLg(); // ✅ detecta si es lg+

  const cardBase =
    "relative w-[460px] h-[545px] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4 flex-shrink-0";

  // si no es lg, animaciones se desactivan (opacity siempre 1, y = 0)
  const motionConfig = {
    initial: isLg ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 },
    animate: isLg
      ? { opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }
      : { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.4 },
    variants: {
      initial: { filter: "brightness(1)" },
      hover: { filter: "brightness(1.2)" },
    },
    whileHover: "hover",
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between mt-4 gap-6 sm:gap-4">
      {/* Card 1 */}
      <motion.div ref={ref1} {...motionConfig} className={`${cardBase} w-full sm:w-[460px] h-[400px] sm:h-[545px]`}>
        <div className="absolute inset-0">
          <Image src="/i1.jpg" alt="Adventure landscape" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" priority={false} />
        </div>
        <Button title="See +" variant={5} />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 pb-10 sm:pb-12 bg-gradient-to-t from-black/70 via-transparent z-10">
          <h3 className="text-cafe text-5xl sm:text-7xl font-bold uppercase">Winter</h3>
          <h3 className="text-white text-5xl sm:text-7xl font-bold uppercase text-right">season</h3>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div {...motionConfig} className={`${cardBase} w-full sm:w-[460px] h-[400px] sm:h-[545px]`}>
        <div className="absolute inset-0">
          <Image src="/i2.jpg" alt="Adventure landscape" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" priority={false} />
        </div>
        <Button title="See +" variant={5} />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 pb-10 sm:pb-12 bg-gradient-to-t from-black/70 via-transparent z-10 text-center">
          <h3 className="text-white text-5xl sm:text-7xl italic uppercase">Delicate</h3>
          <h3 className="text-white text-5xl sm:text-7xl font-light italic uppercase">Jewels</h3>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div {...motionConfig} className={`${cardBase} w-full sm:w-[460px] h-[400px] sm:h-[545px]`}>
        <div className="absolute inset-0">
          <Image src="/i3.jpg" alt="Adventure landscape" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" priority={false} />
        </div>
        <Button title="See +" variant={5} />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 pb-10 sm:pb-12 bg-gradient-to-t from-black/70 via-transparent z-10">
          <h3 className="text-white text-5xl sm:text-7xl font-light uppercase">Celebrities</h3>
          <h3 className="text-verde text-5xl sm:text-7xl font-bold uppercase">drops</h3>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;
