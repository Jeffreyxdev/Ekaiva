

const Timeline = () => {
  const timelineData = [
  {
    id: 1,
    time: "Day 1 — Arrival",
    title: "Welcome to Kochi",
    description:
      "Arrive in Kochi and transfer to your hotel. Spend the evening at leisure exploring the coastal city’s charm or enjoying a quiet dinner by the waterfront.",
    image:
      "https://images.unsplash.com/photo-1603951207234-9b5e1c6b7b0b?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 2,
    time: "Day 2 — Kochi Sightseeing",
    title: "Discover the Heritage of Fort Kochi",
    description:
      "Explore Kochi’s rich history with visits to the iconic Chinese Fishing Nets, Mattancherry Palace, St. Francis Church, and the Jewish Synagogue in Jew Town.",
    image:
      "https://images.unsplash.com/photo-1603450200879-6b1a7d74f14b?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 3,
    time: "Day 3 — Scenic Drive",
    title: "Journey to Munnar",
    description:
      "Embark on a scenic drive to Munnar, passing cascading waterfalls and lush green hills. Check into your hotel and enjoy the misty evening atmosphere.",
    image:
      "https://images.unsplash.com/photo-1598437260639-d607fd0039a1?w=800&h=500&fit=crop",
    direction: "right",
  },
  {
    id: 4,
    time: "Day 4 — Munnar Exploration",
    title: "Tea Gardens & National Park",
    description:
      "Discover Munnar’s breathtaking tea plantations, visit Eravikulam National Park to spot the Nilgiri Tahr, and stroll through local spice and craft markets.",
    image:
      "https://images.unsplash.com/photo-1622981043443-5b84d888fff4?w=800&h=500&fit=crop",
    direction: "left",
  },
  {
    id: 5,
    time: "Day 5 — Transfer",
    title: "Travel to Thekkady",
    description:
      "Drive to Thekkady, known for its lush spice plantations. In the evening, enjoy a guided plantation tour followed by a local cultural performance.",
    image:
      "https://images.unsplash.com/photo-1590088708255-5ffb1b97b0e8?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 6,
    time: "Day 6 — Nature & Wildlife",
    title: "Periyar Lake & Elephant Encounter",
    description:
      "Start your day with a peaceful boat ride on Periyar Lake surrounded by wildlife. Later, enjoy an optional elephant ride or visit a spice garden.",
    image:
      "https://images.unsplash.com/photo-1550054495-286a1e17b22a?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 7,
    time: "Day 7 — Backwaters",
    title: "Houseboat Cruise in Alleppey",
    description:
      "Drive to Alleppey and board your private houseboat. Cruise through Kerala’s tranquil backwaters while enjoying authentic local cuisine on board.",
    image:
      "https://images.unsplash.com/photo-1549887534-2a7067b5b831?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 8,
    time: "Day 8 — Coastal Drive",
    title: "From Alleppey to Kovalam",
    description:
      "After breakfast, disembark from your houseboat and travel along the scenic coastal route to Kovalam Beach. Relax and unwind by the Arabian Sea.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    direction: "left",
  },
  {
    id: 9,
    time: "Day 9 — Relaxation & Culture",
    title: "Kovalam & Trivandrum Excursion",
    description:
      "Spend your day relaxing on the beach or exploring Trivandrum’s cultural gems, including the Padmanabhaswamy Temple and Napier Museum.",
    image:
      "https://images.unsplash.com/photo-1526481280698-8fcc9a564c68?w=800&h=400&fit=crop",
    direction: "right",
  },
  {
    id: 10,
    time: "Day 10 — Departure",
    title: "Farewell from Kerala",
    description:
      "After breakfast, check out and transfer to Trivandrum Airport. Depart with unforgettable memories of Kerala’s natural beauty and cultural warmth.",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=400&fit=crop",
    direction: "left",
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
                <p className="text-sm text-gray-500 mb-3 sm:ml-3">{item.time}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:ml-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-96 sm:ml-3">
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
