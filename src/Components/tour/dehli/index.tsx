import Dehliabout from "./dehliabout"
import FAQ from "./FAQ"
import FAQSection from "./ffaq"
import Gallery from "./gallery"
import Hero from "./hero"
import Timeline from "./timeline"


const indexs = () => {
  return (
    <div><Hero/>
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
    </div>
  )
}

export default indexs