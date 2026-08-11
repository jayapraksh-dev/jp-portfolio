import React, { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: '',
      }))
    }

    if (successMessage) {
      setSuccessMessage('')
    }
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Subject is required.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage('')
      return
    }

    setSuccessMessage('Thanks! This is a frontend demo submission only. No email was sent.')
    setFormData(initialFormData)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">
              / GET IN TOUCH
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white light:text-slate-900 tracking-tight leading-tight mb-6">
              Have an idea? Let's build something together.
            </h2>
            <p className="text-slate-400 light:text-slate-600 leading-relaxed mb-8">
              Whether you have a project in mind, an opportunity, or simply want to say hello, I'd love to
              hear from you.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-dark-card light:bg-white border border-dark-border light:border-slate-200 hover:border-accent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">Direct Email</p>
                  <p className="text-sm font-semibold text-white light:text-slate-900">
                    jayaprakash.coder@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/jayapraksh-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-dark-card light:bg-white border border-dark-border light:border-slate-200 hover:border-accent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">GitHub</p>
                  <p className="text-sm font-semibold text-white light:text-slate-900">
                    github.com/jayapraksh-dev
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jayaprakash-v-web-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-dark-card light:bg-white border border-dark-border light:border-slate-200 hover:border-accent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">LinkedIn</p>
                  <p className="text-sm font-semibold text-white light:text-slate-900">
                    linkedin.com/in/jayaprakash
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 rounded-3xl bg-dark-card light:bg-white border border-dark-border light:border-slate-200 shadow-xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 light:text-slate-600 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg light:bg-slate-50 border border-dark-border light:border-slate-200 text-white light:text-slate-900 focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 light:text-slate-600 uppercase mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg light:bg-slate-50 border border-dark-border light:border-slate-200 text-white light:text-slate-900 focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-400 light:text-slate-600 uppercase mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-dark-bg light:bg-slate-50 border border-dark-border light:border-slate-200 text-white light:text-slate-900 focus:outline-none focus:border-accent transition-colors"
                />
                {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 light:text-slate-600 uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-bg light:bg-slate-50 border border-dark-border light:border-slate-200 text-white light:text-slate-900 focus:outline-none focus:border-accent transition-colors resize-none"
                />
                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </div>

              {successMessage && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-accent hover:bg-blue-600 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
