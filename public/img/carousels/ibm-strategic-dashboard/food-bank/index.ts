import CarouselItem from "@/lib/CarouselItem";

import auth from "./auth.png";
import donate from "./donate.png";
import feed from "./feed.png";
import manage from "./manage.png";
import maps from "./maps.png";
import profile from "./profile.png";

const foodBankCarousel: CarouselItem[] = [
  { image: auth, legend: "One place. Manage, donate and find" },
  {
    image: feed,
    legend:
      "Your campaign, your contributions and closest campaings in one feed",
  },
  {
    image: manage,
    legend: "Create a campaign and track the progress of the donations",
  },
  { image: donate, legend: "Find a campaign and donate to it" },
  { image: maps, legend: "Find closes campaigns to your locations" },
  { image: profile, legend: "Just basic information on your profile" },
];

export default foodBankCarousel;
