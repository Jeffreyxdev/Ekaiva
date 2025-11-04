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
        <div
          className="absolute inset-0 bg-cover bg-center"
          
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-20">
        <div className="text-white max-w-2xl ">
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
            className="text-5xl md:text-6xl font-bold mt-3 leading-tight shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
           Get to Know Ekaiva
            <br />
           Passion Drives Every Journey

          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Discover the team and vision behind Ekaiva India. Every trip we design starts with true understanding, thoughtful planning, and a passion for making travel meaningful.
          </motion.p>

          {/* Button */}
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
