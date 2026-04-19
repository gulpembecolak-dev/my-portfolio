// app/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { 
    id: 'project-alpha', 
    title: 'Project Alpha', 
    short: 'Sleek mobile app UI interaction design showcase',
    image: '/project1.png'
  },
  { 
    id: 'project-beta', 
    title: 'Project Beta', 
    short: 'Modern web dashboard data visualization mockup',
    image: '/project2.png'
  },
  { 
    id: 'project-gamma', 
    title: 'Project Gamma', 
    short: 'E-commerce fashion website design mockup',
    image: '/project3.png'
  },
]

function sendGtagEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, params)
  }
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      
      {/* Header Section */}
      <section className="px-6 py-40 flex flex-col items-center justify-center text-center mt-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-gray-300">
          Design Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Interaction Designer
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Hi there! I'm Gülpembe. I design interactive solutions that enhance user experience, seamlessly blending visual aesthetics with powerful data.
        </p>
      </section>

      {/* Projects Grid Section (3 Columns) */}
      <section className="px-6 py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h2>
            <p className="text-gray-400 max-w-xl text-center mb-8">A selection of my recent work bridging digital design, UI/UX, and data visualization.</p>
            <Link href="/projecten" className="text-sm font-bold uppercase tracking-widest border-b border-gray-600 pb-1 text-gray-400 hover:text-white hover:border-white transition-colors">
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div 
                key={p.id} 
                className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
              >
                {/* Image Placeholder / Visual */}
                <div className="relative aspect-video w-full overflow-hidden bg-black border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <Image 
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8">
                    {p.short}
                  </p>
                  
                  {/* Link Button per project */}
                  <Link 
                    href={`/projecten/${p.id}`}
                    className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    View project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive CTA Section Bottom */}
      <section className="px-6 py-32 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#050505] to-[#111]">
        <div className="max-w-3xl mx-auto px-8 py-16 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-50"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">Klaar om samen te werken?</h2>
          <p className="text-gray-400 mb-10 text-lg relative z-10">
            Whether you have a new project in mind or just want to say hi, feel free to reach out. I'm always excited to explore new horizons in design together!
          </p>
          <Link 
            href="/contact"
            onClick={() => sendGtagEvent('form_start')}
            className="inline-block relative z-10 px-10 py-5 rounded-full bg-white text-black font-extrabold tracking-widest uppercase hover:scale-105 hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Neem contact op
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em] border-t border-white/5 bg-[#050505]">
        &copy; 2026 Gülpembe Çolak | Interaction Designer
      </footer>

    </main>
  )
}