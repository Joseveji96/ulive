"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Componente para crear el efecto de split text
const AnimatedText = ({ 
  text, 
  className, 
  delay = 0,
  isActive = false
}: { 
  text: string, 
  className?: string, 
  delay?: number,
  isActive?: boolean 
}) => {
  return (
    <span className={className}>
      {text.split("").map((char: string, index: number) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.5,
            delay: isActive ? delay + index * 0.03 : 0,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

function Application({ isActive = false }: { isActive?: boolean }) {
  const containerRef = useRef(null);
  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  
  // Solo activar las animaciones cuando la sección se active
  useEffect(() => {
    if (isActive && !animationsTriggered) {
      setAnimationsTriggered(true);
    }
  }, [isActive, animationsTriggered]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transformar el valor de scroll para controlar el zoom de la imagen
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.9]);

  return (
    <motion.div 
      ref={containerRef}
      className="relative bg-black text-white w-full h-screen flex items-start justify-between overflow-hidden"
      initial={{ scale: 0.95 }}
      animate={isActive ? { scale: 1 } : {}}
      transition={{ duration: 0.7 }}
    >
      {/* Texto */}
      <div className="max-w-xl h-full flex flex-col z-10 justify-center ml-16">
        <motion.h1 
          className="text-5xl md:text-6xl font-semibold leading-tight uppercase"
          initial={{ opacity: 0 }}
          animate={animationsTriggered ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <AnimatedText 
            text="Capture" 
            delay={0.2} 
            isActive={animationsTriggered} 
          />
          <br />
          <AnimatedText 
            text="Your Style" 
            className="italic" 
            delay={0.6}
            isActive={animationsTriggered} 
          />
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-5xl font-light leading-tight my-6"
          initial={{ opacity: 0, y: 20 }}
          animate={animationsTriggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          Shop your favorite looks, and connect with fellow fashion lovers from anywhere.
        </motion.p>
        
        <div className="flex gap-4 mt-6">
          <motion.button 
            className="bg-white text-black px-6 py-3 rounded-full font-medium"
            initial={{ opacity: 0, width: "30%" }}
            animate={animationsTriggered ? { opacity: 1, width: "auto" } : {}}
            transition={{ 
              duration: 0.5, 
              delay: 1.4,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download for iOS
          </motion.button>
          
          <motion.button 
            className="bg-white text-black px-6 py-3 rounded-full font-medium"
            initial={{ opacity: 0, width: "30%" }}
            animate={animationsTriggered ? { opacity: 1, width: "auto" } : {}}
            transition={{ 
              duration: 0.5, 
              delay: 1.6,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download for Android ⬇
          </motion.button>
        </div>
      </div>
      
      {/* Contenedor para el SVG redimensionable */}
      <motion.div 
        className="z-10 w-[608px] h-[716px] flex items-start"
        initial={{ x: 100, opacity: 0 }}
        animate={animationsTriggered ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.svg
          style={{ scale: imageScale }}
          viewBox="0 0 608 716"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <pattern id="imagePattern" patternUnits="objectBoundingBox" width="1" height="1">
              <image href="/3.jpg" width="608" height="716" preserveAspectRatio="xMidYMid slice" />
            </pattern>
          </defs>
          <motion.path
            d="M2.50248 319.384C3.35889 263.09 84.2822 268.835 88.1436 268.835C92.005 268.835 94.1535 265.963 94.1535 263.09C94.1535 260.217 91.9006 257.346 88.1436 257.346C52.0842 257.346 1.00024 238.964 1 202.2C0.999745 162.718 2.50248 0.000332695 2.50248 0.000332695C2.50248 0.000332695 89.6463 0.000573736 131.715 0.000332695C266.082 -0.000437178 608 0.000370245 608 0.000370245L608 101.1C608 101.1 608 255.047 608 333.171C608 367.808 608 385 608 385V406.5C608 406.5 608 416.96 608 451.503C608 514.69 608 550.305 608 621.536C608 674.54 516.48 706.381 483.879 710.646C149.979 754.325 183.62 516.41 183.62 516.41C183.62 660.246 2.50248 621.476 2.50222 575.728C2.50196 529.979 1.71322 371.264 2.50248 319.384Z"
            fill="url(#imagePattern)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animationsTriggered ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

export default Application;