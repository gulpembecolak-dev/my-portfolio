// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import GlobalNavbar from '../components/GlobalNavbar';

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
        
        {children}
      </body>
      <GoogleAnalytics gaId="G-655WEKJH8K" />
    </html>
  );
}