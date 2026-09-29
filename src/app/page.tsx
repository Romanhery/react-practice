import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google"
import  Header from "../components/header";
import Hero from "../components/hero"

export default function page() {
  return (

    <main className="bg-[#212125]">
      <Header/>
      <Hero/>
    </main>
      
    
  );
}
