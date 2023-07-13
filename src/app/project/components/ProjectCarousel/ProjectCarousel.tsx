"use client";
import { useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./projectCarousel.module.scss";

interface Props {
  images: StaticImageData[];
}

const ProjectCarousel = ({ images }: Props) => {
  const [carouselHeight, setCarouselHeight] = useState<number>(472.5);
  const carouselRef = useRef<HTMLDivElement>(null);

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
    <div ref={carouselRef} className={styles.carouselContainer}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        className={styles.carousel}
      >
        {images.map((image, i) => (
          <div key={`carouselImage${i}`}>
            <div
              className={styles.imageContainer}
              style={{ height: carouselHeight }}
            >
              <Image
                alt={`carouselImage${i}`}
                src={image}
                sizes="100vw"
                quality={100}
                fill
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
