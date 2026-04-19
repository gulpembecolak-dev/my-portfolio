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
    <>
    {/* Desktop Navigation */}
    <nav className="hidden md:flex fixed top-0 w-full items-center justify-between px-8 py-6 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
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
    
    {/* Mobile Bottom Navigation */}
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0B0B0B]/90 backdrop-blur-xl border-t border-white/10 pb-safe pt-2 px-6 flex justify-between items-center rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <Link href="/" className={`flex flex-col items-center justify-center w-16 h-14 transition-colors ${isActive('/') ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
        <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive('/') ? 2.5 : 1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-[9px] font-bold tracking-widest uppercase">Home</span>
      </Link>
      
      <Link href="/projecten" className={`flex flex-col items-center justify-center w-16 h-14 transition-colors ${isActive('/projecten') ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
        <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive('/projecten') ? 2.5 : 1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <span className="text-[9px] font-bold tracking-widest uppercase">Work</span>
      </Link>
      
      <Link href="/about" className={`flex flex-col items-center justify-center w-16 h-14 transition-colors ${isActive('/about') ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
        <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive('/about') ? 2.5 : 1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="text-[9px] font-bold tracking-widest uppercase">About</span>
      </Link>
      
      <Link href="/contact" className={`flex flex-col items-center justify-center w-16 h-14 transition-colors ${isActive('/contact') ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
        <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive('/contact') ? 2.5 : 1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="text-[9px] font-bold tracking-widest uppercase">Contact</span>
      </Link>
    </nav>
    </>
  )
}
