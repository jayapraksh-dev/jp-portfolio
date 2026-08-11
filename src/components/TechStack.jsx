import React from 'react'
import TechBadge from './TechBadge'
import { techStackData } from '../data/techStack'

/**
 * TechStack Component
 * 
 * Migrated from reference/portfolio.html.
 * Responsible for displaying technology categories and rendering technology badges dynamically using .map().
 */
function TechStack() {
  return (
    <div>
      {techStackData.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h3 className="font-heading text-xl font-bold text-white light:text-slate-900 mb-6">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {group.technologies.map((tech) => (
              <TechBadge key={tech.id} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TechStack
