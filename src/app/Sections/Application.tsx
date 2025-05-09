"use client"
import { useRef, useEffect, useState } from "react"
import { motion} from "framer-motion"

function Application({ onHide }: { onHide: () => void }) {
  const appRef = useRef<HTMLDivElement>(null)
  const [expressIsSticky, setExpressIsSticky] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [transitionComplete, setTransitionComplete] = useState(false)
  useEffect(() => {
    const checkPosition = () => {
      if (appRef.current && transitionComplete) {
        const rect = appRef.current.getBoundingClientRect();
        if (rect.top > window.innerHeight / 2) {
          onHide(); // <-- Notificamos al padre cuando debemos ocultar
        }
      }
    };

    window.addEventListener("scroll", checkPosition);
    return () => window.removeEventListener("scroll", checkPosition);
  }, [transitionComplete, onHide]);
  // Para detectar cuando Express está en modo sticky y la dirección del scroll
  useEffect(() => {
    const checkExpressSticky = () => {
      const expressSection = document.querySelector('[data-is-sticky="true"]')
      const lastCard = document.querySelector('[data-last-card="true"]')
      const isSticky = !!expressSection
      
      // Detectar dirección del scroll
      const currentScrollY = window.scrollY
      const newDirection = currentScrollY > lastScrollY ? "down" : "up"
      
      // Solo actualizar estados si hay un cambio real
      if (isSticky !== expressIsSticky) {
        setExpressIsSticky(isSticky)
      }
      
      if (newDirection !== scrollDirection) {
        setScrollDirection(newDirection)
      }
      
      setLastScrollY(currentScrollY)
      
      // Activar animación solo cuando Express está sticky, scrolleamos hacia abajo,
      // y hemos llegado al final de la sección Express (última tarjeta)
      if (isSticky && lastCard) {
        const lastCardRect = lastCard.getBoundingClientRect()
        // Activar la animación cuando la última tarjeta esté casi fuera de la vista
        const triggerPoint = window.innerHeight + 300 // Un poco antes del borde inferior
        
        if (lastCardRect.bottom < triggerPoint && newDirection === "down") {
          if (!shouldAnimate) {
            setShouldAnimate(true)
          }
        } else if (lastCardRect.bottom > window.innerHeight && newDirection === "up") {
          if (shouldAnimate) {
            setShouldAnimate(false)
            setTransitionComplete(false)
          }
        }
      } else if (!isSticky && shouldAnimate) {
        setShouldAnimate(false)
        setTransitionComplete(false)
      }
      
      // Si Application ya está completamente visible y seguimos scrolleando,
      // marcar la transición como completa para cambiar a posición relative
      if (shouldAnimate && appRef.current) {
        const appRect = appRef.current.getBoundingClientRect()
        
        // Si está completamente visible (top está en 0 o negativo) y scrolleamos más
        if (appRect.top <= 0 && newDirection === "down") {
          // Completar la transición después de un breve delay para evitar parpadeos
          if (!transitionComplete) {
            setTimeout(() => {
              setTransitionComplete(true)
            }, 100)
          }
        } else if (newDirection === "up" && appRect.top > 0) {
          setTransitionComplete(false)
        }
      }
    }

    window.addEventListener("scroll", checkExpressSticky, { passive: true })
    // Ejecutar una vez al inicio para establecer el estado correcto
    checkExpressSticky()

    return () => {
      window.removeEventListener("scroll", checkExpressSticky)
    }
  }, [expressIsSticky, lastScrollY, scrollDirection, shouldAnimate, transitionComplete])


// En Application.tsx
const slideVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150, 
      damping: 30,
      opacity: { duration: 0.3, ease: "easeInOut" }
    }
  },
  exit: { 
    y: "100%", 
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      opacity: { duration: 0.6, ease: "easeInOut" }
    }
  }
};
  
  // Determinar si Application debería estar en posición fixed o en el flujo normal
  const isInTransition = shouldAnimate && expressIsSticky && !transitionComplete;

  // Calcular la altura del espacio reservado para mantener el scroll suave
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  
  useEffect(() => {
    if (appRef.current && isInTransition) {
      const height = appRef.current.offsetHeight;
      setPlaceholderHeight(height);
    } else {
      setPlaceholderHeight(0);
    }
  }, [isInTransition]);

  return (
    <>
      {/* Espacio reservado para mantener el scroll suave */}
      {isInTransition && <div style={{ height: `${placeholderHeight + 900}px` }} />}
      
      <motion.div
        ref={appRef}
        id="application-section"
        className="relative h-screen w-full"
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={slideVariants}
        style={{
          position: isInTransition ? "fixed" : "relative",
          top: isInTransition ? 0 : "auto",
          left: isInTransition ? 0 : "auto",
          right: isInTransition ? 0 : "auto",
          bottom: isInTransition ? 0 : "auto",
          width: "100%",
          zIndex: 20,
          pointerEvents: shouldAnimate ? "auto" : "none",
        }}
        data-transition-complete={transitionComplete}
      >
        <div className="bg-black text-white w-full h-screen flex items-start justify-between overflow-hidden">
          {/* Texto */}
          <div className="max-w-xl h-full flex flex-col z-10 justify-center ml-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-semibold leading-tight uppercase"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Capture
              <span className="italic"> Your Style</span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-5xl font-light leading-tight my-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Shop your favorite looks, and connect with fellow fashion lovers from anywhere.
            </motion.p>

            <motion.div 
              className="flex gap-4 mt-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Download for iOS
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Download for Android ⬇
              </button>
            </motion.div>

          </div>

          {/* Contenedor para el SVG redimensionable con animación */}
          <motion.div 
            className="z-10 w-[608px] h-[716px] flex items-start"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <svg viewBox="0 0 608 716" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <pattern id="imagePattern" patternUnits="objectBoundingBox" width="1" height="1">
                  <image href="/3.jpg" width="608" height="716" preserveAspectRatio="xMidYMid slice" />
                </pattern>
              </defs>
              <path
                d="M2.50248 319.384C3.35889 263.09 84.2822 268.835 88.1436 268.835C92.005 268.835 94.1535 265.963 94.1535 263.09C94.1535 260.217 91.9006 257.346 88.1436 257.346C52.0842 257.346 1.00024 238.964 1 202.2C0.999745 162.718 2.50248 0.000332695 2.50248 0.000332695C2.50248 0.000332695 89.6463 0.000573736 131.715 0.000332695C266.082 -0.000437178 608 0.000370245 608 0.000370245L608 101.1C608 101.1 608 255.047 608 333.171C608 367.808 608 385 608 385V406.5C608 406.5 608 416.96 608 451.503C608 514.69 608 550.305 608 621.536C608 674.54 516.48 706.381 483.879 710.646C149.979 754.325 183.62 516.41 183.62 516.41C183.62 660.246 2.50248 621.476 2.50222 575.728C2.50196 529.979 1.71322 371.264 2.50248 319.384Z"
                fill="url(#imagePattern)"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Application