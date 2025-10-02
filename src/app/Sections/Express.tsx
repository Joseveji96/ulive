"use client"
import { useEffect, useRef, useState } from "react"
import LargeCards from "@/components/LargeCards"
import Button from "@/components/Button"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/AnimatedTextDemo"

function Express() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [cardHeights, setCardHeights] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  const [sizes, setSizes] = useState({
    cardFull: 0,
    cardMin: 0,
    scrollOffset: 0,
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const calculateSizes = () => {
      const vh = window.innerHeight

      setSizes({
        cardFull: vh * 0.75,
        cardMin: vh * 0.25,
        scrollOffset: vh * 0.75,
      })
    }

    calculateSizes()
    window.addEventListener("resize", calculateSizes)

    return () => {
      window.removeEventListener("resize", calculateSizes)
    }
  }, [])
  const CARD_FULL = sizes.cardFull
  const CARD_MIN = sizes.cardMin
  const SCROLL_OFFSET = sizes.scrollOffset

  const [lastScrollY, setLastScrollY] = useState(0)

  const [hasEnteredView, setHasEnteredView] = useState(false)

  useEffect(() => {
    const currentContainer = containerRef.current
    if (!currentContainer) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasEnteredView) {
          setHasEnteredView(true)
        }
      },
      { threshold: 0.9 },
    )

    observer.observe(currentContainer)

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [hasEnteredView])

  useEffect(() => {
    if (isMobile) return

    const updateCardHeights = () => {
      if (!cardRefs.current.length) return

      const currentScrollY = window.scrollY
      setLastScrollY(currentScrollY)

      const newHeights = cardRefs.current.map((card) => {
        if (!card) return CARD_FULL

        const rect = card.getBoundingClientRect()

        if (rect.top < window.innerHeight - SCROLL_OFFSET) {
          let progress = Math.min(1, Math.max(0, 1 - rect.top / SCROLL_OFFSET))
          progress = progress < 0.2 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
          return CARD_FULL - progress * (CARD_FULL - CARD_MIN)
        }

        return CARD_FULL
      })

      setCardHeights(newHeights)
    }

    const handleScroll = () => {
      if (rafRef.current) return

      rafRef.current = requestAnimationFrame(() => {
        updateCardHeights()
        rafRef.current = null
      })
    }

    updateCardHeights()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [CARD_FULL, CARD_MIN, SCROLL_OFFSET, lastScrollY, isMobile])

  const cards = [
    { text: "Create Collections", image: "/collection2.jpg" },
    { text: "Share your outfit", image: "/levis.jpg" },
    { text: "Inspire Community", image: "/3.jpg" },
    { text: "Find Your Style", image: "/find.jpg" },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.top > 0 && entry.boundingClientRect.top < 150) {
          const el = sectionRef.current
          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      },
      { threshold: 0.2 },
    )

    const el = sectionRef.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <div ref={sectionRef} className="relative" id="features">
      <motion.section
        className="w-full p-4 md:p-8 lg:p-16 block start-0 space-y-8 lg:space-y-20"
        ref={containerRef}
        transition={{
          type: "spring",
          stiffness: 45,
          damping: 30,
          mass: 1.2,
          opacity: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-4 lg:mb-6 gap-4">
          <div className="flex flex-col">
            <AnimatedText
              text="express yourself."
              className="uppercase text-black font-bold text-4xl md:text-5xl lg:text-6xl"
              delay={0.2}
              duration={0.2}
              staggerDelay={0.08}
            />
            <AnimatedText
              text="( From current trends to alternative styles )"
              className="text-sm md:text-base lg:text-md font-ligthtext-black"
              delay={0.4}
              duration={0.2}
              staggerDelay={0.03}
            />
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <Button title="See mooore" variant={6} />
          </div>
        </div>

        <div ref={cardsContainerRef} className="space-y-4 lg:space-y-0">
          {cards.map((card, i) => {
            const height = isMobile ? undefined : cardHeights[i] || CARD_FULL
            const progress = isMobile ? 0 : (CARD_FULL - (height || CARD_FULL)) / (CARD_FULL - CARD_MIN)

            return (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                style={{ willChange: "transform" }}
                data-last-card={i === cards.length - 1 ? "true" : "false"}
              >
                <LargeCards {...card} height={height} progress={progress} index={i} isMobile={isMobile} />
              </div>
            )
          })}
        </div>
      </motion.section>
    </div>
  )
}

export default Express
