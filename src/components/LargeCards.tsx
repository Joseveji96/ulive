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

function LargeCards({ image, text, colorText, height = 0, progress = 0, index = 0 }: props) {
    // Valores de animación basados en el progreso (0 = altura completa, 1 = altura mínima)
    const imageScale = 1 + (progress * 0.15); // La imagen se agranda ligeramente
    const imageOpacity = 1 - (progress * 0.2); // La imagen se oscurece ligeramente
    
    return (
        <motion.div
            animate={{ height  }}
            transition={{ 
                duration: 0.5, 
                ease: [0, 0.1, 0.2, 1]
            }}
            className={`bg-blanco-50 w-full overflow-hidden shadow-card hover:shadow-card-hover ${index == 0 ? "rounded-t-lg" : ""}`}
        >
            <div className="relative w-full h-full overflow-hidden p-4">
                <div className="absolute inset-0 p-8 flex">
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
                    
                    <h2 
                        className={`absolute flex justify-start w-full text-9xl ${colorText ?? "text-cafe"}`}
                    >
                        {text}
                    </h2>
                </div>
            </div>
        </motion.div>
    );
}

export default LargeCards;