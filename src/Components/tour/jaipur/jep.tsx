import About from "./Aboout";
import Hero from "./hero";
import FAQSection from "./aq";
import Timeline from "./timeline";
import Gallery from "./Gallery";
import FAQr from "./faqn";
import Tour from "../taj mahal/tour";
import EkaivaFooter from "../../guide/Footer";

import { useTitle, useMeta, useCanonical } from "../../usemeta";

const Jep = () => {
  // PAGE TITLE
  useTitle("Jaipur Tour Package | Ekaiva Tours & Holidays");

  // DESCRIPTION & KEYWORDS
  useMeta(
    "description",
    "Explore Jaipur with Ekaiva — India’s best-rated travel agency offering affordable Jaipur tour packages, custom trips, and unforgettable travel experiences."
  );

  useMeta(
    "keywords",
    "Jaipur tour package, best India tours, Rajasthan tours, India travel agency, holiday packages India, luxury travel India, affordable tours, custom India trips"
  );

  // OPEN GRAPH (property=)
  useMeta("og:title", "Jaipur Tour Package | Ekaiva Tours & Holidays", true);
  useMeta(
    "og:description",
    "Discover Jaipur and beyond with Ekaiva — your trusted travel partner for affordable, luxury, and custom India tours.",
    true
  );
  useMeta(
    "og:image",
    "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png",
    true
  );
  useMeta("og:url", "https://ekaivaindia.com/jaipur", true);
  useMeta("og:type", "website", true);

  // TWITTER META
  useMeta("twitter:card", "summary_large_image");
  useMeta("twitter:title", "Jaipur Tour Package | Ekaiva Tours & Holidays");
  useMeta(
    "twitter:description",
    "Book your Jaipur tour with Ekaiva for affordable, luxurious, and unforgettable India travel experiences."
  );
  useMeta(
    "twitter:image",
    "https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png"
  );

  // CANONICAL
  useCanonical("https://ekaivaindia.com/jaipur");

  return (
    <div>
      <Hero />
      <About />
      <div className="flex flex-col items-center justify-center w-full overflow-hidden text-gray-900">
        <FAQSection />
      </div>
      <Timeline />
      <Gallery />
      <FAQr />
      <Tour />
      <EkaivaFooter />
    </div>
  );
};

export default Jep;
