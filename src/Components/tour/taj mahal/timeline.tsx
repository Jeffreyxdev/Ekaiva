

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      time: "7:30 AM",
      title: "Private car and guide meet you at Agra airport",
      description:
        "Your personal chauffeur and local guide welcome you with air-conditioned comfort, ready to begin your day of discovery in Agra.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
      direction: "right",
    },
    {
      id: 2,
      time: "8:00 AM",
      title: "Guided visit to the Taj Mahal",
      description:
        "Spend up to two hours exploring the world’s greatest monument to love. Your expert guide reveals its secrets, legends, and artistry—no rush, just pure wonder.",
      image:
        "https://plus.unsplash.com/premium_photo-1718146019714-a7a0ab9e8e8d?w=800&h=500&fit=crop",
      direction: "left",
    },
    {
      id: 3,
      time: "10:30 AM",
      title: "Marble art & handicraft demonstration (optional)",
      description:
        "Witness the artistry behind Agra’s famed marble inlay work, carpets, or embroidery—an experience to appreciate local craftsmanship firsthand.",
      image:
        "https://images.unsplash.com/photo-1687227722559-156d93f23e6c?w=800&h=400&fit=crop",
      direction: "right",
    },
    {
      id: 4,
      time: "11:30 AM",
      title: "Visit to Agra Fort",
      description:
        "Explore the majestic red sandstone fort that once housed Mughal emperors. Enjoy about 1.5 hours immersed in its history and panoramic views of the Yamuna River.",
      image:
        "https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?w=800&h=400&fit=crop",
      direction: "left",
    },
    {
      id: 5,
      time: "1:00 PM",
      title: "Leisure lunch at a recommended restaurant",
      description:
        "Relax with authentic Mughlai or North Indian cuisine at one of our curated dining spots (meal at guest cost). A perfect pause in your day’s journey.",
      image:
        "https://plus.unsplash.com/premium_photo-1680030235748-70ac34678387?w=800&h=400&fit=crop",
      direction: "right",
    },
    {
      id: 6,
      time: "3:30 PM – Evening",
      title: "Return journey to Bangalore",
      description:
        "Enjoy a comfortable transfer back to Delhi or Agra airport for your evening flight. Upon arrival in Bangalore, a private car drops you home—refreshed and ready for the week ahead.",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=400&fit=crop",
      direction: "left",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="mx-auto bg-white rounded-2xl p-10 md:p-16">
        {/* Header */}
        <div className="text-center mb-16">
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm mb-6 hover:bg-gray-100 transition">
            Day Itinerary
          </button>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-snug mb-4">
            Your One-Day Taj Mahal Experience from Bengaluru
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From sunrise to sunset, explore Agra’s most iconic treasures in
            comfort and style — with seamless transfers, curated experiences,
            and local expertise at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 transform -translate-x-1/2"></div>

          {timelineData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center mb-20 relative ${
                item.direction === "left"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
              {/* Text Content */}
              <div
                className={`w-full md:w-1/2 px-4 md:px-10 ${
                  item.direction === "left" ? "md:text-left" : "md:text-right"
                }`}
              >
                <p className="text-sm text-gray-500 mb-2">{item.time}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full border-4 border-white shadow-md z-10">
                {item.id}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 px-4 md:px-10 mt-8 md:mt-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full h-48 object-cover shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
