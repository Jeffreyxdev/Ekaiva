import Hero from "../Components/mice/hero";

import About from "../Components/mice/abouts";
import Expm from "../Components/mice/expm";
import Service from "../Components/mice/service";
import Tourm from "../Components/mice/tourm";
import EkaivaRebootSection from "../Components/mice/rebooth";
import MiceHeroSection from "../Components/mice/micem";
import FAQ from "../Components/mice/faq";
import Gallery from "../Components/mice/Galleryx";
import EkaivaFooter from "../Components/mice/Footer";

const Mice = () => {
  return (
    <div>
      
      <Hero />
      <About/>
      <Service/>
      <Expm />
      <Tourm  />
      <EkaivaRebootSection/>
      <Gallery/>
      <MiceHeroSection/>
      <FAQ/>
      <EkaivaFooter/>

    </div>
  )
}

export default Mice