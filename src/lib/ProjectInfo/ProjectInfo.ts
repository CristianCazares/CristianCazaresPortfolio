import ibmCarrousel from "@/../public/img/carousels/ibm-strategic-dashboard";
import { TechKey } from "@/utils/types";
import CarouselItem from "../CarouselItem";

export type ProjectContent = {
  title: string;
  description: string | string[];
  githubLink?: string;
  embedVideoLink?: string;
  onConstruction?: boolean;
  carousel?: CarouselItem[];
  techStack?: TechKey[];
};

export const PROJECTS_DATA: Record<string, ProjectContent> = {
  "ibm-strategic-dashboard": {
    title: "IBM Strategic Dashboard",
    description: [
      "A Web App built for **IBM** to **analyze** and **visualize** their employees' courses, badges, and certifications.",
      "It implements **AI algorithms** and **data analysis tools** to extract insights from both the **internal data of IBM** and **external** information from **mainstream online courses platforms**.",
      "The design is focused to be **organic** to IBM's product by implementing their design system and **clear charts**.",
      "During the development, I was the **leader of the frontend team**, while also making **contributions to the API and data analysis service**.",
    ],
    githubLink: "https://github.com/Bugs-io/ibm-dashboard-app",
    embedVideoLink: "https://www.youtube.com/embed/5l5CpOcT3Vs",
    carousel: ibmCarrousel,
    techStack: [
      "nextjs",
      "typescript",
      "axios",
      "carbonDesign",
      "sass",
      "python",
      "fastAPI",
      "pandas",
      "numpy",
    ],
  },
  "food-bank": {
    title: "Food Bank",
    description: [
      "**Create** and **manage** food collection campaigns.",
      "Find the **nearest** campaign and donate a viarety of products.",
      "Connect with Mexico's Food Bank to deliver the goods **to the people that need it the most**.",
    ],
    githubLink: "https://github.com/FoodBank-GDL/FoodBank-ReactNative",
    techStack: ["reactNative", "nodejs", "firebase", "expressjs"],
  },
  "ijalti-peers": {
    title: "IJALTI Peers",
    description: "Look for job and hire people",
    githubLink: "https://github.com/CarlosCRG19/ijalti-peers",
    embedVideoLink: "https://www.youtube.com/embed/v1yR7HWqCqQ",
    onConstruction: true,
  },
  "blood-manager": {
    title: "Blood Manager",
    description: "Donate Blood, ask for Blood Donations",
    githubLink: "https://github.com/HackMTY-Team-6/HackMTY-Team6",
    onConstruction: true,
  },
  multiagents: {
    title: "Multiagents",
    description: "Self driving cars on real life crossroad",
    githubLink: "https://github.com/ITESMECHO/MultiagentsGraphics",
    embedVideoLink: "https://www.youtube.com/embed/tju9cw_chtc",
    onConstruction: true,
  },
  "in-case-of": {
    title: "In Case Of",
    description: "Virtual Reality Fire Drill",
    embedVideoLink: "https://www.youtube.com/embed/NHos0bgb_L0",
    onConstruction: true,
  },
};
