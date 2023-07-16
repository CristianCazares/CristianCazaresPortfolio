"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./video.module.scss";

interface Props {
  embedVideoLink: string;
}

const Video = ({ embedVideoLink }: Props) => {
  const [videoHeight, setVideoHeight] = useState<number>(472.5);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVideoRef = () => {
      if (videoRef.current) {
        const width = videoRef.current.offsetWidth;
        setVideoHeight((width / 16) * 9);
      }
    };

    updateVideoRef();

    window.addEventListener("resize", updateVideoRef);
    return () => {
      window.removeEventListener("resize", updateVideoRef);
    };
  }, []);

  return (
    <div className={styles.videoContainer} ref={videoRef}>
      <iframe
        style={{ border: "none" }}
        src={embedVideoLink}
        title="YouTube video player"
        width="90%"
        height={videoHeight}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      />
    </div>
  );
};

export default Video;
