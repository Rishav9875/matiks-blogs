import React from "react";
import BlogCard from "../BlogCard";
import styles from "./BlogsContainer.module.css";
import { Blog } from "@/types";

const BlogsContainer = ({
  blogs,
  containerStyle,
}: {
  blogs: Blog[];
  containerStyle?: string;
}) => {
  return (
    <section className={`${styles.blogContainer} ${containerStyle ?? ""}`}>
      {blogs.slice(1).map((blog: Blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </section>
  );
};

export default BlogsContainer;
