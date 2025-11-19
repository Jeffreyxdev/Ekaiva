import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        
  <img
    src='https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=compress'
    alt="Background"
   fetchPriority="high"
    loading="eager"
    className="absolute inset-0 w-full h-full object-cover"
  />
  


        <div className="absolute inset-0 black/10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-20">
        <div className="text-white max-w-2xl">
          {/* ABOUT Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-sm tracking-wider mb-7"
          >
           
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold mt-3 leading-tight shadow-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
          European Discovery Tour 

            <br />
          

          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-white mb-8 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
           From England to Scotland, uncover Europe’s timeless icons, culture, and romance across five unforgettable countries.

          </motion.p>

          {/* Button */}
          <motion.button
            className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          ><a href="https://wa.me/917011020040?text=Hi%20Ekaiva,%20I'm%20interested%20in%20Europe%20booking%20for%20___days.">
            Book Now</a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
