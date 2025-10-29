import EkaivaFooter from "../../Footer"
import Gallery from "../../galleryn"
import Tour from "../taj mahal/tour"
import EAbout from "./About"
import FAQQ from "./fad"
import FAQ from "./faq"
import Hero from "./Hero"
import Timeline from "./timeline"

const European = () => {
  return (
    <div>
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