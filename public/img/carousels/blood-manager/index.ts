import CarouselItem from "@/lib/CarouselItem";
import askForm from "./askForm.png";
import feedDonator from "./feedDonator.png";
import feedReceiver from "./feedReceiver.png";
import form from "./form.png";
import login from "./login.png";
import main from "./main.png";
import signup from "./signup.png";

const bloodManagerCarousel: CarouselItem[] = [
  { image: main, legend: "A proposal to securely manage blood donations" },
  { image: login, legend: "Strong authentication" },
  { image: form, legend: "Based on real life medical standards" },
  { image: askForm, legend: "Ask for donations" },
  { image: feedDonator, legend: "Look at people asking for donations" },
  {
    image: feedReceiver,
    legend: "Only essential information about your donors",
  },
];

export default bloodManagerCarousel;
