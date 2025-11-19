

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      time: "07:30 AM",
      title: "Pick-Up from Hotel / Airport in Delhi",
      description:
        "Your tour will start with a pick-up from your hotel in Delhi / NCR. You can choose the pick-up time between 6:30 AM to 8 AM to start your tour. After pick-up from the hotel in Delhi, continue the drive to Agra. It will take up to 3 hours to arrive in Agra. Travel through the fastest and safest route from Delhi to Agra via Expressway.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
      direction: "right",
    },
    {
      id: 2,
      time: "8:00 AM",
      title: "Guided visit to the Taj Mahal",
      description:
        "At 8:00 AM, you will arrive in Agra, and you will meet your tour guide. Upon arrival in Agra, you will meet your tour guide and proceed to visit the Taj Mahal. Explore this majestic building and you can spend up to 3 hours at this monument.",
      image:
        "https://plus.unsplash.com/premium_photo-1718146019714-a7a0ab9e8e8d?w=800&h=500&fit=crop",
      direction: "left",
    },
    {
      id: 3,
      time: "12:30 PM ",
      title: "Proceed for a Lunch Break",
      description:
        "After visiting Taj Mahal, you will proceed for a lunch break. You will enjoy a luxury buffet lunch at 5 Star Hotel in Agra. Enjoy your lunch and spend some time in leisure.",
      image:
        "https://plus.unsplash.com/premium_photo-1680030235748-70ac34678387?w=800&h=400&fit=crop",
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
      title: "Visit Baby Taj (Optional)",
      description:
        "After visiting Agra Fort, if you can also visit Itimad-Ud-Daulah also known as Baby Taj (optional). You can spend up to half hour at this building",
      image:
        "https://images.unsplash.com/photo-1687227722559-156d93f23e6c?w=800&h=400&fit=crop",
      direction: "right",
    },
    {
      id: 6,
      time: "3:30 PM – Evening",
      title: "Return journey to Dehli",
      description:
        "Enjoy a comfortable transfer back to Delhi or Agra airport for your evening flight. Upon arrival in Bangalore, a private car drops you home—refreshed and ready for the week ahead.",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=400&fit=crop",
      direction: "left",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="mmx-auto bg-white rounded-2xl p-10 sm:p-8 md:p-16">
        {/* Header */}
        <div className="text-center mb-12  md:mb-16">
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm mb-6 hover:bg-gray-100 transition">
            Day Itinerary
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-snug mb-4">
            Your One-Day Taj Mahal Experience from Bengaluru
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From sunrise to sunset, explore Agra’s most iconic treasures in
            comfort and style — with seamless transfers, curated experiences,
            and local expertise at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 md:mt-20">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 transform -translate-x-1/2"></div>
          <div className="block md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gray-300"></div>

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
                className={`w-full md:w-1/2 px-8 md:px-10 ${
                  item.direction === "left" ? "md:text-left" : "md:text-right"
                }`}
              >
                <p className="text-sm text-gray-500 mb-3 sm:ml-3">{item.time}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:ml-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 sm:leading-96 md:leading-relaxed sm:ml-3">
                  {item.description}
                </p>
              </div>


              {/* Marker */}
              <div className={`
              absolute 
              flex items-center justify-center 
              w-7 h-7 md:w-10 md:h-10 
              bg-gray-900 text-white rounded-full 
              border-4 border-white shadow-md z-10
              ${item.direction === "left" ? "md:left-1/2 md:-translate-x-1/2" : "md:left-1/2 md:-translate-x-1/2"}
              left-0.5 md:left-1/2 md:-translate-x-1/2
            `}>
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
