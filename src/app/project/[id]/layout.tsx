import { Navbar } from "../../components";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.content}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
