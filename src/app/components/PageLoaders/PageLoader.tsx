import styles from "./pageLoader.module.scss";

const PageLoader = () => {
  return (
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default PageLoader;
