
import micem from "../../assets/sick.png";

const Next2 = () => {
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
             Guided Memories, <br />
              Real Connection
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className="flex-1 max-w-prose">
            <p className="text-gray-600 text-base md:text-md leading-relaxed lg:mt-25 lg:ml-5 ">
            Explore photos and testimonials from travelers who discovered India’s best with Ekaiva guides. Smiles at iconic monuments, joyful local market strolls, and genuine cross-cultural friendships every gallery image is a reflection of what great guidance delivers.

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
          
          </div>
      </div>
    </section>
  );
};

export default Next2;