"use client";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./projectCarousel.module.scss";

interface Props {
  images: StaticImageData[];
}

const ProjectCarousel = ({ images }: Props) => {
  return (
    <>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {images.map((image, i) => (
          <>
            <div key={`carouselImage${i}`} className={styles.carouselContainer}>
              <Image
                alt={`carouselImage${i}`}
                src={image}
                sizes="100vw"
                quality={100}
                fill
                className={styles.image}
              />
            </div>
          </>
        ))}
      </Carousel>
    </>
  );
};

export default ProjectCarousel;
