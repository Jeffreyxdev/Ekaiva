import EkaivaFooter from "../../Footer"
import Gallery from "../gallery"
import Tour from "../taj mahal/tour"
import FAQ from "./Faqt"
import FAQQ from "./Faxx"
import Goldabout from "./Goldabout"
import Hero from "./Hero"
import Timeline from "./timeline"


const Gold = () => {
  return (
    <div>
      <Hero/>
      <Goldabout/>
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

export default Gold