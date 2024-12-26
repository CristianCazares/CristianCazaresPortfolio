/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./styles.module.scss";
import photo from "@/../public/img/profile/CristianCazares.jpg";
import { HeaderContent } from "../components";
import Link from "next/link";

const home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bentoGrid}>
        <Link
          href="https://github.com/CristianCazares"
          className={styles.a}
          target="_blank"
          style={{
            backgroundColor: "#4e2d80",
            background:
              "linear-gradient(90deg, #000 0%, #4e2d80 50%, #000 100%)",
          }}
        >
          <div className={styles.githubLogoContainer}>
            <img
              alt="GitHub logo"
              src="https://joshuapenalba.com/wp-content/uploads/2014/12/github-icon.png"
              style={{ maxHeight: "12rem" }}
            />
          </div>
        </Link>
        <Link href="/" className={styles.b}>
          <h2>Project Portfolio</h2>
        </Link>
        <div className={styles.c}>
          <Image
            width={0}
            height={0}
            style={{ height: "150%", width: "auto" }}
            priority
            alt="Cristian's photo"
            src={photo}
            className={styles.image}
            placeholder="blur"
          />
        </div>
        <div className={styles.d}>
          <HeaderContent isHomePage />
        </div>
        <div className={styles.e}>e</div>
        <div className={styles.f}>f</div>
        <div className={styles.g}>g</div>
        {/* <div className={styles.h}>h</div> */}
      </div>
    </div>
  );
};

export default home;
