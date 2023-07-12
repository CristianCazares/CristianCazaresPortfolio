import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/ProjectInfo/ProjectInfo";
import { ProjectContent } from "@/lib/ProjectInfo/ProjectInfo";
import styles from "./page.module.scss";
import { FaGithub } from "react-icons/fa6";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;
  const project: ProjectContent = PROJECTS_DATA[id];

  return (
    <>
      <h1>{project.title}</h1>
      <h4>{project.description}</h4>
      <br />
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
    </>
  );
};

export default Page;
