// app/contact/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  function submitContact(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitted(true)
    
    // Smooth transition logic: wait 3 seconds, trigger fade out, then navigate home
    setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        router.push('/')
        router.refresh() // Ensures the home page is at the very top and fresh
      }, 600) // Duration of the fade-out
    }, 2500) // How long to read the success message
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center bg-[#050505] selection:bg-white/30">
      <div className="w-full max-w-4xl relative">
        {isSubmitted ? (
          <div className={`flex flex-col items-center justify-center text-center py-20 transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 translate-y-8 scale-95' : 'animate-in fade-in slide-in-from-bottom-8 duration-1000 opacity-100'}`}>
            <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mb-10 shadow-[0_0_60px_rgba(255,255,255,0.4)]">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Message sent.</h2>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Thank you for reaching out, {name.split(' ')[0] || 'there'}. I will review your details and get back to you shortly.
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white">Let's talk.</h1>
            <p className="text-gray-400 text-xl md:text-2xl mb-20 max-w-2xl leading-relaxed">
              Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you.
            </p>

            <form onSubmit={submitContact} className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Floating Label Custom Input: Name */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 py-2 text-2xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-7 text-sm font-bold text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-2 peer-placeholder-shown:normal-case peer-placeholder-shown:text-gray-600 peer-focus:-top-7 peer-focus:text-sm peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white pointer-events-none"
                  >
                    Your Name
                  </label>
                </div>

                {/* Floating Label Custom Input: Email */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 py-2 text-2xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-7 text-sm font-bold text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-2 peer-placeholder-shown:normal-case peer-placeholder-shown:text-gray-600 peer-focus:-top-7 peer-focus:text-sm peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              {/* Floating Label Custom Textarea: Message */}
              <div className="relative group">
                <textarea
                  id="message"
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-2 text-2xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent min-h-[120px] resize-y"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 -top-7 text-sm font-bold text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-2 peer-placeholder-shown:normal-case peer-placeholder-shown:text-gray-600 peer-focus:-top-7 peer-focus:text-sm peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white pointer-events-none"
                >
                  Project Details
                </label>
              </div>

              <div className="pt-10 border-t border-white/5 flex justify-end">
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-white text-black px-12 py-6 rounded-full font-black tracking-widest uppercase text-sm hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center gap-4 group shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
