

const Gallery = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          {/* Left Side - Title */}
          <div className="flex-1">
            <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-6">
              02. About
            </button>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
            Majestic forts of<br />
              Jodhpur
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className="flex-1 max-w-prose">
            <p className="text-gray-600 text-base md:text-md leading-relaxed lg:mt-16 lg:ml-5 ">
From the pink-hued walls of Jaipur to the royal echoes of its palaces, every corner of the city tells a story of grandeur. Guests wander through the majestic Amber Fort, explore the intricate courtyards of the City Palace, and gaze up at the honeycombed beauty of Hawa Mahal. Between colorful bazaars, elephant rides, and sunsets over Nahargarh Fort, Jaipur shines with timeless charm and regal spirit.
            </p>
          </div>
        </div>

        {/* Large Conference Image */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
          <img
            src='https://plus.unsplash.com/premium_photo-1661962387472-553d96ed01a3'
            alt="Conference Hall"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          
          {/* Optional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          </div>
      </div>
    </section>
  );
};

export default Gallery;