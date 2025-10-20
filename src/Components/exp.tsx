import exp2 from '../assets/exp.png'
import india from '../assets/india.png'
import delhi from '../assets/Delhi.jpg'
import mon from '../assets/mon.png'
function exp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-12">
          05. About
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <h1 className="text-5xl font-light leading-tight lg:mb-8">
              Unlock India’s Best Budget <br />
              MICE Packages
            </h1>
          </div>
          <div>
            <p className="text-gray-600  leading-relaxed lg:mt-4">
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
    <h2 className="text-4xl font-light mb-6">
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
      loading="lazy"
      decoding="async"
      alt="India travel event"
      className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
    />
  </div>
  <div className="order-1 lg:order-2">
    <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
      <span className="w-12 h-px bg-gray-300"></span>
    </div>
    <h2 className="text-4xl font-light mb-6">
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
    <h2 className="text-4xl font-light mb-6">
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
      loading="lazy"
      decoding="async"
      className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
    />
  </div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
< div className="relative order-2 lg:order-1">
    <img
      src={mon}
      loading="lazy"
      decoding="async"
      alt="Delhi event"
      className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
    />
  </div> <div className="order-1 lg:order-1">
    <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
      <span className="w-12 h-px bg-gray-300"></span>
    </div>
    <h2 className="text-4xl font-light mb-6">
        Get a Free MICE Quote Today
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Contact Ekaiva for competitive rates, seasonal offers, and dedicated support for every stage—from concept to completion
    </p>
  </div>
  
</div>
          <div className="mt-32 text-center" id="gallery">
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-8">
              02. Customer Gallery
            </button>

            <h2 className="text-5xl font-light mb-6">
              Memorable Journeys Captured<br />
              
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
              Take a peek at real photos from Ekaiva travelers—smiling families, happy solo guests, and exotic locations all enjoyed at budget prices.Our gallery highlights authentic Indian experiences, MICE events, and international tours made memorable by value and care.
            </p>

            {/* ✅ Added text-left to override parent text-center */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group">
                  <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Eiffel Tower in Paris"
                       loading="lazy"
                       decoding="async"
                      className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-2xl font-light mb-3 text-left">European Jewel</h3>

                  <p className="text-gray-600 text-sm text-left mb-4">
                    13 Days · 8 Locations · Food Included · Airport Pickup/drop · Accommodation{" "}
                    <button className="text-gray-900 underline hover:no-underline">more</button>
                  </p>

                  <button className="bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm hover:bg-gray-800 transition-colors">
                    Know more
                  </button>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

export default exp;
