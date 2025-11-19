import { motion } from "framer-motion";
import mfb from "../../assets/mfb.png";
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
    src={mfb}
    alt="Background"
    loading="lazy"
      fetchPriority="high"
    className="absolute inset-0 w-full h-full object-cover"
  />
  


        <div className="absolute inset-0" />
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
            className="text-5xl md:text-6xl font-bold mt-3 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
          Trusted Experts,
            <br />
            Your Journey Enhanced

          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Travel deeper and smarter with Ekaiva’s certified guides. Our experts bring every destination to life, sharing stories, insider tips, and seamless support from your arrival to departure.

          </motion.p>

                   <motion.a
  href="https://wa.me/917011020040?text=Hi%20Ekaiva!%20I'd%20love%20to%20explore%20travel%20options%20with%20your%20team."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition duration-300 inline-block"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Get Terrif now
</motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
