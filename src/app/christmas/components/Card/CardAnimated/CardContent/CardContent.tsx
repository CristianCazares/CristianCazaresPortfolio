import { useEffect, useState } from "react";
import CodeContainer from "./CodeContainer";
import styles from "./styles.module.css";
import { fetchVariable } from "@/app/db";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

interface Props {
  codeVariant: string;
  text: string;
}

const CardContent = ({ codeVariant, text }: Props) => {
  const [code, setCode] = useState<string | undefined>("");
  const [isCopied, setIsCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delayVisibility = async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));
      setIsVisible(true);
    };

    const fetchCode = async () => {
      const codeResponse = (await fetchVariable(
        "variables",
        "christmas",
        `rp_code_${codeVariant}`
      )) as string;

      setCode(codeResponse || "Not ready yet!");
    };

    delayVisibility();
    fetchCode();
  }, []);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
    }
  };

  return (
    <div className={`${styles.container}`}>
      {isVisible && (
        <>
          <div>
            <CodeContainer code={code} handleCopy={handleCopy} />
          </div>
          <small className={styles.copiedContainer}>
            {!isCopied ? "Click on it" : "Copied ✅"}
          </small>
          <p className={`${poppins.className}`}>{text}</p>
          <p className={`${poppins.className}`}>-Cristian 💖</p>
        </>
      )}
    </div>
  );
};

export default CardContent;
