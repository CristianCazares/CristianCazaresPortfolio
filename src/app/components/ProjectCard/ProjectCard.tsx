import Link from "next/link";
import styles from "./projectCard.module.scss";
import { ProjectBasicInfo } from "@/utils/types";
import Image from "next/image";
import { FaAward } from "react-icons/fa6";

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
          <div className={styles.header}>
            <h2>{title}</h2>
            {award && (
              <div className={styles.awardContainer}>
                <FaAward
                  style={{
                    color: "linear-gradient(to right, #fdc830, #f37335);",
                  }}
                  size={30}
                />
                <p>{award}</p>
              </div>
            )}
          </div>
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
