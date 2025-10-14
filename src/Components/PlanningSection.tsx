import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";




const PlanningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=800&q=80"
              alt="Destination Planning"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Exceptional Ways for
              <br />
              a Great Experience
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe travel should be effortless and extraordinary. Our platform
              combines cutting-edge technology with human expertise to create seamless
              adventures that exceed expectations.
            </p>
            <button  className="bg-secondary hover:bg-secondary/90">
              Learn More About Us
            </button>
          </motion.div>
        </div>

      
      
        {/* Second Section - Alternating Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Finding the right stay
              <br />
              is made easy
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              From luxury resorts to cozy boutique hotels, we partner with the finest
              accommodations worldwide. Every stay is carefully selected to ensure
              comfort, authenticity, and unforgettable experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team personally inspects each property to guarantee it meets our high
              standards for quality, location, and service.
            </p>
            <button  >
              View All Accommodations
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src='https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
              alt="Accommodation"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;
