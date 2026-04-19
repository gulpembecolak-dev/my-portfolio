// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: "Gülpembe Çolak - Interaction Designer",
  description: "Next.js ve Google Analytics ile Kullanıcı Araştırması Projesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-[#050505] text-white">
        {/* Global Navigation Bar */}
        <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-6 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
          <Link href="/" className="text-lg font-bold tracking-tighter hover:opacity-75 transition-opacity">
            Gülpembe Çolak
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/projecten" className="hover:text-white transition-colors">Projecten</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </nav>
        
        {children}
      </body>
      <GoogleAnalytics gaId="G-655WEKJH8K" />
    </html>
  );
}