"use client";
import { Content } from "./components";
import styles from "./style.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Content />
      </div>
    </div>
  );
};

export default page;
