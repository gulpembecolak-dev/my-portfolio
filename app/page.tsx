// app/page.tsx
'use client'

import { useState } from 'react'

type Project = {
  id: string
  title: string
  short: string
  tags?: string[]
}

const projects: Project[] = [
  { id: 'p1', title: 'Project Alpha', short: 'Een korte beschrijving van Project Alpha.' },
  { id: 'p2', title: 'Project Beta', short: 'Een korte beschrijving van Project Beta.' },
  { id: 'p3', title: 'Project Gamma', short: 'Een korte beschrijving van Project Gamma.' },
  { id: 'p4', title: 'Project Delta', short: 'Een korte beschrijving van Project Delta.' },
]

// Basit helper om GA event atmak
function sendGtagEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      ;(window as any).gtag('event', name, params)
      console.log('gtag event:', name, params)
    } catch (e) {
      console.warn('gtag call failed', e)
    }
  } else {
    console.log('gtag not ready — event queued:', name, params)
  }
}

export default function Page() {
  const [isContactOpen, setContactOpen] = useState(false)
  const [isFeedbackOpen, setFeedbackOpen] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  function handleProjectClick(p: Project) {
    sendGtagEvent('project_click', { project_id: p.id, project_title: p.title })
    // demo amaçlı bir detay görüntüleme; gerçekte bir sayfaya yönlendirebilirsin
    alert(`${p.title} açıldı (simüle).`)
  }

  function openContact() {
    sendGtagEvent('contact_open')
    setContactOpen(true)
  }

  function submitContact(e: React.FormEvent) {
    e.preventDefault()
    sendGtagEvent('contact_submit', { name: contactName?.slice(0,20), message_length: contactMessage.length })
    // burada gerçek e-posta / backend yok; local test için uyarı gösteriyoruz
    alert('İletişim gönderildi (simüle). Teşekkürler!')
    setContactName('')
    setContactMessage('')
    setContactOpen(false)
  }

  function submitFeedback(e: React.FormEvent) {
    e.preventDefault()
    sendGtagEvent('feedback_submit', { feedback_length: feedback.length })
    alert('Geri bildirimin için teşekkürler!')
    setFeedback('')
    setFeedbackOpen(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Gülpembe — Portfolio (prototype)</h1>
            <p className="text-sm text-gray-600">Data‑driven UX designer student</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={openContact}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Welkom — kort overzicht</h2>
          <p className="mt-2 text-gray-600">
            Dit is een prototype van mijn portfolio. Voor gebruikerstesten bevat deze pagina
            meetpunten: project clicks, contact open/submit en korte feedback.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Projecten</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <article key={p.id} className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{p.short}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleProjectClick(p)}
                    className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    View
                  </button>
                  <button
                    onClick={openContact}
                    className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                  >
                    Contact about this
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white p-4 rounded-md shadow-sm">
          <h3 className="font-semibold">Kort onderzoeksidee voor testers</h3>
          <ol className="list-decimal list-inside mt-2 text-sm text-gray-700">
            <li>Open de site en bekijk in 60 seconden drie projecten.</li>
            <li>Probeer contact op te nemen (klik "Contact").</li>
            <li>Vul de korte feedback in via de knop rechts onderaan.</li>
          </ol>
        </div>
      </section>

      {/* Sticky feedback button */}
      <button
        onClick={() => { sendGtagEvent('feedback_open'); setFeedbackOpen(true) }}
        className="fixed right-6 bottom-6 bg-amber-500 text-white px-4 py-3 rounded-full shadow-lg"
        aria-label="Feedback"
      >
        Feedback
      </button>

      {/* Contact modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-md w-full max-w-lg p-6">
            <h3 className="text-lg font-semibold">Contact opnemen</h3>
            <form onSubmit={submitContact} className="mt-4 space-y-3">
              <input
                placeholder="Naam"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <textarea
                placeholder="Bericht"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full border px-3 py-2 rounded h-28"
                required
              />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setContactOpen(false)} className="px-4 py-2">
                  Annuleren
                </button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
                  Verzenden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Feedback modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-md w-full max-w-md p-6">
            <h3 className="text-lg font-semibold">Korte feedback</h3>
            <form onSubmit={submitFeedback} className="mt-3 space-y-3">
              <label className="text-sm block">
                Wat vond je het meest duidelijk?
                <input
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full border px-3 py-2 mt-1 rounded"
                />
              </label>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setFeedbackOpen(false)} className="px-3 py-1">
                  Sluiten
                </button>
                <button type="submit" className="bg-amber-500 text-white px-3 py-1 rounded">
                  Verzenden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}