import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Temmari — Limitless Classic Styling',
    template: '%s | Temmari',
  },
  description:
    'Sophisticated fashion for every body and every budget. Shop the So Fly Collection — suits, blazers, corporate wear, and bespoke tailoring.',
  keywords: ['fashion', 'suits', 'bespoke tailoring', 'Nigerian fashion', 'women suits', 'men suits', 'Temmari'],
  openGraph: {
    type: 'website',
    siteName: 'Temmari',
    title: 'Temmari — Limitless Classic Styling',
    description: 'Sophisticated fashion for every body and every budget.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
