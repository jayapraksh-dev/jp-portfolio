import React from 'react'

/**
 * SkillsMarquee Component
 * 
 * Migrated from reference/portfolio.html.
 * Renders an infinite horizontal scrolling marquee of core technologies and skills.
 */

// Simple data array listing skill names
const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'PHP',
  'Laravel',
  'AI Integration',
  'Git',
  'REST APIs',
]

function SkillsMarquee() {
  return (
    <div className="mt-20 border-y border-dark-border light:border-slate-200 bg-dark-card/30 light:bg-slate-100 py-4 overflow-hidden">
      {/* Animated flex container applying keyframe 'animate-marquee' */}
      <div className="flex whitespace-nowrap animate-marquee">
        
        {/* Set 1: Mapped skill items */}
        <div className="flex items-center gap-12 text-sm font-mono text-slate-400 font-medium px-6">
          {skills.map((skill, index) => (
            <React.Fragment key={`set1-${index}`}>
              <span>{skill}</span>
              <span className="text-accent">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Set 2: Duplicate set for seamless continuous marquee loop */}
        <div className="flex items-center gap-12 text-sm font-mono text-slate-400 font-medium px-6">
          {skills.map((skill, index) => (
            <React.Fragment key={`set2-${index}`}>
              <span>{skill}</span>
              <span className="text-accent">•</span>
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  )
}

export default SkillsMarquee
