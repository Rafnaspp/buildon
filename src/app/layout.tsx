import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BUILDON',
  description: "BUILDON Building Materials Trading LLC supplies high-quality construction materials, safety products, fasteners, and industrial tools trusted by contractors, engineers, and project developers across the UAE .With a growing network of suppliers and partners across the UAE and international markets, BUILDON provides reliable access to essential construction materials, safety equipment, tools, and industrial hardware for projects of every scale.",
  icons: {
    icon: "/buildon.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
