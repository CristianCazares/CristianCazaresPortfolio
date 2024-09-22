import { BULLET_POINTS } from "@/lib/AboutMeBulletPoints";
import AboutMeBulletPoint from "../AboutMeBulletPoint";
import styles from "./headerContent.module.scss";
import utils from "@/../styles/utils.module.scss";
import Image from "next/image";
import { waving } from "@/utils/imagesExports";
import { FaDownload, FaEnvelope } from "react-icons/fa6";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

import { Inter } from "next/font/google";
import LinkButton from "../LinkButton";
const inter = Inter({ subsets: ["latin"] });

const HeaderContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMask}>
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
          <h4>Computer Science Engineer</h4>
          <small>Tec de Monterrey (2024)</small>
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
          <LinkButton url="/resume" icon={<FaDownload />}>
            My resume
          </LinkButton>
          <LinkButton
            url="mailto:cristian.cazares@outlook.com"
            icon={<FaEnvelope />}
            targetBlank={true}
          >
            Contact me
          </LinkButton>
        </div>
      </div>
      <div className={styles.blobsContainer}>
        <div className={styles.blobA} />
        <div className={styles.blobB} />
      </div>
    </div>
  );
};

export default HeaderContent;
