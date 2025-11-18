import Hero from "../Components/tour/hero";
import Tourc from "../Components/tour/tour";
import Gallery from "../Components/tour/gallery";
import View from "../Components/tour/view";
import FAQ from "../Components/tour/faq";
import EkaivaFooter from "../Components/tour/footer";
import Tour2 from "../Components/tour/tour2";

import { useTitle, useMeta, useCanonical } from "../Components/usemeta";

const Tour = () => {
  // TITLE
  useTitle("Best Travel Agency in India | Ekaiva Tours & Holidays");

  // DESCRIPTION & KEYWORDS
  useMeta(
    "description",
    "Ekaiva is India’s best-rated travel and tour agency offering affordable holiday packages, honeymoon trips, group tours, and custom travel experiences across India and abroad."
  );

  useMeta(
    "keywords",
    "best travel agency in India, tour packages, holiday planner, honeymoon destinations, affordable tours, India travel agency, luxury travel India, adventure trips, family vacations, group travel, custom tours"
  );

  // OPEN GRAPH (property=)
  useMeta("og:title", "Ekaiva - Best Travel & Tour Agency in India", true);
  useMeta(
    "og:description",
    "Discover India and beyond with Ekaiva — your trusted travel agency for unforgettable tours, honeymoon packages, and luxury holidays.",
    true
  );
  useMeta("og:image", "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png", true);
  useMeta("og:url", "https://ekaivaindia.com/tour", true);
  useMeta("og:type", "website", true);

  // TWITTER META
  useMeta("twitter:card", "summary_large_image");
  useMeta("twitter:title", "Ekaiva - India’s Best Travel & Tour Agency");
  useMeta(
    "twitter:description",
    "Book your next trip with Ekaiva for affordable, luxurious, and stress-free travel experiences across India and the world."
  );
  useMeta("twitter:image", "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png");

  // CANONICAL
  useCanonical("https://ekaivaindia.com/tour");

  return (
    <div>
      <Hero />
      <Tourc />
      <Tour2 />
      <Gallery />
      <View />
      <FAQ />
      <EkaivaFooter />
    </div>
  );
};

export default Tour;
