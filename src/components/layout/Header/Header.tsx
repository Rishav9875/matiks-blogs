import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/bolt.svg" alt="logo" width={24} height={24} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link target="_blank" href="https://www.matiks.com/terms-and-conditions">Privacy policy</Link>
      </nav>
    </header>
  );
}
