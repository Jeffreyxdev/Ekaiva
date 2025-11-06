
import micem from "../../assets/micw.png";

const MiceHeroSection = () => {
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
              Ekaiva is not<br />
              just a vacation,
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className="flex-1 max-w-prose">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed lg:mt-20 ">
             Your Partner in Event Excellence
      We set the stage for ambition, building each event around your goals—be it team recognition, knowledge sharing, or network expansion.
      With Ekaiva, every gathering transforms routine business into extraordinary collective achievement.
            </p>
          </div>
        </div>

        {/* Large Conference Image */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={micem}
            alt="Conference Hall"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          
          {/* Optional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Optional Badge/Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
              <p className="text-sm font-semibold text-gray-900">MICE & Events</p>
            </div>
          </div>
        </div>

        {/* Bottom Text - Optional */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm md:text-base">
            Meetings • Incentives • Conferences • Exhibitions
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiceHeroSection;