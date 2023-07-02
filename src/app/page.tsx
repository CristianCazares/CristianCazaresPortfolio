import Image from "next/image";
import { Navbar } from "./components";
import styles from "./page.module.scss";
import CristianPhoto from "@/../public/img/CristianCazares.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={`${styles.cardContainer} ${styles.imageContainer}`}>
              <Image
                className={styles.image}
                alt="Cristian's photo"
                src={CristianPhoto}
                height={400}
              />
            </div>
            <div className={styles.cardContainer} />
          </div>
          <div className={styles.content}>
            <div className={styles.cardContainer} />
            <div className={styles.cardContainer} />
            <div className={styles.cardContainer} />
            <div className={styles.cardContainer} />
          </div>
        </div>
      </main>
      <footer style={{height: 24}}></footer>
    </>
  );
};

export default Home;
