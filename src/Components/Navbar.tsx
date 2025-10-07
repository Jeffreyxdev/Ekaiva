
import { useState, useEffect } from 'react'
import { X, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa' // install with: npm i react-icons
import { FaTelegram} from "react-icons/fa6";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#', label: 'HOME' },
    { href: 'tours', label: 'TOURS' },
    { href: 'mice', label: 'MICE' },
    { href: 'guide', label: 'GUIDE' },
    { href: 'about', label: 'ABOUT US' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-[#333333]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container  px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-white font-bold text-xl leading-tight">
              <div>EKAIVA</div>
              <div className="text-sm font-normal">INDIA</div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                className="text-white hover:text-green-400 transition-colors"
                onClick={() =>
                  window.open('https://wa.me/917011020040', '_blank')
                }
              >
                <FaWhatsapp className="h-5 w-5" />
              </button>

              <button className="text-white hover:text-gray-300 transition-colors">
                <FaTelegram className="h-5 w-5" />
              </button>

              <button className="text-white hover:text-gray-300 transition-colors">
                <Mail className="h-5 w-5"  onClick={()=>
                    window.open('mailto:info@ekaivaindia.com','_blank')
                }/>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[3333]/90 backdrop-blur-md text-white text-center py-6 space-y-4 "
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}
