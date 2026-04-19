'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function GlobalNavbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-6 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="text-lg font-bold tracking-tighter hover:opacity-75 transition-opacity">
        Gülpembe Çolak
      </Link>
      <div className="flex gap-8 text-xs tracking-widest uppercase">
        <Link 
          href="/" 
          className={`transition-colors ${pathname === '/' ? 'text-white font-extrabold' : 'text-gray-400 font-bold hover:text-white'}`}
        >
          Home
        </Link>
        <Link 
          href="/projecten" 
          className={`transition-colors ${pathname === '/projecten' ? 'text-white font-extrabold' : 'text-gray-400 font-bold hover:text-white'}`}
        >
          Projects
        </Link>
        <Link 
          href="/contact" 
          className={`transition-colors ${pathname === '/contact' ? 'text-white font-extrabold' : 'text-gray-400 font-bold hover:text-white'}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
