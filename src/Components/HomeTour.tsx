import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Correct import
import { tours } from "./data";
const HomeTour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);




  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.clientWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4" id="tours">
      {/* Header */}
      <div className="max-w-7xl mx-auto lg:mb-10 sm:mb-0">
        <div className="flex flex-wrap justify-between items-start mb-12 sm:mb-6">
          {/* Left */}
          <div>
            <button className="px-5 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-4">
              03. Tours
            </button>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight sm:mb-5 lg:mb-2">
              Choose a Tour <br /> that speaks to you
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-3 lg:mt-10  sm:mt-5 max-w-md">
            <p className="text-gray-600 text-md leading-relaxed">
              Explore a curated list of top Indian packages crafted for culture lovers,
              history buffs, and relaxation seekers. Enjoy the best guides, priority
              access, and savings not found elsewhere.
            </p>
          </div>
        </div>

        {/* Tour Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4"
        >
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              layout
              className="relative bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer transition-all duration-500 snap-center shrink-0 w-[85%] sm:w-[350px]"
            >
              <div className="relative">
                <motion.img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-[530px] object-cover"
                  draggable="false"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-2xl font-semibold">{tour.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{tour.subtitle}</p>
                  <div className="flex items-center justify-between mt-4">
                  <Link to={tour.route}>
  <button className="px-4 py-2 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-100">
    Know more
  </button>
</Link>

                  </div>
                </div>
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

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto text-center mt-20"
        >
          {/* Desktop */}
          <h2 className="hidden md:block text-4xl text-gray-700 leading-relaxed">
            Join thousands who trust Ekaiva for budget-friendly packages, savings on every booking,{" "}
           
            and stress free travel. Get the lowest{" "}
          
            prices on hotels and tours{" "}
            
            always authentic and reliable.
          </h2>

          {/* Mobile */}
          <div className="md:hidden text-center px-2">
            <p className="text-2xl text-gray-800 leading-relaxed mb-4">
              Join thousands who trust Ekaiva for budget-friendly packages, savings, and stress-free travel.
              Get the lowest prices on hotels and tours  always authentic and reliable.
            </p>
            <div className="w-full h-10 rounded-3xl overflow-hidden mb-4">
             
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hide Scrollbar */}
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
