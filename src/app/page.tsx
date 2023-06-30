import { Sidebar } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <div>Resume</div>
        </div>
        <div className={styles.navbarRight}>
          <div>Email</div>
          <div>Linked In</div>
          <div>GitHub</div>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}></div>
      </div>
    </main>
  );
}
