import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className={styles.link}>
        Return to Home
      </Link>
    </div>
  );
}