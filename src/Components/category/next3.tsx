

const Timeline = () => {
  const timelineData = [
    { id: 1, direction: "right" },
    { id: 2, direction: "left" },
    { id: 3, direction: "right" },
    { id: 4, direction: "left" },
    { id: 5, direction: "right" },
    { id: 6, direction: "left" },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-10 md:p-16">
        {/* Header */}
        <div className="text-center mb-16">
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm mb-6 hover:bg-gray-100 transition">
            🎨 Customer Gallery
          </button>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-snug mb-4">
            Every journey has a story—trace your adventure, one day at a time
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            We have combined the comforts of exclusive hotel and the solitude of
            nature: separate houses, panoramic views, caring service and
            atmosphere where you want to breathe deeply.
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
                  item.direction === "left"
                    ? "md:text-left"
                    : "md:text-right"
                }`}
              >
                <p className="text-sm text-gray-500 mb-2">
                  Lajpat Nagar, 08:00 PM IST
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Airport/Hotel pick-up and Drop
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Step into history and culture as you travel towards Lajpat
                  Nagar. Witness the ancient beauty of Apyx. Whether you're
                  seeking a romantic escape or a cultural discovery, every stop
                  brings new wonder.
                </p>
              </div>

              {/* Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full border-4 border-white shadow-md z-10">
                {item.id}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 px-4 md:px-10 mt-8 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
                  alt="Mountain landscape"
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
