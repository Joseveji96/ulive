import { AnimatedText } from "@/components/AnimatedTextDemo"
import Button from "@/components/Button"
import Cards from "@/components/Cards"
import Ulogo from "@/components/ulogo"

export default function Trends() {
  return (
    <section
      className="relative z-0 -top-10 lg:-top-20 mt-10 bg-blanco-50 w-full min-h-screen m-0 p-4 sm:p-8 lg:p-16"
      id="trends"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
        <div className="flex flex-col h-full">
          <AnimatedText
            text="Month's Trends"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black uppercase"
            delay={0.4}
            duration={0.2}
            staggerDelay={0.03}
          />

          <AnimatedText
            text="Fashion curated by the community —"
            className="text-sm sm:text-base lg:text-lg font-medium uppercase text-black"
            delay={0.4}
            duration={0.2}
            staggerDelay={0.03}
          />
        </div>
        <div className="relative inline-block pb-2">
          <Button title="See mooore" variant={6} />
          <div className="absolute -top-25 left-72 lg:-top-10 md:left-80 lg:-left-8 w-6 h-6">
            <Ulogo />
          </div>
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </section>
  )
}