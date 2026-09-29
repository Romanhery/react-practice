import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google"
import  Header from "../components/header";
 
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin']
})

const aguafinaScript = Aguafina_Script({
  subsets: ['latin-ext'],
  weight: '400'
  
})

export default function Hero(){
    return (
        <div className={` hero-container min-h-screen flex flex-col items-center justify-center text-center`}>
            <h1 className={` ${aguafinaScript.className} font text-9xl text-current `}>Veni, Vidi, Feci</h1>
            <p className={` ${jetbrainsMono.className}`}>I came, I saw, I made</p>
      </div>
    );
}