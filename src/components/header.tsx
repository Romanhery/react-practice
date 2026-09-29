import { Plus_Jakarta_Sans } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import Join from "../components/join"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin']
})

export default function Header(){
    return (
        <header className="w-full grid grid-cols-3 items-center">
            <div className="flex items-center justify-start">
                <Link href={"https://antelope-hackclub.vercel.app"} target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/logo.svg"
                        width={250}
                        height={250}
                        alt="Antelope hackclub"
                        className=" ml-10 mt-5"
                    />
                </Link>
            </div>
            
            <nav className={`${plusJakartaSans.className} p-4 gap-8 flex justify-center mt-5 transform-flat`}>
                <Link className="hover:font-bold translate-z-12" href="/">Home</Link>
                <Link className="hover:font-bold" href="/about">About</Link>
                <Link className="hover:font-bold" href="/gallery">Gallery</Link>
                <Link className="hover:font-bold" href="/guides">Guides</Link>
                <Link className="hover:font-bold" href="">Events</Link>
            </nav>

            <Join />
        </header>
    );
}