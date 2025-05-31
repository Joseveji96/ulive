import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion, useInView } from 'framer-motion';

function Cards() {
  const ref1 = React.useRef(null);

  const isInView = useInView(ref1, { once: false, amount: 0.3 });

  return (
    <div className='flex justify-between mt-4'>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        variants={{
          initial: { filter: "brightness(1)" },
          hover: { filter: "brightness(1.2)" },
        }}
        whileHover="hover"
        className="relative w-[460px] h-[545px] rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4"
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/i1.jpg"
            alt="Adventure landscape"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Botón superior izquierdo */}
        <Button title='See +' variant={5} />

        {/* Capa de gradiente y texto */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 bg-gradient-to-t from-black/70 via-transparent z-10">
          <h3 className="text-cafe text-7xl font-bold uppercase">Winter</h3>
          <h3 className="text-white text-7xl font-bold uppercase text-right">season</h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        variants={{
          initial: { filter: "brightness(1)" },
          hover: { filter: "brightness(1.2)" },
        }}
        whileHover="hover"
        className="relative w-[460px] h-[545px] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4"
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/i2.jpg"
            alt="Adventure landscape"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Botón superior izquierdo */}
        <Button title='See +' variant={5} />

        {/* Capa de gradiente y texto */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 bg-gradient-to-t from-black/70 via-transparent z-10 text-center">
          <h3 className="text-white text-7xl italic uppercase">Delicate</h3>
          <h3 className="text-white text-7xl font-light italic uppercase">Jewels</h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        variants={{
          initial: { filter: "brightness(1)" },
          hover: { filter: "brightness(1.2)" },
        }}
        whileHover="hover"
        className="relative w-[460px] h-[545px] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4"
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/i3.jpg"
            alt="Adventure landscape"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Botón superior izquierdo */}
        <Button title='See +' variant={5} />

        {/* Capa de gradiente y texto */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 bg-gradient-to-t from-black/70 via-transparent z-10">
          <h3 className="text-white text-7xl font-light uppercase">Celebrities</h3>
          <h3 className="text-verde text-7xl font-bold uppercase">drops</h3>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;