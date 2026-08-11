import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsMarquee from './components/SkillsMarquee'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-300 font-sans bg-grid-pattern relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SkillsMarquee />
      </main>
    </div>
  )
}

export default App
