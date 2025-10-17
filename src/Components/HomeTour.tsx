import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const HomeTour = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const tours = [
    {
      id: 1,
      title: "Panorama Rise",
      subtitle: "Taj Mahal with Agra Sightseeing",
      description:
        "For those who want to wake up with a view that is impossible to forget. A stay near the Taj Mahal that blends modern comfort with timeless history.",
      price: 2800,
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      location: "Agra, India",
    },
    {
      id: 2,
      title: "Panorama Rise",
      subtitle: "Experience the Golden Temple",
      description:
        "Wake up to the golden reflection of Amritsar's sacred temple and a morning that feels divine.",
      price: 2800,
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=800&q=80",
      location: "Amritsar, India",
    },
    {
      id: 3,
      title: "Panorama Rise",
      subtitle: "Pink City Palace Tour",
      description:
        "A royal escape in Jaipur surrounded by history, art, and architectural wonder.",
      price: 2800,
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      location: "Jaipur, India",
    },
    {
      id: 4,
      title: "Panorama Rise",
      subtitle: "Sacred Temples of South",
      description:
        "From intricate carvings to serene surroundings, this is your peaceful temple retreat.",
      price: 2800,
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      location: "Tamil Nadu, India",
    },
    {
      id: 5,
      title: "Panorama Rise",
      subtitle: "Heritage Walk Through Time",
      description:
        "Rediscover Delhi's timeless culture and vibrant life on this heritage stay.",
      price: 2800,
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&q=80",
      location: "Delhi, India",
    },
  ];

  const bottomImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
  ];

  // Handle horizontal scroll tracking
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.clientWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen bg-[#f8f9fa] py-16 px-4" id="tours">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap justify-between items-start mb-12">
          <div>
            <button className="px-5 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-4">
              03. Tours
            </button>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
              Choose a Tour <br /> that speaks to you
            </h2>
            <p className="text-gray-600 max-w-md">
              We've combined boutique hotel comfort with nature's calm for
              unforgettable journeys.
            </p>
          </div>

          <div className="flex gap-3 mt-4 sm:mt-0">
            <button className="px-5 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
              Date
            </button>
            <button className="px-5 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
              People
            </button>
            <button className="px-5 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800">
              Choose Tour
            </button>
          </div>
        </div>

        {/* Tour Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide
            pb-4
          "
        >
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              layout
              onClick={() =>
                setExpandedCard(expandedCard === tour.id ? null : tour.id)
              }
              transition={{ layout: { duration: 0.5, type: "spring" } }}
              className={`
                relative bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer transition-all duration-500
                snap-center shrink-0 w-[85%] sm:w-[350px]
              `}
            >
              {/* Main Card Container */}
              <div
                className={`flex ${
                  expandedCard === tour.id ? "flex-row" : "flex-col"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative ${
                    expandedCard === tour.id ? "w-1/2" : "w-full"
                  }`}
                >
                  <motion.img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-[530px] object-cover"
                    layout
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-2xl font-semibold">{tour.title}</h3>
                    {!expandedCard && (
                      <p className="text-sm text-gray-200 line-clamp-2 mt-1">
                        {tour.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-4">
                      <span className="font-bold text-lg">₹{tour.price}</span>
                      <button className="px-4 py-2 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-100">
                        {expandedCard === tour.id ? "Close" : "Know more"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Section */}
                <AnimatePresence>
                  {expandedCard === tour.id && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "50%" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="bg-white p-6 text-gray-700 flex flex-col justify-center space-y-4"
                    >
                      <p className="font-semibold text-xl text-gray-800">
                        {tour.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {tour.description}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin size={16} />
                        <span>{tour.location}</span>
                      </div>
                      <div className="pt-4">
                        <a
                          href="https://wa.me/917011020040?text=Hi%20Ekaiva,%20I'm%20interested%20in%20booking%20a%20stay."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 py-2.5 bg-[#333] text-white rounded-xl hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base text-center block"
                        >
                          Book Now
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-6 space-x-2 sm:hidden">
          {tours.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Bottom Text - Desktop: Inline images, Mobile: Full-width stacked */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mt-20"
        >
          {/* Desktop Version - Hidden on Mobile */}
          <h2 className="hidden md:block text-3xl text-gray-700 leading-relaxed">
            Whether you're planning a{" "}
            <span
              className="inline-block w-20 h-8 bg-cover bg-center rounded-full align-middle mx-1"
              style={{ backgroundImage: `url(${bottomImages[0]})` }}
            ></span>{" "}
            romantic getaway, a solo getaway or a cozy weekend every home{" "}
            <span
              className="inline-block w-20 h-8 bg-cover bg-center rounded-full align-middle mx-1"
              style={{ backgroundImage: `url(${bottomImages[1]})` }}
            ></span>{" "}
            is more than just a place to be surrounded by nature, with{" "}
            <span
              className="inline-block w-20 h-8 bg-cover bg-center rounded-full align-middle mx-1"
              style={{ backgroundImage: `url(${bottomImages[2]})` }}
            ></span>{" "}
            everything taken care of.
          </h2>

          {/* Mobile Version - Vertical Layout with Full-Width Images */}
          <div className="md:hidden text-left px-2">
            <p className="text-2xl text-gray-800 leading-relaxed mb-4">
              Whether you're planning a romantic getaway, a solo getaway or a cozy weekend
            </p>
          

            <p className="text-2xl text-gray-800 leading-relaxed mb-4">
              with every home is more than just a place to surrounded by nature, with everything taken care of.
            </p>
            
            <div className="w-full h-full rounded-3xl overflow-hidden mb-4">
              <img
                src={bottomImages[1]}
                alt="Nature surroundings"
                className="w-lg h-10 "
              />
            </div>

           
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HomeTour;