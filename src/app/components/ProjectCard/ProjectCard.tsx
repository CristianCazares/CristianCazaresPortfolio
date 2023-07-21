import Link from "next/link";
import styles from "./projectCard.module.scss";
import { ProjectBasicInfo } from "@/utils/types";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa6";

const ProjectCard = ({
  title,
  subtitle,
  url,
  image,
  backColor,
  award,
}: ProjectBasicInfo) => {
  return (
    <>
      <Link href={url} className={styles.link}>
        <div
          className={styles.container}
          style={{ backgroundColor: backColor }}
        >
          <div className={`${styles.header} ${award && styles.withAward}`}>
            {award && (
              <div className={styles.awardContainer}>
                <FaTrophy className={styles.awardIcon} />
                <p className={styles.awardText}>{award}</p>
              </div>
            )}
            <h2 className={`${styles.title} ${award && styles.withAward}`}>{title}</h2>
          </div>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.imageContainer}>
            {image && (
              <Image
                src={image}
                fill
                sizes="100vw"
                alt="IBM Strategic Dashboard MacBook"
                className={styles.image}
                quality={75}
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
