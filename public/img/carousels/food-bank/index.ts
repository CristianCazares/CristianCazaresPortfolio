import CarouselItem from "@/lib/CarouselItem";

import auth from "./auth.png";
import donate from "./donate.png";
import feed from "./feed.png";
import manage from "./manage.png";
import maps from "./maps.png";
import profile from "./profile.png";

const foodBankCarousel: CarouselItem[] = [
  {
    image: auth,
    legend: "Create and find collection centers all in one place",
  },
  {
    image: feed,
    legend:
      "A feed for your campaigns, your active contributions, and other centers in your zone",
  },
  {
    image: manage,
    legend: "Create a campaign and track the progress of each of the donations",
  },
  { image: donate, legend: "Find a campaign and donate to it" },
  { image: maps, legend: "Use your location to find the closest centers" },
  { image: profile, legend: "Only share essential information" },
];

export default foodBankCarousel;
