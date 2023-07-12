import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ProjectContent } from "@/lib/ProjectInfo/ProjectInfo";
import styles from "./onConstruction.module.scss";

interface Props {
  project: ProjectContent;
}

const OnConstruction = ({ project }: Props) => {
  return (
    <div className={styles.disclaimerContainer}>
      <h2 className={styles.disclaimer}>This page is under construction</h2>
      {project.githubLink && (
        <div className={styles.repoContainer}>
          <FaGithub size={72} />
          <Link className={styles.repoLink} href={project.githubLink}>
            Check the repo!
          </Link>
        </div>
      )}
      {project.embedVideoLink && (
        <>
          <h2>
            {project.githubLink
              ? "There is also a video available"
              : "Check a video in the meantime!"}
          </h2>
          <div className={styles.videoContainer}>
            <iframe
              style={{ border: "none" }}
              src={project.embedVideoLink}
              title="YouTube video player"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OnConstruction;
