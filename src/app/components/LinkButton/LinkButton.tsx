import Link from "next/link";
import styles from "./linkButton.module.scss";

interface Props {
  url: string;
  children?: React.ReactNode;
  icon?: React.ReactElement<any, any>;
  targetBlank?: boolean;
  size?: "md" | "sm" | "lg" | "xl";
}

const LinkButton = ({
  url,
  children,
  icon,
  targetBlank = false,
  size = "sm",
}: Props) => {
  return (
    <div className={styles.container}>
      <Link
        href={url}
        target={targetBlank ? "_blank" : ""}
        className={`${styles.link} ${styles[size]}`}
      >
        {icon}
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;
