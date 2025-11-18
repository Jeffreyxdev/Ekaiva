import EkaivaFooter from "../footer";
import Tour from "../taj mahal/tour";
import FAQ from "./faq";
import Gallery from "./Gallery";
import Hero from "./Hero";
import FAQSection from "./next";
import Rajabout from "./Rajabout";
import Timeline from "./timeline";

import { useTitle, useMeta, useCanonical } from "../../usemeta";

const Mains = () => {
  // PAGE TITLE
  useTitle("Rajasthan Tour | Ekaiva Tours & Holidays");

  // DESCRIPTION & KEYWORDS
  useMeta(
    "description",
    "Ekaiva is India’s best-rated travel and tour agency offering affordable holiday packages, honeymoon trips, group tours, visit Rajasthan tour packages, and custom travel experiences across India and abroad."
  );

  useMeta(
    "keywords",
    "Rajasthan tour, golden triangle, tour, India tour, south India, Kerala tour, mice travel, best travel India, tour packages, Best place to visit in India for foreigners, holiday planner, honeymoon destinations, affordable tours, India travel agency, luxury travel India, adventure trips, family vacations, group travel, custom tours"
  );

  // OPEN GRAPH (property=)
  useMeta("og:title", "Ekaiva - Best Travel & Tour Agency in India", true);
  useMeta(
    "og:description",
    "Discover India and beyond with Ekaiva — your trusted travel agency for unforgettable tours, honeymoon packages, and luxury holidays.",
    true
  );
  useMeta(
    "og:image",
    "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png",
    true
  );
  useMeta("og:url", "https://ekaivaindia.com/rajasthan", true);
  useMeta("og:type", "website", true);

  // TWITTER META
  useMeta("twitter:card", "summary_large_image");
  useMeta("twitter:title", "Ekaiva - India’s Best Travel & Tour Agency");
  useMeta(
    "twitter:description",
    "Book your next trip with Ekaiva for affordable, luxurious, and stress-free travel experiences across India and the world."
  );
  useMeta(
    "twitter:image",
    "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png"
  );

  // CANONICAL
  useCanonical("https://ekaivaindia.com/rajasthan");

  return (
    <div>
      <Hero />
      <Rajabout />
      <div className="flex flex-col items-center justify-center w-full overflow-hidden text-gray-900">
        <FAQSection />
      </div>
      <Timeline />
      <Gallery />
      <FAQ />
      <Tour />
      <EkaivaFooter />
    </div>
  );
};

export default Mains;
