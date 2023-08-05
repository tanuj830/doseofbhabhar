import Hero from "@/components/Hero";
import './globals.css'
import MustTry from "@/components/MustTry";
import BookEvent from "@/components/BookEvent";
export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero/>
      <MustTry/>
      <BookEvent/>

    </main>
  )
}
