export type ProjectContent = {
  title: string;
  description: string;
  githubLink?: string;
  embedVideoLink?: string;
};

export const PROJECTS_DATA: Record<string, ProjectContent> = {
  "ibm-strategic-dashboard": {
    title: "IBM Strategic Dashboard",
    description:
      "A Web App built for IBM to analize and visualize their employees courses, badges and certifications.",
    githubLink: "https://github.com/Bugs-io/ibm-dashboard-app",
    embedVideoLink: "https://www.youtube.com/embed/5l5CpOcT3Vs",
  },
  "food-bank": {
    title: "Food Bank",
    description: "Make donations",
    githubLink: "https://github.com/FoodBank-GDL/FoodBank-ReactNative",
  },
  "ijalti-peers": {
    title: "IJALTI Peers",
    description: "Look for job and hire people",
    githubLink: "https://github.com/CarlosCRG19/ijalti-peers",
    embedVideoLink: "https://www.youtube.com/embed/v1yR7HWqCqQ",
  },
  "blood-manager": {
    title: "Blood Manager",
    description: "Donate Blood, ask for Blood Donations",
    githubLink: "https://github.com/HackMTY-Team-6/HackMTY-Team6",
  },
  multiagents: {
    title: "Multiagents",
    description: "Self driving cars on real life crossroad",
    githubLink: "https://github.com/ITESMECHO/MultiagentsGraphics",
    embedVideoLink: "https://www.youtube.com/embed/tju9cw_chtc",
  },
  "in-case-of": {
    title: "In Case Of",
    description: "Virtual Reality Fire Drill",
    embedVideoLink: "https://www.youtube.com/embed/NHos0bgb_L0",
  },
};
