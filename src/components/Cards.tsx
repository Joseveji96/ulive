import React from 'react';
import Image from 'next/image';
import Button from './Button';


function Cards() {
  return (
    <div className='flex justify-between mt-4'>
      <div className="relative w-[450px] h-[570px] rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4">
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
        <Button title='See +' variant={2} classNames='absolute' />

        {/* Capa de gradiente y texto */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 bg-gradient-to-t from-black/70 via-transparent z-10">
          <h3 className="text-cafe text-7xl font-bold uppercase">Winter</h3>
          <h3 className="text-white text-7xl font-bold uppercase text-right">season</h3>
        </div>
      </div>
      <div className="relative w-[450px] h-[570px] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4">
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
        <Button title='See +' variant={2} classNames='absolute' />

        {/* Capa de gradiente y texto */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 bg-gradient-to-t from-black/70 via-transparent z-10 text-center">
          <h3 className="text-white text-7xl italic uppercase">Delicate</h3>
          <h3 className="text-white text-7xl font-light italic uppercase">Jewels</h3>
        </div>
      </div>
      <div className="relative w-[450px] h-[570px] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4">
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
        <Button title='See +' variant={2} classNames='absolute' />

        {/* Capa de gradiente y texto */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 bg-gradient-to-t from-black/70 via-transparent z-10">
          <h3 className="text-white text-7xl font-light uppercase">Celebrities</h3>
          <h3 className="text-verde text-7xl font-bold uppercase">drops</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;