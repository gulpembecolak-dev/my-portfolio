// app/contact/page.tsx
'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Calculate progress
  let fieldsFilled = 0
  if (name.trim().length > 1) fieldsFilled++
  if (projectType) fieldsFilled++
  if (message.trim().length > 4) fieldsFilled++
  const progressPercent = Math.round((fieldsFilled / 3) * 100)

  function submitContact(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen pt-24 pb-24 md:pt-32 px-6 flex items-center justify-center bg-[#050505]">
      <div className="w-full max-w-3xl bg-[#111] border border-white/10 rounded-3xl p-8 md:p-14 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden relative">
        
        {/* Progress Bar Top */}
        {!isSubmitted && (
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <div 
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        )}

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Message sent!</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Thank you for reaching out, {name.split(' ')[0] || 'friend'}! I will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500 pt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Let's create something.</h1>
            
            <form onSubmit={submitContact} className="space-y-8">
              <div className="text-2xl md:text-3xl font-medium leading-relaxed md:leading-[2.5] text-gray-500">
                Hi Gülpembe! My name is 
                
                <span className="relative inline-block mx-2">
                  <input
                    className="w-40 md:w-48 bg-transparent border-b-2 border-white/20 focus:border-white text-white outline-none px-1 py-1 text-center placeholder:text-gray-700 transition-colors"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name"
                  />
                  {name.trim().length > 1 && (
                    <svg className="absolute -right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400 animate-in zoom-in" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                
                and I'd like to collaborate on 
                
                <span className="relative inline-block mx-2">
                  <select 
                    required
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="bg-transparent border-b-2 border-white/20 focus:border-white text-white outline-none px-1 py-1 text-center appearance-none cursor-pointer hover:border-white transition-colors h-[40px] md:h-[48px]"
                  >
                    <option value="" className="bg-black text-gray-500">select a project</option>
                    <option value="ui" className="bg-[#111]">UI/UX Design</option>
                    <option value="research" className="bg-[#111]">User Research</option>
                    <option value="prototype" className="bg-[#111]">Prototyping</option>
                    <option value="other" className="bg-[#111]">Something else</option>
                  </select>
                  {projectType && (
                    <svg className="absolute -right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400 animate-in zoom-in pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                
                . Here are a few details about what I have in mind:
                
                <div className="relative mt-8 block">
                  <textarea
                    className="w-full bg-black/20 border-2 border-white/10 rounded-2xl p-6 text-xl md:text-2xl text-white focus:border-white outline-none transition-all min-h-[140px] resize-y placeholder:text-gray-700"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your idea..."
                  />
                  {message.trim().length > 4 && (
                    <div className="absolute bottom-4 right-4 bg-green-400/20 p-2 rounded-full animate-in zoom-in">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-8 mt-8 border-t border-white/5">
                <button 
                  type="submit"
                  disabled={progressPercent < 100}
                  className="bg-white text-black rounded-full px-10 py-5 text-sm font-extrabold tracking-widest uppercase hover:bg-gray-200 transition-all disabled:opacity-30 disabled:hover:bg-white disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
