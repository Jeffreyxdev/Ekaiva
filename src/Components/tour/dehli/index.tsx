import Tour from "../taj mahal/tour";
import Dehliabout from "./dehliabout";
import FAQ from "./FAQ";
import FAQSection from "./ffaq";
import EkaivaFooter from "./footer";
import Gallery from "./gallery";
import Hero from "./hero";
import Timeline from "./timeline";

import { useTitle, useMeta, useCanonical } from "../../usemeta";

const Indexs = () => {
  // TITLE
  useTitle("Dehli tour package");

  // DESCRIPTION & KEYWORDS
  useMeta(
    "description",
    "Ekaiva is India’s best-rated travel and tour agency offering affordable holiday packages, visit dehli best tour package, honeymoon trips india, group tours, and custom travel experiences across India and abroad."
  );

  useMeta(
    "keywords",
    "best travel India, delhi tour, tour packages, Best place to visit in india for foreigners, holiday planner, honeymoon destinations, affordable tours, India travel agency, luxury travel India, adventure trips, family vacations, group travel, custom tours"
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
  useMeta("og:url", "https://ekaivaindia.com/delhi", true);
  useMeta("og:type", "website", true);

  // TWITTER META
  useMeta("twitter:card", "summary_large_image");
  useMeta("twitter:title", "Ekaiva - Delhi Best Travel & Tour Agency");
  useMeta(
    "twitter:description",
    "Book your next trip with Ekaiva for affordable, luxurious, and stress-free travel experiences across India and the world."
  );
  useMeta(
    "twitter:image",
    "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png"
  );

  // CANONICAL
  useCanonical("https://ekaivaindia.com/delhi");

  return (
    <div>
      <Hero />
      <Dehliabout />
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

export default Indexs;
