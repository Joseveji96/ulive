"use client"

import Navbar from "@/components/Navbar"
import Eje from "./Sections/Eje"
import Trends from "./Sections/Trends"
import Express from "./Sections/Express"
import Application from "./Sections/Application"
import Footer from "./Sections/Footer"
import Social from "./Sections/Social"


export default function Home() {


  return (
    <div className="scroll-smooth hide-scrollbar">
      <Navbar />
      <Eje/>
      <Express/> 
      <Trends/>
      <Application/>
      <Social/>
      <Footer/>
    </div>
  )
}


