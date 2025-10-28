import About from "./Aboout"
import Hero from "./hero"
import FAQSection from './aq'
import Timeline from "./timeline"
import Gallery from "./Gallery"

const Jep = () => {
  return (
    <div><Hero/>
    <About/>
    <div  className="
        flex flex-col items-center justify-center 
        w-full overflow-hidden 
         
        text-gray-900
         
      ">
    <FAQSection /></div> 
    <Timeline/>
    <Gallery/>
    
    </div>
  )
}

export default Jep