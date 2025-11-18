import EkaivaFooter from "../../Footer";
import Gallery from "../../galleryn";
import Tour from "../taj mahal/tour";
import EAbout from "./About";
import FAQQ from "./fad";
import FAQ from "./faq";
import Hero from "./Hero";
import Timeline from "./timeline";

import { useTitle, useMeta, useCanonical } from "../../usemeta";

const European = () => {
  // TITLE
  useTitle("Best India tour for foreigners");

  // DESCRIPTION & KEYWORDS
  useMeta(
    "description",
    "Ekaiva is India’s best-rated travel and tour agency offering affordable holiday packages, honeymoon trips, group tours, and custom travel experiences across India and abroad."
  );

  useMeta(
    "keywords",
    "best travel India, tour packages, Best place to visit in India for foreigners, holiday planner, honeymoon destinations, affordable tours, India travel agency, luxury travel India, adventure trips, family vacations, group travel, custom tours"
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
  useMeta("og:url", "https://ekaivaindia.com/European-jewels", true);
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
  useCanonical("https://ekaivaindia.com/European-jewels");

  return (
    <div>
      <Hero />
      <EAbout />
      <div className="flex flex-col items-center justify-center w-full overflow-hidden text-gray-900">
        <FAQQ />
      </div>
      <Timeline />
      <Gallery />
      <FAQ />
      <Tour />
      <EkaivaFooter />
    </div>
  );
};

export default European;
