import utils from "../../styles/utils.module.scss";

interface Props {
  children: string;
  boldClass: string;
}

const ProcessedBoldText = ({ children, boldClass }: Props) => {
  const regex: RegExp = /\*\*(.*?)\*\*/g;
  const parts: string[] = children.split(regex);

  return parts.map((part, i) => {
    if (i % 2 != 0) {
      return (
        <span key={`strong${i}`} className={utils[boldClass]}>
          {part}
        </span>
      );
    }
    return part;
  });
};

export default ProcessedBoldText;
