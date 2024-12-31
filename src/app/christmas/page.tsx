"use client";
import { Content } from "./components";
import styles from "./style.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <Content />
    </div>
  );
};

export default page;
