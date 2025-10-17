import { useState, useEffect } from 'react'
import { X, Mail, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { PiTelegramLogoLight } from "react-icons/pi"
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/tours', label: 'TOURS' },
    { href: '/mice', label: 'MICE' },
    { href: '/guide', label: 'GUIDE' },
    { href: '/about', label: 'ABOUT US' },
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
          isScrolled ? 'bg-[#333333]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 text-white font-bold text-xl leading-tight">
              <div>EKAIVA</div>
              <div className="text-sm font-normal">INDIA</div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 ml-auto">
              <button
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => window.open('https://wa.me/917011020040', '_blank')}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </button>

              <button 
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Telegram"
              >
                <PiTelegramLogoLight className="h-5 w-5" />
              </button>

              <button 
                className="text-white hover:text-orange-300 transition-colors"
                onClick={() => window.open('mailto:info@ekaivaindia.com', '_blank')}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-white ml-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden backdrop-blur-md text-white py-4"
          >
            <div className="px-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-3 text-sm font-medium hover:text-gray-300 hover:bg-white/10 rounded-md px-3 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
