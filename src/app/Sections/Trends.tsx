import Button from '@/components/Button'
import Cards from '@/components/Cards'
import Ulogo from '@/components/ulogo'
import React from 'react'

export default function Trends() {
  return (
    <section className='relative top-0 bg-blanco-50 w-full min-h-screen m-0 p-16'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col h-full'>
          <h2 className='text-6xl font-bold text-black uppercase'> Month&apos;s Trends</h2>
          <p className='text-lg font-medium uppercase text-black'>Fashion curated by the community —</p>
        </div>
        <div className='relative inline-block'>
          <Button title='See mooore' variant={3} />
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
