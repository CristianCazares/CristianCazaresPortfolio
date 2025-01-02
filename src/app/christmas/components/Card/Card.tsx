import React, { useEffect, useState } from "react";
import CardAnimated from "./CardAnimated";
import styles from "./style.module.css";
import "animate.css";
import { fetchVariable } from "@/app/db";

const Card = () => {
  const [textA, setTextA] = useState<string>("");
  const [textB, setTextB] = useState<string>("");
  useEffect(() => {
    const fetchText = async () => {
      setTextA(
        (await fetchVariable("variables", "christmas", "textA")) as string
      );
      setTextB(
        (await fetchVariable("variables", "christmas", "textB")) as string
      );
    };

    fetchText();
  }, []);

  return (
    <div
      className={`${styles.container} ${styles.background} animate__animated animate__fadeInUpBig`}
    >
      <CardAnimated codeVariant="A" text={textA} />
      <CardAnimated codeVariant="B" text={textB} />
    </div>
  );
};

export default Card;
