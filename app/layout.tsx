import { Urbanist } from 'next/font/google'

import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ModalProvider from '@/providers/modal-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
