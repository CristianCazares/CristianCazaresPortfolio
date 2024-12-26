import { useEffect, useState } from "react";
import CodeContainer from "./CodeContainer";
import styles from "./styles.module.css";
import { fetchVariable } from "@/app/db";

const CardContent = () => {
  const [code, setCode] = useState<string | undefined>("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const fetchCode = async () => {
      const codeResponse = await fetchVariable(
        "variables",
        "christmas",
        "rp_code"
      );
      setCode(codeResponse || "Not ready yet!");
    };
    fetchCode();
  }, []);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <CodeContainer code={code} handleCopy={handleCopy} />
      </div>
      <p className={styles.copiedContainer}>
        {!isCopied ? "Click on it" : "Copied ✅"}
      </p>
    </div>
  );
};

export default CardContent;
