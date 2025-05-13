import { motion, useInView } from 'framer-motion';
import Ulogo from '@/components/ulogo';
import React, { useRef } from 'react';
import { TextAnimate } from '@/components/magicui/text-animate';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const lineas = [
    "It’s a living",
    "Breathing Community That",
    "Grows With You.",
  ];

  return (
    <div className="relative z-20 bg-blanco-50 w-full h-screen p-0 m-0" id="section2">
      <div className="flex flex-row h-full w-full">
        {/* Columna izquierda - Texto */}
        <div className="w-1/2 flex flex-col justify-end pl-16 pb-10 space-y-30">
          {/* Título principal */}
          <div className="absolute left top-20 z-30 pointer-events-none space-y-3">
            <div className="flex items-center">
              <TextAnimate className="font-light text-md" animation='slideUp' by='word' startOnView={true} delay={1} once>
                ( Connecting people through style ).
              </TextAnimate>
              <div className="w-5 h-5 -translate-y-8 translate-x-3">
                <Ulogo />
              </div>
            </div>
            <div className='overflow-hidden '>
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.6, // retraso por línea
                  ease: "easeOut",
                }}
                className="uppercase font-medium text-8xl text-black"
              >
                Not just about clothes —
              </motion.h2>
            </div>
          </div>

          {/* Texto animado en 3 líneas */}
          <div className="relative self-start text-left">
            {lineas.map((linea, i) => (
              <motion.div
                initial={{ translateY: "100px" }}
                animate={inView ? { translateY: "0px" } : {}}
                transition={{
                  duration: 1.5,
                  delay: 0.5, // retraso por línea
                  ease: "easeOut",
                }} key={i} className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.3, // retraso por línea
                    ease: "easeOut",
                  }}
                  className="font-medium text-5xl leading-tight"
                >
                  {linea}
                </motion.p>
              </motion.div>
            ))}
          </div>


          {/* Texto inferior */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 1.5, // retraso por línea
              ease: "easeOut",
            }}
          >
            <p className="font-regular text-[16px]  w-3/5 text-left">
              On <span className="font-bold italic">ulive</span> you can get inspired, share your daily look, and discover{' '}
              <span className="font-bold italic text-naranja">new styles</span> and brands from people around the globe.
            </p>
          </motion.div>
        </div>

        {/* Columna derecha - Imagen con clipPath */}
        <div className="w-1/2 flex justify-end items-end relative">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="937"
            height="836"
            viewBox="0 0 937 836"
            fill="none"
            className="w-[725px] h-[700px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <defs>
              <clipPath id="clip-shape">
                <motion.path
                  ref={ref}
                  d="M184.336 28C278.75 -32.0304 937 28 937 28V835C937 835 448.785 833.448 312.04 833.448C175.295 833.448 -69 818.5 20.382 634.559C109.764 450.617 20.382 441 20.382 339C47 233.5 134.664 309.5 178.5 242.5C219.015 180.576 77.3169 96.0445 184.336 28Z"
                  animate={inView ? {
                    d: [
                      "M150 29.5001C244.414 -30.5303 940 22 940 22V829C940 829 451.785 827.448 315.04 827.448C178.295 827.448 -62.882 861.441 26.5 677.5C115.882 493.559 1 513 1 411C27.618 305.5 137.664 303.5 181.5 236.5C222.015 174.576 42.9813 97.5445 150 29.5001Z",
                      "M184.336 28C278.75 -32.0304 937 28 937 28V835C937 835 448.785 833.448 312.04 833.448C175.295 833.448 -69 818.5 20.382 634.559C109.764 450.617 20.382 441 20.382 339C47 233.5 134.664 309.5 178.5 242.5C219.015 180.576 77.3169 96.0445 184.336 28Z"
                    ]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeatType: 'reverse',
                    repeatDelay: 1
                  }}
                />
              </clipPath>
            </defs>

            <motion.image
              href="/a.jpg"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip-shape)"
              animate={{
                x: [0, 10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeatType: 'reverse',
                repeatDelay: 1,
              }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
}
