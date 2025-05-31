"use client"

import Navbar from "@/components/Navbar"
import Eje from "./Sections/Eje"
import Express from "./Sections/Express"
import Footer from "./Sections/Footer"
import Social from "./Sections/Social"
import SeccionScrollAnimada from "./Sections/SeccionScrollAnimada"

export default function Home() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory">
      <Navbar />
      <Eje />
      <Express />
      <SeccionScrollAnimada />
      <Social />
      <Footer />
    </div>
  )
}