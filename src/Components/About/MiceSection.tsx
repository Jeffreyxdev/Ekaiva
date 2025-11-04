import React from "react";
import micem from "../../assets/hrr.png";
import hrt from '../../assets/bgnk.png'
import { motion } from "framer-motion";

const MiceSection = () => {
  return (
    <section className="relative lg:mt-20 sm:mt-10 h-[90vh] overflow-hidden hidden md:block">
      {/* Background Image */}
      <img
        src={hrt}
        
        alt="Ekaiva travel team in action"
        className="absolute inset-0 w-full h-full object-cover min-h-100vh"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-transparent to-black/60" />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}           // Start 60px lower + invisible
        whileInView={{ opacity: 1, y: 0 }}        // Fade in + slide up
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],               // Smooth ease-out (cubic-bezier)
          delay: 0.2,
        }}
        viewport={{ once: true, margin: "-120px" }}
        className="relative z-10 flex flex-col md:flex-row justify-between items-start px-6 md:px-10 lg:px-16 pt-10 md:pt-16 h-full"
      >
        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-black leading-tight tracking-tight">
            Meet Our Team of Travel Architects
          </h1>
        </motion.div>

        {/* Right: Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          className="mt-6 md:mt-0 max-w-xl text-right"
        >
          <p className="text-sm md:text-base lg:text-sm text-black leading-relaxed">
            Ekaiva’s strength lies in our caring, experienced team advisors,
            planners, guides, and support staff who bring local knowledge and
            global standards to every project. We pride ourselves on open
            communication, creative planning, and a hands-on approach from first
            idea to final farewell. Our experts believe in collaboration,
            bringing your vision to life while ensuring smooth execution at
            every stage.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MiceSection;