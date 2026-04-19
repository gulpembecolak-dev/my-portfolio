'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function GlobalNavbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-6 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="text-lg font-bold tracking-tighter hover:opacity-75 transition-opacity">
        Gülpembe Çolak
      </Link>
      <div className="flex gap-8 text-xs tracking-widest uppercase items-center">
        <Link 
          href="/" 
          className={`relative py-1 transition-all duration-300 ${isActive('/') ? 'text-white font-black' : 'text-gray-500 font-semibold hover:text-white'}`}
        >
          Home
          {isActive('/') && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full animate-in fade-in zoom-in duration-300"></span>}
        </Link>
        <Link 
          href="/projecten" 
          className={`relative py-1 transition-all duration-300 ${isActive('/projecten') ? 'text-white font-black' : 'text-gray-500 font-semibold hover:text-white'}`}
        >
          Projects
          {isActive('/projecten') && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full animate-in fade-in zoom-in duration-300"></span>}
        </Link>
        <Link 
          href="/about" 
          className={`relative py-1 transition-all duration-300 ${isActive('/about') ? 'text-white font-black' : 'text-gray-500 font-semibold hover:text-white'}`}
        >
          About
          {isActive('/about') && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full animate-in fade-in zoom-in duration-300"></span>}
        </Link>
        <Link 
          href="/contact" 
          className={`relative py-1 transition-all duration-300 ${isActive('/contact') ? 'text-white font-black' : 'text-gray-500 font-semibold hover:text-white'}`}
        >
          Contact
          {isActive('/contact') && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full animate-in fade-in zoom-in duration-300"></span>}
        </Link>
      </div>
    </nav>
  )
}
