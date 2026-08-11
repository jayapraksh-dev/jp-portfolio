import React from 'react'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

function ProjectCard({ project, featured = false }) {
  const cardClasses = featured
    ? 'group relative rounded-3xl overflow-hidden border border-dark-border light:border-slate-200 bg-dark-card light:bg-white p-6 lg:p-8 hover:border-accent/40 transition-all duration-500'
    : 'group rounded-2xl overflow-hidden border border-dark-border light:border-slate-200 bg-dark-card light:bg-white p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300'

  return (
    <article className={featured ? 'mb-12' : ''}>
      <div className={cardClasses}>
        {featured ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-slate-900 border border-dark-border light:border-slate-200 aspect-video relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-accent font-mono text-xs uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white light:text-slate-900 mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-md bg-dark-bg light:bg-slate-100 text-slate-300 light:text-slate-700 text-xs font-mono"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl || '#'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={project.sourceUrl || '#'}
                  aria-label="GitHub Repository"
                  className="p-2.5 rounded-full border border-dark-border light:border-slate-300 text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="aspect-video rounded-xl bg-slate-800 overflow-hidden mb-6 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-white light:text-slate-900 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 light:text-slate-600 text-sm mt-2 mb-4">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-2.5 py-1 rounded bg-dark-bg light:bg-slate-100 text-slate-400 text-xs font-mono"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-dark-border light:border-slate-200">
                <a
                  href={project.liveUrl || '#'}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 light:text-slate-700 hover:text-accent"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.sourceUrl || '#'}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
