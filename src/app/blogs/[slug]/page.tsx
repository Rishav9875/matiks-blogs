import React from "react";
import styles from "./page.module.css";
import { getBlogBySlug } from "@/lib/api/getBlogBySlug";
import BlogsContainer from "@/components/BlogsContainer/BlogsContainer";
import { notFound } from "next/navigation";
import { ApiError } from "@/types";
import BlogDetails from "@/components/BlogDetails";


const BlogDetailsPage = async ({ params }: { params: Promise<{slug: string}> }) => {
  try {
    const { slug } = await params;  
    const blog = await getBlogBySlug(slug);
    if (!blog) return notFound();
    
    return (
      <div>
        <BlogDetails blog={blog} />
        <div className={styles.suggestedBlogsContainer}>
          <BlogsContainer containerStyle={styles.suggestedBlogs} blogs={blog.articles} />
        </div>
      </div>
    );
  } catch (error: unknown) {
    const apiError = error as ApiError;
    if (apiError.status === 404) {
      notFound();
    }
    throw error;
  }

};

export default BlogDetailsPage;
