import { AnimatedText } from '@/components/AnimatedTextDemo'
import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';


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
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <div className='h-[80vh] relative bg-blanco-50 p-4 md:p-8 lg:p-16 grid grid-cols-[4fr_6fr] gap-10' id='social' ref={ref}>
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
            <motion.div

                className="flex"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
            >
                {lib.map((item, id) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, x: 200 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: id * 0.15,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        variants={{
                            initial: { filter: "brightness(1)" },
                            hover: { filter: "brightness(1.2)" },
                        }}
                        whileHover="hover"
                        className="relative w-[280px] h-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Imagen */}
                        <Image
                            src={item.src}
                            alt={item.hash || "Imagen"}
                            fill
                            sizes="(max-width: 768px) 100vw, 280px"
                            className="object-cover"
                            priority={false}
                        />

                        {/* Gradiente + texto */}
                        <motion.div 
                            className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 via-transparent text-white z-10"
                            variants={{
                                initial: {},
                                hover: {}
                            }}
                        >
                            <motion.h3
                                variants={{
                                    initial: { scale: 1, opacity: 0.8, y: 0 },
                                    hover: { scale: 1.05, opacity: 1, y: -4 }
                                }}
                                className="text-sm uppercase italic tracking-wide">
                                {item.hash}
                            </motion.h3>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Social