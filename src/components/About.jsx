import React from 'react'
import WhatIDo from './WhatIDo'
import TechStack from './TechStack'

/**
 * About Component
 * 
 * Migrated from reference/portfolio.html (#about main section).
 * Features:
 * - Section header (/ ABOUT ME, "A little about me.")
 * - Two-column editorial layout
 * - Left column: Avatar / portrait container card with gradient overlay
 * - Right column: Bio narrative paragraphs and statistics grid
 * - What I Do cards grid
 */

const statsData = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '100%', label: 'Commitment to Quality' },
]

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">
            / ABOUT ME
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white light:text-slate-900 tracking-tight">
            A little about me.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Portrait Container Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-dark-border light:border-slate-200 bg-dark-card light:bg-white p-3 group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-slate-800 flex items-center justify-center">
                {/* Graphic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-bg via-transparent to-accent/20 z-10"></div>
                
                {/* Avatar Content */}
                <div className="text-center p-6 z-20">
                  <div className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent text-accent flex items-center justify-center text-3xl font-bold font-heading mx-auto mb-4">
                    JP
                  </div>
                  <p className="text-white font-medium text-lg">Jayaprakash</p>
                  <p className="text-slate-400 text-sm font-mono mt-1">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Paragraphs & Statistics */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <p className="text-xl text-slate-200 light:text-slate-800 leading-relaxed font-normal">
              I'm a software engineer who enjoys turning ideas into functional and engaging digital
              experiences. I work primarily with modern web technologies and continuously explore new
              tools, especially AI-powered development.
            </p>

            <p className="text-slate-400 light:text-slate-600 leading-relaxed">
              My philosophy centers on clarity and efficiency. I believe exceptional software shouldn't
              just look visually modern—it must solve real user problems with speed, elegance, and
              reliable architecture underneath.
            </p>

            {/* Statistics Counter Grid */}
            <div className="pt-6 border-t border-dark-border light:border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {statsData.map((stat, index) => (
                <div key={index}>
                  <h3 className="font-heading text-2xl font-bold text-white light:text-slate-900">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* What I Do Section */}
        <WhatIDo />

      </div>
    </section>
  )
}

export default About
