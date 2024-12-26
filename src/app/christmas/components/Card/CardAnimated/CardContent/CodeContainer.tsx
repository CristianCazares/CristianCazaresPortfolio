import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  code?: string;
  handleCopy: () => void;
}

const CodeContainer = ({ code, handleCopy }: Props) => {
  return (
    <div className={styles.code} onClick={handleCopy}>
      {code || "Not ready!"}
    </div>
  );
};

export default CodeContainer;
