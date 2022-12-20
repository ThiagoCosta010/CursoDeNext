import Link from "next/link";

export default function Navbar(){
    return (
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/products">
                    Produtos
                </Link>
            </li>
            <li>
                <Link href="/about">
                    Sobre nós
                </Link>
            </li>
        </ul>
    )
}