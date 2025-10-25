import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Homeabout from "../Components/Homeabout"
import HomeTour from "../Components/HomeTour"
import FAQSection from "../Components/HomeFaq"
import EkaivaFooter from "../Components/Footer"
import FAQ from '../Components/faq'
import Exp from "../Components/exp"
import Gallery from "../Components/Gallery"

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
      <section className="o">
        <Homeabout />
      </section>

      {/* Tour Section */}
      <section className="w-full max-w-7xl mx-auto">
        <HomeTour />
      </section>

      {/* Planning Section */}
      <FAQSection />
      {/* Footer Section */}
      <Exp/>
      <FAQ/>
      <Gallery/>
      <EkaivaFooter />
    </main>
  )
}

export default Home
