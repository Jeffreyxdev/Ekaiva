import EkaivaFooter from "../../category/Footer";
import Tarabout from "./about";
import FAQ from "./faq";
import Hero from "./hero";
import Next2 from "./Next2";
import Next4 from "./next4";
import Timeline from "./timeline";
import Tour from "./tour";

import { useTitle, useMeta, useCanonical } from "../../usemeta";

const Index = () => {
  // PAGE TITLE
  useTitle("Taj Mahal Tour Package | Ekaiva Tours & Holidays");

  // DESCRIPTION & KEYWORDS
  useMeta(
    "description",
    "Experience the iconic Taj Mahal with Ekaiva — India’s best-rated travel agency offering affordable Taj Mahal tour packages, custom trips, and unforgettable travel experiences."
  );

  useMeta(
    "keywords",
    "Taj Mahal tour package, best India tours, Agra tours, India travel agency, holiday packages India, luxury travel India, affordable tours, custom India trips"
  );

  // OPEN GRAPH (property=)
  useMeta("og:title", "Taj Mahal Tour Package | Ekaiva Tours & Holidays", true);
  useMeta(
    "og:description",
    "Discover the Taj Mahal and more with Ekaiva — your trusted travel partner for affordable, luxury, and custom India tours.",
    true
  );
  useMeta(
    "og:image",
    "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png",
    true
  );
  useMeta("og:url", "https://ekaivaindia.com/taj-mahal", true);
  useMeta("og:type", "website", true);

  // TWITTER META
  useMeta("twitter:card", "summary_large_image");
  useMeta("twitter:title", "Taj Mahal Tour Package | Ekaiva Tours & Holidays");
  useMeta(
    "twitter:description",
    "Book your Taj Mahal tour with Ekaiva for affordable, luxurious, and unforgettable India travel experiences."
  );
  useMeta(
    "twitter:image",
    "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png"
  );

  // CANONICAL
  useCanonical("https://ekaivaindia.com/taj-mahal");

  return (
    <div>
      <Hero />
      <Tarabout />
      <div className="flex flex-col items-center justify-center w-full overflow-hidden text-gray-900">
        <Next2 />
      </div>
      <Timeline />
      <Next4 />
      <FAQ />
      <Tour />
      <EkaivaFooter />
    </div>
  );
};

export default Index;
