"use client"
import { motion} from "framer-motion"

function Application() {
 
  return (

        <div className="bg-black relative z-30 text-white w-full h-[100vh] flex items-start justify-between" id="ourapp">
          {/* Texto */}
          <div className="max-w-xl h-full flex flex-col z-10 justify-center ml-16">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight uppercase">
              Capture
              <span className="italic"> Your Style</span>
            </h1>

            <p className="text-2xl md:text-5xl font-light leading-tight my-6">
              Shop your favorite looks, and connect with fellow fashion lovers from anywhere.
            </p>

            <motion.div className="flex gap-4 mt-6">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Download for iOS
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Download for Android ⬇
              </button>
            </motion.div>

          </div>

          {/* Contenedor para el SVG redimensionable con animación */}          <motion.div 
            className="z-10 w-[608px] h-[716px] flex items-start"
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.3,
              duration: 1.2,
              ease: [0.6, 0.01, -0.05, 0.95],
              opacity: { duration: 0.6 }
            }}
          >
            <svg viewBox="0 0 608 716" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <pattern id="imagePattern" patternUnits="objectBoundingBox" width="1" height="1">
                  <image href="/3.jpg" width="608" height="716" preserveAspectRatio="xMidYMid slice" />
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