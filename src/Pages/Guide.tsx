import FAQSection from "../Components/guide/faq"
import FAQ from "../Components/guide/faqq"
import Hero from "../Components/guide/hero"
import Next1 from "../Components/guide/next1"
import Next2 from "../Components/guide/next2"
import Navbar from "../Components/Navbar"
import EkaivaFooter from "../Components/guide/Footer"

const Guide = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Next1/>
      <FAQSection/>
      <Next2/>
      <FAQ/>
      <EkaivaFooter/>
    </div>
  )
}

export default Guide