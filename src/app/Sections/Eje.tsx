// pages/index.js
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Hero from './Hero';
import About from './About';

export default function Eje() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const section2Ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Valores para un efecto de overlap más fluido y suave
  // Sección 2 comienza completamente fuera de la pantalla (abajo) y se mueve hacia arriba
  const section2Y = useTransform(
    scrollY,
    [0, 300, 600],  // Rangos de scroll más precisos para el efecto 
    ['100vh', '0vh', '0vh']  // Empieza fuera de pantalla, termina anclada al tope
  );
  
  // Hacemos que el movimiento sea más fluido con un spring
  const smoothSection2Y = useSpring(section2Y, { stiffness: 100, damping: 30 });

  // Opacidad y escala para efectos visuales mejorados
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);
  
  // Umbral de scroll para activar el snap-to-top (50% del viewport)
  const snapThreshold = 10; // Ajusta este valor según necesites
  
  // Manejar el snap automático al top cuando se cruza el umbral
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si estamos entre 0 y el umbral y la dirección es hacia abajo, snap hacia arriba (0)
      if (currentScrollY > 0 && currentScrollY < snapThreshold) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } 
      // Si estamos entre el umbral y un poco más, snap hacia abajo a la sección 2
      else if (currentScrollY >= snapThreshold && currentScrollY < 350) {
        window.scrollTo({
          top: 350, // Posición donde la sección 2 está anclada
          behavior: 'smooth'
        });
      }
    };

    // Usamos un evento de scroll que se dispara cuando el usuario deja de scrollear
    let scrollTimeout;
    const onScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 150); // Espera 150ms después del último evento de scroll
    };

    window.addEventListener('scroll', onScrollEnd);
    
    return () => {
      window.removeEventListener('scroll', onScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);
  

  
  return (
    <div ref={containerRef} className="relative w-full h-[200vh] overflow-x-hidden">
      <div className="h-[200vh] relative">
        {/* Hero Section (Sección 1) - Fijado en la pantalla */}
        <motion.section 
          ref={heroRef}
          className="fixed top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden"
          style={{ 
            opacity: heroOpacity,
            scale: heroScale
          }}
        >
            <Hero/>
        </motion.section>
        
        {/* Sección 2 con verdadero efecto de overlap como en la imagen de DripDrop */}
        <motion.section
          ref={section2Ref}
          className="fixed top-0 left-0 w-full min-h-screen bg-white z-20"
          style={{ 
            y: smoothSection2Y,
          }}
        > 
          <About/>
        </motion.section>
      </div>
    </div>
  );
}