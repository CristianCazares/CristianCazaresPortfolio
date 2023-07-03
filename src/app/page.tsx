import Image from "next/image";
import Link from "next/link";
import { Navbar, ProjectCard } from "./components";
import styles from "./page.module.scss";
import CristianPhoto from "@/../public/img/CristianCazares.jpg";
import { PROJECT_BASIC_INFO } from "@/lib/ProjectsBasicInfo";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div
              className={`${styles.cardContainerHeader} ${styles.imageContainer}`}
            >
              <Image
                className={styles.image}
                alt="Cristian's photo"
                src={CristianPhoto}
                height={400}
              />
            </div>
            <div className={styles.cardContainerHeader} />
          </div>
          <div className={styles.content}>
            {PROJECT_BASIC_INFO.map((project, i) => (
              <ProjectCard
                key={`Project${i}`}
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </main>
      <footer style={{ height: 24 }}></footer>
    </>
  );
};

export default Home;
