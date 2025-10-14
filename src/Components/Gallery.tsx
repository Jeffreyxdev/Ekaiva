import { useState, useRef, useEffect } from 'react';
import { Star } from "lucide-react";

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      stars: 5,
      text: "I highly recommend them. It has been so important for us as we continue to grow our company.",
      author: "James Krogerman MD",
      location: "Local Specialist",
    },
    {
      stars: 5,
      text: "I have been using Adiras shoes for over a year now and I love it! I can't imagine life without it.",
      author: "Tom Francis",
      location: "Booking Specialist",
    },
    {
      stars: 5,
      text: "If you are a small owner and you don't have floris in your closet just yet, I highly recommend it.",
      author: "Mark Hall",
      location: "Professional Supervisor",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      const slideIndex = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(slideIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slideWidth = container.offsetWidth;
    container.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <button className="px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition mb-4">
            07. Customer Gallery
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug mb-4">
            Journey through the moments<br className="hidden sm:block" />
            captured in our gallery
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            We've combined the comfort of boutique hotels and the calm of nature:
            private spaces, panoramic views, and an atmosphere to breathe deeper.
          </p>
        </div>

        {isMobile ? (
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm min-w-[85%] max-w-sm mx-auto snap-center flex-shrink-0"
                >
                  <div className="relative h-40 sm:h-44">
                    <img
                      src="https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gallery view"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex gap-1 mb-3">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-gray-900 text-gray-900"
                        />
                      ))}
                    </div>

                    <p className="text-gray-900 text-sm leading-relaxed mb-3">
                      {t.text}
                    </p>

                    <div className="border-t border-gray-200 pt-3">
                      <p className="font-medium text-gray-900 text-sm">
                        {t.author}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-8 bg-gray-900'
                      : 'w-2 bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition max-w-sm mx-auto"
              >
                <div className="relative h-44 sm:h-48 md:h-52">
                  <img
                    src="https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Gallery view"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gray-900 text-gray-900"
                      />
                    ))}
                  </div>

                  <p className="text-gray-900 text-sm sm:text-base leading-relaxed mb-3">
                    {t.text}
                  </p>

                  <div className="border-t border-gray-200 pt-3">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">
                      {t.author}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Gallery;
