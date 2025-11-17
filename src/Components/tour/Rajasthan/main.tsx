import EkaivaFooter from "../footer"
import Tour from "../taj mahal/tour"
import FAQ from "./faq"
import Gallery from "./Gallery"
import Hero from "./Hero"
import FAQSection from "./next"
import Rajabout from "./Rajabout"
import Timeline from "./timeline"
import { Helmet } from "react-helmet-async";

const mains = () => {
  return (
    <div>
               <Helmet>
  <title>Rajasthan tour</title>

  <meta
    name="description"
    content="Ekaiva is India’s best-rated travel and tour agency offering affordable holiday packages, honeymoon trips, group tours,visit Rajastan tour packages, and custom travel experiences across India and abroad."
  />

  <meta
    name="keywords"
    content="rajasthan tour, golden triangle, tour, inida tour, south india ,kerala tour, mice travel,best travel  India, tour packages,Best place to visit in india for foreigners, holiday planner, honeymoon destinations, affordable tours, India travel agency, luxury travel India, adventure trips, family vacations, group travel, custom tours"
  />

 
  <meta property="og:title" content="Ekaiva - Best Travel & Tour Agency in India" />
  <meta
    property="og:description"
    content="Discover India and beyond with Ekaiva — your trusted travel agency for unforgettable tours, honeymoon packages, and luxury holidays."
  />
  <meta property="og:image" content="https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png" />
  <meta property="og:url" content="https://ekaivaindia.com/rajasthan" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ekaiva - India’s Best Travel & Tour Agency" />
  <meta
    name="twitter:description"
    content="Book your next trip with Ekaiva for affordable, luxurious, and stress-free travel experiences across India and the world."
  />
  <meta name="twitter:image" content="https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png" />

  {/* Canonical link */}
  <link rel="canonical" href="https://ekaivaindia.com/rajasthan" />
</Helmet>

        <Hero/>
        <Rajabout/>
          <div  className="
        flex flex-col items-center justify-center 
        w-full overflow-hidden 
         
        text-gray-900
         
      ">
    <FAQSection /></div>
    <Timeline/>
    <Gallery/>
    <FAQ/>
  <Tour/>
    <EkaivaFooter/>

    </div>
  )
}

export default mains