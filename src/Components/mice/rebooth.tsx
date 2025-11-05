import { useState, useEffect } from 'react';

import img from '../../assets/bgnk.png'
export default function EkaivaRebootSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const images: string[] = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&h=800&fit=crop"
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide();
    if (touchStart - touchEnd < -75) prevSlide();
  };

  return (
    <section className="min-h-screen bg-white">
      {/* --- MOBILE SLIDER --- */}
      <div className="block md:hidden py-12 px-5">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <button className="px-5 py-2 mb-8 border-2 border-gray-300 rounded-full text-gray-700 text-sm font-medium tracking-wide transition-all duration-300 hover:border-gray-400 hover:bg-gray-50">
              02. About
            </button>

            <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-black leading-tight tracking-tight">
              Ekaiva is not<br />
              just a vacation,<br />
              It’s a reboot
            </h1>

            <p className="text-sm md:text-base lg:text-sm text-black leading-relaxed">
              We have combined the comfort of boutique hotel and the solitude of nature: separate houses,
              panoramic views, caring service and an atmosphere where you want to breathe deeper.
            </p>
          </div>

          {/* Image Slider */}
          <div
            className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image: string, index: number) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <img src={image} alt={`Ekaiva view ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 min-h-[100vh] bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide ? 'w-8 h-2 bg-gray-900' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 font-medium">
              {currentSlide + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:block relative h-[90vh]">
        <img
          src={img}
          alt="Ekaiva experience"
          className="absolute inset-0 w-full h-full  min-h-[100vh] object-cover"
        />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-white/60 to-transparent" />

        {/* Text content */}
        <div className="relative z-10 flex items-center justify-between h-full max-w-6xl mx-auto px-12">
          <div className="max-w-lg">
            <button className="px-5 py-2  border-2 border-gray-300 rounded-full text-gray-700 text-sm font-medium tracking-wide">
              02. About
            </button>

            <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-black leading-tight tracking-tight">
              Curated Experiences for Every Group<br />
              
            </h1>
          </div>

          <div className="max-w-sm">
            <h3 className="text-gray-800 font-semibold mb-2"></h3>
            <p className="text-sm md:text-base lg:text-sm text-black leading-relaxed">
            Unlock inspiring team journeys, premium venues, and curated activities—each crafted to deliver business results and unforgettable group moments. Ekaiva’s tours are tailored for high-performing teams, incentives, conferences, or relaxing escapes, blending expert planning with seamless service from start to finish.
            </p>
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
}
