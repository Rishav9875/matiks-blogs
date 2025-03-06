import Image from "next/image";
import styles from "./HeroSection.module.css";
import { getAssetUrl } from "@/lib/api";
import { formatDate } from "@/lib/helper/date";
import Link from "next/link";
import { HeroSectionProps } from "@/types";

export default async function HeroSection({ blog }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{formatDate(blog.createdAt)}</span>
          <span />
          <Link
            target="_blank"
            href={`https://matiks.in/profile/${blog.author?.matiks_user_name}`}
          >
            <span className={styles.author}>{blog.author?.name}</span>
          </Link>
        </div>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.excerpt}>{blog.description}</p>
        <button className={styles.readMore}>Read More</button>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={getAssetUrl(blog.cover?.url)}
          alt={blog.title}
          width={460}
          height={268}
          className={styles.image}
        />
      </div>
    </section>
  );
}
