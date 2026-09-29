import Link from "next/link"

export default function Header(){
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="">About</Link>
                <Link>Gallery</Link>
                <Link>Guides</Link>
                <Link>Events</Link>
            </nav>
        </header>
    );
}