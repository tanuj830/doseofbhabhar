import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar"
import { useState } from 'react'
import Footer from '@/components/Footer'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coders Code',
  description: 'Portfolio and blog website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
         <div className = 'fixed w-full  z-50' >
                <Navbar/>
          </div>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
