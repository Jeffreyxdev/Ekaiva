import { motion } from 'framer-motion'
import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6'
import image from '../assets/Frame 52.png'

const Homeabout = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 bg-[#f6f8f7] overflow-hidden"
    >
      {/* Responsive container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Top bar */}
        <div className="flex flex-wrap justify-between items-center mb-12 sm:mb-16">
          <button className="px-4 sm:px-5 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            02. About
          </button>

          <div className="hidden sm:flex gap-4 sm:gap-6 text-sm text-gray-600">
            <a className="hover:text-gray-900">Comfort</a>
            <a className="hover:text-gray-900">Privacy</a>
            <a className="hover:text-gray-900">Unique Houses</a>
            <a className="hover:text-gray-900">With care</a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-10 sm:gap-12 items-center text-center lg:text-left">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-6 font-montserrat monst">
              Ekaiva is not <br /> just a vacation, <br /> It’s a reboot
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              We have combined the comfort of boutique hotels and the solitude
              of nature: separate houses, panoramic views, caring service, and
              an atmosphere where you want to breathe deeper.
            </p>
            <p className="text-gray-500 italic text-sm">
              Silence, stars <br /> and your own home.
            </p>
          </motion.div>

          {/* Center image card */}
          <motion.div
            className="relative flex justify-center mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Layered cards behind */}
            <div className="absolute w-[250px] sm:w-[280px] h-[340px] bg-[#3D443B]/40 rounded-3xl rotate-12 top-6"></div>
            <div className="absolute w-[250px] sm:w-[280px] h-[340px] bg-[#3D443B]/40 rounded-3xl rotate-6 top-10"></div>
            <div className="absolute w-[260px] sm:w-[300px] h-[340px] bg-[#3D443B]/40 rounded-3xl rotate-3 top-8"></div>

            {/* Main image card */}
            <div className="relative bg-white rounded-3xl shadow-lg w-[260px] sm:w-[300px] p-4 z-10">
              <img
                src={image}
                alt="Traveler by the sea- Ekaiva"
                className="w-full h-64 sm:h-70 object-cover rounded-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-base text-gray-900">
                  Absolute privacy and space
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Just you, nature and comfort - ideal for a reboot or romance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-4 mt-10 lg:mt-0"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 monst">
              No neighbors, calls or fuss
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 monst text-base sm:text-lg">
              Just you, nature and complete comfort - a soft bed, a hot shower,
              your own terrace. This is not just a night, it is an escape from
              the ordinary.
            </p>
            <button className="bg-[#333333] hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm transition-colors">
              Learn more
            </button>

            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-3">Let’s connect</p>
              <div className="flex justify-center lg:justify-start gap-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-gray-700"
                >
                  <FaFacebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-gray-700"
                >
                  <FaXTwitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-gray-700"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Homeabout
