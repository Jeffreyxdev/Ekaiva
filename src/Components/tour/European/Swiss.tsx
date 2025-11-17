import EkaivaFooter from "../../Footer"
import Gallery from "../../galleryn"
import Tour from "../taj mahal/tour"
import EAbout from "./About"
import FAQQ from "./fad"
import FAQ from "./faq"
import Hero from "./Hero"
import Timeline from "./timeline"
import { Helmet } from "react-helmet-async";
const European = () => {
  return (
    <div>
           <Helmet>
  <title>Best India tour for foreigners</title>

  <meta
    name="description"
    content="Ekaiva is India’s best-rated travel and tour agency offering affordable holiday packages, honeymoon trips, group tours, and custom travel experiences across India and abroad."
  />

  <meta
    name="keywords"
    content="best travel  India, tour packages,Best place to visit in india for foreigners, holiday planner, honeymoon destinations, affordable tours, India travel agency, luxury travel India, adventure trips, family vacations, group travel, custom tours"
  />

 
  <meta property="og:title" content="Ekaiva - Best Travel & Tour Agency in India" />
  <meta
    property="og:description"
    content="Discover India and beyond with Ekaiva — your trusted travel agency for unforgettable tours, honeymoon packages, and luxury holidays."
  />
  <meta property="og:image" content="https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png" />
  <meta property="og:url" content="https://ekaivaindia.com/European-jewels" />
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
  <link rel="canonical" href="https://ekaivaindia.com/European-jewels" />
</Helmet>

      <Hero/>
      <EAbout/>
       <div  className="
        flex flex-col items-center justify-center 
        w-full overflow-hidden  
        text-gray-900
      ">
    <FAQQ /></div>
    <Timeline/>
    <Gallery/>
    <FAQ/>
    <Tour/>
    <EkaivaFooter/>
    </div>
  )
}

export default European