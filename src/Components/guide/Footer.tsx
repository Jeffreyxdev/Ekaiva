import footer from '../../assets/gide.png'
const EkaivaFooter = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#ffffff]">
      {/* Placeholder for main content */}
      <div className="min-h-[10vh]" />

      {/* Footer */}
      <footer
        className="relative w-screen left-0 right-0 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            `url(${footer})`,
        }}
      >
        {/* Dark overlay on the image */}
        <div className="absolute inset-0 bg-black/80 h-full"></div>

        {/* ✅ Enhanced fade/blur at the top - key difference */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#ffffff] to-transparent z-10 pointer-events-none"></div>

        {/* Footer Content */}
        <div className="relative z-20 flex flex-col justify-between w-full">
          {/* CTA Section - increased top padding for fade area */}
          <div className="text-center pt-40 md:pt-44 xl:pt-48 pb-12 md:pb-16 xl:pb-20 px-6 md:px-20 xl:px-56">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-5 leading-tight tracking-tight drop-shadow-lg">
              Lets Just Get Travel <br className="hidden sm:block" />
              <span className="inline-flex flex-wrap items-center gap-3 justify-center">
                Ar
                <span className="inline-block w-20 h-8 sm:w-24 sm:h-9 md:w-28 md:h-10 xl:w-32 xl:h-11 rounded-full overflow-hidden shadow-lg ring-2 ring-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=150&fit=crop"
                    alt="Travel"
                    className="w-full h-full object-cover"
                  />
                </span>
                und the World
              </span>
            </h1>

            <p className="text-white/90 text-xs sm:text-sm md:text-base xl:text-lg max-w-2xl mb-6 mx-auto leading-relaxed">
              Ready to turn your travel dreams into reality? Get in touch with us
              today and let's start planning your next unforgettable adventure.
            </p>

            <button className="bg-[#232a2c] hover:bg-[#2d3a3e] text-white px-8 md:px-10 py-2.5 md:py-3 rounded-2xl font-semibold tracking-wide text-sm md:text-base transition-all duration-300 shadow-lg">
              Join Trip
            </button>
          </div>

          {/* Contact + Navigation */}
          <div className="py-6 md:py-8 px-6 md:px-12 xl:px-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {/* Contact */}
              <div className="text-left">
                <h3 className="text-white text-sm md:text-base font-medium mb-1">
                  Get in touch with us
                </h3>
                <a
                  href="mailto:connect@ekaiva.travel"
                  className="text-white/90 hover:text-white text-xs md:text-sm transition-colors"
                >
                  connect@ekaiva.travel
                </a>
              </div>

              {/* Navigation */}
              <nav className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-medium uppercase tracking-wider">
                {["INFO", "TOURS", "GALLERY", "ABOUT US", "CONTACT"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Logo + Address */}
          <div className="py-8 md:py-10 px-6 md:px-12 xl:px-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-none">
                EKAIVA
              </h2>

              <div className="text-white text-xs sm:text-sm text-left sm:text-right leading-relaxed">
                <p className="text-white/80 mb-1">
                  Vinobha Puri, Lajpat Nagar, New<br />
                  Delhi, India
                </p>
                <a
                  href="tel:+919006142781"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  (+91)9006142781
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 py-4">
            <div className="w-full px-6 md:px-12 xl:px-16 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/70">
              <p>Copyright @ 2025 Ekaiva. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms Of Service
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