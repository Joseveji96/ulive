import { motion, useInView } from 'framer-motion';
import Ulogo from '@/components/ulogo';
import React, { useRef } from 'react';
import { TextAnimate } from '@/components/magicui/text-animate';
import { AnimatedText } from '@/components/AnimatedTextDemo';

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
              <motion.div
                initial={{ y: "100%", x: "-10%" }}
                animate={inView ? { y: "0%", x: "0%" } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.6, // retraso por línea
                  ease: "easeOut",
                }}
              >
                <AnimatedText
                text="Not just about clothes —"
                className="uppercase text-7xl font-bold text-black"
                delay={0.2}
                duration={0.5}
                staggerDelay={0.08}
              />
                
              </motion.div>
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
                  animate={inView ? {
                    d: [
                      "M265.21 2.55188C378.21 2.55282 993.114 1 993.114 1V808H443.868C307.123 808 90.5 864.5 34 616C-22.5 367.5 193.868 335.5 193.868 335.5C193.868 335.5 0.5 303 0.5 164.5C0.5 26 152.21 2.55094 265.21 2.55188Z",
                      "M216.842 2.55188C329.842 2.55282 944.746 1 944.746 1V808H395.5C258.755 808 73.5 821.5 12.5 627C-48.5 432.5 145.5 335.5 145.5 335.5C145.5 335.5 25.5 297.5 25.5 159C25.5 20.5 103.842 2.55094 216.842 2.55188Z",
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
              href="/HeroImg.png"
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
