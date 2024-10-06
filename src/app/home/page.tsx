/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./styles.module.scss";
import photo from "@/../public/img/profile/CristianCazares.jpg";
import { HeaderContent } from "../components";

const home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bentoGrid}>
        <div className={styles.a}>
          {/* <img
            alt="GitHub logo"
            src={
              "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
            }
            style={{ objectFit: "contain" }}
          /> */}
        </div>
        <div className={styles.b}>b</div>
        <div className={styles.c}>
          <Image
            fill
            priority
            alt="Cristian's photo"
            src={photo}
            className={styles.image}
            placeholder="blur"
            quality={100}
          />
        </div>
        <div className={styles.d}>
          <HeaderContent />
        </div>
        <div className={styles.e}>e</div>
        <div className={styles.f}>f</div>
        <div className={styles.g}>g</div>
        <div className={styles.h}>h</div>
        {/* <div className={styles.youtube}></div> */}
      </div>
    </div>
  );
};

export default home;
