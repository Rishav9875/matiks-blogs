import { getAssetUrl } from "@/lib/api";
import { formatDate } from "@/lib/helper/date";
import { BlogDetailsProps } from "@/types";
import Image from "next/image";
import React from "react";
import styles from "./BlogDetails.module.css";
import Sections from "../Sections";
import Link from "next/link";

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  return (
    <article className={styles.articleContainer}>
      <h1 className={styles.title}>{blog.title}</h1>

      <div className={styles.meta}>
        <span>{formatDate(blog.createdAt)}</span>
        <span />
        <Link
          target="_blank"
          href={`https://matiks.in/profile/${blog.author?.matiks_user_name}`}
        >
          <span className={"text-uppercase"}>{blog.author?.name}</span>
        </Link>
      </div>
      <div className={styles.mainImageContainer}>
        <Image
          src={getAssetUrl(blog.cover?.url)}
          alt="Blog main image"
          fill
          className={styles.mainImage}
          priority
        />
      </div>

      <Sections sections={blog.sections} />
    </article>
  );
};

export default BlogDetails;
