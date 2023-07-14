import { OnConstruction } from "../components";
import ProjectCarousel from "../components/ProjectCarousel";

import { PROJECTS_DATA, ProjectContent } from "@/lib/ProjectInfo/ProjectInfo";
import styles from "./page.module.scss";

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
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{project.title}</h1>
        </div>
        <div className={styles.layout}>
          <div className={styles.description}>
            <p>
              {project.description}
            </p>
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
      </div>
    </>
  );
};

export default Page;
