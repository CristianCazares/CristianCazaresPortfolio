import Link from "next/link";
import styles from "./projectCard.module.scss";
import { ProjectBasicInfo } from "@/utils/types";
import Image from "next/image";

const ProjectCard = ({
  title,
  subtitle,
  url,
  image,
  backColor,
}: ProjectBasicInfo) => {
  return (
    <>
      <Link href={url} className={styles.link}>
        <div
          className={styles.container}
          style={{ backgroundColor: backColor }}
        >
          <h2>{title}</h2>
          <p>{subtitle}</p>
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
