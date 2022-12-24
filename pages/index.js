import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <> 
    <Head>
      <title>Página principal</title>
      <meta name='keywords' content='Roupas, Calçados, Boné'></meta>
      <meta name='description' content='Encontre a melhor roupa para você'></meta>
    </Head>
    <div>
      <h1 className={styles.title}>Hello World Next.js</h1>
      <Image src="/images/img1.png" width={400} height={500} alt="Cidade a noite" />
    </div>
    </>
  )
}
