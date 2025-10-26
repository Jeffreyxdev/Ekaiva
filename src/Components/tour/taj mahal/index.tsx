import EkaivaFooter from "../../category/Footer"
import Tarabout from "./about"
import FAQ from "./faq"
import Hero from "./hero"
import Next2 from './Next2'
import Next4 from "./next4"
import Timeline from "./timeline"
import Tour from "./tour"

const index = () => {
  return (
    <div>
        <Hero/>
        <Tarabout/>
        <div  className="
        flex flex-col items-center justify-center 
        w-full overflow-hidden 
         
        text-gray-900
         
      ">
    <Next2 /></div>
    <Timeline/>
    <Next4/>
    <FAQ/>
    <Tour/>
    <EkaivaFooter/>
    </div>
  )
}

export default index