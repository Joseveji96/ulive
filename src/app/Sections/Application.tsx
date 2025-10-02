"use client"  
import { AnimatedText } from "@/components/AnimatedTextDemo"
import Button from "@/components/Button"
import { motion, useInView } from "framer-motion"
import React from "react"

function Application() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      className="bg-black relative z-30 text-white w-full min-h-screen lg:h-screen flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-4 sm:px-8 lg:px-0 py-12 lg:py-0 gap-8 lg:gap-0"
      id="ourapp"
      ref={ref}
    >
      {/* Texto */}
      <div className="max-w-xl lg:max-w-2xl w-full lg:h-full flex flex-col z-10 justify-center lg:ml-16 text-center lg:text-left">
        <AnimatedText
          text="Capture your own style"
          className="uppercase text-center lg:text-left text-5xl lg:text-7xl 3xl:text-8xl font-medium text-blanco-50"
          delay={0.2}
          duration={0.5}
          staggerDelay={0.03}
        />
        <AnimatedText
          text="Shop your favorite looks, and connect with fellow fashion lovers from anywhere."
          className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-light leading-tight my-4 lg:my-6"
          delay={0.3}
          duration={0.5}
          staggerDelay={0.01}
        />

        <motion.div className="flex flex-col items-center sm:flex-row gap-4 mt-4 lg:mt-6 justify-center lg:justify-start">
          <Button variant={5}>
            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
              Download for iOS
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                className="h-4 w-4 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
              </svg>
            </span>
          </Button>

          <Button variant={5}>
            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
              Download for Android
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-4 w-4 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M144 268.4V358c0 6.9 4.5 14 11.4 14H184v52c0 13.3 10.7 24 24 24s24-10.7 24-24v-52h49v52c0 7.5 3.4 14.2 8.8 18.6 3.9 3.4 9.1 5.4 14.7 5.4h.5c13.3 0 24-10.7 24-24v-52h27.6c7 0 11.4-7.1 11.4-13.9V192H144v76.4zM408 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24zM104 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24z"></path>
                <g>
                  <path d="M311.2 89.1l18.5-21.9c.4-.5-.2-1.6-1.3-2.5-1.1-.8-2.4-1-2.7-.4l-19.2 22.8c-13.6-5.4-30.2-8.8-50.6-8.8-20.5-.1-37.2 3.2-50.8 8.5l-19-22.4c-.4-.5-1.6-.4-2.7.4s-1.7 1.8-1.3 2.5l18.3 21.6c-48.2 20.9-55.4 72.2-56.4 87.2h223.6c-.9-15.1-8-65.7-56.4-87zm-104.4 49.8c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6 13.3-13.5 13.3zm98.4 0c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6.1 13.3-13.5 13.3z"></path>
                </g>
              </svg>
            </span>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="z-10 w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[608px] h-auto flex items-start"
        initial={{ x: typeof window !== "undefined" && window.innerWidth < 1024 ? 0 : 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: [0.2, 0.8, 0.2, 1],
          opacity: { duration: 1, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 608 716" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="imagePattern" patternUnits="objectBoundingBox" width="1" height="1">
              <image href="/prueba.png" width="608" height="716" preserveAspectRatio="xMidYMid slice" />
            </pattern>
          </defs>
          <path
            d="M2.50248 319.384C3.35889 263.09 84.2822 268.835 88.1436 268.835C92.005 268.835 94.1535 265.963 94.1535 263.09C94.1535 260.217 91.9006 257.346 88.1436 257.346C52.0842 257.346 1.00024 238.964 1 202.2C0.999745 162.718 2.50248 0.000332695 2.50248 0.000332695C2.50248 0.000332695 89.6463 0.000573736 131.715 0.000332695C266.082 -0.000437178 608 0.000370245 608 0.000370245L608 101.1C608 101.1 608 255.047 608 333.171C608 367.808 608 385 608 385V406.5C608 406.5 608 416.96 608 451.503C608 514.69 608 550.305 608 621.536C608 674.54 516.48 706.381 483.879 710.646C149.979 754.325 183.62 516.41 183.62 516.41C183.62 660.246 2.50248 621.476 2.50222 575.728C2.50196 529.979 1.71322 371.264 2.50248 319.384Z"
            fill="url(#imagePattern)"
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default Application
