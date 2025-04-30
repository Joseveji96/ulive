import Button from '@/components/Button'
import React from 'react'
import LargeCards from '@/components/LargeCards';

function Express() {
    return (
        <section className='bg-blanco-50 w-full p-16'>
            <div className='flex justify-between items-end mb-6'>
                <div>
                    <h2 className='uppercase text-black font-bold text-6xl'>express yourself. <br />
                        {/* <span className='uppercase italic font-medium text-6xl'>to </span> */}
                    <p className='text-lg font-medium uppercase text-black'>( From current trends to alternative styles )</p>
                    </h2>
                </div>
                <div className='flex flex-col items-end gap-3'>
                    <Button title='See mooore' variant={3} />
                </div>
            </div>
            <LargeCards text='Create Collections' image='/collection2.jpg'/>
            <LargeCards text='Share your outfit' image='/levis.jpg'/>
            <LargeCards text='Share your outfit' image='/3.jpg'/>
            <LargeCards text='Share your outfit' image='/4.jpg'/>
        </section>
    )
}

export default Express