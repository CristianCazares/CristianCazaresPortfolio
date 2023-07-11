import { ProjectBasicInfo } from "@/utils/types";
import { PROJECT_BASIC_INFO } from "./ProjectsBasicInfo";

export type ProjectContent = { title: string; description: string };

export const PROJECTS_DATA: Record<string, ProjectContent> = {
  "ibm-strategic-dashboard": {
    title: "IBM Strategic Dashboard",
    description:
      "A Web App built for IBM to analize and visualize their employees courses, badges and certifications.",
  },
  "food-bank": {
    title: "Food Bank",
    description: "Make donations",
  },
  "ijalti-peers": {
    title: "IJALTI Peers",
    description: "Look for job and hire people",
  },
  "blood-manager": {
    title: "Blood Manager",
    description: "Donate Blood, ask for Blood Donations",
  },
  multiagents: {
    title: "Multiagents",
    description: "Self driving cars on real life crossroad",
  },
  "in-case-of": {
    title: "In Case Of",
    description: "Virtual Reality Fire Drill",
  },
};
