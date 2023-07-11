"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import utils from "@/../styles/utils.module.scss";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const ICON_SIZE = 24;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarLeftItems}>
        <Link href="/" className={utils.stronger}>
          Cristian Cázares
        </Link>
      </div>
      <div className={styles.navbarRightItems}>
        <Link href={"mailto:cristian.cazares@outlook.com"} target="_blank">
          <FaEnvelope size={ICON_SIZE} className={styles.mail}/>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/cristian-javier-cazares-molina/"}
          target="_blank"
        >
          <FaLinkedin size={ICON_SIZE} className={styles.linkedIn}/>
        </Link>
        <Link href={"https://github.com/CristianCazares"} target="_blank">
          <FaGithub size={ICON_SIZE} className={styles.gitHub}/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
