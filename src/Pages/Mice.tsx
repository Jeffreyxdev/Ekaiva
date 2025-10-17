import Hero from "../Components/mice/hero";
import Navbar from "../Components/Navbar";
import About from "../Components/mice/abouts";
import Expm from "../Components/mice/expm";
import Service from "../Components/mice/service";
import Tourm from "../Components/mice/tourm";
import EkaivaRebootSection from "../Components/mice/rebooth";

const Mice = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <Expm />
      <Tourm  />
      <EkaivaRebootSection/>
    </div>
  )
}

export default Mice