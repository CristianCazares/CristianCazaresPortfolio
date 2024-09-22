import {
  generatedBackColor,
  generateTextShade,
  hexToHsl,
  parseHSL,
} from "@/utils/colorTools";
import styles from "./techTag.module.scss";

interface Props {
  tag: string;
  color: `#${string}`;
}

const TechTag = ({ tag, color }: Props) => {
  const colorHSL = hexToHsl(color);
  const colorHSLParsed = parseHSL(colorHSL);

  return (
    <>
      <div className={styles.container}>
        <span
          style={{
            backgroundColor: generatedBackColor(color),
            color: colorHSLParsed,
          }}
        >
          {tag}
        </span>
      </div>
    </>
  );
};

export default TechTag;
