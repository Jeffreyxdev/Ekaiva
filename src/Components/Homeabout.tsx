import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp} from 'react-icons/fa6'
import { MailIcon } from 'lucide-react'
import image from '../assets/Frame 52.png'
import { Link } from 'react-router-dom'


const socialLinks = [
  { Icon: FaWhatsapp, url: "https://wa.me/917011020040" },
  { Icon: MailIcon, url: "mailto:info@ekaivaindia.com" },
  { Icon: FaInstagram, url: "https://www.instagram.com/ekaivaindia/" },
];
const Homeabout = () => {
  return (
    <section
      id="about"
      className="relative py-14 sm:py-16 bg-[#f6f8f7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex flex-wrap justify-between items-center mb-10 sm:mb-16">
          <button className="px-4 sm:px-5 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            02. About
          </button>

          <div className="hidden sm:flex gap-5 text-sm text-gray-600">
            <a className="hover:text-gray-900 cursor-pointer">Comfort</a>
            <a className="hover:text-gray-900 cursor-pointer">Privacy</a>
            <a className="hover:text-gray-900 cursor-pointer">Unique Houses</a>
            <a className="hover:text-gray-900 cursor-pointer">With care</a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start text-left sm:text-center lg:text-left">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-snug mb-6 font-montserrat">
              Ekaiva is your trusted partner
              <br className="hidden sm:block" />for cheap India vacation deals
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Discover India like never before. Ekaiva brings you budget-friendly travel, seamless booking, and exclusive deals you won’t find anywhere else. Whether you’re a local explorer or an international traveler, we make every trip easy, affordable, and unforgettable.
            </p>

           
          </motion.div>

          {/* Center image */}
          <motion.div
            className="relative flex justify-center mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Layered shadows behind */}
            <div className="absolute w-[230px] sm:w-[260px] md:w-[280px] h-[320px] bg-[#3D443B]/40 rounded-3xl rotate-12 top-6"></div>
            <div className="absolute w-[230px] sm:w-[260px] md:w-[280px] h-[320px] bg-[#3D443B]/40 rounded-3xl rotate-6 top-10"></div>
            <div className="absolute w-[240px] sm:w-[280px] md:w-[300px] h-[320px] bg-[#3D443B]/40 rounded-3xl rotate-3 top-8"></div>

            {/* Main image card */}
            <div className="relative bg-white rounded-3xl shadow-lg w-[240px] sm:w-[280px] md:w-[300px] p-4 z-10">
              <img
                src={image}
                alt="Traveler by the sea - Ekaiva"
                loading='eager'
                className="w-full h-60 sm:h-72 object-cover rounded-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-base text-gray-900">
                  Absolute privacy and space
                </h3>
                <p className="text-sm text-gray-600 mt-1 px-2">
                
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
            className="lg:pl-6 mt-10 lg:mt-0 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                The Ekaiva Advantage
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                From start to finish, we make travel planning simple. Save more, explore more, and enjoy journeys crafted with care — trusted by locals, NRI travelers, and global explorers alike.
              </p>

              <button className="bg-[#333333] hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm transition-colors">
                <Link to="/about">Learn more</Link>
              </button>
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-3">Let’s connect</p>
              <div className="flex justify-center lg:justify-start gap-3">
                {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Homeabout
