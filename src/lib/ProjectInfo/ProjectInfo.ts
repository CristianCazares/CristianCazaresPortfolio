import { TechKey } from "@/utils/types";
import CarouselItem from "../CarouselItem";
import ibmCarrousel from "@/../public/img/carousels/ibm-strategic-dashboard";
import foodBankCarousel from "@/../public/img/carousels/food-bank";

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
      "**Mexico's Food Bank Network (BAMX)**, wanted to innovate by having a mobile app to improve one of their processes.",
      "Our team created a space where external contributors can create their own campaigns without depending on BAMX's infrastructure.",
      "**Find the collection centers** closest to you, or look for the ones that the communities you belong to are doing.",
      "**Improve donations management**! Everything you need in one place to keep track of donors and received merchandise.",
      "Set clear objectives and take advantage of communities to **encourage donations.**",
    ],
    githubLink: "https://github.com/FoodBank-GDL/FoodBank-ReactNative",
    techStack: ["reactNative", "nodejs", "firebase", "expressjs"],
    carousel: foodBankCarousel,
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
