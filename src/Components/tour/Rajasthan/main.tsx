import EkaivaFooter from "../footer"
import Tour from "../taj mahal/tour"
import FAQ from "./faq"
import Gallery from "./Gallery"
import Hero from "./Hero"
import FAQSection from "./next"
import Rajabout from "./Rajabout"
import Timeline from "./timeline"


const mains = () => {
  return (
    <div>
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