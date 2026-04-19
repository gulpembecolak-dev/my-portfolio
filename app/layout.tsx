// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import GlobalNavbar from '../components/GlobalNavbar';
import Link from 'next/link';

export const metadata = {
  title: "Gülpembe Çolak - Interaction Designer",
  description: "User Research Project with Next.js and Google Analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-white">
        <GlobalNavbar />
        
        {/* Floating Mobile CTA */}
        <Link href="/contact" className="md:hidden fixed bottom-24 right-4 z-40 bg-white text-black px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 hover:scale-105 transition-transform">
          Let's talk 👋
        </Link>
        
        {children}
      </body>
      <GoogleAnalytics gaId="G-655WEKJH8K" />
    </html>
  );
}