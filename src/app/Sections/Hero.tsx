import Button from '@/components/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="sticky top-0 z-10 w-full h-screen overflow-hidden" id="section1">
      <Image
        src="/back.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-[center_35%]"
      />

      <div className="absolute inset-0 z-10 flex items-end px-16 py-24">
        {/* Bloque de Títulos */}
        <div className="flex flex-col space-y-4">
          <div className='flex mb-0 items-center justify-between '>
            <h2 className="uppercase leading-16 text-9xl text-primary-100">
              Dripped
            </h2>
            <p className="uppercase text-[16px] font-light translate-x-34">
              Discover the hottest looks, <br />
              exclusive drops, influencer outfits <br />
              and personalized collections. <br />
              <span className="italic">All in one place.</span>
            </p>
          </div>
          <h2 className="uppercase text-9xl text-primary-200 translate-x-52">
            no effort
          </h2>
          <div className='flex items-center justify-center gap-28 translate-x-24'>
            <h2 className="uppercase leading-16 text-9xl italic ">
              all <span className="text-naranja">style</span>
            </h2>
            <div className="w-32 h-3 rounded-2xl bg-white" />
            <Button title="Shop now" />
          </div>
        </div>
      </div>
    </div>
  );
}
