"use client"

import Navbar from "@/components/Navbar"
import Eje from "./Sections/Eje"
// import Hero from "./Sections/Hero"
// import About from "./Sections/About"

export default function Home() {


  return (
    <div className="scroll-smooth">
      <Navbar />
      {/* <Hero />
      <About /> */}
      <Eje/>
    </div>
  )
}


