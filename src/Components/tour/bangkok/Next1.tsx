import { useState } from 'react';
import ong from '../../../assets/day.png';


export default function Next1() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <button
            className="px-6 py-2 mb-8 border-2 border-gray-300 rounded-full text-gray-700 text-sm font-medium tracking-wide transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl"
          >
            02. About
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight mont">
             Where Culture Meets the Coastline
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              From the grand palaces of Bangkok to the golden sands of Pattaya, this 5-day journey blends spirituality, adventure, and relaxation. Discover sacred temples, bustling markets, and vibrant nightlife. Dive into clear waters at Coral Island and savor Thailand’s charm in every color, sound, and flavor. <br />
 Experience the pulse of Thailand — calm, colorful, and endlessly alive.



            </p>

            {/* First Image - Conference Setup */}
            <div
              className={`relative rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group lg:mt-20 order-1 lg:order-2 ${
                hoveredCard === 1 ? 'ring-2 ring-gray-300' : ''
              }`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ong}
                  alt="agra tour images"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Right Column - Conference Image */}
          <div
            className={`relative rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group lg:mt-20 ${
              hoveredCard === 2 ? 'ring-2 ring-gray-300' : ''
            }`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative aspect-[3/4.4] overflow-hidden">
              <img
                src='https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt="bangkok tour"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
