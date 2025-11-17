import Tour from "../taj mahal/tour"
import Dehliabout from "./dehliabout"
import FAQ from "./FAQ"
import FAQSection from "./ffaq"
import EkaivaFooter from "./footer"
import Gallery from "./gallery"
import Hero from "./hero"
import Timeline from "./timeline"
import { Helmet } from "react-helmet-async";

const indexs = () => {
  return (
    <div>
               <Helmet>
  <title>Dehli tour package</title>

  <meta
    name="description"
    content="Ekaiva is India’s best-rated travel and tour agency offering affordable holiday packages,visit dehli best tour pacakage, honeymoon trips india, group tours, and custom travel experiences across India and abroad."
  />

  <meta
    name="keywords"
    content="best travel  India,dehli tour,  tour packages,Best place to visit in india for foreigners, holiday planner, honeymoon destinations, affordable tours, India travel agency, luxury travel India, adventure trips, family vacations, group travel, custom tours"
  />

 
  <meta property="og:title" content="Ekaiva - Best Travel & Tour Agency in India" />
  <meta
    property="og:description"
    content="Discover India and beyond with Ekaiva — your trusted travel agency for unforgettable tours, honeymoon packages, and luxury holidays."
  />
  <meta property="og:image" content="https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png" />
  <meta property="og:url" content="https://ekaivaindia.com/delhi" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ekaiva - dehli Best Travel & Tour Agency" />
  <meta
    name="twitter:description"
    content="Book your next trip with Ekaiva for affordable, luxurious, and stress-free travel experiences across India and the world."
  />
  <meta name="twitter:image" content="https://raw.githubusercontent.com/Jeffreyxdev/Ekaiva/refs/heads/main/public/Group%2037.png" />

  {/* Canonical link */}
  <link rel="canonical" href="https://ekaivaindia.com/delhi" />
</Helmet>

      <Hero/>
    <Dehliabout/>      
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

export default indexs