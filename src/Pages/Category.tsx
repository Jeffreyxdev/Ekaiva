import FAQ from "../Components/category/faq"
import EkaivaFooter from "../Components/category/Footer"
import Hero from "../Components/category/hero"
import Next1 from "../Components/category/next1"
import Next2 from '../Components/category/next2'
import Timeline from "../Components/category/next3"
import Next4 from "../Components/category/next4"

const Category = () => {
  return (
    <div>
     
      <Hero/>
    <Next1/>
    <div  className="
        flex flex-col items-center justify-center 
        w-full overflow-hidden 
         
        text-gray-900 
         
      ">
    <Next2 /></div>
    <Timeline/>
    <Next4/>
    <FAQ/>

    <EkaivaFooter/> 
    </div>
  )
}

export default Category