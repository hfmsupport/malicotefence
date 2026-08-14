import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['300','400','500','600','700'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400','500','600','700'] })

export const metadata: Metadata = {
  title: 'Malicote Fence | Cincinnati Fence Installation Since 1994',
  description: 'Family owned fence company serving Greater Cincinnati since 1994. Wood, aluminum, PVC vinyl and chain link fence installation. Free estimates. Call (513) 560-8881.',
  verification: {
    google: 'zMaTVcyG0BN4ywRR7Z4g__c02_PepubuHjQ_NBLOI-A',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Q51KYNSSGE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q51KYNSSGE');
            `,
          }}
        />
      </body>
    </html>
  )
}
