// app/contact/page.tsx
'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [contactName, setContactName] = useState('')

  function submitContact(e: React.FormEvent) {
    e.preventDefault()
    alert(`Thanks ${contactName}! Your message has been sent successfully.`)
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-[#050505]">
      <div className="w-full max-w-xl bg-[#111] border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Ready to get started?</h1>
        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
          Fill out the form below and I'll get back to you as soon as possible. Let's create something truly special together.
        </p>

        <form onSubmit={submitContact} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Name</label>
            <input
              className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
              required
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
            <textarea
              className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all h-32 resize-none"
              required
              placeholder="How can I help you?"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-white text-black rounded-xl px-8 py-5 text-sm font-extrabold tracking-widest uppercase hover:bg-gray-200 transition-colors mt-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}
