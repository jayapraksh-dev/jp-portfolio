import React from 'react'

/**
 * TechBadge Component
 * 
 * Reusable component responsible for displaying a single technology badge.
 * 
 * Props:
 * - name: string - The display name of the technology
 * - icon: ReactComponent - Lucide icon component
 */
function TechBadge({ name, icon: Icon }) {
  return (
    <span className="px-4 py-2 rounded-xl bg-dark-card light:bg-slate-200 border border-dark-border light:border-slate-300 text-slate-200 light:text-slate-800 text-sm font-mono flex items-center gap-2 hover:border-accent hover:text-accent transition-all cursor-default">
      {Icon && <Icon className="w-4 h-4 text-accent" />}
      {name}
    </span>
  )
}

export default TechBadge
