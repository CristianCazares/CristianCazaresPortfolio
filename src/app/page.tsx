import Image from "next/image";
import { HeaderContent, Navbar, ProjectCard } from "./components";
import styles from "./page.module.scss";
import { PROJECT_BASIC_INFO } from "@/lib/ProjectInfo/ProjectsBasicInfo";

import CristianPhoto from "@/../public/img/CristianCazares.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={`${styles.imageCard}`}>
            <Image
              fill
              alt="Cristian's photo"
              src={CristianPhoto}
              className={styles.image}
              placeholder="blur"
              quality={100}
            />
          </div>
          <div className={`${styles.aboutCard}`}>
            <HeaderContent />
          </div>

          {Array.from(PROJECT_BASIC_INFO, ([key, value]) => ({
            key,
            ...value,
          })).map((project, i) => {
            return (
              <div key={project.key} className={`${styles.projectCard}`}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  image={project.image}
                  url={`project/${project.key}`}
                  backColor={project.backColor}
                  award={project.award}
                />
              </div>
            );
          })}
        </div>
      </main>
      <footer style={{ height: 24 }}></footer>
    </>
  );
};

export default Home;
