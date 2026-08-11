import React from 'react'

/**
 * ServiceCard Component
 * 
 * Reusable card component that accepts props for rendering an individual service.
 * Props:
 * - title: Heading string (e.g. 'Frontend Development')
 * - description: Subtitle/body description
 * - icon: Lucide React icon component (e.g. Layout, Server)
 * - bgColor: Tailwind background color class for the icon badge
 * - textColor: Tailwind text color class for the icon badge
 */
function ServiceCard({ title, description, icon: Icon, bgColor, textColor }) {
  return (
    <div className="p-6 rounded-2xl bg-dark-card light:bg-white border border-dark-border light:border-slate-200 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1">
      {/* Icon Badge Container */}
      <div className={`w-12 h-12 rounded-xl ${bgColor} ${textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {Icon && <Icon className="w-6 h-6" />}
      </div>

      {/* Service Title */}
      <h4 className="font-heading text-lg font-semibold text-white light:text-slate-900 mb-2">
        {title}
      </h4>

      {/* Service Description */}
      <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default ServiceCard
