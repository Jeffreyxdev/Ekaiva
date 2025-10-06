import { motion } from "framer-motion";

import { ArrowRight, MapPin, Calendar, Users, } from "lucide-react";
import heroBg from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Redefining Journeys,
            <br />
            Unlocking Horizons
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90 w-full md:w-3/4 mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Explore the world one destination at a time From hidden escapes to iconic landmarks, Ekaiva takes you where dreams meet destinations.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-full max-w-md lg:max-w-4xl bg-white rounded-3xl shadow-2xl p-6"
          >
            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-row gap-6 items-center">
              {/* Origin */}
              <div className="flex items-start gap-3 flex-1">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-800">Origin</label>
                  <input
                    type="text"
                    placeholder="Search Airport"
                    className="text-sm text-gray-500 outline-none border-none bg-transparent"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-gray-200 flex-shrink-0"></div>

              {/* Destination */}
              <div className="flex items-start gap-3 flex-1">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-800">Destination</label>
                  <input
                    type="text"
                    placeholder="Search Departure"
                    className="text-sm text-gray-500 outline-none border-none bg-transparent"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-gray-200 flex-shrink-0"></div>

              {/* Guests */}
              <div className="flex items-start gap-3 flex-1">
                <Users className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-800">Guests</label>
                  <input
                    type="text"
                    placeholder="No. of Guests"
                    className="text-sm text-gray-500 outline-none border-none bg-transparent"
                  />
                </div>
              </div>

              
            </div>

            {/* Mobile Layout */}
            <div className="flex lg:hidden flex-col gap-4">
              {/* Origin */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="flex flex-col flex-1">
                  <label className="text-sm font-semibold text-gray-800">Origin</label>
                  <input
                    type="text"
                    placeholder="Search Arrival"
                    className="text-sm text-gray-400 outline-none border-none bg-transparent w-full"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="flex flex-col flex-1">
                  <label className="text-sm font-semibold text-gray-800">Destination</label>
                  <input
                    type="text"
                    placeholder="Search Departure"
                    className="text-sm text-gray-400 outline-none border-none bg-transparent w-full"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <Users className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="flex flex-col flex-1">
                  <label className="text-sm font-semibold text-gray-800">Guests</label>
                  <input
                    type="text"
                    placeholder="No. Of Guests"
                    className="text-sm text-gray-400 outline-none border-none bg-transparent w-full"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-colors group w-full mt-2">
                <ArrowRight className="h-5 w-5 rotate-90" />
                Search
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
