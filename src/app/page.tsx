"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Trends from "./Sections/Trends"
import Express from "./Sections/Express"
import Application from "./Sections/Application"
import C from "./Sections/C"
import { AnimatePresence } from "framer-motion"
export default function Home() {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Trends />
      <Express
        onShowApplication={(show) => setShowApplication(show)}
      />
      <AnimatePresence>
        {showApplication && (
          <Application
            key="application-section"
            onHide={() => setShowApplication(false)}
          />
        )}
      </AnimatePresence>
      <C />
    </div>
  )
}