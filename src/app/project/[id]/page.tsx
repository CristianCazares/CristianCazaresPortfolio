import { OnConstruction } from "../components";
import { PROJECTS_DATA } from "@/lib/ProjectInfo/ProjectInfo";
import { ProjectContent } from "@/lib/ProjectInfo/ProjectInfo";
import styles from "./page.module.scss";
import ibmCarrousel from "@/../public/img/carousels/ibm-strategic-dashboard";
import ProjectCarousel from "../components/ProjectCarousel";

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
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae est saepe, quis hic ipsa officia, voluptatem aspernatur
              dolorem distinctio mollitia repudiandae reprehenderit tenetur
              vitae unde magni consequuntur magnam laboriosam consequatur.
            </p>
            <h2>Tech Stack</h2>
            <p>nice</p>
          </div>
          <div className={styles.carouselContainer}>
            {/*<Image
              src={ibmCarrousel[0]}
              alt="test"
              fill
              sizes="100vw"
              quality={100}
              className={styles.image}
        />*/}
            <ProjectCarousel images={ibmCarrousel} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
