import LinkButton from "../components/LinkButton";
import styles from "./page.module.scss";
import { FaGoogleDrive } from "react-icons/fa6";

const RESUME_ROUTE =
  "https://drive.google.com/file/d/1TUyknGzIrwtl6MoLBbWK1a-Ds1KnV-Vq/preview";

const Resume = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>My resume</h1>
        <LinkButton
          url={RESUME_ROUTE}
          icon={<FaGoogleDrive />}
          size="lg"
          targetBlank={true}
        >
          Download
        </LinkButton>
      </div>
      <div className={styles.resumeContainer}>
        <iframe className={styles.resume} src={RESUME_ROUTE}></iframe>
      </div>
    </>
  );
};

export default Resume;
