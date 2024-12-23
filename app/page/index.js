import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to AI Tutor</title>
        <meta name="description" content="An AI-powered educational platform for personalized learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>AI Tutor</span>!
        </h1>
        <p className={styles.description}>
          Transforming learning through <strong>AI-powered solutions</strong>.
        </p>

        <div className={styles.grid}>
          <a href="/features" className={styles.card}>
            <h2>Features &rarr;</h2>
            <p>Explore how AI Tutor enhances your learning experience.</p>
          </a>

          <a href="/about" className={styles.card}>
            <h2>About Us &rarr;</h2>
            <p>Learn more about the team and the mission behind AI Tutor.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with us for queries and support.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by <span className={styles.logo}>AI Tutor</span>
        </p>
      </footer>
    </div>
  );
}
