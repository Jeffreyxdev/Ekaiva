import Navbar from "../Components/Navbar"
import Hero from "../Components/tour/hero"
import Tourc from "../Components/tour/tour"
import Gallery from "../Components/tour/gallery"
import View from "../Components/tour/view"
import FAQ from "../Components/tour/faq"
import EkaivaFooter from "../Components/tour/footer"

const Tour = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tourc/>
      <Gallery/>
      <View/>
      <FAQ/>
     <EkaivaFooter/>
    </div>
  )
}

export default Tour