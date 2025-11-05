import footer from '../../assets/gide.png'


const EkaivaFooter = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#F9FAFB]">
      {/* Placeholder for main content */}
      <div className="min-h-[10vh]" />

      {/* Footer */}
      <footer
        className="relative w-screen  left-0 right-0 bg-cover bg-center bg-no-repeat overflow-hidden"
         style={{
          backgroundImage: `url('${footer}')`,
          minHeight: '120vh', // Makes image stretch longer
          
        }}
      >
        {/* Dark overlay on the image */}
        <div className="absolute inset-0 bg-[#00000020]"></div>

        {/* ✅ Enhanced fade/blur at the top - key difference */}
        <div className="absolute top-0 left-0 w-full h-70 bg-gradient-to-b from-[#F9FAFB] via-[#acd3dc78]  to-transparent z-10 pointer-events-none"></div>

        {/* Footer Content */}
                <div className="relative z-20 flex flex-col justify-between w-full pt-48 md:pt-56 xl:pt-64">
          {/* CTA Section - pushed down more */}
          <div className="text-center pb-12 md:pb-16 xl:pb-20 px-6 md:px-20 xl:px-56">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black mb-5 leading-tight tracking-tight ">
              Lets Just Get Travel <br className="hidden sm:block" />
              <span className="inline-flex flex-wrap items-center gap-3 justify-center text-black">
                Around the World
              </span>
            </h1>

            <p className="text-black/90 text-xs sm:text-sm md:text-base xl:text-lg max-w-2xl mb-8 mx-auto leading-relaxed drop-shadow">
              Ready to turn your travel dreams into reality? Get in touch with us
              today and let's start planning your next unforgettable adventure.
            </p>
            
            <a
  href="https://wa.me/917011020040?text=Hi%20Ekaiva!%20I%20want%20to%20join%20a%20trip%20and%20explore%20the%20world%20with%20you!%20Please%20send%20me%20the%20latest%20tours%20and%20offers."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-8 md:px-10 py-3 md:py-3.5 rounded-2xl font-semibold tracking-wide text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
>
 
  Join Trip
</a>
          </div>


          {/* Contact + Navigation */}
          <div className="py-6 md:py-8 px-6 md:px-12 xl:px-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {/* Contact */}
              <div className="text-left">
                <h3 className="text-white text-lg md:text-lg font-medium mb-1">
                  Get in touch with us
                </h3>
                <a
                  href="mailto:info@ekaivaindia.com"
                  className="text-white/90 hover:text-white text-xs md:text-sm transition-colors"
                >
                  info@ekaivaindia.com
                </a>
              </div>

              {/* Navigation */}
              <nav className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-medium uppercase tracking-wider">
                {[ "TOURS", "MICE", "ABOUT", "GUIDE"].map((link) => (
                  <a
                    key={link}
                    href={`${link.toLowerCase().replace(" ", "")}`}
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