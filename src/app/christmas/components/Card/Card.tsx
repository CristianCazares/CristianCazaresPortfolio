import React, { useEffect, useState } from "react";
import CardAnimated from "./CardAnimated";
import styles from "./style.module.css";
import "animate.css";

const Card = () => {
  return (
    <div
      className={`${styles.container} ${styles.background} animate__animated animate__fadeInUpBig`}
    >
      <CardAnimated codeVariant="A" />
      <CardAnimated codeVariant="B" />
    </div>
  );
};

export default Card;
