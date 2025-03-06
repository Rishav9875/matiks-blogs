import React from "react";
import styles from "./DownloadMatiksButton.module.css";
import Link from "next/link";

const DownloadMatiksButton = () => {
  return (
    <div
      className={styles.container}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Link
        href="https://play.google.com/store/apps/details?id=com.matiks.app"
        target="_blank"
      >
        <button
          style={{
            width: "360px",
            height: "55px",
            borderRadius: "12px",
            fontWeight: 700,
            borderBottom: "4px solid #00000066",
            backgroundColor: "#A9F99E",
            color: "#1e1e1e",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          DOWNLOAD MATIKS FOR FREE
        </button>
      </Link>
    </div>
  );
};

export default DownloadMatiksButton;
