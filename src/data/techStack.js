import {
  Code,
  Atom,
  Server,
  FileCode,
  Layers,
  FileCode2,
  GitBranch,
  Webhook,
  Sparkles,
} from 'lucide-react'

/**
 * techStack.js
 * 
 * Data source for Jayaprakash's Tech Stack & Tools.
 * Organizes technologies by category as seen in reference/portfolio.html.
 */

export const techStackData = [
  {
    category: 'Tech Stack & Tools',
    technologies: [
      { id: 'js', name: 'JavaScript', icon: Code },
      { id: 'react', name: 'React', icon: Atom },
      { id: 'node', name: 'Node.js', icon: Server },
      { id: 'php', name: 'PHP', icon: FileCode },
      { id: 'laravel', name: 'Laravel', icon: Layers },
      { id: 'html-css', name: 'HTML5 & CSS3', icon: FileCode2 },
      { id: 'git', name: 'Git', icon: GitBranch },
      { id: 'rest-api', name: 'REST API', icon: Webhook },
      { id: 'ai', name: 'AI Integration', icon: Sparkles },
    ],
  },
]
