import AnimatiedShape from '@/components/AnimatiedShape'
import Ulogo from '@/components/ulogo'
import React from 'react'

export default function About() {
  return (
    <div className='bg-blanco-50 w-full h-screen m-0 p-16'>
      <div className='flex flex-row h-full'>
        <div className='relative inline-block'>
          <AnimatiedShape w={700} h={600} />
          <div className='absolute -top-5 -left-5 w-6 h-6 transform scale-x-[-1]'>
            <Ulogo />
          </div>
        </div>
        <div className='text-black flex flex-col justify-between items-end '>
          <div>
            <h2 className='font-medium text-2xl text-right'>Not just about clothes —</h2>
            <p className='font-light text-[20px]'>( Connecting people through style ).</p>
          </div>
          <div className="relative self-end text-right">
            <h2 className="font-medium text-7xl leading-tight">
              <span className="relative inline-block">
                I
                <div className='absolute -top-5 -left-5 w-6 h-6'>
                  <Ulogo />
                </div>
              </span>
              t’s A Living, Breathing Community That Grows With You.
            </h2>
          </div>
          <p className='font-light uppercase line-clamp-2 w-4/5 text-right'>
            On <span className='font-bold italic'>ulive</span> you can get inspired, share your daily look, and discover <span className='font-bold italic text-naranja'>new styles</span> and brands from people around the globe.
          </p>
        </div>
      </div>
    </div>
  )
}

