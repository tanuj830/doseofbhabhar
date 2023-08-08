import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar"
import { useState } from 'react'
import Footer from '@/components/Footer'
import { NextAuthProvider } from './providers/sessionProvider'
// const inter = Inter({ subsets: ['latin'] })
import { useSession, signIn, signOut } from 'next-auth/react';

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
        <NextAuthProvider>
        {children}

        </NextAuthProvider>
        <Footer/>
        </body>
    </html>
  )
}
