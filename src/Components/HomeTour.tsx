import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Correct import

const HomeTour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const tours = [
    {
      id: 1,
      title: "Taj Mahal Express",
      subtitle: "One Day Tour",
      description:
        "See the iconic Taj Mahal with expert guides and skip-the-line privileges.",
      highlight: "₹4999 / night",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      location: "Agra, India",
    },
    {
      id: 2,
      title: "Golden Triangle Classic",
      subtitle: "5 Nights",
      description:
        "Delhi, Agra, Jaipur — explore culture, monuments, and heritage hotels.",
      highlight: "₹8999 / night",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=800&q=80",
      location: "Amritsar, India",
    },
    {
      id: 3,
      title: "Rajasthan Explorer",
      subtitle: "7 Nights",
      description:
        "Forts, palaces, deserts, and vibrant local markets across Rajasthan.",
      highlight: "₹10999 / night",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      location: "Jaipur, India",
    },
    {
      id: 4,
      title: "Kerala Backwaters Bliss",
      subtitle: "4 Nights",
      description:
        "Houseboats, tranquil backwaters, and authentic South Indian cuisine.",
      highlight: "₹7499 / night",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      location: "Kerala, India",
    },
  ];

  const bottomImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
  ];

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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-2xl font-semibold">{tour.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{tour.subtitle}</p>
                  <div className="flex items-center justify-between mt-4">
                    <Link to="/category">
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
            <span
              className="inline-block w-28 h-9 bg-cover bg-center rounded-full align-middle mx-1"
              style={{ backgroundImage: `url(${bottomImages[0]})` }}
            ></span>
            and stress free travel. Get the lowest{" "}
            <span
              className="inline-block w-28 h-9 bg-cover bg-center rounded-full align-middle mx-1"
              style={{ backgroundImage: `url(${bottomImages[1]})` }}
            ></span>
            prices on hotels and tours{" "}
            <span
              className="inline-block w-28 h-9 bg-cover bg-center rounded-full align-middle mx-1"
              style={{ backgroundImage: `url(${bottomImages[2]})` }}
            ></span>
            always authentic and reliable.
          </h2>

          {/* Mobile */}
          <div className="md:hidden text-center px-2">
            <p className="text-2xl text-gray-800 leading-relaxed mb-4">
              Join thousands who trust Ekaiva for budget-friendly packages, savings, and stress-free travel.
              Get the lowest prices on hotels and tours  always authentic and reliable.
            </p>
            <div className="w-full h-10 rounded-3xl overflow-hidden mb-4">
              <img
                src={bottomImages[1]}
                alt="Nature surroundings"
                className="w-full h-full object-cover"
              />
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
