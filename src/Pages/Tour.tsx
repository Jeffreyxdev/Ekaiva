
import Hero from "../Components/tour/hero"
import Tourc from "../Components/tour/tour"
import Gallery from "../Components/tour/gallery"
import View from "../Components/tour/view"
import FAQ from "../Components/tour/faq"
import EkaivaFooter from "../Components/tour/footer"
import Tour2 from "../Components/tour/tour2"
import { Helmet } from "react-helmet-async";

const Tour = () => {
  return (
    <div>
       <Helmet>
  <title>Best Travel Agency in India | Ekaiva Tours & Holidays</title>

  <meta
    name="description"
    content="Ekaiva is India’s best-rated travel and tour agency offering affordable holiday packages, honeymoon trips, group tours, and custom travel experiences across India and abroad."
  />

  <meta
    name="keywords"
    content="best travel agency in India, tour packages, holiday planner, honeymoon destinations, affordable tours, India travel agency, luxury travel India, adventure trips, family vacations, group travel, custom tours"
  />

 
  <meta property="og:title" content="Ekaiva - Best Travel & Tour Agency in India" />
  <meta
    property="og:description"
    content="Discover India and beyond with Ekaiva — your trusted travel agency for unforgettable tours, honeymoon packages, and luxury holidays."
  />
  <meta property="og:image" content="https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png" />
  <meta property="og:url" content="https://ekaivaindia.com/tour" />
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
  <link rel="canonical" href="https://ekaivaindia.com/tour" />
</Helmet>

      
      <Hero/>
      <Tourc/>
      <Tour2/>
      <Gallery/>
      <View/>
      <FAQ/>
     <EkaivaFooter/>
    </div>
  )
}

export default Tour