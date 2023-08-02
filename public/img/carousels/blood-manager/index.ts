import CarouselItem from "@/lib/CarouselItem";
import auth from "./auth.png";
import donorForm from "./donorForm.png";
import pickAccount from "./pickAccount.png";
import solicitantAndDonor from "./solicitantAndDonor.png";
import solicitantFeed from "./solicitantFeed.png";

const bloodManagerCarousel: CarouselItem[] = [
  {
    image: pickAccount,
    legend: "A proposal to securely manage blood donations",
  },
  { image: auth, legend: "Strong authentication" },
  { image: donorForm, legend: "Based on real life medical standards" },
  {
    image: solicitantAndDonor,
    legend: "Interaction between diferent types of users",
  },
  {
    image: solicitantFeed,
    legend:
      "Prioritizing privacy by only sharing essential information about donors",
  },
];

export default bloodManagerCarousel;
