import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../data/projects'

function Projects() {
  const featuredProject = projectsData.find((project) => project.featured)
  const secondaryProjects = projectsData.filter((project) => !project.featured)

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
        </div>

        {featuredProject && <ProjectCard project={featuredProject} featured />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
