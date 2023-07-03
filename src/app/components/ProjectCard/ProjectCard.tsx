import Link from "next/link";
import styles from "./projectCard.module.scss";
import { ProjectBasicInfo } from "@/utils/types";

const ProjectCard = ({ title, subtitle, url, image }: ProjectBasicInfo) => {
  return (
    <>
      <Link href={url} className={styles.link}>
        <div className={styles.container}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
