"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./projectCarousel.module.scss";
import CarouselItem from "@/lib/CarouselItem";

interface Props {
  carouselItems: CarouselItem[];
}

const ProjectCarousel = ({ carouselItems }: Props) => {
  const [carouselHeight, setCarouselHeight] = useState<number>(472.5);
  const [carouselLegend, setCarouselLegend] = useState<string>(
    carouselItems[0].legend
  );
  const [carouselLegendAnimation, setCarouselLegendAnimation] =
    useState<string>("");

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCarouselLegendChange = async (index: number) => {
    setCarouselLegendAnimation(styles.slideOut);
    setTimeout(() => {
      setCarouselLegend(carouselItems[index].legend);
      setCarouselLegendAnimation(styles.slideIn);
    }, 100);
  };

  useEffect(() => {
    const updateCarouselHeight = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        setCarouselHeight((width / 16) * 9);
      }
    };

    updateCarouselHeight();

    window.addEventListener("resize", updateCarouselHeight);
    return () => {
      window.removeEventListener("resize", updateCarouselHeight);
    };
  }, []);

  return (
    <div ref={carouselRef} className={styles.container}>
      <div className={styles.legendContainer}>
        <h3 className={`${styles.legend} ${carouselLegendAnimation}`}>
          {carouselLegend}
        </h3>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        infiniteLoop
        className={styles.carousel}
        onChange={(index) => handleCarouselLegendChange(index)}
      >
        {carouselItems.map((item, i) => {
          return (
            <div key={`carouselImage${i}`}>
              <div
                className={styles.imageContainer}
                style={{ height: carouselHeight }}
              >
                <Image
                  alt={`carouselImage${i}`}
                  src={item.image}
                  sizes="100vw"
                  quality={100}
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
