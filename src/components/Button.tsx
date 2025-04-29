import React from 'react';

interface ButtonProps {
  title: string;
  variant?: 1 | 2 | 3 | 4;
  classNames?: string // Valor opcional que puede ser 1, 2, 3 o 4
}

const Button = ({ title, variant = 1, classNames}: ButtonProps) => {
  const baseClasses = 'flex items-center justify-center gap-2 transition-all duration-300 ease-in-out';

  const variantClasses = {
    1: 'bg-white/10 w-60 h-16 text-primary-100 border rounded-full border-white hover:bg-white/20',
    2: 'text-white px-6 py-1 border rounded-2xl hover:bg-primary-100 hover:text-black',
    3: 'text-black px-6 py-1 border rounded-2xl hover:bg-primary-100 hover:text-black',
    4: 'bg-white text-black shadow-lg hover:shadow-xl',
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${classNames}`;

  return (
    <button className={buttonClass}>
      <span className='font-normal text-2xl'>{title}</span>
    </button>
  );
};

export default Button;
