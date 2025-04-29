'use client';

import { motion } from 'framer-motion';
export default function Ulogo() {
    return (
        <motion.svg
          width="34"
          height="38"
          viewBox="0 0 34 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <g clipPath="url(#clip0_9_42)">
            <motion.path
              d="M8.145 30.1431C22.3217 32.94 28.8894 21.031 30.4012 14.7268L25.6609 17.516L10.9553 2.38344L15.978 26.6944C7.46006 26.6786 -6.03166 27.3462 8.145 30.1431Z"
              stroke="#737373"
              strokeWidth="1"
              strokeDasharray="1000"
            />
          </g>
          <defs>
            <clipPath id="clip0_9_42">
              <rect
                width="25"
                height="31"
                fill="white"
                transform="translate(10.2791) rotate(19.3649)"
              />
            </clipPath>
          </defs>
        </motion.svg>
      );
};

