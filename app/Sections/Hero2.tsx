"use client"
import Button from "@/components/Button"
import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/AnimatedTextDemo"
import Ulogo from "@/components/ulogo"

export default function Hero2() {
  // Variantes de animación para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  // Variantes para títulos que entran desde la derecha
  const slideInRightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Variantes para elementos que aparecen desde abajo
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Variantes para el indicador de scroll
  const scrollIndicatorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.5,
      },
    },
  }

  return (
    <div className="z-10 w-screen h-screen overflow-hidden relative" id="home">
      <Image src="/Heroo.jpg" alt="Background" fill priority className="object-cover object-[center_30%]" />

      <motion.div
        className="absolute inset-0 z-10 flex items-start px-4 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 xl:px-26 text-blanco-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bloque de Títulos */}
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-4 w-screen">
          <div>
            {/* Primer título */}
            <div className="flex mb-0 items-center justify-between">
              <AnimatedText
                text="DRIPPED"
                className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-medium text-blanco-50"
                delay={0.2}
                duration={0.5}
                staggerDelay={0.08}
              />
            </div>
            {/* Segundo título */}

            <div className="flex items-center">
              <AnimatedText
                text="no effort"
                className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-medium text-primary-200 translate-x-8 sm:translate-x-16 md:translate-x-20 lg:translate-x-30 3xl:translate-x-40 tracking-tight"
                delay={0.7}
                duration={0.5}
                staggerDelay={0.08}
              />
              <div className="w-4 h-4 sm:w-5 sm:h-5 -translate-y-10 sm:-translate-y-14 md:-translate-y-16 lg:-translate-y-18 translate-x-8 sm:translate-x-16 md:translate-x-20 lg:translate-x-30">
                <Ulogo color="#FBFBFB" flip={true} strokeWidth={0.5} />
              </div>
            </div>

            {/* Tercer bloque */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center mt-2 gap-4 sm:gap-6 lg:gap-8 3xl:gap-12 translate-x-2 sm:translate-x-6 lg:translate-x-10"
              variants={fadeInUpVariants}
            >
              <h2 className="uppercase text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl italic">
                all <span className="text-naranja">style</span>
              </h2>

              <Button
                variant={5}
                classNames="w-[160px] h-[28px] sm:w-[180px] sm:h-[30px] lg:w-[200px] lg:h-[30px] 3xl:w-[236px] 3xl:h-[37px]"
              >
                <span className="text-lg sm:text-xl 3xl:text-3xl">See+</span>
              </Button>
            </motion.div>
          </div>

          {/* Texto descriptivo */}
          <motion.div
            className="flex items-center mt-4 lg:mt-12 text-left lg:text-right"
            variants={slideInRightVariants}
          >
            <h1 className="uppercase text-xs sm:text-sm md:text-[15px] lg:text-[16px] font-regular">
              Discover the hottest looks, exclusive drops,
              <br />
              influencer outfits and personalized <br />
              collections. <br />
              <div className="flex items-center justify-start lg:justify-end gap-2 mt-2">
                <span className="italic">All in one place</span>
                <motion.div
                  className="w-6 sm:w-8 h-1 rounded-2xl bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll minimalista */}
      <motion.div
        className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-[0.5px] h-2 sm:h-3 bg-blanco-50 rounded-full shadow-lg"
          animate={{
            y: [0, -10],
            scaleY: [0, 1.5],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.p
          className="text-blanco-50 text-[10px] sm:text-xs uppercase tracking-wider mt-2"
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          ( Scroll )
        </motion.p>
      </motion.div>
    </div>
  )
}
