import Link from 'next/link'

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  // We can derive title from the param for demonstration
  const title = resolvedParams.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return (
    <main className="min-h-screen pt-40 px-6 bg-[#050505] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        
        <Link href="/projecten" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2 mb-10 inline-flex">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">{title}</h1>
          
          <div className="flex gap-4 mb-10 flex-wrap">
            <span className="px-3 py-1 bg-white/10 text-xs font-bold uppercase tracking-widest rounded-full">UX Research</span>
            <span className="px-3 py-1 bg-white/10 text-xs font-bold uppercase tracking-widest rounded-full">Interaction Design</span>
            <span className="px-3 py-1 bg-white/10 text-xs font-bold uppercase tracking-widest rounded-full">Prototyping</span>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            This detailed page for <strong>{title}</strong> is currently under construction. Soon, you will find an in-depth case study here detailing the design thinking process, wireframes, interaction decisions, and user testing results.
          </p>
          
          <div className="p-8 border border-white/10 rounded-2xl bg-black/50 text-center">
            <p className="font-semibold text-gray-300">Case study coming soon.</p>
          </div>

        </div>
      </div>
    </main>
  )
}
