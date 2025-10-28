

const Timeline = () => {
const timelineData = [
  {
    id: 1,
    time: "Days 1-3",
    title: "Welcome to London!",
    description:
      "Arrive in London for a city tour including the London Eye, Madame Tussauds, Tower of London, Thames cruise, and a guided trip to Windsor Castle. Enjoy panoramic views, world-class museums, and iconic royal landmarks",
    image:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Days 4-6:",
    title: "Historic England & Manchester",
    description:
      "Visit Lords Cricket Ground and shop at Bicester Village before experiencing chocolate delight at Cadbury World in Birmingham. Travel north for a behind-the-scenes tour of Manchester United Stadium and sights of vibrant Manchester.",
    image:
      "https://images.unsplash.com/photo-1623960146923-e77aee115f74?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Days 7-8",
    title: "Beatles & the Lake District",
    description:
      "Enjoy Manchester’s culture and then Liverpool’s Beatles Story exhibition. Journey to the Lake District for a picturesque Windermere boat cruise and quaint steam train ride. Rest in scenic settings before heading to Scotland.",
    image:
      "https://plus.unsplash.com/premium_photo-1733342517162-090d0cec37d0?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Days 9-11",
    title: "Highlands, Edinburgh & Inverness",
    description:
      "Explore Glasgow then Edinburgh’s royal and medieval heritage with an Edinburgh Castle tour. Stunning highland drives take you to Inverness and legendary Loch Ness, with sightseeing cruises and hilltop vistas.",
    image:
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Days 12-14",
    title: "Ben Nevis, Loch Lomond & Glasgow",
    description:
      "Ascend Ben Nevis by cable car, visit Harry Potter’s Glenfinnan Viaduct, enjoy a whiskey distillery tour and a relaxing cruise on Loch Lomond. Conclude in Glasgow, exploring its art, gardens, and lively city center before private airport transfer.",
    image:
      "https://images.unsplash.com/photo-1621519604512-85ea63c15ca2?w=800&h=400&fit=crop",
    direction: "right",
  },
  
];



  return (
    <div className="py-20 px-4">                                                                                                                                                                                                                                                                                                                                                                                            
      <div className="mx-auto bg-white rounded-2xl p-10 md:p-16 sm:p-8">
        {/* Header */}
        <div className="text-center md:mb-16 mb-16">
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm mb-6 hover:bg-gray-100 transition">
            Day Itinerary
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-snug mb-4">
            Your two-Day Dehli Experience
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From sunrise to sunset, explore Dehli most iconic treasures in
            comfort and style — with seamless transfers, curated experiences,
            and local expertise at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 md:mt-20">
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
                <p className="text-sm text-gray-500 mb-2 sm:ml-2">{item.time}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
              <div className="w-full md:w-1/2 px-8 md:px-10 mt-8 md:mt-0">
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
