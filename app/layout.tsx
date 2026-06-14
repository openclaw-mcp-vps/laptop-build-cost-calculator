import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laptop Build Cost Calculator',
  description: 'Estimate costs and find suppliers for custom laptop builds. Real-time pricing, supplier database, and configuration storage for hardware enthusiasts and small manufacturers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a6709a1-2c40-45c3-8cf7-7728cc676533"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
