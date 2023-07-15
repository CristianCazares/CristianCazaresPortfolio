import hexToHsl from "@/utils/hexToHsl";
import styles from "./techTag.module.scss";

interface Props {
  tag: string;
  color: `#${string}`;
}

const parseHSL = (arrayHSL: [number, number, number]): string => {
  return `hsl(${arrayHSL[0]},${arrayHSL[1]}%,${arrayHSL[2]}%)`;
};

const TechTag = ({ tag, color }: Props) => {
  const colorHSL = hexToHsl(color);
  const colorHSLParsed = parseHSL(colorHSL);

  return (
    <>
      <div className={styles.container}>
        <span
          style={{
            backgroundColor: colorHSLParsed,
          }}
        >
          {tag}
        </span>
      </div>
    </>
  );
};

export default TechTag;
