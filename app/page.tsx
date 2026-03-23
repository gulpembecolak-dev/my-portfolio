// app/page.tsx
'use client'

function sendGtagEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, params)
  }
}

export default function Page() {
  const handleSectionClick = (sectionName: string) => {
    sendGtagEvent('section_click', { section_title: sectionName })
    // İstersen buraya bir alert veya yönlendirme ekleyebilirsin
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Header / Title */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gülpembe Çolak - Portfolio</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Welkom! Ik ben Gülpembe. Deze site is gemaakt met Next.js en Google Analytics 
          voor mijn User Research opdracht.
        </p>
      </header>

      {/* 3 Column Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl w-full mt-8">
        
        {/* Projecten Section */}
        <div 
          onClick={() => handleSectionClick('Projecten')}
          className="cursor-pointer group"
        >
          <h2 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Projecten</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bekijk hier de ontwerp- en onderzoeksprojecten waaraan ik heb gewerkt.
          </p>
        </div>

        {/* Over mij Section */}
        <div 
          onClick={() => handleSectionClick('Over mij')}
          className="cursor-pointer group"
        >
          <h2 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Over mij</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leer meer over mijn reis in user experience en data-analyse.
          </p>
        </div>

        {/* Contact Section */}
        <div 
          onClick={() => handleSectionClick('Contact')}
          className="cursor-pointer group"
        >
          <h2 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Contact</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Gebruik deze sectie om contact met mij op te nemen voor samenwerkingen.
          </p>
        </div>

      </div>

      {/* Footer / Analytics Note (Optional - can be hidden) */}
      <footer className="mt-20 text-xs text-gray-600">
        &copy; 2026 Gülpembe Çolak | Data-driven Design Research
      </footer>
    </main>
  )
}