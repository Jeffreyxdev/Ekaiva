function Abit() {
  const sections = [
    {
      title: "The Ekaiva Touch",
      text: "Thoughtful Spaces, Seamless Service Every Ekaiva property welcomes you with premium comfort, innovative design, and warm, attentive service. Whether it’s a lakeside villa or a bustling city hotel, we guarantee a memorable setting for work, rest, or play.",
      img: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Meetings That Make a Difference",
      text: "Tailored for Connection and Creativity Our venues host meetings, conferences, and MICE events where productivity meets pleasure. From high-tech boardrooms to inspiring outdoor areas, Ekaiva fuels fresh ideas and vibrant collaboration.",
      img: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Experiences Beyond the Ordinary",
      text: "Local Flavor, Lasting Memories Each Ekaiva stay is enriched by curated local experiences: think guided hikes, market tours, cultural workshops, and wellness escapes. Guests leave with stories, friendships, and true inspiration.",
      img: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Culinary Journeys",
      text: "Taste the Region on Every Plate Our kitchens feature local ingredients and global influences, offering both comfort food and regional specialties. Every meal is crafted to delight—whether a buffet breakfast or a fireside barbecue.",
      img: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="min-h-screen  bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-12">
          05. About
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h1 className="text-5xl font-light leading-tight mb-8">
              Redefining Hospitality for Inspired Experiences
            </h1>
          </div>
          <div>
            <p className="text-gray-600 lg:mt-5 leading-relaxed">
              We offer personalized stays in stunning locations, seamless logistics, and curated amenities for unforgettable corporate retreats, family vacations, and once-in-a-lifetime adventures. Our approach combines boutique hotel service with local authenticity, ensuring every guest feels both pampered and at home.
            </p>
          </div>
        </div>

        {/* Dynamic alternating sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text block */}
            <div
              className={`${
                index % 2 === 1
                  ? "order-1 lg:order-2 text-left lg:text-right"
                  : "order-1 text-left"
              }`}
            >
              <div
                className={`text-sm text-gray-500 mb-4 flex items-center ${
                  index % 2 === 1 ? "justify-end gap-2" : "gap-2"
                }`}
              >
                {index % 2 === 1 ? (
                  <span className="w-12 h-px bg-gray-300"></span>
                ) : (
                  <>
                    <span className="w-12 h-px bg-gray-300"></span>
                  </>
                )}
              </div>

              <h2
                className={`text-4xl font-light mb-6 ${
                  index % 2 === 1 ? "text-right" : ""
                }`}
              >
                {section.title}
              </h2>

              <p
                className={`text-gray-600 leading-relaxed ${
                  index % 2 === 1 ? "text-right" : ""
                }`}
              >
                {section.text}
              </p>
            </div>

            {/* Image block */}
            <div
              className={`relative ${
                index % 2 === 1
                  ? "order-2 lg:order-1"
                  : "order-2 lg:order-2"
              }`}
            >
              <img
                src={section.img}
                alt={section.title}
                className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Abit;
