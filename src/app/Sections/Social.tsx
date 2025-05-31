import { AnimatedText } from '@/components/AnimatedTextDemo'
import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image';


const lib = [
    {
        id: 1,
        src: "/post1.jpg",
        hash: "#info #yo #you #we #us",
    },
    {
        id: 2,
        src: "/post2.jpg",
        hash: "#famly #friends #love #together",
    },
    {
        id: 3,
        src: "/post3.jpg",
        hash: "#community #social #media #connect",
    }
]
const Social = () => {
    return (
        <div className='h-[80vh] relative bg-blanco-50 p-4 md:p-8 lg:p-16 grid grid-cols-[4fr_6fr] gap-10' id='social'>
            <div className='flex flex-col'>
                <AnimatedText
                    text="Comunity core on social media"
                    className="text-black font-bold text-7xl max-w-125"
                    delay={0.2}
                    duration={0.2}
                    staggerDelay={0.04}
                />
                <AnimatedText
                    text="( every post is a source of inspiration )"
                    className="text-black font-light text-lg mb-20"
                    delay={0.4}
                    duration={0.2}
                    staggerDelay={0.01}
                />
                <div>
                    <Button variant={6} classNames='flex items-center' >
                        Folloow us
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>


                    </Button>
                </div>
            </div>
            <div className='flex'>
                {
                    lib.map((item, id) => (
                        <div
                            key={id}

                            className="relative w-[300px] h-full overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
                        >
                            {/* Imagen de fondo */}
                            <div className="absolute inset-0">
                                <Image
                                    src={item.src}
                                    alt="Adventure landscape"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-cover"
                                    priority={false}
                                />
                            </div>

                            {/* Capa de gradiente y texto */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 bg-gradient-to-t from-black/70 via-transparent z-10 text-left">
                                <h3 className="text-white text-ls italic uppercase">{item.hash}</h3>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Social