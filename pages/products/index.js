import Link from "next/link"
import Navbar from "../../components/Navbar"
export default function product(){
    return (
        <>
        <Navbar />   

        <h1>Pagina de produtos</h1>
        <Link href="/">Voltar</Link>
        </>
    )
}