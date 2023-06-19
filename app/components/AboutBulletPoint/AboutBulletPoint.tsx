import styles from "./style.module.css";

interface Props {
  emoticon: string;
  text: string;
}

const AboutBulletPoint = ({ emoticon, text }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.emoticon}>{emoticon}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </>
  );
};

export default AboutBulletPoint;
