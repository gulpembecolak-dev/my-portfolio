// app/page.tsx
'use client'

import { useState } from 'react'

const projects = [
  { id: 'p1', title: 'Project Alpha', short: 'Een korte beschrijving van Project Alpha.' },
  { id: 'p2', title: 'Project Beta', short: 'Een korte beschrijving van Project Beta.' },
  { id: 'p3', title: 'Project Gamma', short: 'Een korte beschrijving van Project Gamma.' },
]

function sendGtagEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, params)
  }
}

export default function Page() {
  const [isContactOpen, setContactOpen] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  function handleProjectClick(p: typeof projects[0]) {
    sendGtagEvent('project_click', { project_id: p.id, project_title: p.title })
    alert(`${p.title} geopend.`)
  }

  function openContact() {
    sendGtagEvent('contact_open')
    setContactOpen(true)
  }

  function submitContact(e: React.FormEvent) {
    e.preventDefault()
    sendGtagEvent('contact_submit', { name: contactName?.slice(0,20) })
    alert('Bedankt! Je bericht is verzonden.')
    setContactOpen(false)
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      
      {/* Header - İlk tasarımdaki gibi sade */}
      <header className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Gülpembe Çolak - Portfolio</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Merhaba! Ben Gülpembe. Bu site, User Research ödevim için 
          Next.js ve Google Analytics kullanılarak oluşturulmuştur.
        </p>
      </header>

      {/* 3 Column Layout - İlk tasarımdaki yapı */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl w-full border-t border-gray-800 pt-12">
        
        {/* Projelerim Bölümü */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Projecten</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div 
                key={p.id} 
                onClick={() => handleProjectClick(p)}
                className="cursor-pointer border-b border-transparent hover:border-white transition-all pb-2"
              >
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{p.short}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hakkımda Bölümü */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Over mij</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Kullanıcı deneyimi ve veri analizi konusundaki yolculuğum hakkında bilgi edinin. 
            Design meets data.
          </p>
        </section>

        {/* İletişim Bölümü */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400 text-sm mb-6">Benimle iletişime geçmek için bu bölümü kullanabilirsiniz.</p>
          <button 
            onClick={openContact}
            className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-all text-sm font-bold"
          >
            NEEM CONTACT OP
          </button>
        </section>

      </div>

      {/* Contact Modal - Siyah Beyaz Tema */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
          <div className="bg-zinc-900 border border-gray-800 rounded-none w-full max-w-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <form onSubmit={submitContact} className="space-y-4">
              <input
                placeholder="Naam"
                className="w-full bg-black border border-gray-800 px-4 py-3 text-white focus:border-white outline-none"
                required
                onChange={(e) => setContactName(e.target.value)}
              />
              <textarea
                placeholder="Bericht"
                className="w-full bg-black border border-gray-800 px-4 py-3 text-white focus:border-white outline-none h-32"
                required
              />
              <div className="flex justify-end gap-4 pt-4">
                <button type="button" onClick={() => setContactOpen(false)} className="text-sm uppercase tracking-widest">Annuleren</button>
                <button type="submit" className="bg-white text-black px-8 py-3 text-sm font-bold uppercase tracking-widest">Verzenden</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="mt-32 text-[10px] text-gray-700 uppercase tracking-[0.2em]">
        &copy; 2026 Gülpembe Çolak | Research in Progress
      </footer>
    </main>
  )
}