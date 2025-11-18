import Hero from "../Components/mice/hero";
import About from "../Components/mice/abouts";
import Expm from "../Components/mice/expm";
import Service from "../Components/mice/service";
import Tourm from "../Components/mice/tourm";
import EkaivaRebootSection from "../Components/mice/rebooth";
import MiceHeroSection from "../Components/mice/micem";
import FAQ from "../Components/mice/faq";
import Gallery from "../Components/mice/Galleryx";
import EkaivaFooter from "../Components/mice/Footer";

import { useTitle, useMeta, useCanonical } from "../Components/usemeta";

const Mice = () => {

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
  useMeta("og:url", "https://ekaivaindia.com/", true);
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
  useCanonical("https://ekaivaindia.com/");

  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Expm />
      <Tourm />
      <EkaivaRebootSection />
      <Gallery />
      <MiceHeroSection />
      <FAQ />
      <EkaivaFooter />
    </div>
  );
};

export default Mice;
