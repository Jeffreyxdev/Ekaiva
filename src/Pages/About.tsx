import Navbar from "../Components/Navbar";
import Hero from "../Components/About/hero";
import MiceSection from "../Components/About/MiceSection";
import Abouts from "../Components/About/about";
import Abit from "../Components/About/abit"
import Aboutt from "../Components/About/aboutt";
import Next1 from "../Components/About/next1";
import FAQ from "../Components/About/faq";
import EkaivaFooter from "../Components/About/footer";
const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MiceSection/>
      <Abouts/>
      <Abit/>
      <Aboutt/>
      <Next1/>
      <FAQ/>
      <EkaivaFooter/>
    </div>
  )
}

export default About