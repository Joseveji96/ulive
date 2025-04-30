import React from 'react'
import Image from 'next/image';
import Ulogo from '@/components/ulogo';

interface props {
    image: string;
    text: string;
    colorText?: string;
}

function LargeCards({image, text, colorText}: props) {
  return (
    <div className='bg-blanco-50 w-full '>
        
            <div className="relative w-full h-[550px] rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4">
                <div className="absolute inset-0 p-8 flex items-end">
                    <Image
                        src={image}
                        alt="Adventure landscape"
                        fill
                        className="object-cover object-[center_40%]"
                        priority={false}
                    />
                    <div className='absolute top-0 right-0 m-8 px-3 py-1 border-1 border-cafe rounded-xl bg-white/10'>
                        <Ulogo color='#E0E2D0'/>
                    </div>
                    <h2 className={`absolute text-9xl flex ${colorText ? colorText : "text-cafe"}`}>{text}</h2>
                </div>
            </div>
        </div>
  )
}

export default LargeCards