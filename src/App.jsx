import React from 'react'
import Navbar from './components/Navbar'
import { Code, Sparkles, CheckCircle2 } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-300 font-sans bg-grid-pattern flex flex-col items-center justify-center p-6 text-center pt-32">
      <Navbar />

      <div className="max-w-md w-full bg-dark-card light:bg-white border border-dark-border light:border-slate-200 rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
          <Code className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold font-heading text-white light:text-slate-900 tracking-wide">
            Navbar Component Ready
          </h1>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            Navbar migrated cleanly with theme toggle and mobile navigation.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-bg/60 light:bg-slate-50 border border-dark-border/60 light:border-slate-200 text-left space-y-2.5 text-sm">
          <div className="flex items-center gap-2 text-slate-300 light:text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span>Desktop & Mobile navigation layouts</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 light:text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span>React useState for mobile menu drawer</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 light:text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span>Dark / Light mode toggle with useEffect</span>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span>Step 2 Complete • Ready for Hero section</span>
        </div>
      </div>
    </div>
  )
}

export default App
