import { BulletPoint } from "@/utils/types";
import styles from "./style.module.scss";

const AboutBulletPoint = ({ emoticon, text }: BulletPoint) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.emoticon}>{emoticon}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </>
  );
};

export default AboutBulletPoint;
