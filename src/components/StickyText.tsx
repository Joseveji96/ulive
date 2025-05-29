import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
interface StickyTextProps {
    text: string;
    route?: string;
    className?: string;
}

const StickyText = ({text, route, className} : StickyTextProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const titleRef = useRef<HTMLAnchorElement>(null)
    const mixedClasses = `transition-all duration-300 ease-out transform hover:scale-110 ${className || ''}`.trim()

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isHovered && titleRef.current) {
                const rect = titleRef.current.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const distanceX = e.clientX - centerX
                const distanceY = e.clientY - centerY
                titleRef.current.style.transform = `translate(${distanceX * 0.1}px, ${distanceY * 0.2}px)`
            }
        }

        if (isHovered) {
            window.addEventListener('mousemove', handleMouseMove)
        } else if (titleRef.current) {
            titleRef.current.style.transform = 'translate(0, 0)'
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isHovered])
    return (
        <motion.a
            ref={titleRef}
            className={mixedClasses}
            href={route || "./"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </motion.a>
    )
}

export default StickyText