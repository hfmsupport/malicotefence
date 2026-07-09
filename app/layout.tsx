import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['300','400','500','600','700'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400','500','600','700'] })

export const metadata: Metadata = {
  title: 'Malicote Fence | Cincinnati Fence Installation Since 1994',
  description: 'Family owned fence company serving Greater Cincinnati since 1994. Wood, aluminum, PVC vinyl and chain link fence installation. Free estimates. Call (513) 560-8881.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
