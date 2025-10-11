import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Homeabout from "../Components/Homeabout"
import HomeTour from "../Components/HomeTour"
import PlanningSection from "../Components/PlanningSection"
import FAQSection from "../Components/HomeFaq"
import EkaivaFooter from "../Components/Footer"

const Home = () => {
  return (
    <main
      className="
        flex flex-col items-center justify-center 
        w-full overflow-hidden 
        bg-[#f6f8f7] 
        text-gray-900 
         
      "
    >
      <Navbar />

      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* About Section */}
      <section className="w-full max-w-7xl mx-auto">
        <Homeabout />
      </section>

      {/* Tour Section */}
      <section className="w-full max-w-7xl mx-auto">
        <HomeTour />
      </section>

      {/* Planning Section */}
      <section className="w-full max-w-7xl mx-auto pb-10 sm:pb-0">
        <PlanningSection />
         
      </section><FAQSection />
      {/* Footer Section */}
      
<EkaivaFooter />
    </main>
  )
}

export default Home
