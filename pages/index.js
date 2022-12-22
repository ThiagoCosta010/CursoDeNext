import styles from '../styles/Home.module.css'
import Head from 'next/head'
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
    </div>
    </>
  )
}
