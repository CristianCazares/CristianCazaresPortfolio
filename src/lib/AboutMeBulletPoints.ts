import { BulletPoint } from "@/utils/types";
import { laptop } from "@/utils/imagesExports";
import { magnifying } from "@/utils/imagesExports";
import { tools } from "@/utils/imagesExports";

export const BULLET_POINTS: BulletPoint[] = [
  {
    emoticon: "💻",
    text: "In love with building different forms of **great software** for **multiple platforms**.",
    src: laptop,
    alt: "laptopIcon",
  },
  {
    emoticon: "🔎",
    text: "Looking for **opportunities** to **contribute** to **exciting projects**, **grow**, **learn** and **collaborate** with people in the industry.",
    src: magnifying,
    alt: "magnifyingIcon",
  },
  {
    emoticon: "🛠",
    text: "Experience working with **IoT**, Virtual and **Augmented Reality**, **Web Development** and **Native apps**.",
    src: tools,
    alt: "toolsIcon",
  },
];
