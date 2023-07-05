"use client";
import { use, useEffect } from "react";
import { BulletPoint } from "@/utils/types";
import styles from "./aboutMeBulletPoint.module.scss";
import Image from "next/image";
import ProcessedBoldText from "@/utils/ProcessedBoldText";

const AboutMeBulletPoint = ({ emoticon, text, alt, src }: BulletPoint) => {
  return (
    <div className={styles.container}>
      <div className={styles.bullet}>
        {src ? (
          <Image alt={alt!} src={src} width={28} />
        ) : (
          <div className={styles.emoticon}>{emoticon}</div>
        )}
      </div>

      <p>
        <ProcessedBoldText boldClass="strong">{text}</ProcessedBoldText>
      </p>
    </div>
  );
};

export default AboutMeBulletPoint;
