import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryCards = [
  {
    id: 1,
    title: "European Explorer",
    img: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?auto=compress&cs=tinysrgb&w=1200",
    details: "15 unforgettable days. Paris, Rome, Swiss Alps. Handpicked hotels and seamless transfers.",
    route: "/Europe",
  },
  {
    id: 2,
    title: "Swiss Scenic Trails",
    img: "https://plus.unsplash.com/premium_photo-1742457620013-6a9c3b0efdca?auto=compress&cs=tinysrgb&w=1200",
    details: "Majestic peaks, cultural city stops, and scenic rail adventures—an experience of a lifetime.",
    route: "/swiss",
  },
  {
    id: 3,
    title: "Mediterranean Mosaic",
    img: "https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?auto=compress&cs=tinysrgb&w=800",
    details: "Italian charm, Greek coasts, history, and fine dining—your sun-soaked getaway made simple.",
    route: "/mediterranean-mosaic",
  },
];


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="lg:mt-32" id="gallery">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side — button + heading */}
            <div className="text-left">
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-8">
                02. Customer Gallery
              </button>

              <h2 className="text-5xl sm:text-4xl font-light leading-tight">
                Global Horizons,<br /> Crafted for You
              </h2>
            </div>

            {/* Right side — paragraph */}
            <div className="flex items-start lg:justify-end">
              <p className="text-gray-600 max-w-xl leading-relaxed lg:text-right lg:mt-20">
                From the cobblestone streets of Europe to the exotic landscapes of Southeast Asia, Ekaiva brings you hand-designed international holidays packed with value.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {galleryCards.map((card) => (
              <div key={card.id} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-light mb-3">{card.title}</h3>

                <p className="text-gray-600 text-sm mb-4">{card.details}</p>

                <button className="bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm hover:bg-gray-800 transition-colors">
                 <Link to={card.route}> Know more</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
