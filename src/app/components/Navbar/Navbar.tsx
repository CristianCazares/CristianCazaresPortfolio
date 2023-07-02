"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

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
        <div>Resume</div>
      </div>
      <div className={styles.navbarRightItems}>
        <div>Linked In</div>
        <div>Email</div>
        <div>GitHub</div>
      </div>
    </nav>
  );
};

export default Navbar;
