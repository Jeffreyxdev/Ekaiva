import { motion } from "framer-motion";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { ArrowRight, MapPin,Calendar,  Users, } from "lucide-react";
import heroBg from "../assets/hero.png";

const Hero = () => {
  
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    guests: "",
      checkin: "",
    checkout: "",
  });

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleWhatsAppConnect = () => {
    const { origin, destination, guests, checkin, checkout } = formData;
    const message = `Hi Ekaiva, I'm looking for a hotel.\n\nOrigin: ${
      origin || "Not specified"
    }\nDestination: ${destination || "Not specified"}\nGuests: ${
      guests || "Not specified"
    }\nCheck-in: ${checkin || "Not specified"}\nCheck-out: ${
      checkout || "Not specified"
    }\n\nPlease share available options.`;

    const encodedMessage = encodeURIComponent(message);
    const phone = "917011020040";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };


  return (
    <section id="home" className="cont                                                                                                                       relative min-h-screen flex items-center justify-center overflow-hidden ">
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
     <div className="relative z-10 conta sm:px-6 text-center text-white mt-24 sm:mt-0">

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
            
              {/* Origin */}
             <div className="hidden lg:flex flex-row gap-6 items-center  monst">
      {/* Origin */}
      <div className="flex items-start gap-1 flex-1">
        <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold text-start text-gray-800">
            Origin
          </label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Search Airport"
            className="text-sm text-gray-500 outline-none border-none bg-transparent"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-13 bg-gray-200 flex-shrink-0"></div>

      {/* Destination */}
      <div className="flex items-start gap-1 flex-1">
        <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold text-start text-gray-800">
            Destination
          </label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Search Departure"
            className="text-sm text-gray-500 outline-none border-none bg-transparent"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-13 bg-gray-200 flex-shrink-0"></div>

      {/* Guests */}
      <div className="flex items-start gap-2 flex-1">
        <Users className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold text-start text-gray-800">
            Guests
          </label>
          <input
            type="text"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="No. of Guests"
            className="text-sm text-gray-500 outline-none border-none bg-transparent"
          />
        </div>
        {/* Connect Button */}
       
      </div>

       <button
        onClick={handleWhatsAppConnect}
        className="bg-[#333333f8] hover:bg-gray-800 text-white px-6 py-4  rounded-2xl flex items-center gap-2 transition-colors group whitespace-nowrap flex-shrink-0 ml-[-6vw]"
      >
        Connect
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </button>
      
    </div>

            {/* Mobile Layout */}
               <div className="flex lg:hidden flex-col gap-3 bg-white rounded-2xl pt-2 mx-auto   w-[90%] ">
      {/* Origin */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
        <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
        <div className="flex flex-col flex-1 text-left">
          <label className="text-sm font-semibold text-gray-800">Origin</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Search Arrival"
            className="text-sm text-gray-500 outline-none border-none bg-transparent w-[90%]"
          />
        </div>
      </div>

      {/* Destination */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
        <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
        <div className="flex flex-col flex-1 text-left">
          <label className="text-sm font-semibold text-gray-800">
            Destination
          </label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Search Departure"
            className="text-sm text-gray-500 outline-none border-none bg-transparent w-[90%]"
          />
        </div>
      </div>

      {/* Check-in */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
        <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0" />
        <div className="flex flex-col flex-1 text-left">
          <label className="text-sm font-semibold text-gray-800">
            Check-in
          </label>
          <input
            type="date"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            className="text-sm text-gray-500 outline-none border-none bg-transparent w-[90%]"
          />
        </div>
      </div>

      {/* Check-out */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
        <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0" />
        <div className="flex flex-col flex-1 text-left">
          <label className="text-sm font-semibold text-gray-800">
            Check-out
          </label>
          <input
            type="date"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            className="text-sm text-gray-500 outline-none border-none bg-transparent w-[90%]"
          />
        </div>
      </div>

      {/* Guests */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
        <Users className="h-5 w-5 text-gray-400 flex-shrink-0" />
        <div className="flex flex-col flex-1 text-left">
          <label className="text-sm font-semibold text-gray-800">Guests</label>
          <input
            type="text"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="No. of Guests"
            className="text-sm text-gray-500 outline-none border-none bg-transparent w-[90%]"
          />
        </div>
      </div>

      {/* Connect Button */}
      <button
        onClick={handleWhatsAppConnect}
        className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-colors group w-full mt-2"
      >
        <ArrowRight className="h-5 w-5 rotate-90" />
        Connect
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
