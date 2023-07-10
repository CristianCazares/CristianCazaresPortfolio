import { ProjectBasicInfo } from "@/utils/types";
import { IBM, FoodBank, IJALTI, BloodManager, ICOF } from "./images";

export const PROJECT_BASIC_INFO: ProjectBasicInfo[] = [
  {
    title: "IBM Strategic Dashboard",
    subtitle:
      "BUILT FOR IBM | Data analytics and visualizations of employees courses, badges and certifications",
    image: IBM,
    url: "/projects/ibm-strategic-dashboard",
    backColor: "#625A73",
  },
  {
    title: "Food Bank",
    subtitle:
      "Create your own food collection campaigns! In partnership with BAMX: Mexican Food Bank Network.",
    image: FoodBank,
    url: "/projects/food-bank",
    backColor: "#cd8418",
  },
  {
    title: "IJTALTI Peers",
    subtitle:
      "Discover your ideal job and perfect employees! Networking app for the Guadalajara metropolitan area.",
    image: IJALTI,
    url: "/projects/ijalti-peers",
    backColor: "#4a6da0",
  },
  {
    title: "Blood Manager",
    subtitle:
      "HackMTY 2022 FINALIST! Find blood donors or sign up to donate and save lives!",
    image: BloodManager,
    url: "/projects/blood-manager",
    backColor: "#7052b2",
  },
  {
    title: "Multiagents",
    subtitle: "AI Powered 3D simulation of a real dangerous crossroad",
    image: "",
    url: "/projects/multiagents",
  },
  {
    title: "In Case Of VR",
    subtitle:
      "Virtual reality fire protection training approved by Civil Protection and the Fire Department",
    image: ICOF,
    url: "/projects/in-case-of",
    backColor: "#7a2e2e",
  },
];
