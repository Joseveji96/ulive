import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  title?: string;
  variant?: 1 | 2 | 3 | 4 | 5;
  classNames?: string // Valor opcional que puede ser 1, 2, 3 o 4
}

const Button = ({ children, title, variant = 1, classNames }: ButtonProps) => {
  const baseClasses = 'flex items-center justify-center gap-2 transition-all duration-300 ease-in-out font-normal text-2xl';

  const variantClasses = {
    1: 'bg-white/10 w-60 h-16 text-primary-100 border rounded-full border-white hover:bg-white/20',
    2: 'text-white px-6 py-1 border rounded-2xl hover:bg-primary-100 hover:text-black',
    3: 'text-black px-6 py-1 border rounded-2xl hover:bg-primary-100 hover:text-black',
    4: 'bg-white text-black shadow-lg hover:shadow-xl',
    5: 'text-white px-6 py-1 border rounded-lg hover:bg-primary-100 hover:text-blanco-50 hover:bg-blanco-50/10 text-xl 3xl:text-2xl',
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${classNames}`;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <button className={buttonClass}>
        {children ? children : <span>{title}</span>}
      </button>
    </motion.div>
  );
};

export default Button;
