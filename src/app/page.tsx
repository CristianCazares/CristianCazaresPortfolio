import { Sidebar } from "./components";
import AboutBulletPoint from "./components/AboutBulletPoint";
import styles from "./page.module.scss";
import { BULLET_POINTS } from "@/lib/AboutMeBulletPoints";

const alphabetArray: string[] = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const generateRandomHexCode = (): string => {
  const characters = "0123456789ABCDEF";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    hexCode += characters.charAt(randomIndex);
  }

  return hexCode;
};

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
        <div className={styles.content}>
          {/*alphabetArray.map((item) => {
            return (
              <div
                key={`place${item}`}
                style={{
                  height: 200,
                  backgroundColor: generateRandomHexCode(),
                  display: "grid",
                  placeContent: "center",
                  fontSize: 100,
                  borderRadius: 16,
                }}
              >
                {item}
              </div>
            );
          })*/}
          <h1>Welcome!</h1>
          <h2>About me:</h2>
          {BULLET_POINTS.map((bullet, index) => (
            <AboutBulletPoint
              key={`bp${index}`}
              emoticon={bullet.emoticon}
              text={bullet.text}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
