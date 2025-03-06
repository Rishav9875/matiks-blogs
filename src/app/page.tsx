import styles from "./page.module.css";
import BlogsContainer from "@/components/BlogsContainer/BlogsContainer";
import HeroSection from "@/components/HeroSection/HeroSection";
import { getBlogs } from "@/lib/api/getBlogs";
import { ApiError } from "@/types";
import { notFound } from "next/navigation";


export default async function Home() {
  try {
    const data = await getBlogs();
    if (!data || data.length === 0) return notFound();
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <HeroSection blog={data?.[0] ?? {}} />
          <BlogsContainer blogs={data.slice(1)} />
        </main>
      </div>
    );
  } catch (error: unknown) {
    const apiError = error as ApiError;
    if (apiError.status === 404) {
      notFound();
    }
    throw error;
  }
}
