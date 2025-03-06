import { getAssetUrl } from "@/lib/api";
import Image from "next/image";
import React from "react";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import ReactMarkdown from "react-markdown";
import DownloadMatiksButton from "../DownloadMatiksButton";
import { Section as SectionType } from "@/types";
import styles from "./Sections.module.css";

const Sections = ({ sections }: { sections: SectionType[] }) => {
  if (!sections) return null;
  return (
    <div className={styles.content}>
      {sections.map((section: SectionType, index: number) => (
        <div key={index} className={styles.block}>
          <h2>{section?.title}</h2>
          {section?.image && (
            <div className={styles.blockImageContainer}>
              <Image
                src={getAssetUrl(section?.image?.url)}
                alt="Blog main image"
                width={451}
                height={283}
                className={styles.blockImage}
                priority
              />
            </div>
          )}
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeRaw, rehypeKatex]}
          >
            {section?.content}
          </ReactMarkdown>
          {section?.shouldShowDownloadButton ? <DownloadMatiksButton /> : null}
        </div>
      ))}
    </div>
  );
};

export default Sections;
