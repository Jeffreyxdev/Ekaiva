
const EkaivaFooter = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Placeholder for main content */}
      <div className="min-h-[60vh]" />

      {/* Footer */}
      <footer
        className="relative w-screen left-0 right-0 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&h=1400&fit=crop)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Footer Content */}
        <div className="relative z-10 flex flex-col justify-between w-full text-center">
          {/* CTA Section */}
          <div className="text-center lg:text-left py-20 md:py-28 xl:py-40 px-6 md:px-20 xl:px-56">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
              Let's Just Get Travel <br className="hidden sm:block" />
              <span className="inline-flex flex-wrap items-center gap-3">
                Around
                <span className="inline-block w-28 h-10 sm:w-36 sm:h-12 md:w-44 md:h-14 xl:w-52 xl:h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-white/40">
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=150&fit=crop"
                    alt="Travel"
                    className="w-full h-full object-cover"
                  />
                </span>
                the World
              </span>
            </h1>

            <p className="text-white/90 text-sm sm:text-base md:text-lg xl:text-xl max-w-3xl mb-6 mx-auto lg:mx-0 leading-relaxed">
              Ready to turn your travel dreams into reality? Get in touch with us
              today and let's start planning your next unforgettable adventure.
            </p>

            <button className="bg-white text-black hover:bg-gray-200 px-6 md:px-8 py-2.5 md:py-3.5 rounded-full font-semibold tracking-wide text-sm md:text-base transition-all duration-300">
              Join the Trip
            </button>
          </div>

          {/* Contact + Navigation */}
          <div className="">
            <div className="w-full px-8 md:px-16 xl:px-10 py-15">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                {/* Contact */}
                <div>
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    Get In Touch With Us
                  </h3>
                  <a
                    href="mailto:Connect@Ekaiva.Travel"
                    className="text-white/90 hover:text-white text-sm md:text-base transition-colors"
                  >
                  Connect@Ekaiva.Travel
                  </a>
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap gap-4 md:gap-8 text-xs md:text-sm xl:text-base font-medium uppercase tracking-wide">
                  {["Info", "Tours", "Gallery", "About", ].map(
                    (link) => (
                      <a
                        key={link}
                        href={`#${link.toLowerCase().replace(" ", "")}`}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    )
                  )}
                </nav>
              </div>
            </div>
          </div>

          {/* Logo + Address */}
          <div className="">
            <div className="w-full px-4 md:px-16 xl:px-10 py-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-none">
                  EKAIVA
                </h2>

                <div className="text-white text-xs sm:text-sm lg:text-right leading-relaxed">
                  <p className="text-white/80 mb-1.5">
                    Vinobha Puri, Lajpat Nagar,<br />
                    New Delhi, India
                  </p>
                  <a
                    href="tel:+919006142781"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    (+91) 90061 42781
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20">
            <div className="w-full px-4 md:px-8 xl:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs md:text-sm text-white/70">
              <p>© 2025 Ekaiva. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms Of Service
                </a>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EkaivaFooter;
