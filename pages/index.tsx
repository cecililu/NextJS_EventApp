import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Events </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.nav}>
        <nav>
          <img/>
          <a href='/'>Home</a>
          <a href='event'>Events</a>
          
          <a href='/aboutus'>About us</a>
        </nav>
      </header>
      <main className={styles.main}>
       
        <a href=''>
           <h2>Events in London</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia repellendus incidunt dolor provident quidem cumque praesentium, ex quam at autem sit molestias facere. Facilis distinctio rem in error a temporibus.</p>

        </a>
        <a href=''>
           <h2>Events in SansFrancsico</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia repellendus incidunt dolor provident quidem cumque praesentium, ex quam at autem sit molestias facere. Facilis distinctio rem in error a temporibus.</p>

        </a>
        <a href=''>
           <h2>Events in Madrid</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia repellendus incidunt dolor provident quidem cumque praesentium, ex quam at autem sit molestias facere. Facilis distinctio rem in error a temporibus.</p>

        </a>
      </main>
      <footer className={styles.footer}>
        Helllo
      </footer>
    </>
  )
}
