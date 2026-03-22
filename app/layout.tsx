import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

export const metadata = {
  title: "Gülpembe Çolak - User Research Portfolio",
  description: "Next.js ve Google Analytics ile Kullanıcı Araştırması Projesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-655WEKJH8K" />
    </html>
  );
}