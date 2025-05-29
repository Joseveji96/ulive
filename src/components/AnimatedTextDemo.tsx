'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedText = ({ 
  text = "", 
  className = "", 
  delay = 0, 
  duration = 0.8,
  staggerDelay = 0.03,
  triggerOnce = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce,
    margin: "-100px"
  });

  // Dividir el texto en palabras y letras
  const words = text.split(' ');

  // Variantes para el contenedor de palabras
  const wordVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  // Variantes para cada letra
  const letterVariants = {
    hidden: {
      y: '100%',
      opacity: 0
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94] // Easing personalizado
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      variants={wordVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ overflow: 'hidden' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className="inline-block overflow-hidden"
              style={{ lineHeight: '1em' }}
            >
              <motion.span
                className="inline-block"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                variants={letterVariants}
              >
                &nbsp;
              </motion.span>
            </span>
          )}
        </span>
      ))}
    </motion.div>
  );
};

export {AnimatedText}