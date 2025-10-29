import exp2 from '../assets/exp.png'
import india from '../assets/india.png'
import delhi from '../assets/Delhi.jpg'
import mon from '../assets/mon.png'
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
              Unlock India’s Best Budget <br />
              MICE Packages
            </h1>
          </div>
          <div>
            <p className="text-gray-600 text-md leading-relaxed lg:mt-4">
              Access expert MICE planning nationwide—meetings, incentives, conferences, and events, all budgeted for maximum value.Choose from state-of-the-art venues, local group excursions, and tailored activities to match your business goals and budget.
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
      Smart, Cost-Efficient MICE Solutions
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Enjoy professional venues, seamless event logistics, and custom group activities—all designed to maximize impact while saving costs for teams of any size.
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
      Why Choose Ekaiva for MICE?
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Save more with exclusive discounts, trusted partners, and transparent pricing. We ensure stress-free planning for corporate travel, team retreats, and large group events—all tailored for NRIs and global businesses.
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
      Custom Itineraries and Group Perks
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Every Ekaiva MICE package is flexible, letting you add local excursions, cultural experiences, and special amenities for a truly unique event.
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
        Get a Free MICE Quote Today
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Contact Ekaiva for competitive rates, seasonal offers, and dedicated support for every stage—from concept to completion
    </p>
  </div>
  
</div>
  
<Gallery />

      </div>
    </div>
  );
}

export default exp;
