import Image from "next/image";
import { HeaderContent, Navbar, ProjectCard } from "./components";
import styles from "./page.module.scss";
import { PROJECT_BASIC_INFO } from "@/lib/ProjectsBasicInfo";

import CristianPhoto from "@/../public/img/CristianCazares.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={`${styles.cardHeader} ${styles.imageCard}`}>
            <Image
              fill
              alt="Cristian's photo"
              src={CristianPhoto}
              className={styles.image}
            />
          </div>
          <div
            className={`${styles.cardHeader} ${styles.card} ${styles.aboutCard}`}
          >
            <HeaderContent />
          </div>

          {PROJECT_BASIC_INFO.map((project, i) => {
            return (
              <div
                key={`Project${i}`}
                className={`${styles.projectCard} ${styles.card}`}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  image={project.image}
                  url={project.url}
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
