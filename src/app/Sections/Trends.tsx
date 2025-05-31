import { AnimatedText } from '@/components/AnimatedTextDemo'
import Button from '@/components/Button'
import Cards from '@/components/Cards'
import Ulogo from '@/components/ulogo'
import React from 'react'

export default function Trends() {
  return (
    <section className='relative z-0 -top-20 mt-10 bg-blanco-50 w-full h-[100vh] m-0 p-16 overflow-hidden' id='trends'>
      <div className='flex flex-row justify-between items-end'>
        <div className='flex flex-col h-full'>
          <AnimatedText
							text="Month&apos;s Trends"
							className="text-6xl font-bold text-black uppercase"
							delay={0.4}
							duration={0.2}
							staggerDelay={0.03}
						/>

            <AnimatedText
							text="Fashion curated by the community —"
							className="text-lg font-medium uppercase text-black"
							delay={0.4}
							duration={0.2}
							staggerDelay={0.03}
						/>
          {/* <h2 className='text-6xl font-bold text-black uppercase'> </h2>
          <p className='text-lg font-medium uppercase text-black'>Fashion curated by the community —</p> */}
        </div>
        <div className='relative inline-block pb-2'>
          <Button title='See mooore' variant={6} />
          <div className='absolute -top-10 -left-8 w-6 h-6'>
            <Ulogo />
          </div>
        </div>
      </div>
      <div>
        <Cards/>
      </div>
    </section>
  )
}
