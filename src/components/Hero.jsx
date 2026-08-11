import React from 'react'
import { ArrowRight, Cpu, CheckCircle2 } from 'lucide-react'

/**
 * Hero Component
 * 
 * Migrated from reference/portfolio.html (#home section).
 * Features:
 * - Status / Role badge
 * - Main heading with gradient highlight text
 * - Bio tagline
 * - View Work & Connect CTA buttons
 * - Interactive Code / IDE Mockup card (`developer.ts`)
 * - Floating status cards (`animate-float`)
 * - Background ambient glow (`animate-pulse-glow`)
 */
function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-10 flex flex-col justify-center relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status / Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
              Software Engineer • Creative Developer
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold text-white light:text-slate-900 tracking-tight leading-[1.1] mb-6">
              I build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-400">
                digital experiences
              </span>{' '}
              that are simple, useful, and memorable.
            </h1>

            {/* Subtitle / Bio Paragraph */}
            <p className="text-slate-400 light:text-slate-600 text-lg sm:text-xl max-w-2xl font-normal leading-relaxed mb-8">
              I'm <strong className="text-slate-200 light:text-slate-800">Jayaprakash</strong>, a software
              engineer focused on building modern web applications and exploring the intersection of
              development, AI, and great user experiences.
            </p>

            {/* CTA Link Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-accent hover:bg-blue-600 text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-dark-card light:bg-slate-200 hover:bg-dark-hover text-slate-200 light:text-slate-800 border border-dark-border light:border-slate-300 font-medium transition-all hover:-translate-y-0.5"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right Hero Visual / Code Card Element */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl border border-dark-border light:border-slate-200 bg-dark-card/50 light:bg-white/50 backdrop-blur-xl p-6 shadow-2xl overflow-hidden group">
              {/* Glass Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>

              {/* IDE Window Controls & Header */}
              <div className="flex items-center justify-between pb-4 border-b border-dark-border light:border-slate-200 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <span className="font-mono text-xs text-slate-500">developer.ts</span>
              </div>

              {/* Mock Code Block */}
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <p className="text-purple-400">
                  <span className="text-blue-400">const</span> developer = &#123;
                </p>
                <p className="pl-4 text-slate-300">
                  name: <span className="text-emerald-400">'Jayaprakash'</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  role: <span className="text-emerald-400">'Software Engineer'</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  passions: [<span className="text-emerald-400">'Web Architecture'</span>, <span className="text-emerald-400">'AI Applications'</span>],
                </p>
                <p className="pl-4 text-slate-300">
                  status: <span className="text-amber-400">'Building the future...'</span>
                </p>
                <p className="text-purple-400">&#125;;</p>
              </div>

              {/* Floating Card Overlay 1 (AI Integration) */}
              <div className="absolute bottom-6 right-6 p-4 rounded-xl bg-dark-card light:bg-white border border-dark-border light:border-slate-200 shadow-xl animate-float flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">AI Integration</p>
                  <p className="text-xs font-semibold text-white light:text-slate-900">
                    LLM Apps &amp; Web Architecture
                  </p>
                </div>
              </div>

              {/* Floating Card Overlay 2 (Clean Code Architecture) */}
              <div className="absolute top-20 right-4 p-3 rounded-xl bg-dark-card light:bg-white border border-dark-border light:border-slate-200 shadow-xl flex items-center gap-2.5 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Clean Code Architecture</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
