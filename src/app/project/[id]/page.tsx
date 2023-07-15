import { OnConstruction } from "../components";
import ProjectCarousel from "../components/ProjectCarousel";
import { PROJECTS_DATA, ProjectContent } from "@/lib/ProjectInfo/ProjectInfo";
import styles from "./page.module.scss";
import LinkButton from "@/app/components/LinkButton";
import { FaGithub, FaYoutube } from "react-icons/fa6";

import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Video from "../components/Video";
import TechTag from "../components/TechTag";
import { Techs } from "@/lib/Techs";
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
          <div className={styles.information}>
            <div className={styles.description}>
              {Array.isArray(project.description) ? (
                project.description.map((item, i) => (
                  <p key={`description${i}`}>{item}</p>
                ))
              ) : (
                <p>{project.description}</p>
              )}
            </div>
            <div className={styles.techStack}>
              {project.techStack && (
                <>
                  {project.techStack.map((item, i) => {
                    const tech = Techs.get(item);
                    return (
                      tech && <TechTag tag={tech.tag} color={tech.color} />
                    );
                  })}
                </>
              )}
            </div>
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
