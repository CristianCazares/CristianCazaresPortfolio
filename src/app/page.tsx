import Image from "next/image";
import Link from "next/link";
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
            <Link href="https://github.com/Bugs-io/ibm-dashboard-app">
              <div className={styles.cardContainer}>
                IBM Strategic dashboard
              </div>
            </Link>
            <Link href="https://github.com/FoodBank-GDL/FoodBank-ReactNative">
              <div className={styles.cardContainer}>Food Bank</div>
            </Link>
            <Link href="https://github.com/ITESMECHO/MultiagentsGraphics">
              <div className={styles.cardContainer}>Multiagents</div>
            </Link>
            <Link href="https://github.com/HackMTY-Team-6/HackMTY-Team6">
              <div className={styles.cardContainer}>Blood Manager</div>
            </Link>
            <Link href="https://github.com/CarlosCRG19/ijalti-peers">
              <div className={styles.cardContainer}>Ijalti Peers</div>
            </Link>
          </div>
        </div>
      </main>
      <footer style={{ height: 24 }}></footer>
    </>
  );
};

export default Home;
