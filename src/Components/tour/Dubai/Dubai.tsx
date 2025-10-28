

import EkaivaFooter from "../../mice/Footer"
import Gallery from "../gallery"
import Tour from "../taj mahal/tour"

import Dubaiabout from "./About"
import FAQ from "./FAQ"
import FAQQ from "./fqq"
import Hero from "./Hero"
import Timeline from "./Timeline"


const Dubai = () => {
  return (
    <div><Hero/>
    <Dubaiabout/>
     <div  className="
        flex flex-col items-center justify-center 
        w-full overflow-hidden 
         
        text-gray-900
         
      ">
    <FAQQ/></div> 
    <Timeline/>
    <Gallery/>
    <FAQ/>
    <Tour/>
    <EkaivaFooter/>
    </div>
  )
}

export default Dubai