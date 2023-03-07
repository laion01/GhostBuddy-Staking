import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {

    
  }, []);
  return (
        <div className={styles.container}>
      <Head>
        <title>MetaXSeed Gaming Studio</title>
        <meta name="description" content="Crypto Warriors" />
        <link rel="icon" href="/images/logo-white.png" />
      </Head>

      <main className={styles.main}>
      </main>
      <footer></footer>
    </div>
  );
}