// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { 
    id: 'p1', 
    title: 'Project Alpha', 
    short: 'Sleek mobile app UI interaction design showcase',
    image: '/project1.png'
  },
  { 
    id: 'p2', 
    title: 'Project Beta', 
    short: 'Modern web dashboard data visualization mockup',
    image: '/project2.png'
  },
  { 
    id: 'p3', 
    title: 'Project Gamma', 
    short: 'E-commerce fashion website design mockup',
    image: '/project3.png'
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      
      {/* Header Section */}
      <section className="px-6 py-40 flex flex-col items-center justify-center text-center mt-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-gray-300">
          Interaction Designer
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Gülpembe Çolak
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Merhaba! Ben Gülpembe. Kullanıcı deneyimini güçlendiren, görsel estetik ile veriyi buluşturan etkileşimli çözümler tasarlıyorum.
        </p>
      </section>

      {/* Projects Grid Section (3 Columns) */}
      <section className="px-6 py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projecten</h2>
            <p className="text-gray-400 max-w-xl text-center mb-8">Een selectie van mijn recente werk in digitaal design, UI/UX en data visualisatie.</p>
            <Link href="/projecten" className="text-sm font-bold uppercase tracking-widest border-b border-gray-600 pb-1 text-gray-400 hover:text-white hover:border-white transition-colors">
              Alle Projecten Bekijken
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
                    Bekijk project
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
            İster yeni bir proje, ister sadece bir "merhaba" demek için iletişime geçin. Tasarımda yeni ufuklar keşfetmek için sabırsızlanıyorum.
          </p>
          <Link 
            href="/contact"
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