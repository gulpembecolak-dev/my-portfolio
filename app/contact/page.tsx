// app/contact/page.tsx
'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [contactName, setContactName] = useState('')

  function submitContact(e: React.FormEvent) {
    e.preventDefault()
    alert(`Bedankt ${contactName}! Je bericht is verzonden.`)
    // Optionally redirect using next/navigation useRouter here
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-[#050505]">
      <div className="w-full max-w-xl bg-[#111] border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Klaar voor de start?</h1>
        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
          Vul het formulier in en ik stuur je zo snel mogelijk een bericht terug. Tasarımda yeni ufuklar keşfetmek için sabırsızlanıyorum.
        </p>

        <form onSubmit={submitContact} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Naam</label>
            <input
              className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
              required
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Je naam"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Bericht</label>
            <textarea
              className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all h-32 resize-none"
              required
              placeholder="Hoe kan ik je helpen?"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-white text-black rounded-xl px-8 py-5 text-sm font-extrabold tracking-widest uppercase hover:bg-gray-200 transition-colors mt-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Verzenden
          </button>
        </form>
      </div>
    </main>
  )
}
