import exp2 from '../assets/exp.png'
import india from '../assets/india.png'
import delhi from '../assets/Delhi.jpg'

import Gallery from './galleryn'
function exp() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-12">
          05. About
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <h1 className="text-5xl sm:text-4xl font-light leading-tight lg:mb-8">
              Unlock India’s Most Trusted <br />
              Travel Services
            </h1>
          </div>
          <div>
            <p className="text-gray-600 text-md leading-relaxed lg:mt-4">
              Benefit from Ekaiva’s expert travel planning
              nationwide from curated itineraries and
              handpicked stays to seamless transport and
              personalized experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
  {/* TEXT FIRST ON MOBILE */}
  <div className="order-1 lg:order-1">
    <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
      <span className="w-12 h-px bg-gray-300"></span>
    </div>
    <h2 className="text-4xl sm:text-3xl font-light mb-6">
      Reliable, Cost-Effective Travel Solutions
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Count on Ekaiva India for thoughtfully chosen
      hotels, smooth city transfers, and reliable travel
      partners at every step. Our services are designed to
      offer comfort and efficiency, letting you relax while
      every detail is covered. Budget-friendly deals and
      up-front pricing mean your trip stays both
      affordable and transparent from start to finish. With
      Ekaiva, experience worry-free journeys where
      service meets value on every road traveled.
    </p>
  </div>

  {/* IMAGE SECOND ON MOBILE */}
  <div className="relative order-2 lg:order-2">
    <img
      src={exp2}
      alt="Scenic bay with boats and mountains"
      className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
    />
  </div>
</div>

{/* SECOND SECTION — IMAGE FIRST ON DESKTOP, TEXT FIRST ON MOBILE */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
  <div className="relative order-2 lg:order-1">
    <img
      src={india}
      loading="eager"
      decoding="async"
      alt="India travel event"
      className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
    />
  </div>
  <div className="order-1 lg:order-2">
    <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
      <span className="w-12 h-px bg-gray-300"></span>
    </div>
    <h2 className="text-4xl sm:text-3xl  font-light mb-6">
      Why Choose Ekaiva for Travel?
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
       Ekaiva India combines local knowledge with
        global standards to create safe and memorable
        experiences for all travelers. Every trip is guided by
        our in-depth expertise and a genuine passion for
        exploring new destinations. We deliver ongoing
        support and honest advice, giving you confidence
        at every stage of your journey. For leisure,
        adventure, or business travel, trust Ekaiva to
        surpass your expectations each time you travel.
    </p>
  </div>
</div>

{/* THIRD SECTION — TEXT FIRST ALWAYS */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
  <div className="order-1 lg:order-1">
    <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
      <span className="w-12 h-px bg-gray-300"></span>
    </div>
    <h2 className="text-4xl sm:text-3xl  font-light mb-6">
       Custom Itineraries and Special Perks
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Ekaiva India personalizes every itinerary, blending
      local culture, special requests, and unique activities
      to your taste. Our team listens to your wishes,
      ensuring each trip includes added touches and
      exclusive experiences. Whether you seek
      adventure, relaxation, or discovery, we curate
      journeys that reflect your interests and timeline.
      Every guest enjoys memorable extras and
      dedicated attentionmaking travel extraordinary
      with Ekaiva.
    </p>
  </div>
  <div className="relative order-2 lg:order-2">
    <img
      src={delhi}
      alt="Delhi event"
      loading="eager"
      decoding="async"
      className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
    />
  </div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
< div className="relative order-2 lg:order-1">

    <img
      src='https://images.unsplash.com/photo-1461603950871-cd64bcf7acf0'
      loading="eager"
      decoding="async"
      alt="Delhi event"
      className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
    />
  </div> <div className="order-1 lg:order-1">
    <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
      <span className="w-12 h-px bg-gray-300"></span>
    </div>
    <h2 className="text-4xl sm:text-3xl  font-light mb-6">
        Get a Free Travel Quote Today
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Begin by reaching out to Ekaiva India’s responsive
      consultants, who listen and tailor packages to your
      needs. We quickly provide transparent quotes, clear
      recommendations, and the best deals suited for
      you. Our friendly team stays with you from planning
      to booking and beyond, offering expert support at
      every turn. Let Ekaiva simplify your travel dreams
      into a smooth reality, starting with a no-obligation
      quote today.
    </p>
  </div>
  
</div>
  
<Gallery />

      </div>
    </div>
  );
}

export default exp;
