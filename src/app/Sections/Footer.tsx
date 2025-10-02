'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Button from '@/components/Button'

const Footer = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <footer
      ref={ref}
      className='relative h-auto lg:h-[92vh] p-4 md:p-8 lg:p-16 bg-black flex flex-col justify-between overflow-hidden'
      id='more'
    >
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Hero Section */}
        <div className='w-full flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-20 mb-12 md:mb-16 lg:mb-20'>
          {/* Image with Modern Frame */}
          <motion.div
            className="relative group w-full sm:w-[400px] md:w-[480px] lg:w-[584px]"
            variants={itemVariants}
          >
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[371px] overflow-hidden">
              <svg viewBox="0 0 584 371" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="imagePattern2" patternUnits="objectBoundingBox" width="1" height="1">
                    <image href="/footer1.jpg" width="584" height="371" preserveAspectRatio="xMidYMid slice" />
                  </pattern>
                </defs>
                <path
                  d="M490.837 1.00002C421.337 0.999883 163.333 1.00051 94.3375 1.00002C25.3417 0.999531 -48.1585 112.502 44.8375 186C-43.1592 254.502 17.3418 370 94.3375 370H490.837C562.837 370 630.337 257.002 539.837 186C631.837 112.002 560.337 1.00016 490.837 1.00002Z"
                  fill="url(#imagePattern2)"
                  filter="url(#glow)"
                />
              </svg>
            </div>
          </motion.div>

          {/* Brand Section */}
          <motion.div
            className='flex flex-col items-center lg:items-start gap-6 md:gap-8'
            variants={itemVariants}
          >
            <div className="relative">
              <h1 className='font-bold text-5xl sm:text-6xl md:text-8xl lg:text-[280px] text-transparent bg-clip-text bg-gradient-to-r from-white via-cafe to-cafe leading-none'>
                Ulive
              </h1>
            </div>

            <motion.div
              className='flex flex-col sm:flex-row gap-3 sm:gap-4 items-center'
              variants={itemVariants}
            >
              <Button variant={5}>
                <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Download for iOS
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                  </svg>
                </span>
              </Button>

              <Button variant={5}>
                <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Download for Android
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M144 268.4V358c0 6.9 4.5 14 11.4 14H184v52c0 13.3 10.7 24 24 24s24-10.7 24-24v-52h49v52c0 7.5 3.4 14.2 8.8 18.6 3.9 3.4 9.1 5.4 14.7 5.4h.5c13.3 0 24-10.7 24-24v-52h27.6c7 0 11.4-7.1 11.4-13.9V192H144v76.4zM408 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24zM104 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24z"></path>
                    <g><path d="M311.2 89.1l18.5-21.9c.4-.5-.2-1.6-1.3-2.5-1.1-.8-2.4-1-2.7-.4l-19.2 22.8c-13.6-5.4-30.2-8.8-50.6-8.8-20.5-.1-37.2 3.2-50.8 8.5l-19-22.4c-.4-.5-1.6-.4-2.7.4s-1.7 1.8-1.3 2.5l18.3 21.6c-48.2 20.9-55.4 72.2-56.4 87.2h223.6c-.9-15.1-8-65.7-56.4-87zm-104.4 49.8c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6 13.3-13.5 13.3zm98.4 0c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6.1 13.3-13.5 13.3z"></path></g>
                  </svg>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation & Info Section */}
        <motion.div
          className='text-white flex flex-col md:flex-row justify-between gap-8 md:gap-0'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className='w-full md:w-[50%] flex flex-col md:flex-row justify-between font-light text-sm sm:text-base md:text-xl items-start uppercase mb-6 md:mb-0 gap-6 md:gap-0'>
            <div>
              <h1>Social</h1>
              <div className="h-px bg-white mb-2 mt-1" />
              <ul className='space-y-1'>
                <li><a className="navbar-link-white" href='https://github.com/Joseveji96' aria-label='Github' target='_blank'>Github</a></li>
              </ul>
            </div>

            <div>
              <h1>Menu</h1>
              <div className="h-px bg-white mb-2 mt-1" />
              <ul className='space-y-1'>
                <li><a className="navbar-link-white" href="#home">Home</a></li>
                <li><a className="navbar-link-white" href="#about">About</a>, <a className="navbar-link-white" href="#features">Features</a></li>
                <li><a className="navbar-link-white" href="#trends">Trends</a>, <a className="navbar-link-white" href="#ourapp">Our App</a></li>
              </ul>
            </div>

            <div>
              <h1>Open to talk</h1>
              <div className="h-px bg-white mb-2 mt-1" />
              <ul>
                <li><a className="navbar-link-white">RAPTORDEV@GMAIL.COM</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-left md:text-right text-base sm:text-lg md:text-3xl text-gray-400 z-50 flex flex-col md:items-end">
            <p>&copy; 2025 EDUARDO VELAZCO</p>
            <p>All Rights reserved</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
