import EkaivaFooter from "../../Footer"
import Gallery from "../gallery"
import Tour from "../taj mahal/tour"
import Tourc from "../tour"
import Kabout from "./aout"
import FAQ from "./faq"
import FAQSection from "./fas"
import Hero from "./Hero"
import Timeline from "./timeline"


const Kerala = () => {
  return (
    <div><Hero/>
    <Kabout/>
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

export default Kerala