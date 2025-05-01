import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Ulogo from '@/components/ulogo';

interface props {
    image: string;
    text: string;
    colorText?: string;
    height?: number;
    progress?: number; // 0-1 valor que representa cuánto ha progresado la animación
    index?: number;
}

function LargeCards({ image, text, colorText, height = 550, progress = 0, index = 0 }: props) {
    // Valores de animación basados en el progreso (0 = altura completa, 1 = altura mínima)
    const imageScale = 1 + (progress * 0.15); // La imagen se agranda ligeramente
    const imageOpacity = 1 - (progress * 0.2); // La imagen se oscurece ligeramente
    const textScale = 1 - (progress * 0.3); // El texto se reduce
    const textY = progress * 25; // El texto se mueve hacia abajo
    
    return (
        <motion.div
            animate={{ height }}
            transition={{ 
                duration: 0.2, 
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className='bg-blanco-50 w-full overflow-hidden rounded-lg shadow-card hover:shadow-card-hover'
        >
            <div className="relative w-full h-full overflow-hidden p-4">
                <div className="absolute inset-0 p-8 flex items-end">
                    <motion.div 
                        className="absolute inset-0"
                        animate={{ 
                            scale: imageScale,
                            filter: `brightness(${imageOpacity})`
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            src={image}
                            alt="Adventure landscape"
                            fill
                            className="object-cover object-[center_40%]"
                            priority={index < 2}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                        />
                    </motion.div>
                    
                    <div className='absolute top-0 right-0 m-8 px-3 py-1 border-1 border-cafe rounded-xl bg-white/10 z-10'>
                        <Ulogo color='#E0E2D0' />
                    </div>
                    
                    <motion.h2 
                        className={`absolute text-9xl flex ${colorText ?? "text-cafe"}`}
                        animate={{ 
                            scale: textScale,
                            y: textY
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {text}
                    </motion.h2>
                </div>
            </div>
        </motion.div>
    );
}

export default LargeCards;