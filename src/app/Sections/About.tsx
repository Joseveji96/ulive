import { motion } from 'framer-motion';
import Ulogo from '@/components/ulogo';
import React from 'react';

export default function About() {
  return (
    <div className="relative z-20 bg-blanco-50 w-full h-screen m-0 p-16" id="section2">
      <div className="flex flex-row h-full">
        <div className="relative inline-block">
          {/* SVG animado */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="550"
            height="522"
            viewBox="0 0 550 522"
            fill="none"
            className="w-[650px] h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            
          >
            {/* Definir la forma del clipPath */}
            <defs>
              <clipPath id="clip-shape">
                {/* Animamos el path para cambiar la forma del clip */}
                <motion.path
                  d="M334 1H1V521C1 521 217 520 277.5 520C338 520 405.5 491 405.5 396.5C405.5 302 277.5 279 277.5 279C344.5 283.5 443 232.5 449.5 143.5C456 54.5 383.5 1 334 1Z"
                  animate={{
                    d: [
                      "M334 1H1V521C1 521 217 520 277.5 520C338 520 525 539.5 525 394C525 248.5 334 259.5 334 259.5C388 244.5 449.5 236.5 449.5 143.5C449.5 50.5 383.5 1 334 1Z", 
                      "M334 1H1V521C1 521 217 520 277.5 520C338 520 405.5 491 405.5 396.5C405.5 302 277.5 279 277.5 279C344.5 283.5 443 232.5 449.5 143.5C456 54.5 383.5 1 334 1Z"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeatType: 'reverse', // Hace que la animación se invierta
                    repeatDelay: 1 // Añadir retardo entre animaciones
                  }}
                />
              </clipPath>
            </defs>

            {/* Imagen con comportamiento "cover" y clipPath dinámico */}
            <motion.image
              href="/4.jpg" // Ruta de la imagen
              width="100%"  // Hace que la imagen ocupe todo el ancho
              height="100%" // Hace que la imagen ocupe todo el alto
              preserveAspectRatio="xMidYMid slice" // Asegura que la imagen se comporte como "cover"
              clipPath="url(#clip-shape)" // Aplica el clipPath dinámico
              animate={{
                x: [0, 10, 0], // Cambia la posición X para animación
                y: [0, 10, 0],// Cambia la posición Y para animación
              }}
              transition={{
                duration: 3,
                repeatType: 'reverse',
                repeatDelay: 1
              }}
              
            />
          </motion.svg>

          {/* Logo animado */}
          <div className="absolute -top-5 -left-5 w-6 h-6 transform scale-x-[-1]">
            <Ulogo />
          </div>
        </div>

        <div className="text-black flex flex-col justify-between items-end">
          <div>
            <h2 className="font-medium text-2xl text-right">Not just about clothes —</h2>
            <p className="font-light text-[20px]">( Connecting people through style ).</p>
          </div>
          <div className="relative self-end text-right">
            <h2 className="font-medium text-7xl leading-tight">
              <span className="relative inline-block">
                I
                <div className="absolute -top-5 -left-5 w-6 h-6">
                  <Ulogo />
                </div>
              </span>
              t’s A Living, Breathing Community That Grows With You.
            </h2>
          </div>
          <p className="font-light uppercase line-clamp-2 w-4/5 text-right">
            On <span className="font-bold italic">ulive</span> you can get inspired, share your daily look, and discover{' '}
            <span className="font-bold italic text-naranja">new styles</span> and brands from people around the globe.
          </p>
        </div>
      </div>
    </div>
  );
}
