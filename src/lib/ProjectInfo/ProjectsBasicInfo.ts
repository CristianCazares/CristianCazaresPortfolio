import { ProjectBasicInfo } from "@/utils/types";
import {
  IBM,
  FoodBank,
  IJALTI,
  BloodManager,
  ICOF,
  Multiagents,
} from "./images";

const ROUTE = "/project";

export const PROJECT_BASIC_INFO: Map<string, ProjectBasicInfo> = new Map([
  [
    "ibm-strategic-dashboard",
    {
      title: "IBM Strategic Dashboard",
      subtitle:
        "BUILT FOR IBM | Data analytics and visualizations of employees' courses, badges and certifications",
      image: IBM,
      url: `${ROUTE}/ibm-strategic-dashboard`,
      backColor: "#625A73",
      tags: ["AI", "Full Stack Contributions", "NextJS", "React"],
    },
  ],
  [
    "food-bank",
    {
      title: "Food Bank",
      subtitle:
        "Create your own food collection campaigns! In partnership with BAMX: Mexican Food Bank Network.",
      image: FoodBank,
      url: `${ROUTE}/food-bank`,
      backColor: "#cd8418",
      tags: ["Mobile", "React", "Full Stack Contributions"],
    },
  ],
  [
    "ijalti-peers",
    {
      title: "IJTALTI Peers",
      subtitle:
        "Discover your ideal job and perfect employees! Networking app for the Guadalajara metropolitan area.",
      image: IJALTI,
      url: `${ROUTE}/ijalti-peers`,
      backColor: "#4a6da0",
      tags: ["Web", "React"],
    },
  ],
  [
    "blood-manager",
    {
      title: "Blood Manager",
      subtitle:
        "HackMTY 2022 FINALIST! Find blood donors or sign up to donate and save lives!",
      image: BloodManager,
      url: `${ROUTE}/blood-manager`,
      backColor: "#7052b2",
      tags: ["Web", "React", "Hackathon", "Full Stack Contributions"],
    },
  ],
  [
    "multiagents",
    {
      title: "Multiagents",
      subtitle: "AI Powered 3D simulation of a real dangerous crossroad",
      image: Multiagents,
      url: `${ROUTE}/multiagents`,
      backColor: "#8b894f",
      tags: ["3D", "AI", "Full Stack Contributions", "Unity"],
    },
  ],
  [
    "in-case-of",
    {
      title: "In Case Of VR",
      subtitle:
        "Virtual reality fire protection training approved by Civil Protection and the Fire Department",
      image: ICOF,
      url: `${ROUTE}/in-case-of`,
      backColor: "#7a2e2e",
      tags: ["3D", "Unity", "VR"],
    },
  ],
]);
