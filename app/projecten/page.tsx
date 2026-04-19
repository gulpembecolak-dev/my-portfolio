// app/projecten/page.tsx
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

export default function ProjectenPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">All Projects</h1>
        <p className="text-gray-400 mb-16 text-lg max-w-2xl leading-relaxed">
          Here you'll find a comprehensive overview of my interactive projects. Click on any card below to dive deep into the design details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div 
                key={p.id} 
                className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <Image 
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8">
                    {p.short}
                  </p>
                  
                  <Link 
                    href={`/projecten/${p.id}`}
                    className="w-full py-4 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    View details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </div>
    </main>
  )
}
