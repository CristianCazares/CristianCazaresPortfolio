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
        <div className={styles.repoContainer}>
          <FaGithub size={72} />
          <Link className={styles.repoLink} href={""}>
            Check the repo!
          </Link>
        </div>
        <h2>There is also a video available</h2>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/NHos0bgb_L0"
            title="YouTube video player"
            frameborder="0"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </>
  );
};

export default Page;
