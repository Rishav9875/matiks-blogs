import Image from "next/image";
import styles from "./BlogCard.module.css";
import { getAssetUrl } from "@/lib/api";
import { formatDate } from "@/lib/helper/date";
import Link from "next/link";
import { BlogCardProps } from "@/types";

export default function BlogCard({ blog, blogContainerStyle }: BlogCardProps) {
  return (
    <article className={`${blogContainerStyle} ${styles.card}`}>
      <Link href={`/blogs/${blog.slug}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={getAssetUrl(blog.cover?.url)}
            alt={blog.title}
            width={304}
            height={180}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.date}>{formatDate(blog.createdAt)}</span>
            <span />
            <span className={styles.author}>{blog.author?.name}</span>
          </div>
          <h2 className={styles.title}>{blog.title}</h2>
        </div>
      </Link>
    </article>
  );
}
