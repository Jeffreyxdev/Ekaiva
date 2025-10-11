
import { motion } from "framer-motion";

const MiceSection = () => {
  return (
    <section className="bg-[#f6f8f7] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm text-gray-500 border border-gray-300 rounded-full px-3 py-1 mb-4"
          >
            06· FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What is MICE and what it actually means
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed text-sm md:text-base"
          >
            Step into history and culture as you travel from the bustling heart of
            Delhi to the timeless beauty of Agra. Whether you're seeking a romantic
            escape, a cultural adventure, or a family outing, this journey offers a
            perfect blend of heritage, comfort, and wonder. From the iconic Taj Mahal
            to grand Mughal forts and vibrant bazaars, every moment becomes a story
            to cherish. Discover, explore, and create unforgettable memories on India’s
            most enchanting route.
          </motion.p>
        </div>

        {/* Right Images Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <motion.img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop"
            alt="Business Meeting"
            className="rounded-2xl w-full md:w-1/2 object-cover"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          />

          <motion.img
            src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&q=80&auto=format&fit=crop"
            alt="Conference Speaker"
            className="rounded-2xl w-full md:w-1/2 object-cover"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
};

export default MiceSection;
