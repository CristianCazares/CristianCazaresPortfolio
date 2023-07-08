import Link from "next/link";
import styles from "./projectCard.module.scss";
import { ProjectBasicInfo } from "@/utils/types";
import Image from "next/image";

import MacBookIBM from "@/../public/img/MockUps/IBMStrategicDashboard/MacBook.png";

const ProjectCard = ({ title, subtitle, url, image }: ProjectBasicInfo) => {
  return (
    <>
      <Link href={url} className={styles.link}>
        <div className={styles.container}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className={styles.imageContainer}>
            {image && (
              <Image
                src={MacBookIBM}
                fill
                alt="IBM Strategic Dashboard MacBook"
                className={styles.image}
                quality={100}
                sizes="100vw"
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
