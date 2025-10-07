import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Homeabout from "../Components/Homeabout"
import HomeTour from "../Components/HomeTour"
import PlanningSection from "../Components/PlanningSection"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Homeabout/>
        <HomeTour/>
        <PlanningSection/>
    </div>
  )
}

export default Home