'use client'
import Hero from "@/components/Hero";
import './globals.css'
import MustTry from "@/components/MustTry";
import BookEvent from "@/components/BookEvent";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";
import { useSession, signIn, signOut } from 'next-auth/react';



export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero/>
      <MustTry/>
      <BookEvent/>
      <div className="text-white flex gap-20">
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        <button onClick={() => signIn('google')}>sign in with gooogle</button>

      </div>

    </main>
  )
}
