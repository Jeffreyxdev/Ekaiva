import gly from '../../assets/gly.png'
import miceh from "../../assets/miceh.png";
import bdn from "../../assets/bdn.png";
import frame9 from '../../assets/Frame 81.png'
const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: gly,
      location: "Star-Studded Seminar",
      caption: "Exhibitor meetups and industry mixers create valuable partnerships, all in one space.",
      size: "large"
    },
    {
      id: 2,
      image: miceh,
      location: "Networking on the Floor",
      caption: "International speakers, Q&A, and live digital interaction boost learning and engagement",
      size: "tall"
    },
    {
      id: 3,
      image: frame9,
      location: "Showcase Success",
      caption: "Elegant award ceremonies and product launches that spotlight your achievements.",
      size: "medium"
    },
    {
      id: 4,
      image: bdn,
      location: "Creative Collaboration",
      caption: "Workshops and brainstorming sessions in inspirational settings tailor-made for breakthroughs.",
      size: "medium"
    },
    
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-6">
            05. Customer Gallery
          </button>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-4">
            Journey through the moments<br />
           
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Our Events, Captured in Every Detail
            Ekaiva’s gallery showcases vibrant conferences, expert talks, and elegant forums where innovation thrives. Each image is a testament to meticulous event execution, interactive sessions, and immersive brand experiences.

          </p>
        </div>

        {/* Gallery Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Large Image 1 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={galleryItems[0].image}
                alt="Conference event"
                loading='eager'
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-semibold text-lg mb-1">{galleryItems[0].location}</h3>
                <p className="text-sm text-white/90 line-clamp-2">{galleryItems[0].caption}</p>
              </div>
            </div>

            {/* Medium Image 3 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={galleryItems[2].image}
                alt="Event setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-semibold text-lg mb-1">{galleryItems[2].location}</h3>
                <p className="text-sm text-white/90 line-clamp-2">{galleryItems[2].caption}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tall Image 2 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={galleryItems[1].image}
                alt="Speaker presentation"
                className="w-full h- object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-semibold text-lg mb-1">{galleryItems[1].location}</h3>
                <p className="text-sm text-white/90 line-clamp-2">{galleryItems[1].caption}</p>
              </div>
            </div>

            {/* Medium Image 4 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={galleryItems[3].image}
                alt="Event presentation"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-semibold text-lg mb-1">{galleryItems[3].location}</h3>
                <p className="text-sm text-white/90 line-clamp-2">{galleryItems[3].caption}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Mobile (Stacked) */}
        <div className="md:hidden space-y-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.location}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-semibold text-base mb-1">{item.location}</h3>
                <p className="text-xs text-white/90 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;