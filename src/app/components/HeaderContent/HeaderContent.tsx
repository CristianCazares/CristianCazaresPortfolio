import { BULLET_POINTS } from "@/lib/AboutMeBulletPoints";
import AboutMeBulletPoint from "../AboutMeBulletPoint";
import styles from "./headerContent.module.scss";
import utils from "@/../styles/utils.module.scss";
import Image from "next/image";
import { waving } from "@/utils/imagesExports";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const HeaderContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.text}>
          Hello there!
          <Image
            alt="waving icon"
            className={styles.image}
            src={waving}
            height={28}
          />{" "}
          I&apos;m <span className={utils.stronger}>Cristian</span>.
        </h1>
        <p>Computer science student @ Tec de Monterrey</p>
        <p>Graduating on June 2024</p>
      </div>
      <div className={`${styles.subtitle} ${rubik.className}`}>
        <div className={styles.bulletPoints}>
          {BULLET_POINTS.map((item, i) => (
            <AboutMeBulletPoint
              key={`AboutMe${i}`}
              text={item.text}
              alt={item.alt}
              src={item.src}
            />
          ))}
        </div>
      </div>
      <div className={`${styles.buttons} ${inter.className}`}>
        <button>My resume</button>
        <button>Contact me </button>
      </div>
    </div>
  );
};

export default HeaderContent;
