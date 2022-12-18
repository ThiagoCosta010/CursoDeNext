import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/products">
            Produtos
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
      <h1>Hello World Next.js</h1>
    </div>
  )
}
