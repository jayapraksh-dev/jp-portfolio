const createPreviewImage = (title, subtitle, accent = '#3B82F6') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
      <rect width="1200" height="720" fill="#0A0C10" />
      <rect x="40" y="40" width="1120" height="640" rx="32" fill="#12161F" stroke="#1E2638" stroke-width="2" />
      <rect x="80" y="90" width="260" height="32" rx="10" fill="${accent}" opacity="0.28" />
      <rect x="80" y="148" width="420" height="16" rx="8" fill="#1E2638" />
      <rect x="80" y="176" width="360" height="16" rx="8" fill="#1E2638" />
      <rect x="80" y="240" width="320" height="180" rx="20" fill="#0A0C10" stroke="#1E2638" />
      <rect x="430" y="240" width="300" height="120" rx="20" fill="#182030" />
      <rect x="430" y="380" width="300" height="140" rx="20" fill="#182030" />
      <rect x="760" y="240" width="320" height="280" rx="20" fill="#0F172A" stroke="#1E2638" />
      <rect x="800" y="286" width="240" height="18" rx="9" fill="#3B82F6" opacity="0.7" />
      <rect x="800" y="328" width="180" height="14" rx="7" fill="#1E2638" />
      <rect x="800" y="358" width="210" height="14" rx="7" fill="#1E2638" />
      <rect x="800" y="388" width="150" height="14" rx="7" fill="#1E2638" />
      <text x="80" y="620" fill="#E2E8F0" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700">${title}</text>
      <text x="80" y="658" fill="#64748B" font-family="Inter, Arial, sans-serif" font-size="20">${subtitle}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export const projectsData = [
  {
    id: 'intellidash-ai-hub',
    title: 'IntelliDash AI Hub',
    description:
      'A comprehensive web-based platform that integrates OpenAI APIs to automate workflow insights, code generation, and team productivity tracking with responsive real-time UI.',
    category: 'Featured Project',
    image: createPreviewImage('AI Workflow & Analytics Platform', 'Real-time automation dashboard powered by LLMs.'),
    technologies: ['React', 'Node.js', 'Laravel API', 'OpenAI API'],
    liveUrl: '#',
    sourceUrl: '#',
    featured: true,
  },
  {
    id: 'saas-task-management',
    title: 'SaaS Task Management API & Client',
    description:
      'A high-performance project management web application featuring interactive Kanban boards and custom RESTful backends.',
    category: 'Full Stack',
    image: createPreviewImage('SaaS Application UI Preview', 'Interactive Kanban boards and analytics dashboards'),
    technologies: ['PHP / Laravel', 'React', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
    featured: false,
  },
  {
    id: 'minimalist-digital-storefront',
    title: 'Minimalist Digital Storefront',
    description:
      'A lightning-fast frontend shopping experience built with micro-interactions, dark mode support, and smooth page transitions.',
    category: 'Frontend',
    image: createPreviewImage('Modern E-Commerce UI Preview', 'Fast storefront experience with dark mode support'),
    technologies: ['JavaScript', 'React', 'Framer Motion'],
    liveUrl: '#',
    sourceUrl: '#',
    featured: false,
  },
]
