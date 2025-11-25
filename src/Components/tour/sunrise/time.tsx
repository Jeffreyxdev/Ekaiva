

const Timeline = () => {
const timelineData = [
  {
    id: 1,
    time: "03:30 AM",
    title: "Pick-Up from Delhi",
    description:
      "Pick-up from Delhi hotel or airport in a private, AC vehicle.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "06:15 AM",
    title: "Taj Mahal Sunrise Visit",
    description:
      "Arrive at the Taj Mahal for exclusive sunrise viewing with your guide, enjoying the beauty of this iconic monument.",
    image:
      "https://plus.unsplash.com/premium_photo-1718146019714-a7a0ab9e8e8d?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "08:00 AM",
    title: "Explore Agra Fort",
    description:
      "Explore the grandeur of Agra Fort and learn its rich Mughal history.",
    image:
      "https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "09:30 AM",
    title: "Breakfast at 5-Star Hotel",
    description:
      "Enjoy a delicious breakfast at a 5-star hotel nearby.",
    image:
      "https://plus.unsplash.com/premium_photo-1680030235748-70ac34678387?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "11:00 AM",
    title: "Return Journey to Delhi",
    description:
      "Begin your return journey to Delhi, enjoying a comfortable ride back.",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "02:30 PM",
    title: "Drop-Off in Delhi",
    description:
      "Drop-off at your hotel or airport in Delhi, concluding an unforgettable day.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
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
            Your Taj Mahal Experience
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
              <div className="w-full md:w-1/2 px-9 md:px-10 mt-8 md:mt-0">
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
