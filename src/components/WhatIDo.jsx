import React from 'react'
import { Layout, Server, Bot, Lightbulb } from 'lucide-react'
import ServiceCard from './ServiceCard'

/**
 * WhatIDo Component
 * 
 * Migrated from reference/portfolio.html.
 * Section displaying Jayaprakash's 4 core service areas using reusable ServiceCard components.
 */

const servicesData = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and highly engaging interactive web interfaces.',
    icon: Layout,
    bgColor: 'bg-blue-500/10',
    textColor: 'text-accent',
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Creating reliable, scalable APIs, database structures, and backend application logic.',
    icon: Server,
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
  },
  {
    id: 3,
    title: 'AI Integration',
    description: 'Exploring practical ways to integrate AI workflows and LLMs into web applications.',
    icon: Bot,
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
  },
  {
    id: 4,
    title: 'Problem Solving',
    description: 'Turning complex product requirements into simple, maintainable software solutions.',
    icon: Lightbulb,
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
  },
]

function WhatIDo() {
  return (
    <div className="mb-20">
      <h3 className="font-heading text-2xl font-bold text-white light:text-slate-900 mb-8">
        What I Do
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            bgColor={service.bgColor}
            textColor={service.textColor}
          />
        ))}
      </div>
    </div>
  )
}

export default WhatIDo
