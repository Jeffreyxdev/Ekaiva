import Goldabout from "./Goldabout"
import Hero from "./Hero"


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
    <FAQSection /></div> 

    </div>
  )
}

export default Gold