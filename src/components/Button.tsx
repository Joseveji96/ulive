import { motion } from 'framer-motion';
import React from 'react';
import Rounded from './Rounded';
import Link from 'next/link';

interface ButtonProps {
  children?: React.ReactNode;
  linkto?: string; // Enlace opcional para el botón
  title?: string;
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7; // Variantes del botón
  classNames?: string // Valor opcional que puede ser 1, 2, 3 o 4
  bgcolor?: string; // Color de fondo opcional
}

const Button = ({ children, title, variant = 1, classNames, linkto = "/", bgcolor = "#18272F" }: ButtonProps) => {
  const baseClasses = 'flex items-center justify-center gap-2 transition-all duration-300 ease-in-out font-normal text-2xl cursor-pointer';

  const variantClasses = {
    1: 'bg-white/10 w-60 h-16 text-primary-100 border rounded-full border-white hover:bg-white/20',
    2: 'text-white px-6 py-1 border rounded-2xl hover:bg-primary-100 hover:text-black',
    3: 'text-black px-6 py-1 border rounded-2xl hover:bg-primary-100 hover:text-black',
    4: 'bg-white text-black shadow-lg hover:shadow-xl',
    5: 'text-white px-6 py-1 border rounded-lg hover:bg-primary-100 hover:text-blanco-50 hover:bg-blanco-50/10 text-xl 3xl:text-2xl',
    6: 'text-[#18272F] px-6 py-1 border border-[#18272F] rounded-lg hover:text-black text-xl 3xl:text-2xl',
    7: '',
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${classNames}`;

  return (
    variant !== 7 ? (
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        className='relative inline-block'
      >
        <button className={buttonClass}>
          {children ? children : <span>{title}</span>}
        </button>
      </motion.div>
    ) : (
      <motion.div
      whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        className="w-fit border rounded-lg cursor-pointer ">
        <Link
          className={`text-xl rounded-lg  ${classNames}`}
          href={linkto}>
          <Rounded
            className="h-full py-1 "
            backgroundColor={bgcolor}>
            <p className="z-10 px-6">{children ? children : <span>{title}</span>}</p>
            
          </Rounded>
        </Link>
      </motion.div>
    )
  );
};

export default Button;
