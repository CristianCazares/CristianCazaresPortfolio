import CarouselItem from "@/lib/CarouselItem";

import exportIBM from "./export.png";
import login from "./login.png";
import main from "./main.png";
import moveGrid from "./moveGrid.png";
import plotFeatures from "./plotFeatures.png";
import poweredAI from "./poweredAI.png";
import search from "./search.png";
import signup from "./signup.png";
import topIndustry from "./topIndustries.png";
import upload from "./upload.png";

const ibmCarrousel: CarouselItem[] = [
  { image: main, legend: "Visually stunning dashboard" },
  { image: login, legend: "Strong authentication" },
  { image: signup, legend: "Sign up with your IBM ID" },
  { image: moveGrid, legend: "Customizable layout" },
  { image: upload, legend: "Upload your own spreadsheets" },
  { image: poweredAI, legend: "Charts powered by AI" },
  { image: exportIBM, legend: "Export charts on different formats" },
  {
    image: search,
    legend: "Look at all the employees, and search for particular ones",
  },
  { image: plotFeatures, legend: "Different charts configurations" },
  {
    image: topIndustry,
    legend: "Get insights from top Massive Open Online Courses",
  },
];

export default ibmCarrousel;
