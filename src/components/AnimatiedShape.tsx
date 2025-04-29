'use client';

import { motion } from 'framer-motion';
interface animatedprops{
  w: number;
  h: number;
}

export default function AnimatedShape({w, h} : animatedprops) {
  return (
    <div className="relative w-full">
      <motion.svg
        width={w}
        height={h}
        viewBox="0 0 712 598"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <defs>
          <pattern
            id="imagePattern"
            patternUnits="userSpaceOnUse"
            width={w}
            height={h}
          >
            <image
              href="/dos.jpg"
              x="0"
              y="0"
              width={w}
              height={h}
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <motion.path
          d="M708.846 79.7198C708.93 99.8722 710.009 357.607 710.754 535.665C711.028 601.16 662.773 594.434 654.539 594.469C482.051 595.191 385.343 595.595 212.855 596.317C172.863 596.484 172.604 534.768 172.604 534.768C172.604 534.768 172.863 596.484 136.399 596.637L41.7106 597.033C29.3599 597.085 3.41122 580.19 3.22412 535.477L1.21608 55.6007C1.08696 24.7426 27.4657 3.8498 40.4045 3.79565L128.035 3.42897C170.38 3.25177 170.623 61.1896 170.623 61.1896C170.623 61.1896 170.38 3.25177 222.135 3.0352L660.29 1.20175C708.516 0.999952 708.692 42.9529 708.846 79.7192L708.846 79.7198Z"
          fill="url(#imagePattern)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  );
}
