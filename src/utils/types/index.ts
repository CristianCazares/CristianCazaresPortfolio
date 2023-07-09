import { StaticImageData } from "next/image";

export type BulletPoint = {
  emoticon?: string;
  text: string;
  src?: StaticImageData;
  alt?: string;
};

export type ProjectBasicInfo = {
  title: string;
  subtitle: string;
  url: string;
  image: StaticImageData | "";
  backColor?: `#${string}`;
};
