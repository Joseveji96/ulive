"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Ulogo from "@/components/ulogo"

interface props {
  image: string
  text: string
  colorText?: string
  height?: number
  progress?: number
  index?: number
  isMobile?: boolean
}

function LargeCards({ image, text, colorText, height = 0, progress = 0, index = 0, isMobile = false }: props) {
  const imageScale = isMobile ? 1 : 1 + progress * 0.1
  const imageOpacity = isMobile ? 1 : 1 - progress * 0.15

  return (
    <motion.div
      animate={isMobile ? {} : { height }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`bg-blanco-50 w-full overflow-hidden shadow-card hover:shadow-card-hover min-h-[300px] lg:min-h-0 rounded-lg lg:rounded-none transform-gpu ${index == 0 ? "lg:rounded-t-lg" : ""}`}
    >
      <div className="relative w-full h-full overflow-hidden p-3 lg:p-4">
        <div className="absolute inset-0 p-4 lg:p-8 flex">
          <motion.div
            className="absolute inset-0 transform-gpu"
            animate={
              isMobile
                ? {}
                : {
                    scale: imageScale,
                    opacity: imageOpacity,
                  }
            }
            transition={{ duration: 0.15, ease: "linear" }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="Adventure landscape"
              fill
              className="object-cover object-[center_40%]"
              priority={index < 2}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </motion.div>

          <div className="absolute top-0 right-0 m-4 lg:m-8 px-2 py-1 lg:px-3 lg:py-1 border-1 border-cafe rounded-xl bg-white/10 z-10">
            <Ulogo color="#E0E2D0" />
          </div>

          <h2
            className={`absolute flex justify-start items-end lg:items-start w-full h-full pb-4 lg:pb-0 text-4xl md:text-6xl lg:text-9xl font-bold ${colorText ?? "text-cafe"}`}
          >
            {text}
          </h2>
        </div>
      </div>
    </motion.div>
  )
}

export default LargeCards
