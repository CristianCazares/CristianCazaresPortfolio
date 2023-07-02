import Image from "next/image";
import styles from "./sidebar.module.scss";
import CristianCazaresPhoto from "@/../public/img/CristianCazaresBacklessCropped.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.titleOverlay}>
            <h1 className={styles.title}>Cristian Cázares</h1>
            <p className={styles.subtitle}>Software Engineer</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="Cristian Cázares Photo"
              src={CristianCazaresPhoto}
              width={250}
            />
          </div>
        </div>
      </div>
      <div>
        {/*BULLET_POINTS.map((item, i) => (
          <AboutBulletPoint key={i} emoticon={item.emoticon} text={item.text} />
        ))*/}
      </div>
    </div>
  );
};

export default Sidebar;
