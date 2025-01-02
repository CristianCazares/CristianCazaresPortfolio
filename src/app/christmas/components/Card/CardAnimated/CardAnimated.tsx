import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import CardContent from "./CardContent";

interface Props {
  className?: string;
  codeVariant: string;
  text: string;
}

const CardAnimated = ({ className, codeVariant, text }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [isShowRiotCard, setIsShowRiotCard] = useState(false);
  const [isTilting, setisTilting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowRiotCard(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      if (!isTilting) return;

      const x = e.clientX;
      const y = e.clientY;

      const midX = window.innerWidth / 2;
      const midY = window.innerHeight / 2;

      const maxTilt = 25;

      const offsetX = ((x - midX) / midX) * maxTilt;
      const offsetY = ((y - midY) / midY) * maxTilt;

      cardRef.current.style.transform = `perspective(5000px) rotateX(${
        offsetY * -1
      }deg) rotateY(${offsetX}deg)`;
      cardRef.current.style.transition = ``;
    };

    const rotateDelay = async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));
      cardRef.current?.classList.add(`${styles.cardImageBack}`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    if (!isTilting) rotateDelay();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (cardRef.current) {
        cardRef.current.style.transform = ``;
        cardRef.current.style.transition = `transform 1s ease`;
      }
    };
  }, [isTilting]);

  const handleClick = () => {
    setisTilting(false);
  };

  return (
    <div
      ref={cardRef}
      className={`${className} ${styles.cardImage} ${styles.perspective} ${
        isShowRiotCard ? `${styles.cardShow}` : ``
      } ${
        isTilting
          ? `${styles.dynamicShadow}`
          : `${styles.cardRotated} ${styles.fixedShadow}`
      }`}
      onClick={handleClick}
    >
      {!isTilting && <CardContent codeVariant={codeVariant} text={text} />}
    </div>
  );
};

export default CardAnimated;
