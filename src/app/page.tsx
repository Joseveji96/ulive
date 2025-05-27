"use client"

import Navbar from "@/components/Navbar"
import Eje from "./Sections/Eje"
import Trends from "./Sections/Trends"


export default function Home() {


  return (
    <div className="scroll-smooth">
      <Navbar />
      <Eje/>
    <Trends/> 
    </div>
  )
}


