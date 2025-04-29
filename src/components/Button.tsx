import React from 'react'

interface ButtonProps {
  title: string;
}

const Button = ({title}: ButtonProps) => {
  return (
    <button className='w-60 h-16 border-white border-1 rounded-full bg-white/10 flex items-center justify-center gap-2 text-primary-100 hover:bg-white/20 transition-all duration-300 ease-in-out'>
        <span className='font-normal text-2xl'>{title}</span>
    </button>
  )
}

export default Button