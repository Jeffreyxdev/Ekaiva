import { motion } from "framer-motion";
import {  useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { ArrowRight, MapPin,  Users,Search } from "lucide-react";
import heroBg from "../../assets/fbf.png";
import heroBgMobile from "../../assets/image.png";
const Hero = () => {
  
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    guests: "",
 
  });

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleWhatsAppConnect = () => {
    const { origin, destination, guests, } = formData;
    const message = `Hi Ekaiva, I'm looking for a hotel.\n\nOrigin: ${
      origin || "Not specified"
    }\nDestination: ${destination || "Not specified"}\nGuests: ${
      guests || "Not specified"
    
    }\n\nPlease share available options.`;

    const encodedMessage = encodeURIComponent(message);
    const phone = "917011020040";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };


 const [bgImage, setBgImage] = useState("");
useEffect(() => {
  const updateBg = () => {
    const image = window.innerWidth < 768 ? heroBgMobile : heroBg;
    setBgImage(image); 
  };
  updateBg();
  window.addEventListener("resize", updateBg);
  return () => window.removeEventListener("resize", updateBg);
}, []);


  return (
    <section id="home" className="relative min-h-screen pb-5 flex items-center justify-center overflow-hidden mb-5">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
          draggable="false"
        
        />
        <div className="absolute inset-0" />
      </motion.div>

      {/* Content */}
     <div className="relative z-10 w-full px-4 sm:px-6 text-center text-white mt-24 sm:mt-0">

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
           Explore the World
            <br />
            with Ekaiva Tours
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90 w-full md:w-3/4 mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Travel has never been simpler Ekaiva brings you expertly designed,<br /> all-inclusive international packages for business and leisure alike. 
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-auto max-w-md lg:max-w-4xl bg-white rounded-2xl shadow-2xl "
          >
            {/* Desktop Layout */}
            
              {/* Origin */}
             <div className="hidden lg:flex items-start justify-between gap-5  px-7 py-4  text-start  monst w-fit mx-auto">
  {/* Origin */}
  <div className="flex items-center gap-2 flex-1">
    <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
    <div className="flex flex-col">
      <label className="text-xs font-medium text-gray-800 mb-1">Location</label>
      <input
        type="text"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        placeholder="Search Airport"
        className="text-xs text-gray-500 outline-none border-none bg-transparent placeholder:text-gray-400 w-28"
      />
    </div>
  </div>

  {/* Divider */}
  <div className="w-px h-8 bg-gray-200" />

  {/* Destination */}
  <div className="flex items-center gap-2 flex-1">
    <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
    <div className="flex flex-col">
      <label className="text-xs font-medium text-gray-800 mb-1">Package</label>
      <input
        type="text"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        placeholder="Search Departure"
        className="text-xs text-gray-500 outline-none border-none bg-transparent placeholder:text-gray-400 w-28"
      />
    </div>
  </div>

  {/* Divider */}
  <div className="w-px h-8 bg-gray-200" />

  {/* Guests */}
  <div className="flex items-center gap-2 flex-1">
    <Users className="h-4 w-4 text-gray-400 flex-shrink-0" />
    <div className="flex flex-col">
      <label className="text-xs font-medium text-gray-800 mb-1">Tour type</label>
      <input
        type="text"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        placeholder="No. of Guests"
        className="text-xs text-gray-500 outline-none border-none bg-transparent placeholder:text-gray-400 w-20"
      />
    </div>
  </div>

  {/* Connect Button */}<div className="flex items-center ml-5 mt-[-4px]">
  <button
    onClick={handleWhatsAppConnect}
    className="bg-[#333333] hover:bg-gray-800 text-white px-5 py-2  rounded-xl flex items-center gap-1 transition-colors group whitespace-nowrap"
  >
    Connect
    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
  </button></div>
</div>


           {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col gap-3 px-5 py-6 monst w-[330px] max-w-sm   ">
        {/* Origin */}
        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
          <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
          <div className="flex flex-col flex-1 text-left">
            <label className="text-sm font-semibold text-gray-800">Location</label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="Search Location"
              className="text-sm text-gray-500 outline-none border-none bg-transparent w-full"
            />
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
          <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
          <div className="flex flex-col flex-1 text-left">
            <label className="text-sm font-semibold text-gray-800">
              Package
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Discover Package"
              className="text-sm text-gray-500 outline-none border-none bg-transparent w-full"
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
              className="text-sm text-gray-500 outline-none border-none bg-transparent w-full"
            />
          </div>
        </div>

        {/* Connect Button */}
        <button
          onClick={handleWhatsAppConnect}
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-colors group w-full mt-2"
        >
          <Search className="h-5 w-5 rotate-90" />
         Search 
        </button>
      </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator (hidden on mobile) */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="hidden sm:absolute sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 sm:z-10 sm:flex"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
      >
        <motion.div className="w-1 h-2 bg-white rounded-full" />
      </motion.div>
    </motion.div>

      
    </section>
  );
};

export default Hero;