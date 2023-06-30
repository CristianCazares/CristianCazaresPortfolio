import Image from "next/image";
import { BulletPoint } from "../../../utils/types";
import AboutBulletPoint from "../AboutBulletPoint";
import styles from "./sidebar.module.scss";
import CristianCazaresPhoto from "@/../public/img/CristianCazares.jpg";

const BULLET_POINTS: BulletPoint[] = [
  {
    emoticon: "💻",
    text: "In love with building great different forms of software for multiple platforms.",
  },
  {
    emoticon: "🔎",
    text: "Looking for opportunities to contribute to exciting projects, grow, learn and collaborate with people in the industry.",
  },
  {
    emoticon: "🛠",
    text: "Experience working with IoT, Virtual and Augmented Reality, Web Development and Native apps.",
  },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.titleOverlay}>
            <h1 className={styles.title}>Cristian Cázares</h1>
            <p className={styles.subtitle}>Software Engineer</p>
          </div>
          <Image
            className={styles.image}
            alt="Cristian Cázares Photo"
            src={CristianCazaresPhoto}
            width={400}
          />
        </div>
      </div>
      <div>
        {BULLET_POINTS.map((item, i) => (
          <AboutBulletPoint key={i} emoticon={item.emoticon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
