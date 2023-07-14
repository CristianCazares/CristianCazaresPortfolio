import { OnConstruction } from "../components";
import ProjectCarousel from "../components/ProjectCarousel";
import { PROJECTS_DATA, ProjectContent } from "@/lib/ProjectInfo/ProjectInfo";
import styles from "./page.module.scss";
import LinkButton from "@/app/components/LinkButton";
import { FaGithub, FaYoutube } from "react-icons/fa6";

import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Video from "../components/Video";
const openSans = Open_Sans({ subsets: ["latin"] });

interface PageProps {
  params: {
    id: string;
  };
}

const onConstruction = (id: string) => {
  const project: ProjectContent = PROJECTS_DATA[id];

  return (
    <>
      <h1>{project.title}</h1>
      <h4>{project.description}</h4>
      <OnConstruction project={project} />
    </>
  );
};

const Page = ({ params }: PageProps) => {
  const { id } = params;
  const project: ProjectContent = PROJECTS_DATA[id];

  if (project.onConstruction) return onConstruction(id);
  return (
    <>
      <div className={`${styles.container} ${openSans.className}`}>
        <div className={styles.header}>
          <h1>{project.title}</h1>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <Link href={project.githubLink!} className={styles.link}>
                <FaGithub size={36} />
              </Link>
            </div>
            <div className={styles.button}>
              <Link href={"#video"} className={styles.link}>
                <FaYoutube size={36} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.description}>
            <p>{project.description}</p>
            {project.techStack && (
              <>
                <h2>Tech Stack</h2>
                <ul>
                  {project.techStack.map((item) => (
                    <li key={`techStack_${item}`}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className={styles.carouselContainer}>
            <ProjectCarousel images={project.carousel!} />
          </div>
        </div>
        {project.embedVideoLink && (
          <section id="video">
            <h2>Video demo</h2>
            <Video embedVideoLink={project.embedVideoLink} />
          </section>
        )}
      </div>
    </>
  );
};

export default Page;
