"use client";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Something went wrong!</h1>
      <p className={styles.description}>
        We apologize for the inconvenience. Please try again later.
      </p>
      <div className={styles.buttonContainer}>
        <button onClick={reset} className={styles.button}>
          Try Again
        </button>
        <Link href="/" className={styles.link}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}
