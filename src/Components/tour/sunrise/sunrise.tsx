import Hero from "./Hero"
import Inq from "./Inq";
import { useTitle, useMeta, useCanonical } from "../../usemeta";
import About from "./about";
import Timeline from "./time";
import Next4 from "./Next4";
import FAQ from "./FAQ";
import EkaivaFooter from "../footer";

const Sunrise = () => {
  useTitle(" one day Taj Mahal Tour Package ");

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
  useMeta("og:url", "https://ekaivaindia.com/sunrise-taj-mahal-tour", true);
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
  useCanonical("https://ekaivaindia.com/sunrise-taj-mahal-tour");  return (
    <div>
   <Hero/>
   <About/>
   <Inq/>
   <Timeline/>
   <Next4/>
   <FAQ/>
   <EkaivaFooter/>
    </div>
  )
}

export default Sunrise