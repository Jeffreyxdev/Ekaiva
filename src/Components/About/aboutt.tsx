import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const Aboutt = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const tours = [
    {
      id: 1,
      title: "Rajasthan Royal Sojourn",
      subtitle: "One Day Tour",
      description:
        "From Jaipur’s pink city to Jodhpur’s blue lanes, live the stories of India’s kings and craftspeople.",
      
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      location: "Agra, India",
    },
    {
      id: 2,
      title: "Golden Triangle Discovery",
      subtitle: "5 Nights",
      description:
        "Visit Delhi, Agra, and Jaipur—palaces, forts, vibrant markets, and guided heritage trails.",
      
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=800&q=80",
      location: "Amritsar, India",
    },
    {
      id: 3,
      title: "Mystic Ganges Escape",
      subtitle: "7 Nights",
      description:
        "Rituals and river cruises in Varanasi. Deep cultural immersion, sacred temples, and local flavors.",
      
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      location: "Jaipur, India",
    },
    {
      id: 4,
      title: "Kerala Backwater Magic",
      subtitle: "4 Nights",
      description:
        "Glide on houseboats, explore tea plantations, and relax among lush beauty and authentic cuisine.",
      
      highlight: "UAH/night",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      location: "Tamil Nadu, India",
    },
    
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
    <section className="min-h-screen  bg-white py-16 px-4" id="tours">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
  <div className="flex flex-wrap justify-between items-start mb-12">
    {/* Left Side */}
    <div>
      <button className="px-5 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-4">
        03. Tours
      </button>
      <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-2">
       Indulge in India’s  <br />Timeless Wonders 
      </h2>
    </div>

    {/* Right Side */}
<div className="  flex-col items-start gap-3 mt-4 sm:mt-0 max-w-md">
  <div className="hidden sm:flex gap-3">
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



      {/* Paragraph now under buttons (opposite H2) */}
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        Step into the heart of India on curated itineraries—whether you crave the majesty of the Taj Mahal, spiritual Varanasi, or the wild colors of Rajasthan. With Ekaiva, every Indian journey is guided by experts, enriched with local culture, and backed by 24/7 assistance from booking to your safe return.
      </p>
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

export default Aboutt;