import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../data/projects'

const filters = [
  { label: 'All', value: 'All' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'AI', value: 'ai' },
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') {
      return true
    }

    return project.filterTags.includes(activeFilter)
  })

  const featuredProject = filteredProjects.find((project) => project.featured)
  const secondaryProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-24 border-t border-dark-border light:border-slate-200 bg-dark-card/20 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">
              / PORTFOLIO
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white light:text-slate-900 tracking-tight">
              Things I've built.
            </h2>
            <p className="text-slate-400 light:text-slate-600 mt-2">
              A selection of projects, experiments, and ideas I've brought to life.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 md:mt-0" id="project-filters">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`text-xs font-mono px-4 py-2 rounded-full border transition-all ${
                    isActive
                      ? 'border-accent bg-accent text-white'
                      : 'border-dark-border light:border-slate-300 text-slate-400 light:text-slate-600 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-dark-border light:border-slate-200 bg-dark-card light:bg-white p-10 text-center text-slate-400 light:text-slate-600">
            No projects match this filter yet.
          </div>
        ) : (
          <>
            {featuredProject && <ProjectCard project={featuredProject} featured />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
