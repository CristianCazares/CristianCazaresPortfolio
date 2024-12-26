import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import CardContent from "./CardContent";

interface Props {
  className?: string;
}

const CardAnimated = ({ className }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [isShowRiotCard, setIsShowRiotCard] = useState(false);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowRiotCard(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      if (!isRotating) return;

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

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (cardRef.current) {
        cardRef.current.style.transform = ``;
        cardRef.current.style.transition = `transform 1s ease`;
      }
    };
  }, [isRotating]);

  const handleClick = () => {
    setIsRotating(false);
  };
  return (
    <div
      ref={cardRef}
      className={`${className} ${styles.cardImage} ${styles.perspective} ${
        isShowRiotCard ? `${styles.cardShow}` : ``
      } ${
        isRotating
          ? `${styles.dynamicShadow}`
          : `${styles.cardRotated} ${styles.fixedShadow}`
      }`}
      onClick={handleClick}
    >
      {!isRotating && <CardContent />}
    </div>
  );
};

export default CardAnimated;
